import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TabContent, TabPane, Row, Col, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'
import * as applicationInfoActions from '../../actions/applicationEdit/applicationInfoActions'
import WorkInfo from './workInfo'
import Season from './season'
import OverviewInfo from './overviewInfo'
import ApplicationformInfo from './applicationformInfo'
import ManagersectionInfo from './managersectionInfo'
import AllRole from '../planning/planning/allRole/allRole'
import Buttons from './buttons'
import ButtonsAssign from './buttonsAssign'
import Tabs from './tabs'
import RestClient from '../../infrastructure/restClient'
import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../../actions/ajaxStatusActions'
import AssignRole from './assignRole'
import RemoveRole from './removeRole'
import * as employeeInfoActions from '../../actions/staffEdit/employeeInfoActions'
import Assignment from './assignment';
import AssignmentHeader from './assignmentHeader';
class WorkEdit extends Component {
    constructor(props) {
        super()

        const {
            match: { params }
        } = props
        const id = params.id
        const season = params.season

        this.state = {
            staffid: id,
            season: season,
            assignRoleModal: false,
            removeRoleModal:false,
            nowAvailablePositions: [],
            // mplID: mplID,
            application: null,
            destinations: [],
            jobtitles: [],
            activeTab: 'overviewInfo',
            selectedStartDate: null,
            selectedEndDate: null,
            value: '',
            valueSingle: '',
            loaded: false,
            preferWorkWinterArr: [],
            workStatusArr: [],
            preferWorkSummerArr: [],
            changePositionArr: [],
            mostImportantArr: [],
            midYearReviewArr:[],
            midYearTuiValueArr:[],
            yesNoOption: [
                {
                    id: 'Yes',
                    name: 'Yes'
                },

                {
                    id: 'No',
                    name: 'No'
                }
            ],
            firstJobTitles: [],
            secondJobTitles: [],
            thirdJobTitles: [],
            fourthJobTitles: []
        }
        this.handleAppField = this.handleAppField.bind(this)
    }

    //    componentWillMount=async()=>  {
    //          const _this = this

    //         // this.props.employeeInfoActions.getAvailablePositions(this.props.currentSeason.name, this.props.nextSeason.name, this.props.followingSeason.name)
    //         // this.props.employeeInfoActions.getPositionAssigns(this.state.staffId)

    //          this.props.applicationInfoActions.getApplication(this.state.staffid).then(function () {

    //             if (_this.props.application != null) {

    //                 document.title = `${_this.props.application.firstName} - ${_this.props.application.lastName} `

    //            }
    //             else {

    //                document.title = 'Work Application not found - TTP'
    //            }
    //          })
    //     }
    
    toggleAssignRoleModal = () => {
        debugger;
        this.setState({
            assignRoleModal: !this.state.assignRoleModal
        })
    }

    toggleRemoveRoleModal = () => {
        this.setState({
            removeRoleModal: !this.state.removeRoleModal
        })
    }

    removeRole = (positionAssignId, startDate) => {
    
        const _this = this

        this.props.employeeInfoActions.deletePositionAssign(positionAssignId,startDate,_this.props.application.staffID).then(function() {

        _this.props.getAvailablePositionNew
   

            // _this.props.employeeInfoActions.getAvailablePositions(
            //     _this.props.currentSeason.name,
            //     _this.props.nextSeason.name,
            //     _this.props.followingSeason.name
            // )
            _this.props.employeeInfoActions.getPositionAssigns(_this.props.application.staffID)
        })
    }

    assignRole = role => {
     debugger;
        const positionAssign = {
            MPLID: role.mplid,
            StaffID: this.props.application.staffID,
            FirstName: this.props.application.firstName,
            LastName: this.props.application.lastName,
            Season: role.season,
          
            FullName: this.props.application.lastName,
            StartDate: role.startDate,
            EndDate: role.endDate,
            DateModified:role.dateModified
        }
 debugger;
        const _this = this

        _this.props.employeeInfoActions.insertPositionAssign(positionAssign).then(function() 
        {
            _this.props.getAvailablePositionNew
        
            // _this.props.employeeInfoActions.getAvailablePositions(
            //     _this.props.currentSeason.name,
            //     _this.props.nextSeason.name,
            //     _this.props.followingSeason.name
            // )
             _this.props.employeeInfoActions.getPositionAssigns(_this.props.application.staffID)
        })
    }



