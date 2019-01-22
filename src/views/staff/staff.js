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
import RestClient from '../../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'
import '../../styles/staff.css';

class Staff extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            selectedReason: null,
            fileName:null,
            importType:'',
            value:null,
            activeTab: 'destination',
            resetData: this.props.destinationActions.handleDestination,
            absentStaffModal: false,
            resignStaffModal: false,
            sendMailModal: false,
            selectedStaffID:null,
            importTypes: [    //not in use  delete
                {
                    id: 'Staff',
                    name: 'Staff' 
                },
                {
                    id: 'Position',
                    name: 'Position'
                },
          
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
           StaffID:this.state.selectedStaffID,
             DateModified:model.dateModified
      
             
         }
        
         this.props.staffActions.createMail(mailmodel)

         switch (this.state.activeTab) {
            case "destination":
            this.props.destinationActions.getDestination()
              break;
             case "name":
              this.props.nameActions.getName()
           
                break;
              case "jobTitle":
             this.props.jobTitleActions.getJobTitle()
               break;
           
           
            }
     }

    createAbscense = model => {
      debugger;
       let abscensemodel = {
  
            ApplicationType:"Abscense",
            Status:"Abscense",
       
             AbsentStart: model.startDate,
             AbsentReason: model.absentReason,
             AbsentEnd: model.endDate,
             AbsentReason2: this.state.value,
            StaffID:this.state.selectedStaffID,
            DateModified:model.dateModified
     
            
        }
        debugger;
        this.props.staffActions.createAbsense(abscensemodel)

        switch (this.state.activeTab) {
            case "destination":
            this.props.destinationActions.getDestination()
              break;
             case "name":
              this.props.nameActions.getName()
           
                break;
              case "jobTitle":
             this.props.jobTitleActions.getJobTitle()
               break;
           
           
            }
    }

    handleFile=(fileName) => {
        debugger;
   this.setState({fileName})

    }

    createResign = model => {

           const resignmodel = {
            ApplicationType:"Resigned",
            Status:"Resigned",
               Comments: this.state.value,
              FromDate: model.fromDate,
              StaffID:this.state.selectedStaffID,
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

           switch (this.state.activeTab) {
            case "destination":
            this.props.destinationActions.getDestination()
              break;
             case "name":
              this.props.nameActions.getName()
           
                break;
              case "jobTitle":
             this.props.jobTitleActions.getJobTitle()
               break;
           
           
            }


       }

       toogleSendMailModal = (val) => {

        if(val) {
            this.setState({
                sendMailModal: !this.state.sendMailModal,
                selectedStaffID: val
            })
      
          }else 
          {
      
            this.setState({
                sendMailModal: !this.state.sendMailModal,
              selectedStaffID: this.props.selectedStaff
            }) 
            
         
          }

        // this.setState({
        //     sendMailModal: !this.state.sendMailModal
        // })
    }

    toogleAbsentStaffModal = (val) => {
        debugger;

        if(val) {
            this.setState({
                absentStaffModal: !this.state.absentStaffModal,
                selectedStaffID: val
            })
      
          }else 
          {
      
            this.setState({
              absentStaffModal: !this.state.absentStaffModal,
              selectedStaffID: this.props.selectedStaff
            }) 
            
         
          }
          debugger;


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

    toogleResignStaffModal = (val) => {

        if(val) {
            this.setState({
                resignStaffModal: !this.state.resignStaffModal,
                selectedStaffID: val
            })
      
          }else 
          {
      
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
        this.props.filterActions.handleFilter()   //when page loads
        this.props.notificationActions.getNotification()
        this.props.destinationActions.getDestination()
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
            getData(this.props.filter.sourceMarket,this.props.filter.jobFamily,this.props.filter.criteria)

            this.setState({
                activeTab: tab,
                resetData: resetData
            })
        }
    }

    handleImportType = ( val) => {
debugger;       
this.setState({importType:val.id});
}

handleFile=(fileName) => {
    this.setState({fileName})
 
     }

create = async(model) => {
// this.props.settingActions.save()


try {

  const res =  await RestClient.Upload('import/UploadFile/'+ this.state.importType,this.state.fileName)

this.setState({fileName:null, importType:''})
debugger;
   if (res) {
      toastr.success('Success', `GPX - Import routine finished`)
} else {
      toastr.error('Error', `GPX - Could not Import: ${res ? res.message : 'Error'}`)
  }
} catch (error) {
 // dispatch(ajaxCallError(error))

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
                resignType={this.state.resignType}
                handleChange={this.handleChange}
                handleSelect= {this.handleSelect}
                createAbscense= {this.createAbscense}
                value={this.state.value}
                selectedStaffID={this.state.selectedStaffID}
              
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
                selectedStaffID={this.state.selectedStaffID}
              
            />

            
<ResignStaff
                modal={this.state.resignStaffModal}
                toggle={this.toogleResignStaffModal}
                resignType={this.state.resignType}
                handleChange={this.handleChange}
                handleSelect= {this.handleSelect}
                value={this.state.value}
                createResign= {this.createResign}
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
    
                            getNewEmployee={this.props.newEmployeeActions.getNewEmployee}
                          
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
                         importTypes={this.state.importTypes}
                         //fileimportTypes={this.state.fileimportTypes}
                       
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
       selectedReason:state.staff.modal,
       notification: state.notification.notification,
       fileImport: state.staff.other.imports,
       filter: state.staff.filter
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
