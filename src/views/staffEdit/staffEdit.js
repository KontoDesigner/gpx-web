import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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

    async componentWillMount() {
        const _this = this;

        this.props.employeeInfoActions.getAvailablePositions(this.props.currentSeason.name, this.props.nextSeason.name, this.props.followingSeason.name)
        this.props.employeeInfoActions.getPositionAssigns(this.state.staffId)
        this.props.employeeInfoActions.getStaff(this.state.staffId).then(function () {
            if (_this.props.staff != null) {
                document.title = `${_this.props.staff.firstNameLastName} - GPX`
            }
            else {
                document.title = 'Staff not found - GPX'
            }
        })
    }

    assignRole = (role) => {
        const positionAssign = {
            MPLID: role.mplid,
            StaffID: this.props.staff.staffID,
            FirstName: this.props.staff.firstName,
            LastName: this.props.staff.lastName,
            Season: role.season,
            FullName: this.props.staff.fullName,
            StartDate: role.startDate,
            EndDate: role.endDate
        }

        const _this = this;

        this.props.employeeInfoActions.insertPositionAssign(positionAssign).then(function () {
            _this.props.employeeInfoActions.getAvailablePositions(_this.props.currentSeason.name, _this.props.nextSeason.name, _this.props.followingSeason.name)
            _this.props.employeeInfoActions.getPositionAssigns(_this.state.staffId)
        })
    }

    removeRole = (positionAssignId) => {
        const _this = this;

        this.props.employeeInfoActions.deletePositionAssign(positionAssignId).then(function () {
            _this.props.employeeInfoActions.getAvailablePositions(_this.props.currentSeason.name, _this.props.nextSeason.name, _this.props.followingSeason.name)
            _this.props.employeeInfoActions.getPositionAssigns(_this.state.staffId)
        })
    }

    moveRole = (positionAssignId, srcSeason, destSeason) => {
        const _this = this;

        this.props.employeeInfoActions.movePositionAssign(positionAssignId, srcSeason, destSeason).then(function () {
            _this.props.employeeInfoActions.getAvailablePositions(_this.props.currentSeason.name, _this.props.nextSeason.name, _this.props.followingSeason.name)
            _this.props.employeeInfoActions.getPositionAssigns(_this.state.staffId)
        })
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
                                        currentAvailablePositions={this.props.currentAvailablePositions}
                                        nextAvailablePositions={this.props.nextAvailablePositions}
                                        followingAvailablePositions={this.props.followingAvailablePositions}
                                        assignRole={this.assignRole}
                                        removeRole={this.removeRole}
                                        moveRole={this.moveRole}
                                        currentPositionAssign={this.props.currentPositionAssign}
                                        nextPositionAssign={this.props.nextPositionAssign}
                                        followingPositionAssign={this.props.followingPositionAssign}
                                        currentSeason={this.props.currentSeason}
                                        nextSeason={this.props.nextSeason}
                                        followingSeason={this.props.followingSeason}
                                        positionTypes={this.state.positionTypes}
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
        currentAvailablePositions: state.staffEdit.employeeInfo.currentAvailablePositions,
        nextAvailablePositions: state.staffEdit.employeeInfo.nextAvailablePositions,
        followingAvailablePositions: state.staffEdit.employeeInfo.followingAvailablePositions,
        staff: state.staffEdit.employeeInfo.staff,
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