    getDestinations = async season => {
        try {
            //   const staff = await RestClient.Get(`position/${mplID}`)
            debugger
            const destinations = await RestClient.Get(`application/destinations/${season}`)
            debugger
            this.setState({
                destinations
            })
        } catch (error) {
            throw error
        }
    }

    getJobTitles = async (season, jobfamily) => {
        try {
            //   const staff = await RestClient.Get(`position/${mplID}`)
            debugger
            const jobtitles = await RestClient.Get(`application/jobtitles/${season}/${jobfamily}`)
            debugger
            this.setState({
                jobtitles
            })
        } catch (error) {
            throw error
        }
    }

    getJobTitlesForDest = async (dest, field) => {
        debugger
        const jobtitles = await RestClient.Get(`application/jobtitles/${this.props.application.season}/${this.props.application.jobFamily}/${dest}`)

        this.setState({
            [field]: jobtitles
        })
    }

    getAvailablePositionNew = async () => {
 
        const nowAvailablePositions = await RestClient.Get('positionassign/getallcand')
   
        this.setState({
            nowAvailablePositions
        })

      
    }

    async componentDidMount() {
        const _this = this
        debugger

        // this.props.employeeInfoActions.getAvailablePositions(this.props.currentSeason.name, this.props.nextSeason.name, this.props.followingSeason.name)
        // this.props.employeeInfoActions.getPositionAssigns(this.state.staffId)

        this.props.applicationInfoActions.getApplication(this.state.staffid, this.state.season).then(function() {
            debugger

            if (_this.props.application != null) {




                document.title = `${_this.props.application.firstName} - ${_this.props.application.lastName} `

               

                if (_this.props.application.firstJobTitle && _this.props.application.firstJobTitle.length > 0) {
                    _this.getJobTitlesForDest(_this.props.application.firstDest, 'firstJobTitles')
                }

                if (_this.props.application.secondJobTitle && _this.props.application.secondJobTitle.length > 0) {
                    _this.getJobTitlesForDest(_this.props.application.secondDest, 'secondJobTitles')
                }

                if (_this.props.application.thirdJobTitle && _this.props.application.thirdJobTitle.length > 0) {
                    _this.getJobTitlesForDest(_this.props.application.thirdDest, 'thirdJobTitles')
                }

                if (_this.props.application.fourthJobTitle && _this.props.application.fourthJobTitle.length > 0) {
                    _this.getJobTitlesForDest(_this.props.application.fourthDest, 'fourthJobTitles')
                }
           
                
                _this.getDestinations(_this.props.application.season)
               // _this.getJobTitles(_this.props.application.season, _this.props.application.jobFamily)
                _this.getAvailablePositionNew()
                _this.props.employeeInfoActions.getPositionAssigns(_this.props.application.staffID)
            
            } else {
                document.title = 'Work Application not found - TTP'
            }
        }) 

        const preferWorkWinter = this.props.keywordslookup.filter(ap => ap.ids === 'PreferToWork_Winter')[0]
        const preferWorkWinterArr = preferWorkWinter.keywordValues.split(',')

        const preferWorkSummer = this.props.keywordslookup.filter(ap => ap.ids === 'PreferToWork_Summer')[0]
        const preferWorkSummerArr = preferWorkSummer.keywordValues.split(',')

        const changePosition = this.props.keywordslookup.filter(ap => ap.ids === 'IWantToChangePosition')[0]
        const changePositionArr = changePosition.keywordValues.split(',')

        const mostImportant = this.props.keywordslookup.filter(ap => ap.ids === 'MostImportant')[0]
        const mostImportantArr = mostImportant.keywordValues.split(',')
        const workStatus = this.props.keywordslookup.filter(ap => ap.ids === 'WorkStatus')[0]
        const workStatusArr = workStatus.keywordValues.split(',')

        const midYearReview = this.props.keywordslookup.filter(ap => ap.ids === 'MidYearReview')[0]
        const midYearReviewArr = midYearReview.keywordValues.split(',')

        const midYearTuiValue = this.props.keywordslookup.filter(ap => ap.ids === 'MidYearTuiValuesRating')[0]
        const midYearTuiValueArr = midYearTuiValue.keywordValues.split(',')

        //  this.setState({
        //     value: keywords.keywordValues ? keywords.keywordValues.map(k => ({
        //      id: k,
        //          name: k
        //     })):[]

        //  })

        const workStatusObjArr = workStatusArr.map(s => ({
            id: s,
            name: s
        }))

        const preferWorkWinterObjArr = preferWorkWinterArr.map(s => ({
            id: s,
            name: s
        }))

        const preferWorkSummerObjArr = preferWorkSummerArr.map(s => ({
            id: s,
            name: s
        }))

        const changePositionObjArr = changePositionArr.map(s => ({
            id: s,
            name: s
        }))

        const mostImportantObjArr = mostImportantArr.map(s => ({
            id: s,
            name: s
        }))

        const midYearReviewObjArr = midYearReviewArr.map(s => ({
            id: s,
            name: s
        }))

        const midYearTuiValueObjArr = midYearTuiValueArr.map(s => ({
            id: s,
            name: s
        }))
        if (workStatus !== undefined) {
            this.setState({ workStatusArr: workStatusObjArr })
        }

        if (preferWorkSummer !== undefined) {
            this.setState({ preferWorkSummerArr: preferWorkSummerObjArr })
        }

        if (preferWorkWinter !== undefined) {
            this.setState({ preferWorkWinterArr: preferWorkWinterObjArr })
        }

        if (changePosition !== undefined) {
            this.setState({ changePositionArr: changePositionObjArr })
        }

        if (mostImportant !== undefined) {
            this.setState({ mostImportantArr: mostImportantObjArr })
        }


        if (midYearReview !== undefined) {
            this.setState({ midYearReviewArr: midYearReviewObjArr })
        }
        if (midYearTuiValue !== undefined) {
            this.setState({ midYearTuiValueArr: midYearTuiValueObjArr })
        }
    }

