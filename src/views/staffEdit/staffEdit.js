import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RestClient from '../../infrastructure/restClient'
import { beginAjaxCall, endAjaxCall, ajaxCallError } from '../../actions/ajaxStatusActions'
import { TabContent, TabPane, Row, Col, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap'
import EmployeeInfo from './employeeInfo/employeeInfo'
import FullYearReview from './fullYearReview/fullYearReview'
import Applications from './applications/applications'
import A1 from './a1/a1'
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
            unsavedEdit: false
        }
    }

    async componentDidMount() {
        //We dont load staff into redux here
        const { match: { params } } = this.props;

        this.props.beginAjaxCall();

        try {
            const staffId = params.id;

            let promise = {
                staff: await RestClient.Get(`staff/${staffId}`),
                positionAssigns: await RestClient.Get(`positionassign/assignment/${staffId}`)
            }

            if (promise.staff !== undefined) {
                document.title = `${promise.staff.firstNameLastName} - GPX`;
            }

            const currentSeason = promise.positionAssigns[0];
            const nextSeason = promise.positionAssigns[1];
            const followingSeason = promise.positionAssigns[2];

            this.setState({
                staff: promise.staff,
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

    updateUnsavedEditState = () => {
        return this.setState({ unsavedEdit: true });
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
        if (this.state.staff === null) {
            return (
                ''
            )
        }
        else if (this.state.staff === undefined) {
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
            return (
                <div>
                    <Tabs
                        toggle={this.toggle}
                        activeTab={this.state.activeTab}
                    />

                    <Buttons
                        save={this.save}
                        unsavedEdit={this.unsavedEdit}
                    />

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
                                    />
                                </TabPane>

                                <TabPane tabId="fullYearReview">
                                    <FullYearReview />
                                </TabPane>

                                <TabPane tabId="applications">
                                    <Applications />
                                </TabPane>

                                <TabPane tabId="a1">
                                    <A1 />
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