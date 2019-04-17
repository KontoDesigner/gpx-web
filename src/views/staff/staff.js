import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { TabContent, TabPane, Row, Col } from 'reactstrap'
import Destination from './active/destination/destination'
import HeadOf from './active/headOf/headOf'
import JobTitle from './active/jobTitle/jobTitle'
//import Import from '../imports/import'
import Name from './active/name/name'
import AbsentStaff from './absentStaff'
import ResignStaff from './resignStaff'
import RemoveStaff from './removeStaff'
import ReResignStaff from './reResignStaff'
import SendMail from './sendMailUsingTemplate'
import RecentlyInactive from './inactive/recentlyInactive/recentlyInactive'
import NewEmployee from './other/newEmployee/newEmployee'
import FileImport from './other/imports/import'
import * as headOfActions from '../../actions/staff/active/headOfActions'
import * as staffActions from '../../actions/staff/staffActions'
import * as destinationActions from '../../actions/staff/active/destinationActions'
import * as filterActions from '../../actions/staff/filterActions'
import * as jobTitleActions from '../../actions/staff/active/jobTitleActions'
import * as recentlyInactiveActions from '../../actions/staff/inactive/recentlyInactiveActions'
import * as nameActions from '../../actions/staff/active/nameActions'
import * as newEmployeeActions from '../../actions/staff/other/newEmployeeActions'
import * as notificationActions from '../../actions/notification/notificationActions'

import * as fileImportActions from '../../actions/staff/other/fileImportActions'
import $ from 'jquery'
import Tabs from './tabs'
import RestClient from '../../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'
import '../../styles/staff.css'