    toggle = activeTab => {
        if (this.state.activeTab !== activeTab) {
            this.setState({
                activeTab
            })
        }
    }

    save = async () => {
        debugger;
        const preferToWork = this.props.application.preferToWork.map(function(m) {
            return m.id
        })

        let model = {
            // to the database
            //preferToWork:  this.props.application.preferToWork ? this.props.application.preferToWork.join() : null,
            preferToWork: preferToWork,
            //preferToWork: this.props.preferToWork,
            staffID: this.props.application.staffID,
            status: this.props.application.status,
          firstDest : this.props.application.firstDest,
            secondDest :this.props.application.secondDest,
            thirdDest : this.props.application.thirdDest,
            fourthDest : this.props.application.fourthDest,
            firstJobTitle : this.props.application.firstJobTitle,
            secondJobTitle : this.props.application.secondJobTitle,
            thirdJobTitle : this.props.application.thirdJobTitle,
           fourthJobTitle : this.props.application.fourthJobTitle,

           couplePosition : this.props.application.couplePosition,
           changePosition : this.props.application.changePosition,
           coupleName : this.props.application.coupleName,
           coupleSourceMarket : this.props.application.coupleSourceMarket,
           developmentAreas : this.props.application.developmentAreas,
           signature : this.props.application.signature,
           placeDate : this.props.application.placeDate,
           mostImportant : this.props.application.mostImportant,
           nonDestinationPosition : this.props.application.nonDestinationPosition,
           coupleName : this.props.application.coupleName,
           skiPlacement : this.props.application.skiPlacement,
           fairs : this.props.application.fairs,
           comments : this.props.application.comments,
           season : this.props.application.season,
           remarksChoice1: this.props.application.remarksChoice1,
           remarksChoice2: this.props.application.remarksChoice2,
           remarksChoice3: this.props.application.remarksChoice3,
           remarksChoice4: this.props.application.remarksChoice4,
           planToResign: this.props.application.planToResign,
           jump: this.props.application.jump,
           changeJobFamily: this.props.application.changeJobFamily,
           supportChange: this.props.application.supportChange,
           topStrengths: this.props.application.topStrengths,
           midYearReview: this.props.application.midYearReview,
           midYearRating: this.props.application.midYearRating,
           overallRating: this.props.application.overallRating,
           longService: this.props.application.longService,
           disciplinary: this.props.application.disciplinary,
           supportRequest: this.props.application.supportRequest,
           supportRequestComment: this.props.application.supportRequestComment,
           changesRequest: this.props.application.changesRequest,
           feedBackRequest: this.props.application.feedBackRequest,
           placeDateMgr: this.props.application.placeDateMgr,
           signatureMgr: this.props.application.signatureMgr,
        }
debugger;
        await this.props.applicationInfoActions.save(model)
        window.close()
    }

