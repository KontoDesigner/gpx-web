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

import History from './history/history'
import { LinkContainer } from 'react-router-bootstrap'
import Buttons from './buttons'
import Tabs from './tabs'
import * as employeeInfoActions from '../../actions/staffEdit/employeeInfoActions'

import '../../styles/staffEdit.css'

class StaffEdit extends Component {
    constructor(props) {
        super()

        const {
            match: { params }
        } = props
        const staffId = params.id

        this.state = {
            activeTab: 'employeeInfo',
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
                    id: 'Studies',
                    name: 'Studies'
                },
                {
                    id: 'Parental Leave',
                    name: 'Parental Leave'
                },
                {
                    id: ' Other (Please Specify)',
                    name: ' Other (Please Specify)'
                }
            ],

            managerReason: [
                {
                    id: 'Dismissed',
                    name: 'Dismissed'
                },
                {
                    id: 'Resigned',
                    name: 'Resigned'
                },
                {
                    id: ' Other (Please Specify)',
                    name: ' Other (Please Specify)'
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
                }
            ],
            skillOptions: ['Programming', 'Development', 'Design', 'Testing'],

            unsavedEdit: false
        }

        this.handleChangeMultiple = this.handleChangeMultiple.bind(this)
        this.handleCheckBox = this.handleCheckBox.bind(this)
    }

    async componentWillMount() {
        const _this = this

        this.props.employeeInfoActions.getAvailablePositions(
            this.props.currentSeason.name,
            this.props.nextSeason.name,
            this.props.followingSeason.name
        )
        this.props.employeeInfoActions.getPositionAssigns(this.state.staffId)

        this.props.employeeInfoActions.getStaff(this.state.staffId).then(function() {
            //debugger;

            if (_this.props.staff != null) {
                document.title = `${_this.props.staff.firstNameLastName}`
            } else {
                document.title = 'Staff not found - GPX'
            }
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

    //*  *************************************************************************'
    handleCheckBox(e) {
        const newSelection = e.target.value
        let newSelectionArray

        if (this.state.newUser.skills.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.newUser.skills.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.newUser.skills, newSelection]
        }

        this.setState(prevState => ({
            newUser: { ...prevState.newUser, skills: newSelectionArray }
        }))
    }

    handleChangeMultiple(e) {
        var options = e.target.options
        var value = []
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value)
            }
        }

        this.setState({ value: value })
    }
    //************************************************************************** */

    send = (destination, positionStart, jobTitle) => {
        const model = {
            Id: this.props.staff.staffID,
            FirstName: this.props.staff.firstName,
            LastName: this.props.staff.lastName,
            DateOfBirth: this.props.staff.dateOfBirth,
            SourceMarket: this.props.staff.sourceMarket,
            Phone: this.props.staff.phone,
            Gender: this.props.staff.title,
            Destination: destination,
            PositionStart: positionStart,
            JobTitle: jobTitle
        }

        this.props.employeeInfoActions.sendToCtx(model)
    }

    save = () => {
        alert('not implemented')
    }

    render() {
        const buttons = <Buttons save={this.save} unsavedEdit={this.state.unsavedEdit} />

        if (this.props.staff === null) {
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
                                        currentAvailablePositions={this.props.currentAvailablePositions}
                                        nextAvailablePositions={this.props.nextAvailablePositions}
                                        followingAvailablePositions={this.props.followingAvailablePositions}
                                        currentPositionAssign={this.props.currentPositionAssign}
                                        nextPositionAssign={this.props.nextPositionAssign}
                                        followingPositionAssign={this.props.followingPositionAssign}
                                        currentSeason={this.props.currentSeason}
                                        nextSeason={this.props.nextSeason}
                                        followingSeason={this.props.followingSeason}
                                        positionTypes={this.state.positionTypes}
                                        handleUnsavedEdit={this.handleUnsavedEdit}
                                        send={this.send}
                                    />
                                </TabPane>

                                <TabPane tabId="cv">
                                    <Cv staff={this.props.staff} />
                                </TabPane>

                                <TabPane tabId="abscense">
                                    <Abscense
                                        staff={this.props.staff}
                                        handleUnsavedEdit={this.handleUnsavedEdit}
                                        resignType={this.state.resignType}
                                        resignmentReasons={this.state.resignmentReasons}
                                        handleChangeMultiple={this.handleChangeMultiple}
                                        allJobTitles={this.props.allJobTitles}
                                        // title={"Skills"}
                                        // name={"skills"}
                                        // options={this.state.skillOptions}
                                        // selectedOptions={this.state.newUser.skills}
                                        // handleChange={this.handleCheckBox}
                                    />
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
        currentAvailablePositions: state.staffEdit.employeeInfo.currentAvailablePositions,
        nextAvailablePositions: state.staffEdit.employeeInfo.nextAvailablePositions,
        followingAvailablePositions: state.staffEdit.employeeInfo.followingAvailablePositions,
        staff: state.staffEdit.employeeInfo.staff,
        allJobTitles: state.setting.setting.jobTitle,
        currentPositionAssign: state.staffEdit.employeeInfo.currentPositionAssign,
        nextPositionAssign: state.staffEdit.employeeInfo.nextPositionAssign,
        followingPositionAssign: state.staffEdit.employeeInfo.followingPositionAssign,
        currentSeason: state.geography.currentSeason,
        nextSeason: state.geography.nextSeason,
        followingSeason: state.geography.followingSeason
    }
}

function mapDispatchToProps(dispatch) {
    return {
        employeeInfoActions: bindActionCreators(employeeInfoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StaffEdit)
