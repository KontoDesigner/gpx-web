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
import '../../styles/staff.css';

class Staff extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedReason: null,
            value:null,
            activeTab: 'headOf',
            resetData: this.props.headOfActions.handleHeadOf,
            absentStaffModal: false,
            resignStaffModal: false,
            sendMailModal: false,
            
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


        };
     
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        this.setState({value: event.target.value});
      }


      handleSelect = (field, val, selector) => {
        const id = val != null ? val[selector] : undefined

        this.props.staffActions.handleStaffField(field, id)

    
    }

   

    edit = (e, staff) => {
        if (!$(e.target).is(":checkbox")) {
            const win = window.open(`/staff/${staff.staffID}`, '_blank');

            win.focus();
        }
    }

 

    createMail = model => {
      
        let mailmodel = {
   
           TemplateName:model.selectedNotification,
             StaffID:this.props.selectedStaff,
             DateModified:model.dateModified
      
             
         }
        
         this.props.staffActions.createMail(mailmodel)
     }

    createAbscense = model => {
      
       let abscensemodel = {
  
            ApplicationType:"Abscense",
            Status:"Abscense",
       
             AbsentStart: model.startDate,
             AbsentReason: model.absentReason,
             AbsentEnd: model.endDate,
             AbsentReason2: this.state.value,
            StaffID:this.props.selectedStaff,
            DateModified:model.dateModified
     
            
        }
        
        this.props.staffActions.createAbsense(abscensemodel)
    }


    createResign = model => {

           const resignmodel = {
            ApplicationType:"Resigned",
            Status:"Resigned",
               Comments: this.state.value,
              FromDate: model.fromDate,
               StaffID:this.props.selectedStaff,
               DateModified:model.dateModified
               // StaffID: this.props.staff.staffID,
               // FirstName: this.props.staff.firstName,
               // LastName: this.props.staff.lastName,
               // Season: role.season,
               // FullName: this.props.staff.fullName,
               // StartDate: role.startDate,
               // EndDate: role.endDate
               
           }
           debugger;
           this.props.staffActions.createResign(resignmodel)
       }

       toogleSendMailModal = (val) => {
        this.setState({
            sendMailModal: !this.state.sendMailModal
        })
    }

    toogleAbsentStaffModal = (val) => {
        this.setState({
            absentStaffModal: !this.state.absentStaffModal
        })


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

    toogleResignStaffModal = (val) => {
 
        this.setState({
            resignStaffModal: !this.state.resignStaffModal
        
        })
    }

    componentWillMount() {
        document.title = 'Staff - GPX'
    }

    componentDidMount() {
        this.props.filterActions.handleFilter()   //when page loads
        this.props.notificationActions.getNotification()
        this.props.headOfActions.getHeadOf()
    }

    toggle = (tab, getData, resetData) => {
        debugger;
        if (this.state.activeTab !== tab) {
            //Reset current tab state
            this.state.resetData([])

            //Reset filter
            this.props.filterActions.handleFilter()

            //Get tab data
            getData()

            this.setState({
                activeTab: tab,
                resetData: resetData
            })
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
                resignType={this.state.resignType}
                handleChange={this.handleChange}
                handleSelect= {this.handleSelect}
                createAbscense= {this.createAbscense}
                value={this.state.value}
              
            />

            <SendMail
                modal={this.state.sendMailModal}
                toggle={this.toogleSendMailModal}
                //resignType={this.state.resignType}
                handleChange={this.handleChange}
               // handleSelect= {this.handleSelect}
                createMail= {this.createMail}
                value={this.state.value}
                notification={this.props.notification }
              
            />

            
<ResignStaff
                modal={this.state.resignStaffModal}
                toggle={this.toogleResignStaffModal}
                resignType={this.state.resignType}
                handleChange={this.handleChange}
                handleSelect= {this.handleSelect}
                value={this.state.value}
                createResign= {this.createResign}
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
                            />
                        </TabPane>

                        <TabPane tabId="newEmployee">
                       
                            <NewEmployee
                            newEmployee={this.props.newEmployee}
    
                            getNewEmployee={this.props.getNewEmployee}
                          
                            handleSelectedStaff={this.props.filterActions.handleSelectedStaff}
                            selectedStaff={this.props.selectedStaff}
                            toogleAbsentStaffModal={this.toogleAbsentStaffModal}
                            toogleResignStaffModal={this.toogleResignStaffModal}
                            edit={this.edit}
                            toogleSendMailModal={this.toogleSendMailModal}
                            />
                        </TabPane>

                             <TabPane tabId="fileImport">
                       
                        <FileImport
                      
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
       selectedReason:state.staff.modal,
       notification: state.notification.notification,
       fileImport: state.staff.other.imports
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