    handleSelect = async (field, val) => {
        if (val == null) {
            val = ''
        }
        if (val) {
            await this.props.applicationInfoActions.handleApplicationField(field, val.id)
        } else {
            await this.props.applicationInfoActions.handleApplicationField(field, null)
        }

        switch (field) {
            case 'firstDest':
                this.props.applicationInfoActions.handleApplicationField('firstJobTitle', null)

                this.getJobTitlesForDest(val.id, 'firstJobTitles')
                break
            case 'secondDest':
                this.props.applicationInfoActions.handleApplicationField('secondJobTitle', null)

                this.getJobTitlesForDest(val.id, 'secondJobTitles')
                break
            case 'thirdDest':
                this.props.applicationInfoActions.handleApplicationField('thirdJobTitle', null)

                this.getJobTitlesForDest(val.id, 'thirdJobTitles')
                break
            case 'fourthDest':
                this.props.applicationInfoActions.handleApplicationField('fourthJobTitle', null)

                this.getJobTitlesForDest(val.id, 'fourthJobTitles')
                break
        }
    }

    handleMultiSelect = (field, val) => {
        debugger
        if (val) {
            this.props.applicationInfoActions.handleApplicationField(field, val)
        } else {
            this.props.applicationInfoActions.handleApplicationField(field, null)
        }
    }

    handleAppField(event) {
        debugger
        this.setState({ valueSingle: event.id })
    }

    handleInputField = event => {
        const field = event.target.name
        const val = event.target.value

        this.props.applicationInfoActions.handleApplicationField(field, val)
    }

    assignStartChange = assignStart => {
        const selectedStartDate = assignStart

        this.setState({
            selectedStartDate,
            validDate2: ''
        })
    }
    assignEndChange = assignEnd => {
        const selectedEndDate = assignEnd

        this.setState({
            selectedEndDate,
            validDate2: ''
        })
    }



