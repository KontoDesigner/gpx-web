import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RestClient from '../../infrastructure/restClient'
import { beginAjaxCall, endAjaxCall, ajaxCallError } from '../../actions/ajaxStatusActions'
import { TabContent, TabPane, Row, Col, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap'
import EmployeeInfo from './employeeInfo/employeeInfo'
import FullYearReview from './fullYearReview/fullYearReview'
import Applications from './applications/applications'
import Team from './team/team'
import History from './history/history'
import { LinkContainer } from 'react-router-bootstrap';
import Buttons from './buttons';
import Tabs from './tabs';

class StaffEdit extends Component {
    constructor() {
        super()

        this.state = {
            staff: null,
            activeTab: 'employeeInfo',
            staffId: '',
            positionTypes: [
                {
                    id: 'Posted',
                    name: 'Posted'
                },
                {
                    id: 'Local',
                    name: 'Local'
                },
                {
                    id: 'Freelance',
                    name: 'Freelance'
                },
                {
                    id: 'Flexible',
                    name: 'Flexible'
                }
            ],
            currentSeason: undefined,
            nextSeason: undefined,
            FollowingSeason: undefined,
            availablePositions: [],
            unsavedEdit: false,
            seasonGeography: []
        }
    }

    async getAvailablePositions(season) {
        return await RestClient.Get(`positionassign/${season}`)
    }

    async getPositionAssigns(staffId) {
        return await RestClient.Get(`positionassign/assignment/${staffId}`)
    }

    async componentDidMount() {
        //We dont use redux here
        const { match: { params } } = this.props;

        this.props.beginAjaxCall();

        try {
            const staffId = params.id;

            const seasonGeography = await RestClient.Get(`geography/seasons`);

            //Dont change the order here
            const result = await Promise.all([
                RestClient.Get(`staff/${staffId}`),
                this.getPositionAssigns(staffId),
                this.getAvailablePositions('S18')
            ]);

            if (result[0] !== undefined) {
                document.title = `${result[0].firstNameLastName} - GPX`;
            }

            //SeasonGeography should be filtered on server, current => next => following
            const currentSeason = result[1].filter(m => m.Season === seasonGeography[0].season)[0];
            const nextSeason = result[1].filter(m => m.Season === seasonGeography[0].season)[1];
            const followingSeason = result[1].filter(m => m.Season === seasonGeography[0].season)[2];

            this.setState({
                staff: result[0],
                availablePositions: result[2],
                seasonGeography,
                staffId,
                currentSeason,
                nextSeason,
                followingSeason
            });

            this.props.endAjaxCall();
        } catch (error) {
            this.props.ajaxCallError(error);

            throw error
        }
    }

    assignRole = async (role) => {
        this.props.beginAjaxCall();

        const model = {
            MPLID: role.mplid,
            StaffID: this.state.staff.staffID,
            FirstName: this.state.staff.firstName,
            LastName: this.state.staff.lastName,
            Season: role.season,
            FullName: this.state.staff.fullName,
            StartDate: role.startDate,
            EndDate: role.endDate
        }

        try {
            //Assign position
            await RestClient.Post(`positionassign`, model)

            const result = await Promise.all([
                //Refresh position assigns
                this.getPositionAssigns(this.state.staffId),
                //Refresh available positions
                this.getAvailablePositions(role.season)
            ]);

            const currentSeason = result[0].filter(m => m.Season === this.state.seasonGeography[0].season)[0];
            const nextSeason = result[0].filter(m => m.Season === this.state.seasonGeography[0].season)[1];
            const followingSeason = result[0].filter(m => m.Season === this.state.seasonGeography[0].season)[2];

            this.setState({
                availablePositions: result[1],
                currentSeason,
                nextSeason,
                followingSeason
            });

            this.props.endAjaxCall();
        } catch (error) {
            this.props.ajaxCallError(error);

            throw error
        }
    }

    updateStaffFieldState = (event) => {
        const field = event.target.name;

        let staff = Object.assign({}, this.state.staff);
        staff[field] = event.target.value;

        return this.setState({ staff, unsavedEdit: true });
    }

    updateStaffDatePickerState = (field, date) => {
        let staff = Object.assign({}, this.state.staff);

        //Picker
        if (date._d) {
            staff[field] = date._d;
        }

        //Manual
        if (!date._d) {
            staff[field] = date;
        }

        return this.setState({ staff, unsavedEdit: true });
    }

    updateStaffSelectState = (field, sourceMarket) => {
        const sourceMarketId = sourceMarket != null ? sourceMarket.id : undefined

        let staff = Object.assign({}, this.state.staff);
        staff[field] = sourceMarketId;

        return this.setState({ staff, unsavedEdit: true });
    }

    toggle = (activeTab) => {
        if (this.state.activeTab !== activeTab) {
            this.setState({
                activeTab
            })
        }
    }

    save = () => {
        alert('saved')
    }

    render() {
        const buttons = <Buttons
            save={this.save}
            unsavedEdit={this.state.unsavedEdit}
        />

        if (this.state.staff === null) {
            //Loading
            return (
                ''
            )
        }
        else if (this.state.staff === undefined) {
            //Not found
            return (
                <Card>
                    <CardHeader>
                        Could not find staff
                    </CardHeader>

                    <CardBody>
                        <p className="card-text">Staff with id: <b>{this.state.staffId}</b> was not found.</p>
                    </CardBody>

                    <CardFooter>
                        <LinkContainer to="/staff">
                            <Button color="primary">Back</Button>
                        </LinkContainer>
                    </CardFooter>
                </Card>
            )
        }
        else {
            //Found
            return (
                <div>
                    <Tabs
                        toggle={this.toggle}
                        activeTab={this.state.activeTab}
                        save={this.save}
                        unsavedEdit={this.state.unsavedEdit}
                        buttons={buttons}
                    />

                    <Row>
                        <Col className="d-none d-xs-block d-sm-block d-md-block d-lg-none" style={{ paddingBottom: '15px' }}>
                            {buttons}
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="employeeInfo">
                                    <EmployeeInfo
                                        staff={this.state.staff}
                                        sourceMarkets={this.props.sourceMarkets}
                                        updateStaffFieldState={this.updateStaffFieldState}
                                        updateStaffSelectState={this.updateStaffSelectState}
                                        updateStaffDatePickerState={this.updateStaffDatePickerState}
                                        currentSeason={this.state.currentSeason}
                                        nextSeason={this.state.nextSeason}
                                        followingSeason={this.state.followingSeason}
                                        availablePositions={this.state.availablePositions}
                                        assignRole={this.assignRole}
                                        seasonGeography={this.state.seasonGeography}
                                    />
                                </TabPane>

                                <TabPane tabId="fullYearReview">
                                    <FullYearReview />
                                </TabPane>

                                <TabPane tabId="applications">
                                    <Applications />
                                </TabPane>

                                <TabPane tabId="team">
                                    <Team />
                                </TabPane>

                                <TabPane tabId="history">
                                    <History />
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        sourceMarkets: state.staff.filter.sourceMarkets
    }
}

function mapDispatchToProps(dispatch) {
    return {
        beginAjaxCall: bindActionCreators(beginAjaxCall, dispatch),
        endAjaxCall: bindActionCreators(endAjaxCall, dispatch),
        ajaxCallError: bindActionCreators(ajaxCallError, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StaffEdit)