class Staff extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            resignTypeArr : [],
            managerReasonArr : [],
            reasonForResignmentArr : [],
  
            validFileName: '',
            validImportType: '',
            valid: '',
            selectedReason: null,
            fileName: null,
            importType: '',
            value: null,
            activeTab: 'destination',
            resetData: this.props.destinationActions.handleDestination,
            absentStaffModal: false,
            resignStaffModal: false,
            reResignStaffModal: false,
            removeStaffModal: false,
            sendMailModal: false,
            selectedStaffID: null,
            importTypes: [
                //not in use  delete
                {
                    id: 'Staff',
                    name: 'Staff'
                },
                {
                    id: 'Position',
                    name: 'Position'
                }
            ],


        }

        // this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        debugger

        this.setState({ value: event.target.value })
    }

    handleSelect = (field, val, selector) => {
        const id = val != null ? val[selector] : undefined

        this.props.staffActions.handleStaffField(field, id)
    }

    edit = staff => {
debugger;
        const win = window.open(`/staff/${staff.staffID}`, '_blank')

        win.focus()
    }

    getSelection = val => {
        var txtarea = document.getElementById('resignComm')

        debugger
        var start = txtarea.selectionStart

        var finish = txtarea.selectionEnd

        var allText = txtarea.value

        var sel = allText.substring(start, finish)

        var newText = allText.substring(0, start) + val + allText.substring(finish, allText.length)

        txtarea.value = newText

        this.setState({ localValue: newText })
    }
 
    createMail = model => {
        let mailmodel = {
            TemplateName: model.selectedNotification,
            StaffID: this.state.selectedStaffID,
            Subject: model.selectedSubject,
            DateModified: model.dateModified,
            Content: model.content,
            Email: model.selectedEmail
        }

        this.props.staffActions.createMail(mailmodel)

        this.getActTabAndRequest(this.state.activeTab)
    }

    createAbscense = model => {
        let abscensemodel = {
            ApplicationType: 'Abscense',
            Status: 'Abscense',

            AbsentStart: model.startDate,
            AbsentReason: model.absentReason,
            AbsentEnd: model.endDate,
            AbsentReason2: this.state.value,
            StaffID: this.state.selectedStaffID,
            DateModified: model.dateModified
        }

        this.props.staffActions.createAbsense(abscensemodel)

        this.getActTabAndRequest(this.state.activeTab)
    }

    createReResignStaff = model => {
        debugger
        let staffmodel = {
            StaffID: this.state.selectedStaffID,
            DateModified: model.dateModified
        }
        debugger
        this.props.staffActions.createReResignStaff(staffmodel)

        this.getActTabAndRequest(this.state.activeTab)
    }

    createRemoveStaff = model => {
        debugger
        let staffmodel = {
            StaffID: this.state.selectedStaffID,
            DateModified: model.dateModified
        }
        debugger
        this.props.staffActions.createRemoveStaff(staffmodel)

        this.getActTabAndRequest(this.state.activeTab)
    }

    handleFile = fileName => {
        this.setState({
            fileName,
            validFileName: ''
        })
    }

    createResign = model => {
        const resignmodel = {
            ApplicationType: 'Resigned',
            Status: 'Resigned',
            Comments: this.state.value,
            FromDate: model.fromDate,
            StaffID: this.state.selectedStaffID,
            DateModified: model.dateModified,

            AppDate: model.fromDate,
            ManagerReason: model.managerReason.name,
            Signature: model.signature,
            JobTitleWhenResigned: model.jobTitleWhenResigned.name,
            ReasonForResignment: model.reasonForResign.name,
            ResignComm: model.resignComm,
            Recommend: model.recommend.name
        }
        debugger
        this.props.staffActions.createResign(resignmodel)

        this.getActTabAndRequest(this.state.activeTab)
    }

    getActTabAndRequest = async actTab => {
        debugger

        switch (actTab) {
            case 'destination':
                await this.props.destinationActions.getDestination(
                    this.props.filter.sourceMarket,
                    this.props.filter.selectedJobFamily,
                    this.props.filter.selectedPositionType,
                    this.props.filter.text
                )
                this.props.filterActions.handleSelectedStaff([])
                break
            case 'name':
                await this.props.nameActions.getName(this.props.filter.sourceMarket, this.props.filter.selectedJobFamily, this.props.filter.text)
                this.props.filterActions.handleSelectedStaff([])
                break
            case 'jobTitle':
                await this.props.jobTitleActions.getJobTitle(
                    this.props.filter.sourceMarket,
                    this.props.filter.selectedJobFamily,
                    this.props.filter.selectedPositionType,
                    this.props.filter.text
                )
                this.props.filterActions.handleSelectedStaff([])

            case 'recentlyInactive':
                await this.props.recentlyInactiveActions.getRecentlyInactive(
                    this.props.filter.sourceMarket,
                    this.props.filter.selectedJobFamily,
                    this.props.filter.selectedPositionType,
                    this.props.filter.text
                )
                this.props.filterActions.handleSelectedStaff([])

                break
        }
    }

    toogleSendMailModal = val => {
        if (val) {
            this.setState({
                sendMailModal: !this.state.sendMailModal,
                selectedStaffID: [val]
            })
        } else {
            this.setState({
                sendMailModal: !this.state.sendMailModal,
                selectedStaffID: this.props.selectedStaff
            })
        }

        // this.setState({
        //     sendMailModal: !this.state.sendMailModal
        // })
    }

    toogleAbsentStaffModal = val => {
        if (val) {
            this.setState({
                absentStaffModal: !this.state.absentStaffModal,
                selectedStaffID: val
            })
        } else {
            this.setState({
                absentStaffModal: !this.state.absentStaffModal,
                selectedStaffID: this.props.selectedStaff
            })
        }
 
        // this.setState({
        //     absentStaffModal: !this.state.absentStaffModal
        // })

        //     switch (val) {
        //     case "1":
        //     alert('Hello absent');
        //     break;
        // case "2":
        // alert('Hello resign');
        //     break;
        // case "3":
        // alert('Hello template');
        //     break;
        //     }
    }

    toogleReResignStaffModal = val => {
        debugger
        if (val) {
            this.setState({
                reResignStaffModal: !this.state.reResignStaffModal,
                selectedStaffID: val
            })
        } else {
            this.setState({
                reResignStaffModal: !this.state.reResignStaffModal,
                selectedStaffID: this.props.selectedStaff
            })
        }
    }

    toogleRemoveStaffModal = val => {
        debugger
        if (val) {
            this.setState({
                removeStaffModal: !this.state.removeStaffModal,
                selectedStaffID: val
            })
        } else {
            this.setState({
                removeStaffModal: !this.state.removeStaffModal,
                selectedStaffID: this.props.selectedStaff
            })
        }
    }

    toogleResignStaffModal = val => {
        if (val) {
            this.setState({
                resignStaffModal: !this.state.resignStaffModal,
                selectedStaffID: val
            })
        } else {
            this.setState({
                resignStaffModal: !this.state.resignStaffModal,
                selectedStaffID: this.props.selectedStaff
            })
        }

        // this.setState({
        //     resignStaffModal: !this.state.resignStaffModal

        // })
    }

    componentWillMount() {
        document.title = 'Staff - GPX'
    }

    componentDidMount() {
        this.props.filterActions.handleFilter() //when page loads
        this.props.notificationActions.getNotification()
        this.props.destinationActions.getDestination()

        const managerReason= this.props.keywordslookup.filter(ap => ap.ids === 'ManagerReasons')[0];
        const managerReasonArr = managerReason.keywordValues.split(',')
        const reasonForResignment= this.props.keywordslookup.filter(ap => ap.ids === 'ReasonForResignment')[0];
        const reasonForResignmentArr = reasonForResignment.keywordValues.split(',')

 

        const resignType= this.props.keywordslookup.filter(ap => ap.ids === 'ResignTypes')[0];
        const resignTypeArr = resignType.keywordValues.split(',')

        const resignTypeObjArr = resignTypeArr.map(s => ({
            id: s,
            name: s
         }))


        if (resignType !== undefined) {

            this.setState({resignTypeArr: resignTypeObjArr })
    }

    const managerReasonObjArr = managerReasonArr.map(s => ({
        id: s,
        name: s
     }))

     const reasonForResignmentObjArr = reasonForResignmentArr.map(s => ({
        id: s,
        name: s
     }))

     if (managerReason !== undefined) {
        
               
        this.setState({managerReasonArr: managerReasonObjArr })
    }
    
    if (reasonForResignment !== undefined) {
            
                   
        this.setState({reasonForResignmentArr: reasonForResignmentObjArr })
    }
    
    }

    toggle = (tab, getData, resetData) => {
        debugger;
        if (this.state.activeTab !== tab) {
            //Reset current tab state
            this.state.resetData([])

            //Reset filter
            // this.props.filterActions.handleFilter()

            //Get tab data
            // getData()
            debugger
            getData(this.props.filter.sourceMarket, this.props.filter.selectedJobFamily,this.props.filter.selectedPositionType, this.props.filter.text)

            this.setState({
                activeTab: tab,
                resetData: resetData,
                validFileName: ''
            })
        }
    }

    handleImportType = val => {
        this.setState({
            importType: val ? val.id : '',
            validImportType: ''
        })
    }

    handleFile = fileName => {
        this.setState({ fileName })
    }

    create = async model => {
        //alert('This routine will be shut down until Monday 09.00 AM');
        //return false;
        // this.props.settingActions.save()
        debugger
        var check = this.state.fileName ? true : false
        var check2 = this.state.importType ? true : false
        if (!check) {
            this.setState({
                validFileName: 'Please select a file to import. You can´t import a file with the same name twice.'
            })
            return false
        }

        if (!check2) {
            this.setState({
                validImportType: 'Please select a File Import Type'
            })
            return false
        }

        try {
            const res = await this.props.staffActions.createImport(this.state.importType, this.state.fileName)
            // const res =  await RestClient.Upload('import/UploadFile/'+ this.state.importType,this.state.fileName)

            this.setState({
                fileName: null,

                validFileImport: '',
                validFileName: ''
            })
            debugger
        } catch (error) {
            throw error
        }
    }

    render() {
        return (
            <Row>
                <Tabs
                    toggle={this.toggle}
                    history={this.props.history}
                    activeTab={this.state.activeTab}
                    getHeadOf={this.props.headOfActions.getHeadOf}
                    handleHeadOf={this.props.headOfActions.handleHeadOf}
                    getDestination={this.props.destinationActions.getDestination}
                    handleDestination={this.props.destinationActions.handleDestination}
                    getName={this.props.nameActions.getName}
                    handleName={this.props.nameActions.handleName}
                    getJobTitle={this.props.jobTitleActions.getJobTitle}
                    handleJobTitle={this.props.jobTitleActions.handleJobTitle}
                    getRecentlyInactive={this.props.recentlyInactiveActions.getRecentlyInactive}
                    handleRecentlyInactive={this.props.recentlyInactiveActions.handleRecentlyInactive}
                    getNewEmployee={this.props.newEmployeeActions.getNewEmployee}
                    handleNewEmployee={this.props.newEmployeeActions.handleNewEmployee}
                    getFileImport={this.props.fileImportActions.getFileImport}
                    handleFileImport={this.props.fileImportActions.handleFileImport}
                />

                <AbsentStaff
                    modal={this.state.absentStaffModal}
                    toggle={this.toogleAbsentStaffModal}
                    resignTypeArr={this.state.resignTypeArr}
                    handleChange={this.handleChange}
                    handleSelect={this.handleSelect}
                    createAbscense={this.createAbscense}
                    value={this.state.value}
                    selectedStaffID={this.state.selectedStaffID}
                />

                <SendMail
                    modal={this.state.sendMailModal}
                    toggle={this.toogleSendMailModal}
                    //resignType={this.state.resignType}
                    handleChange={this.handleChange}
                    // handleSelect= {this.handleSelect}
                    createMail={this.createMail}
                    getSelection={this.getSelection}
                    value={this.state.value}
                    notification={this.props.notification}
                    keywords={this.props.keywords}
                    keywordslookup={this.props.keywordslookup}
                    selectedStaffID={this.state.selectedStaffID}
                />
                <RemoveStaff
                    modal={this.state.removeStaffModal}
                    toggle={this.toogleRemoveStaffModal}
                    resignType={this.state.resignType}
                    handleChange={this.handleChange}
                    handleSelect={this.handleSelect}
                    createRemoveStaff={this.createRemoveStaff}
                    value={this.state.value}
                    createResign={this.createResign}
                    selectedStaffID={this.state.selectedStaffID}
                    // availablePositions={this.props.availablePositions}
                    // assignRole={this.props.assignRole}
                    // positionAssign={this.props.positionAssign}
                    // season={this.props.season}
                />

                <ReResignStaff
                    modal={this.state.reResignStaffModal}
                    toggle={this.toogleReResignStaffModal}
                    resignType={this.state.resignType}
                    handleChange={this.handleChange}
                    handleSelect={this.handleSelect}
                    createReResignStaff={this.createReResignStaff}
                    value={this.state.value}
                    // createResign= {this.createResign}
                    selectedStaffID={this.state.selectedStaffID}
                    // availablePositions={this.props.availablePositions}
                    // assignRole={this.props.assignRole}
                    // positionAssign={this.props.positionAssign}
                    // season={this.props.season}
                />

                <ResignStaff
                    modal={this.state.resignStaffModal}
                    toggle={this.toogleResignStaffModal}
                    resignType={this.state.resignType}
                    managerReasonArr={this.state.managerReasonArr}
                    reasonForResignmentArr={this.state.reasonForResignmentArr}
                    handleChange={this.handleChange}
                    handleSelect={this.handleSelect}
                    value={this.state.value}
                    createResign={this.createResign}
                    selectedStaffID={this.state.selectedStaffID}
                    // availablePositions={this.props.availablePositions}
                    // assignRole={this.props.assignRole}
                    // positionAssign={this.props.positionAssign}
                    // season={this.props.season}
                />

                <Col sm="12" md="9" lg="9" xl="10">
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="headOf">
                            <HeadOf
                                headOf={this.props.headOf}
                                getHeadOf={this.props.headOfActions.getHeadOf}
                                handleSelectedStaff={this.props.filterActions.handleSelectedStaff}
                                selectedStaff={this.props.selectedStaff}
                                edit={this.edit}
                                toogleAbsentStaffModal={this.toogleAbsentStaffModal}
                                toogleResignStaffModal={this.toogleResignStaffModal}
                                toogleSendMailModal={this.toogleSendMailModal}
                                //AbsentStaffModal={this.state.AbsentStaffModal}
                            />
                        </TabPane>

                        <TabPane tabId="destination">
                            <Destination
                                destination={this.props.destination}
                                getDestination={this.props.destinationActions.getDestination}
                                handleSelectedStaff={this.props.filterActions.handleSelectedStaff}
                                selectedStaff={this.props.selectedStaff}
                                edit={this.edit}
                                toogleAbsentStaffModal={this.toogleAbsentStaffModal}
                                toogleResignStaffModal={this.toogleResignStaffModal}
                                toogleSendMailModal={this.toogleSendMailModal}
                            />
                        </TabPane>

                        <TabPane tabId="name">
                            <Name
                                name={this.props.name}
                                getName={this.props.nameActions.getName}
                                handleSelectedStaff={this.props.filterActions.handleSelectedStaff}
                                selectedStaff={this.props.selectedStaff}
                                edit={this.edit}
                                toogleAbsentStaffModal={this.toogleAbsentStaffModal}
                                toogleResignStaffModal={this.toogleResignStaffModal}
                                toogleSendMailModal={this.toogleSendMailModal}
                            />
                        </TabPane>

                        <TabPane tabId="jobTitle">
                            <JobTitle
                                jobTitle={this.props.jobTitle}
                                getJobTitle={this.props.jobTitleActions.getJobTitle}
                                handleSelectedStaff={this.props.filterActions.handleSelectedStaff}
                                selectedStaff={this.props.selectedStaff}
                                edit={this.edit}
                                toogleAbsentStaffModal={this.toogleAbsentStaffModal}
                                toogleResignStaffModal={this.toogleResignStaffModal}
                                toogleRemoveStaffModal={this.toogleRemoveStaffModal}
                                toogleSendMailModal={this.toogleSendMailModal}
                            />
                        </TabPane>

                        <TabPane tabId="recentlyInactive">
                            <RecentlyInactive
                                recentlyInactive={this.props.recentlyInactive}
                                getRecentlyInactive={this.props.recentlyInactiveActions.getRecentlyInactive}
                                handleSelectedStaff={this.props.filterActions.handleSelectedStaff}
                                selectedStaff={this.props.selectedStaff}
                                edit={this.edit}
                                toogleAbsentStaffModal={this.toogleAbsentStaffModal}
                                toogleResignStaffModal={this.toogleResignStaffModal}
                                toogleSendMailModal={this.toogleSendMailModal}
                                toogleRemoveStaffModal={this.toogleRemoveStaffModal}
                                toogleReResignStaffModal={this.toogleReResignStaffModal}
                            />
                        </TabPane>

                        <TabPane tabId="newEmployee">
                            <NewEmployee
                                newEmployee={this.props.newEmployee}
                                getNewEmployee={this.props.newEmployeeActions.getNewEmployee}
                                handleSelectedStaff={this.props.filterActions.handleSelectedStaff}
                                selectedStaff={this.props.selectedStaff}
                                toogleAbsentStaffModal={this.toogleAbsentStaffModal}
                                toogleResignStaffModal={this.toogleResignStaffModal}
                                edit={this.edit}
                                toogleSendMailModal={this.toogleSendMailModal}
                                toogleRemoveStaffModal={this.toogleRemoveStaffModal}
                            />
                        </TabPane>

                        <TabPane tabId="fileImport">
                            <FileImport
                                importTypes={this.state.importTypes}
                                //fileimportTypes={this.state.fileimportTypes}
                                validFileName={this.state.validFileName}
                                validImportType={this.state.validImportType}
                                handleFile={this.handleFile}
                                handleImportType={this.handleImportType}
                                importType={this.state.importType}
                                create={this.create}
                            />
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps(state) {
    return {
        headOf: state.staff.active.headOf,
        name: state.staff.active.name,
        destination: state.staff.active.destination,
        jobTitle: state.staff.active.jobTitle,
        selectedStaff: state.staff.filter.selectedStaff,
        recentlyInactive: state.staff.inactive.recentlyInactive,
        newEmployee: state.staff.other.newEmployee,
        selectedReason: state.staff.modal,
        notification: state.notification.notification,
        fileImport: state.staff.other.imports,
        filter: state.staff.filter,
        keywords: state.setting.keywords.keywords,
        keywordslookup: state.setting.keywords.keywordslookup
    }
}

function mapDispatchToProps(dispatch) {
    return {
        staffActions: bindActionCreators(staffActions, dispatch),
        headOfActions: bindActionCreators(headOfActions, dispatch),
        notificationActions: bindActionCreators(notificationActions, dispatch),
  
        destinationActions: bindActionCreators(destinationActions, dispatch),
        filterActions: bindActionCreators(filterActions, dispatch),
        jobTitleActions: bindActionCreators(jobTitleActions, dispatch),
        recentlyInactiveActions: bindActionCreators(recentlyInactiveActions, dispatch),
        nameActions: bindActionCreators(nameActions, dispatch),
        newEmployeeActions: bindActionCreators(newEmployeeActions, dispatch),
        fileImportActions: bindActionCreators(fileImportActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Staff)
