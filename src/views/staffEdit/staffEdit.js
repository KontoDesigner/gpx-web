import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { TabContent, TabPane, Row, Col, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap'
import EmployeeInfo from './employeeInfo/employeeInfo'
import Cv from './cv/cv'
import Abscense from './abscense/abscense'
//import FullYearReview from './fullYearReview/fullYearReview'
import Team from './team/team'
import Applications from './applications/applications'
import DestinationHistory from './history/destinationHistory'
import Revisions from './history/revisions'
import ConfirmedDates from './history/confirmedDates'

import { LinkContainer } from 'react-router-bootstrap'
import Buttons from './buttons'
import Tabs from './tabs'
import * as employeeInfoActions from '../../actions/staffEdit/employeeInfoActions'
import * as abscenseActions from '../../actions/staffEdit/abscenseActions'
import * as historyActions from '../../actions/staffEdit/historyActions'
import * as confirmedDatesActions from '../../actions/staffEdit/confirmedDatesActions'
import * as destinationHistoryActions from '../../actions/staffEdit/destinationHistoryActions'
import * as applicationHistoryActions from '../../actions/staffEdit/applicationHistoryActions'
import * as abscenseHistoryActions from '../../actions/staffEdit/abscenseHistoryActions'
import '../../styles/staffEdit.css'
import RestClient from '../../infrastructure/restClient'
class StaffEdit extends Component {
    constructor(props) {
        super()

        const {
            match: { params }
        } = props
        const staffId = params.id

        this.state = {
            loaded: false,
            activeTab: 'employeeInfo',
            nowAvailablePositions: [],
            staffId: staffId,
            newUser: {
                skills: []
            },
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

            resignType: [
                {
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
                    id: 'Studies',
                    name: 'Studies'
                },
                {
                    id: 'Parental Leave',
                    name: 'Parental Leave'
                },
                {
                    id: 'Other (Please Specify)',
                    name: 'Other (Please Specify)'
                }
            ],

            managerReasons: [
                {
                    id: 'Dismissed',
                    name: 'Dismissed'
                },
                {
                    id: 'Resigned',
                    name: 'Resigned'
                },
                {
                    id: 'Other (Please Specify)',
                    name: 'Other (Please Specify)'
                }
            ],

            spainRegistred: [
                {
                    id: 'Yes',
                    name: 'Yes'
                }
            ],

            resignmentReasons: [
                {
                    id: 'Expectations of Job',
                    name: 'Expectations of Job'
                },
                {
                    id: 'Management',
                    name: 'Management'
                },
                {
                    id: 'Training',
                    name: 'Training'
                },
                {
                    id: 'Pay & Reward',
                    name: 'Pay & Reward'
                },
                {
                    id: 'Working Hours',
                    name: 'Working Hours'
                },
                {
                    id: 'Personal/Family Reasons',
                    name: 'Personal/Family Reasons'
                },
                {
                    id: 'Destination',
                    name: 'Destination'
                },
                {
                    id: 'Returned to School/University',
                    name: 'Returned to School/University'
                },
                {
                    id: 'Found a new job',
                    name: 'Found a new job'
                },
                {
                    id: 'Placement Declined',
                    name: 'Placement Declined'
                }
            ],
            skillOptions: ['Programming', 'Development', 'Design', 'Testing'],

            unsavedEdit: false
        }

        this.handleChangeMultiple = this.handleChangeMultiple.bind(this)
        // this.handleCheckBox = this.handleCheckBox.bind(this)
    }

    async componentWillMount() {
        const _this = this

        // try {
        //
        //     const nowAvailablePositions =  await RestClient.Get('positionassign/getallcand')

        // this.setState({
        //     nowAvailablePositions

        //   })
        //
        //     // if (nowAvailablePositions) {
        //     //     //toastr.success('Success', `Abscense Document is updated`)
        //     // } else {
        //     //    // toastr.error('Error', `Could not update Abscense document: ${res ? res.message : 'Error'}`)
        //     // }
        // } catch (error) {

        //     throw error
        // }

        debugger

        return Promise.all([
            this.getAvailablePositionNew(),
            this.props.employeeInfoActions.getPositionAssigns(this.state.staffId),
            this.props.applicationHistoryActions.getResignHistory(this.state.staffId),

            this.props.historyActions.getHistory(this.state.staffId),
            this.props.confirmedDatesActions.getConfirmedDates(this.state.staffId),
            this.props.destinationHistoryActions.getDestinationHistory(this.state.staffId),
            this.props.abscenseHistoryActions.getAbscenseHistory(this.state.staffId),

            this.props.employeeInfoActions.getStaff(this.state.staffId).then(function() {
                if (_this.props.staff != null) {
                    document.title = `${_this.props.staff.firstName + ' ' + _this.props.staff.lastName}`
                } else {
                    document.title = 'Staff not found - GPX'
                }
            })
        ]).then(function() {
            _this.setState({ loaded: true })
        })
    }

    toggle = activeTab => {
        if (this.state.activeTab !== activeTab) {
            this.setState({
                activeTab
            })
        }
    }

    handleUnsavedEdit = () => {
        if (this.state.unsavedEdit === false) {
            this.setState({
                unsavedEdit: true
            })
        }
    }

    getAvailablePositionNew = async () => {
        debugger
        const nowAvailablePositions = await RestClient.Get('positionassign/getallcand')

        this.setState({
            nowAvailablePositions
        })
    }

    //*  *************************************************************************'

    handleChangeMultiple(e) {
        var options = e.target.options
        var value = []
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value)
            }
        }
        console.log(value)
        this.setState({ value: value })
    }
    //************************************************************************** */

    send = (positionAssign, direction) => {
        const model = {
            Id: this.props.staff.staffID,
            FirstName: this.props.staff.firstName,
            LastName: this.props.staff.lastName,
            LastName2: this.props.staff.lastName2,
            DateOfBirth: this.props.staff.dateOfBirth,
            SourceMarket: this.props.staff.sourceMarket,
            Phone: this.props.staff.phoneHome,
            Gender: this.props.staff.title,
            Destination: positionAssign.Destination,
            PositionStart: positionAssign.StaffStartDate,
            JobTitle: positionAssign.JobTitle,
            IataCode: positionAssign.IataCode,
            PositionAssignId: positionAssign.PositionAssignId,
            Direction: direction
        }
        debugger
        this.props.employeeInfoActions.sendToCtx(model)
    }

    save = async () => {
        debugger

        await this.props.employeeInfoActions.save(this.props.staff)
        window.close()
    }

    render() {
        const buttons = (
            <Buttons
                save={this.save}
                unsavedEdit={this.state.unsavedEdit}
                // staff={this.props.staff}
            />
        )
        debugger
        if (this.props.staff === null || this.state.loaded === false) {
            //Loading
            return ''
        } else if (this.props.staff === undefined) {
            //Not found
            return (
                <Card>
                    <CardHeader>Could not find staff</CardHeader>

                    <CardBody>
                        <p className="card-text">
                            Staff with id: <b>{this.state.staffId}</b> was not found.
                        </p>
                    </CardBody>

                    <CardFooter>
                        <LinkContainer to="/staff">
                            <Button color="primary">Back</Button>
                        </LinkContainer>
                    </CardFooter>
                </Card>
            )
        } else {
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
                        <Col className="d-xs-block d-sm-block d-md-block d-lg-none" style={{ paddingBottom: '15px' }}>
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
                                        currentPositionAssign={this.props.currentPositionAssign}
                                        nextPositionAssign={this.props.nextPositionAssign}
                                        followingPositionAssign={this.props.followingPositionAssign}
                                        currentSeason={this.props.currentSeason}
                                        nextSeason={this.props.nextSeason}
                                        followingSeason={this.props.followingSeason}
                                        positionTypes={this.state.positionTypes}
                                        spainRegistred={this.state.spainRegistred}
                                        handleUnsavedEdit={this.handleUnsavedEdit}
                                        send={this.send}
                                        nowAvailablePositions={this.state.nowAvailablePositions}
                                        getAvailablePositionNew={this.getAvailablePositionNew}
                                    />
                                </TabPane>

                                <TabPane tabId="cv">
                                    <Cv staff={this.props.staff} handleUnsavedEdit={this.handleUnsavedEdit} />
                                </TabPane>

                                <TabPane tabId="abscense">
                                    <Abscense
                                        staff={this.props.staff}
                                        handleUnsavedEdit={this.handleUnsavedEdit}
                                        resignType={this.state.resignType}
                                        managerReasons={this.state.managerReasons}
                                        resignmentReasons={this.state.resignmentReasons}
                                        handleChangeMultiple={this.handleChangeMultiple}
                                        allJobTitles={this.props.allJobTitles}
                                        //applicationHistory={this.props.applicationHistory}
                                        resignHistory={this.props.applicationHistory}
                                        abscenseHistory={this.props.abscenseHistory}
                                        // title={"Skills"}
                                        // name={"skills"}
                                        // options={this.state.skillOptions}
                                        // selectedOptions={this.state.newUser.skills}
                                        // handleChange={this.handleCheckBox}
                                    />
                                </TabPane>

                                <TabPane tabId="applications">
                                    <Applications
                                        applicationHistory={this.props.applicationHistory}
                                        status={this.props.staff.status}
                                        abscenseHistory={this.props.abscenseHistory}
                                    />
                                </TabPane>

                                <TabPane tabId="team">
                                    <Team status={this.props.staff.status} />
                                </TabPane>

                                <TabPane tabId="history">
                                    <DestinationHistory destinationHistory={this.props.destinationHistory} status={this.props.staff.status} />

                                    <ConfirmedDates confirmedDate={this.props.confirmedDate} />

                                    <Revisions
                                        history={this.props.history}
                                        //destinationHistory={this.props.destinationHistory}
                                    />
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
        //currentAvailablePositions: state.staffEdit.employeeInfo.currentAvailablePositions,
        // nextAvailablePositions: state.staffEdit.employeeInfo.nextAvailablePositions,
        //followingAvailablePositions: state.staffEdit.employeeInfo.followingAvailablePositions,
        staff: state.staffEdit.employeeInfo.staff,
        allJobTitles: state.setting.setting.jobTitle,
        currentPositionAssign: state.staffEdit.employeeInfo.currentPositionAssign,
        nextPositionAssign: state.staffEdit.employeeInfo.nextPositionAssign,
        followingPositionAssign: state.staffEdit.employeeInfo.followingPositionAssign,
        currentSeason: state.geography.currentSeason,
        abscenseHistory: state.staffEdit.abscenseHistory,
        nextSeason: state.geography.nextSeason,
        followingSeason: state.geography.followingSeason,
        destinationHistory: state.staffEdit.destinationHistory,
        history: state.staffEdit.history,
        applicationHistory: state.staffEdit.applicationHistory,
        confirmedDate: state.staffEdit.confirmedDate,
        resignHistory: state.staffEdit.resignHistory
    }
}

function mapDispatchToProps(dispatch) {
    return {
        confirmedDatesActions: bindActionCreators(confirmedDatesActions, dispatch),
        employeeInfoActions: bindActionCreators(employeeInfoActions, dispatch),
        abscenseActions: bindActionCreators(abscenseActions, dispatch),
        destinationHistoryActions: bindActionCreators(destinationHistoryActions, dispatch),
        historyActions: bindActionCreators(historyActions, dispatch),
        applicationHistoryActions: bindActionCreators(applicationHistoryActions, dispatch),
        abscenseHistoryActions: bindActionCreators(abscenseHistoryActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StaffEdit)
