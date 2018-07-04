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
import * as employeeInfoActions from '../../actions/staffEdit/employeeInfoActions'

class StaffEdit extends Component {
    constructor(props) {
        super()

        const { match: { params } } = props;
        const staffId = params.id;

        this.state = {
            staff: null,
            activeTab: 'employeeInfo',
            staffId: staffId,
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
            unsavedEdit: false
        }
    }

    async componentDidMount() {
        this.props.employeeInfoActions.getAvailablePositions('S18')
        this.props.employeeInfoActions.getPositionAssigns(this.state.staffId)
        this.props.employeeInfoActions.getStaff(this.state.staffId)
    }

    assignRole = async (role) => {
        this.props.beginAjaxCall();

        const model = {
            MPLID: role.mplid,
            StaffID: this.props.staff.staffId,
            FirstName: this.props.staff.firstName,
            LastName: this.props.staff.lastName,
            Season: role.season,
            FullName: this.props.staff.fullName,
            StartDate: role.startDate,
            EndDate: role.endDate
        }

        try {
            //Assign position
            await RestClient.Post(`positionassign`, model)

            this.props.employeeInfoActions.getAvailablePositions('S18')
            this.props.employeeInfoActions.getPositionAssigns(this.state.staffId)

            this.props.endAjaxCall();
        } catch (error) {
            this.props.ajaxCallError(error);

            throw error
        }
    }

    // updateStaffFieldState = (event) => {
    //     const field = event.target.name;

    //     let staff = Object.assign({}, this.props.staff);
    //     staff[field] = event.target.value;

    //     return this.setState({ staff, unsavedEdit: true });
    // }

    // updateStaffDatePickerState = (field, date) => {
    //     let staff = Object.assign({}, this.props.staff);

    //     //Picker
    //     if (date._d) {
    //         staff[field] = date._d;
    //     }

    //     //Manual
    //     if (!date._d) {
    //         staff[field] = date;
    //     }

    //     return this.setState({ staff, unsavedEdit: true });
    // }

    // updateStaffSelectState = (field, sourceMarket) => {
    //     const sourceMarketId = sourceMarket != null ? sourceMarket.id : undefined

    //     let staff = Object.assign({}, this.props.staff);
    //     staff[field] = sourceMarketId;

    //     return this.setState({ staff, unsavedEdit: true });
    // }

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

        if (this.props.staff === null) {
            //Loading
            return (
                ''
            )
        }
        else if (this.props.staff === undefined) {
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
                                        staff={this.props.staff}
                                        sourceMarkets={this.props.sourceMarkets}
                                        availablePositions={this.state.availablePositions}
                                        assignRole={this.assignRole}
                                        seasons={this.props.seasons}
                                        positionAssigns={this.props.positionAssigns}
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
        sourceMarkets: state.geography.sourceMarkets,
        availablePositions: state.staffEdit.employeeInfo.availablePositions,
        positionAssigns: state.staffEdit.employeeInfo.positionAssigns,
        staff: state.staffEdit.employeeInfo.staff,
        currentSeason: state.geography.currentSeason,
        nextSeason: state.geography.nextSeason,
        followingSeason: state.geography.followingSeason
    }
}

function mapDispatchToProps(dispatch) {
    return {
        employeeInfoActions: bindActionCreators(employeeInfoActions, dispatch),
        beginAjaxCall: bindActionCreators(beginAjaxCall, dispatch),
        endAjaxCall: bindActionCreators(endAjaxCall, dispatch),
        ajaxCallError: bindActionCreators(ajaxCallError, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StaffEdit)