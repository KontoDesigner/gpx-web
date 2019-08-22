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
import FlightRequestHistory from './history/flightRequestHistory'
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
import * as flightRequestHistoryActions from '../../actions/staffEdit/flightRequestHistoryActions'

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
            positionTypeArr: [],
            resignTypeArr: [],
            managerReasonArr: [],
            nationalConceptArr: [],
            reasonForResignmentArr: [],
            childCareLevelArr: [],
            languageSkillArr: [],
            suitableArr: [],
            internationalArr: [],
            nationalArr: [],
            loaded: false,
            activeTab: 'employeeInfo',
            nowAvailablePositions: [],
            staffId: staffId,
            newUser: {
                skills: []
            },

            spainRegistred: [
                {
                    id: 'Yes',
                    name: 'Yes'
                }
            ],

            skillOptions: ['Programming', 'Development', 'Design', 'Testing'],

            unsavedEdit: false
        }

        this.handleChangeMultiple = this.handleChangeMultiple.bind(this)
        // this.handleCheckBox = this.handleCheckBox.bind(this)
    }
    edit = application => {
        // alert(position.staffID);

        if (application.staffID != null && (application.staffID != 0 && application.staffID != 'No StaffId defined')) {
            const win = window.open(`/application/${application.staffID}/${application.season}`, '_blank')
            win.focus()
        } else {
            const win2 = window.open(`/application/${application.staffID}/${application.season}`, '_blank')
            win2.focus()
        }
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
            this.props.applicationHistoryActions.getApplicationHistory(this.state.staffId),
            this.props.historyActions.getHistory(this.state.staffId),
            this.props.confirmedDatesActions.getConfirmedDates(this.state.staffId),
            this.props.destinationHistoryActions.getDestinationHistory(this.state.staffId),
            this.props.abscenseHistoryActions.getAbscenseHistory(this.state.staffId),
            this.props.flightRequestHistoryActions.getFlightRequestHistory(this.state.staffId),

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

    async componentDidMount() {
        const positionType = this.props.keywordslookup.filter(ap => ap.ids === 'PositionTypes')[0]
        const positionTypeArr = positionType.keywordValues.split(',')
        const resignType = this.props.keywordslookup.filter(ap => ap.ids === 'ResignTypes')[0]
        const resignTypeArr = resignType.keywordValues.split(',')
        const managerReason = this.props.keywordslookup.filter(ap => ap.ids === 'ManagerReasons')[0]
        const managerReasonArr = managerReason.keywordValues.split(',')
        const reasonForResignment = this.props.keywordslookup.filter(ap => ap.ids === 'ReasonForResignment')[0]
        const reasonForResignmentArr = reasonForResignment.keywordValues.split(',')
        const childCareLevel = this.props.keywordslookup.filter(ap => ap.ids === 'ChildCareLevels')[0]
        const childCareLevelArr = childCareLevel.keywordValues.split(',')
        const languageSkill = this.props.keywordslookup.filter(ap => ap.ids === 'LanguageSkills')[0]
        const languageSkillArr = languageSkill.keywordValues.split(',')
        const suitable = this.props.keywordslookup.filter(ap => ap.ids === 'SuitableToWork')[0]
        const suitableArr = suitable.keywordValues.split(',')
        const international = this.props.keywordslookup.filter(ap => ap.ids === 'InternationalConcepts')[0]
        const internationalArr = international.keywordValues.split(',')
        const national = this.props.keywordslookup.filter(ap => ap.ids === 'NationalConcepts')[0]
        const nationalArr = national.keywordValues.split(',')

        const positionTypeObjArr = positionTypeArr.map(s => ({
            id: s,
            name: s
        }))

        const resignTypeObjArr = resignTypeArr.map(s => ({
            id: s,
            name: s
        }))

        const managerReasonObjArr = managerReasonArr.map(s => ({
            id: s,
            name: s
        }))

        const reasonForResignmentObjArr = reasonForResignmentArr.map(s => ({
            id: s,
            name: s
        }))

        const childCareLevelObjArr = childCareLevelArr.map(s => ({
            id: s,
            name: s
        }))

        const languageSkillObjArr = languageSkillArr.map(s => ({
            id: s,
            name: s
        }))
        const suitableObjArr = suitableArr.map(s => ({
            id: s,
            name: s
        }))
        const nationalObjArr = nationalArr.map(s => ({
            id: s,
            name: s
        }))
        const internationalObjArr = internationalArr.map(s => ({
            id: s,
            name: s
        }))
        if (positionType !== undefined) {
            this.setState({ positionTypeArr: positionTypeObjArr })
        }

        if (positionType !== undefined) {
            this.setState({ positionTypeArr: positionTypeObjArr })
        }

        if (positionType !== undefined) {
            this.setState({ positionTypeArr: positionTypeObjArr })
        }

        if (resignType !== undefined) {
            this.setState({ resignTypeArr: resignTypeObjArr })
        }

        if (managerReason !== undefined) {
            this.setState({ managerReasonArr: managerReasonObjArr })
        }

        if (reasonForResignment !== undefined) {
            this.setState({ reasonForResignmentArr: reasonForResignmentObjArr })
        }

        if (childCareLevel !== undefined) {
            this.setState({ childCareLevelArr: childCareLevelObjArr })
        }

        if (languageSkill !== undefined) {
            this.setState({ languageSkillArr: languageSkillObjArr })
        }
        if (suitable !== undefined) {
            this.setState({ suitableArr: suitableObjArr })
        }

        if (international !== undefined) {
            this.setState({ internationalArr: internationalObjArr })
        }
        if (national !== undefined) {
            this.setState({ nationalArr: nationalObjArr })
        }
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
        debugger
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

    send = (positionAssign, direction, season) => {
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
            Direction: direction,
            Season: season
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
                                        nextFollowingPositionAssign={this.props.nextFollowingPositionAssign}
                                        currentSeason={this.props.currentSeason}
                                        nextSeason={this.props.nextSeason}
                                        followingSeason={this.props.followingSeason}
                                        spainRegistred={this.state.spainRegistred}
                                        handleUnsavedEdit={this.handleUnsavedEdit}
                                        send={this.send}
                                        nowAvailablePositions={this.state.nowAvailablePositions}
                                        getAvailablePositionNew={this.getAvailablePositionNew}
                                        keywordslookup={this.props.keywordslookup}
                                        positionTypeArr={this.state.positionTypeArr}
                                    />
                                </TabPane>

                                <TabPane tabId="cv">
                                    <Cv
                                        staff={this.props.staff}
                                        handleUnsavedEdit={this.handleUnsavedEdit}
                                        languageSkillArr={this.state.languageSkillArr}
                                        childCareLevelArr={this.state.childCareLevelArr}
                                        suitableArr={this.state.suitableArr}
                                        nationalArr={this.state.nationalArr}
                                        internationalArr={this.state.internationalArr}
                                    />
                                </TabPane>

                                <TabPane tabId="abscense">
                                    <Abscense
                                        staff={this.props.staff}
                                        handleUnsavedEdit={this.handleUnsavedEdit}
                                        resignTypeArr={this.state.resignTypeArr}
                                        managerReasonArr={this.state.managerReasonArr}
                                        reasonForResignmentArr={this.state.reasonForResignmentArr}
                                        jobTitleWhenResignedArr={this.state.jobTitleWhenResignedArr}
                                        //   managerReasons={this.state.managerReasons}
                                        //resignmentReasons={this.state.resignmentReasons}
                                        handleChangeMultiple={this.handleChangeMultiple}
                                        allJobTitles={this.props.allJobTitles}
                                        //applicationHistory={this.props.applicationHistory}
                                        resignHistory={this.props.resignHistory}
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
                                        edit={this.edit}
                                        status={this.props.staff.status}
                                        abscenseHistory={this.props.abscenseHistory}
                                        resignHistory={this.props.resignHistory}
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

                                    <FlightRequestHistory flightRequestHistory={this.props.flightRequestHistory} />
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
        nextFollowingPositionAssign: state.staffEdit.employeeInfo.nextFollowingPositionAssign,
        currentSeason: state.geography.currentSeason,
        abscenseHistory: state.staffEdit.abscenseHistory,
        nextSeason: state.geography.nextSeason,
        followingSeason: state.geography.followingSeason,
        destinationHistory: state.staffEdit.destinationHistory,
        history: state.staffEdit.history,
        applicationHistory: state.staffEdit.applicationHistory.applicationHistory,
        confirmedDate: state.staffEdit.confirmedDate,
        resignHistory: state.staffEdit.applicationHistory.resignHistory,
        flightRequestHistory: state.staffEdit.flightRequestHistory,
        keywordslookup: state.setting.keywords.keywordslookup
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

        abscenseHistoryActions: bindActionCreators(abscenseHistoryActions, dispatch),
        flightRequestHistoryActions: bindActionCreators(flightRequestHistoryActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StaffEdit)