    render() {


        const buttons = (
            <Buttons
                save={this.save}
                unsavedEdit={this.state.unsavedEdit}
                modal={this.state.assignRoleModal}
                toggleAssignRoleModal={this.toggleAssignRoleModal}
                // staff={this.props.staff}
            />
        )

        const buttonsAssign = (
            <ButtonsAssign
                // save={this.save}
                // unsavedEdit={this.state.unsavedEdit}
                modal={this.state.assignRoleModal}
                toggleAssignRoleModal={this.toggleAssignRoleModal}
                toggleRemoveRoleModal={this.toggleRemoveRoleModal}
                // staff={this.props.staff}
            />
        )
        if (this.props.application === null) {
            //Loading
            return ''
        } else if (this.props.application === undefined) {
            //Not found
            return (
                <Card>
                    <CardHeader>Could not find application {this.state.staffid}</CardHeader>

                    <CardBody>
                        <p className="card-text">
                            Work application with id: <b>{this.state.staffid}</b> was not found.
                        </p>
                    </CardBody>

                    <CardFooter>
                        <LinkContainer to="/planning">
                            <Button color="primary">Back</Button>
                        </LinkContainer>
                    </CardFooter>
                </Card>
            )
        } else {
            //Found
            return (
                <div>
                    <Row>
                        <Col>
                            <WorkInfo
                                application={this.props.application}
                                workStatusArr={this.state.workStatusArr}
                                handleSelect={this.handleSelect}
                                modal={this.state.assignRoleModal}
                                toggleRemoveRoleModal={this.toggleRemoveRoleModal}
                                toggleAssignRoleModal={this.toggleAssignRoleModal}
                                buttonsAssign={buttonsAssign}
                            />

                            <Tabs 
                            toggle={this.toggle} 
                            activeTab={this.state.activeTab} 
                            save={this.save} 
                            unsavedEdit={this.state.unsavedEdit} 
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="overviewInfo">
                                <Card>

          <CardHeader className="card-header-work-assign"> Current Assignments </CardHeader>
          <CardBody className="no-padding-bottom">
                           
          <AssignmentHeader></AssignmentHeader>
<Assignment
                          
                          application={this.props.application} 
                          handleInputField={this.handleInputField} 
                          positionAssign={this.props.currentPositionAssign}
                          />
                          <Assignment
                          
                          application={this.props.application} 
                          handleInputField={this.handleInputField} 
                          positionAssign={this.props.nextPositionAssign}
                          />
                          <Assignment
                          
                          application={this.props.application} 
                          handleInputField={this.handleInputField} 
                          positionAssign={this.props.followingPositionAssign}
                          />
                                        {/* <Assignment
                                    application={this.props.application} 
                                    handleInputField={this.handleInputField} 
                                    positionAssign={this.props.currentPositionAssign}
                                    />
                                        <Assignment
                                    application={this.props.application} 
                                    handleInputField={this.handleInputField} 
                                    positionAssign={this.props.currentPositionAssign}
                                    /> */}
                                    </CardBody>
                                     <CardHeader className="card-header-work"> Placement {this.props.application.season} </CardHeader>
                                     <CardBody className="no-padding-bottom">
                                    <OverviewInfo 
                                    application={this.props.application} 
                                    handleInputField={this.handleInputField} 
                                    />
                                 </CardBody>
                                        </Card> 
                                    
                                </TabPane>

                                <TabPane tabId="applicationformInfo">
                                    <Season
                                        application={this.props.application}
                                        destinations={this.state.destinations}
                                        // jobtitles={this.state.jobtitles}
                                        assignStartChange={this.assignStartChange}
                                        assignEndChange={this.assignEndChange}
                                        //handleChange={this.handleChange}
                                      
                                        handleAppField={this.handleAppField}
                                        handleInputField={this.handleInputField}
                                        handleMultiSelect={this.handleMultiSelect}
                                        handleSelect={this.handleSelect}
                                        valueSingle={this.state.valueSingle}
                                        yesNoOption={this.state.yesNoOption}
                                        value={this.state.value}
                                        preferWorkWinterArr={this.state.preferWorkWinterArr}
                                        preferWorkSummerArr={this.state.preferWorkSummerArr}
                                        changePositionArr={this.state.changePositionArr}
                                        firstJobTitles={this.state.firstJobTitles}
                                        secondJobTitles={this.state.secondJobTitles}
                                        thirdJobTitles={this.state.thirdJobTitles}
                                        fourthJobTitles={this.state.fourthJobTitles}

                                        // preferToWork={this.props.preferToWork}
                                    />
                                    {/*  
                                           <Season

                                          application={this.props.application}
                                          destinations={this.state.destinations}
                                          jobtitles={this.state.jobtitles}
                                          assignStartChange={this.assignStartChange}
                                           assignEndChange={this.assignEndChange}
                                           handleChange={this.handleChange}

                                       handleAppField={this.handleAppField}
                                       handleInputField ={this.handleInputField}
                                          handleMultiSelect ={this.handleMultiSelect}
                                          handleSelect ={this.handleSelect}
                                            valueSingle ={this.state.valueSingle}
                                              yesNoOption ={this.state.yesNoOption} 
                                                value={this.state.value}
                                                     preferWorkWinterArr={this.state.preferWorkWinterArr}
                                                      preferWorkSummerArr={this.state.preferWorkSummerArr}
                                                          changePositionArr={this.state.changePositionArr}
                                                                  preferToWork={this.props.preferToWork}


                                                     />   */}
                                    <ApplicationformInfo
                                        application={this.props.application}
                                        destinations={this.state.destinations}
                                        jobtitles={this.props.jobtitles}
                                        assignStartChange={this.assignStartChange}
                                        assignEndChange={this.assignEndChange}
                                        //handleChange={this.handleChange}

                                        handleAppField={this.handleAppField}
                                        handleInputField={this.handleInputField}
                                        handleMultiSelect={this.handleMultiSelect}
                                        handleSelect={this.handleSelect}
                                        valueSingle={this.state.valueSingle}
                                        yesNoOption={this.state.yesNoOption}
                                        value={this.state.value}
                                        preferWorkWinterArr={this.state.preferWorkWinterArr}
                                        preferWorkSummerArr={this.state.preferWorkSummerArr}
                                        changePositionArr={this.state.changePositionArr}
                                        sourceMarkets={this.props.sourceMarkets}
                                        mostImportantArr={this.state.mostImportantArr}
                                        midYearReviewArr={this.state.midYearReviewArr}
                                        yesNoOption={this.state.yesNoOption}
                                        // preferToWork={this.props.preferToWork}
                                    />
                                </TabPane>

                                <TabPane tabId="managersectionInfo">
                                    <ManagersectionInfo
                                        application={this.props.application}
                                        handleInputField={this.handleInputField}
                                        handleMultiSelect={this.handleMultiSelect}
                                        handleSelect={this.handleSelect}
                                        valueSingle={this.state.valueSingle}
                                        yesNoOption={this.state.yesNoOption}
                                        midYearReviewArr={this.state.midYearReviewArr}
                                        midYearTuiValueArr={this.state.midYearTuiValueArr}
                                       
                                    />
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
            
                    {buttons}

                    <AssignRole
        modal={this.state.assignRoleModal}
        application={this.props.application}
        toggle={this.toggleAssignRoleModal}
         availablePositions={this.state.nowAvailablePositions}
         assignRole={this.assignRole}
        // positionAssign={this.props.positionAssign}

       currentPositionAssign={this.props.currentPositionAssign}
       // nextPositionAssign={this.props.nextPositionAssign}
       // followingPositionAssign={this.props.followingPositionAssign}
        // season={this.props.season}
    />
                        <RemoveRole
        modal={this.state.removeRoleModal}
        application={this.props.application}
        toggle={this.toggleRemoveRoleModal}
         availablePositions={this.state.nowAvailablePositions}
         removeRole={this.removeRole}
        //positionAssign={this.props.positionAssign}

       positionAssign={this.props.currentPositionAssign}
       // nextPositionAssign={this.props.nextPositionAssign}
       // followingPositionAssign={this.props.followingPositionAssign}
        // season={this.props.season}
    />
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        sourceMarkets: state.geography.sourceMarkets,
        application: state.applicationEdit.applicationInfo.application,
        keywordslookup: state.setting.keywords.keywordslookup,
        jobtitles: state.setting.setting.jobTitle,
        currentPositionAssign: state.staffEdit.employeeInfo.currentPositionAssign,
        nextPositionAssign: state.staffEdit.employeeInfo.nextPositionAssign,
        followingPositionAssign: state.staffEdit.employeeInfo.followingPositionAssign
        //preferToWork: state.applicationEdit.applicationInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //positionInfoActions: bindActionCreators(positionInfoActions, dispatch),
        applicationInfoActions: bindActionCreators(applicationInfoActions, dispatch),
        employeeInfoActions: bindActionCreators(employeeInfoActions, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkEdit)
