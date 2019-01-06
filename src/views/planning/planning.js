import React, { Component } from 'react'
import { TabContent, TabPane, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import Tabs from './tabs'
import MakePositionVacant from './makePositionVacant'
import AssignPosition from './assignPosition'
import MarkPositionAccept from './markPositionAccept'
import MarkPositionActing from './markPositionActing'
import MarkPositionDecline from './markPositionDecline'
import ResetPositionAccept from './resetPositionAccept'
import UnmarkPositionActing from './unmarkPositionActing'
import AllRole from './planning/allRole/allRole'
import NewPosition from './planning/newPosition/newPosition'
import PlacedRole from './planning/placedRole/placedRole'
import VacantRole from './planning/vacantRole/vacantRole'
import UpdatePosition from './updatePosition'
import ReplyYesNoRole from './planning/replyYesNoRole/replyYesNoRole'

import { bindActionCreators } from 'redux'
import * as allRolesActions from '../../actions/planning/planning/allRolesActions'
import * as newPositionActions from '../../actions/planning/planning/newPositionActions'
import * as planningActions from '../../actions/planning/planningActions'
import * as placedRolesActions from '../../actions/planning/planning/placedRolesActions'
import * as vacantRolesActions from '../../actions/planning/planning/vacantRolesActions'
import * as replyYesNoRolesActions from '../../actions/planning/planning/replyYesNoRolesActions'
import $ from 'jquery'
import * as filterActions from '../../actions/planning/filterActions'
import '../../styles/staff.css'


class Planning extends Component {
    componentWillMount() {
        document.title = 'Planning - GPX'
    }

    constructor(props) {
        super(props)

        this.state = {
            activeTab: 'allRole',
            resetData: this.props.allRolesActions.handleAllRoles,
            markPositionAcceptModal : false,
            makePositionVacantModal: false,
            markPositionActingModal: false,
            markPositionDeclineModal: false,
            resetPositionAcceptModal: false,
            unmarkPositionActingModal: false,
            assignPositionModal: false,
            updatePositionModal:false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
  

        this.setState({value: event.target.value});
      }

      toogleMakePositionVacantModal = (val) => {
 
        this.setState({
            makePositionVacantModal: !this.state.makePositionVacantModal
        
        })
    }

    toogleAssignPositionModal = (val) => {
 
        this.setState({
            assignPositionModal: !this.state.assignPositionModal
        
        })
    }

    toogleUpdatePositionModal = (val) => {
 
        this.setState({
            updatePositionModal: !this.state.updatePositionModal
        
        })
    }

    toogleMarkPositionAcceptModal = (val) => {
 
        this.setState({
            markPositionAcceptModal: !this.state.markPositionAcceptModal
        
        })
    }

    toogleMarkPositionActingModal = (val) => {
 
        this.setState({
            markPositionActingModal: !this.state.markPositionActingModal
        
        })
    }

    toogleMarkPositionDeclineModal = (val) => {
    
        this.setState({
            markPositionDeclineModal : !this.state.markPositionDeclineModal 
        
        })
       
    }

    toogleResetPositionAcceptModal = (val) => {
 
        this.setState({
            resetPositionAcceptModal: !this.state.resetPositionAcceptModal
        
        })
    }

    toogleUnmarkPositionActingModal = (val) => {
 
        this.setState({
            unmarkPositionActingModal: !this.state.unmarkPositionActingModal
        
        })
    }


    createVacant = model => {
      
        let vacantModel = {

             Id : model.mplid,
             DateModified:model.dateModified
         }
debugger;
 
      this.props.planningActions.createVacant(vacantModel)
         
              }

              createActing = model => {
                debugger;
                          let actingModel = {
                  
                               Id : model.mplid,
                               DateModified:model.dateModified,
                               Extra:'Y'
                           }
                  debugger;
                   
                        this.props.planningActions.createActing(actingModel)
                           
                                }

              createUnActing = model => {
      debugger;
                let actingModel = {
        
                     Id : model.mplid,
                     DateModified:model.dateModified,
                     Extra:''
                 }
        debugger;
         
              this.props.planningActions.createActing(actingModel)
                 
                      }

                      createAccept = model => {
                        debugger;
                                  let acceptModel = {
                          
                                       Id : model.mplid,
                                       DateModified:model.dateModified,
                                       Accept:'Accepted',
                                       AcceptDate:model.dateModified,
                                       AcceptBy:'',
                                   }
                          debugger;
                           

  // _this.props.planningActions.sendToCtx(positionAssign)
                          
                                this.props.planningActions.createAccept(acceptModel)
                                   
                                        }


                                        createResetAccept = model => {
                                            debugger;
                                                      let resetAcceptModel = {
                                              
                                                           Id : model.mplid,
                                                           DateModified:model.dateModified,
                                                           Accept:'',
                                                           AcceptDate:model.dateModified,
                                                           AcceptBy:'',
                                                       }
                                              debugger;
                                               
                    
                      // _this.props.planningActions.sendToCtx(positionAssign)
                                              
                                                    this.props.planningActions.createResetAccept(resetAcceptModel)
                                                       
                                                            }

                                        createDecline = model => {
                                            debugger;
                                                      let declineModel = {
                                              
                                                           Id : model.mplid,
                                                           DateModified:model.dateModified,
                                                           Accept:'Declined',
                                                           AcceptDate:model.dateModified,
                                                           AcceptBy:'',
                                                       }
                                              debugger;
                                               
                    
                      // _this.props.planningActions.sendToCtx(positionAssign)
                                              
                                                    this.props.planningActions.createDecline(declineModel)
                                                       
                                                            }

    createAssign = model => {
      
        let assignmodel = {
   
          // TemplateName:model.selectedNotification,
            // StaffID:this.props.selectedStaff,
             DateModified:model.dateModified,

             StaffID: model.candidate,
             MPLID : model.selectedTitle,
       
             StartDate: model.startDate,
             EndDate: model.endDate,
             OldDate: model.oldDate
         }
debugger;
         const _this = this
      
                  this.props.planningActions.deletePositionAssign(assignmodel).then(function() {
                     _this.props.planningActions.insertStaffAssign(assignmodel)
         
              })


         //this.props.planningActions.insertStaffAssign(assignmodel)
     }
     createUpdate = model => {
      
        let updatemodel = {
   
          // TemplateName:model.selectedNotification,
            // StaffID:this.props.selectedStaff,
             DateModified:model.dateModified,

             StaffID: model.candidate,
             MPLID : model.selectedTitle,
       
             StartDate: model.startDate,
             EndDate: model.endDate
             
         }
debugger;
         const _this = this
      
   
                     this.props.planningActions.createUpdate(updatemodel)
         
              


         //this.props.planningActions.insertStaffAssign(assignmodel)
     }

    edit = (e, position) => {

        if (!$(e.target).is(':checkbox')) {
           // alert(position.staffID);
            if(position.staffID!=null){

                const win = window.open(`/staff/${position.staffID}`, '_blank')
                win.focus()
            } 
            else

            {

                const win2 = window.open(`/planning/${position.mplID}`, '_blank')
                win2.focus()

            }


      
            
        }
    }

    componentDidMount() {
        debugger;
        this.props.filterActions.handleFilter() //when page loads
        debugger;
        this.props.allRolesActions.getAllRoles()
        debugger;
       this.props.planningActions.getStaffCandidate()
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
                    activeTab={this.state.activeTab}
                    getAllRoles={this.props.allRolesActions.getAllRoles}
                    handleAllRoles={this.props.allRolesActions.handleAllRoles}
                    getPlacedRoles={this.props.placedRolesActions.getPlacedRoles}
                    handlePlacedRoles={this.props.placedRolesActions.handlePlacedRoles}
                    getVacantRoles={this.props.vacantRolesActions.getVacantRoles}
                    handleVacantRoles={this.props.vacantRolesActions.handleVacantRoles}
                    getReplyYesNoRoles={this.props.replyYesNoRolesActions.getReplyYesNoRoles}
                    handleReplyYesNoRoles={this.props.replyYesNoRolesActions.handleReplyYesNoRoles}
                  
                    getNewPosition={this.props.newPositionActions.getNewPosition}
                    handleNewPosition={this.props.newPositionActions.handleNewPosition}

                />

     <AssignPosition
                modal={this.state.assignPositionModal}
                toggle={this.toogleAssignPositionModal}
                createAssign= {this.createAssign}
               candidate={  this.props.candidate}
                selectedTitle={this.props.selectedTitle} 
            />

              <UpdatePosition
                modal={this.state.updatePositionModal}
                toggle={this.toogleUpdatePositionModal}
                createUpdate= {this.createUpdate}
                selectedTitle={this.props.selectedTitle} 
                // candidate={this.props.candidate }
                // selectedTitle={this.props.selectedTitle} 
            />

              <MakePositionVacant
                modal={this.state.makePositionVacantModal}
                toggle={this.toogleMakePositionVacantModal}
                createVacant= {this.createVacant}
                selectedTitle={this.props.selectedTitle} 

            />

            <MarkPositionAccept
                modal={this.state.markPositionAcceptModal}
                toggle={this.toogleMarkPositionAcceptModal}
                createAccept= {this.createAccept}
                selectedTitle={this.props.selectedTitle} 
            />

            <MarkPositionActing
                modal={this.state.markPositionActingModal}
                toggle={this.toogleMarkPositionActingModal}
                createActing= {this.createActing}
                selectedTitle={this.props.selectedTitle} 



            />

            <MarkPositionDecline
                modal={this.state.markPositionDeclineModal}
                toggle={this.toogleMarkPositionDeclineModal}
                createDecline= {this.createDecline}
                selectedTitle={this.props.selectedTitle} 
            />

            <ResetPositionAccept
                modal={this.state.resetPositionAcceptModal}
                toggle={this.toogleResetPositionAcceptModal}
                createResetAccept= {this.createResetAccept}
                selectedTitle={this.props.selectedTitle} 
            />

            <UnmarkPositionActing
                modal={this.state.unmarkPositionActingModal}
                toggle={this.toogleUnmarkPositionActingModal}
                createUnActing= {this.createUnActing}
                selectedTitle={this.props.selectedTitle} 
            />

                <Col sm="12" md="9" lg="9" xl="10">
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="allRole">
                            <AllRole
                                allRoles={this.props.allRoles}
                                getAllRoles={this.props.allRolesActions.getAllRoles}
                               //getAllRoles={(sourcemarket, jobfamily,criteria) => this.props.allRolesActions.getAllRoles(sourcemarket, jobfamily,criteria)}
                                handleSelectedTitle={this.props.filterActions.handleSelectedTitle}
                                selectedTitle={this.props.selectedTitle}
                                edit={this.edit}
                                toogleMakePositionVacantModal={this.toogleMakePositionVacantModal}
                                toogleUnmarkPositionActingModal ={this.toogleUnmarkPositionActingModal}
                                toogleResetPositionAcceptModal  ={this.toogleResetPositionAcceptModal}
                                toogleMarkPositionDeclineModal ={this.toogleMarkPositionDeclineModal}
                                toogleMarkPositionActingModal ={this.toogleMarkPositionActingModal}
                                toogleMarkPositionAcceptModal = {this.toogleMarkPositionAcceptModal}
                                toogleAssignPositionModal = {this.toogleAssignPositionModal}
                                toogleUpdatePositionModal = {this.toogleUpdatePositionModal}
                            />
                        </TabPane>

                        <TabPane tabId="placedRoles">
                            <PlacedRole
                                placedRoles={this.props.placedRoles}
                                getPlacedRoles={this.props.placedRolesActions.getPlacedRoles}
                              //  getPlacedRoles={(sourcemarket, criteria) => this.props.placedRolesActions.getPlacedRoles(sourcemarket, criteria)}
                                handleSelectedTitle={this.props.filterActions.handleSelectedTitle}
                                selectedTitle={this.props.selectedTitle}
                                edit={this.edit}
                                toogleMakePositionVacantModal={this.toogleMakePositionVacantModal}
                                toogleUnmarkPositionActingModal ={this.toogleUnmarkPositionActingModal}
                                toogleResetPositionAcceptModal  ={this.toogleResetPositionAcceptModal}
                                toogleMarkPositionDeclineModal ={this.toogleMarkPositionDeclineModal}
                                toogleMarkPositionActingModal ={this.toogleMarkPositionActingModal}
                                toogleMarkPositionAcceptModal = {this.toogleMarkPositionAcceptModal}
                                toogleAssignPositionModal = {this.toogleAssignPositionModal}
                                toogleUpdatePositionModal = {this.toogleUpdatePositionModal}
                            />
                        </TabPane>

                        <TabPane tabId="vacantRoles">
                            <VacantRole
                                vacantRoles={this.props.vacantRoles}
                                getVacantRoles={this.props.vacantRolesActions.getVacantRoles}
                                //getVacantRoles={(sourcemarket, criteria) => this.props.vacantRolesActions.getVacantRoles(sourcemarket, criteria)}
                                handleSelectedTitle={this.props.filterActions.handleSelectedTitle}
                                selectedTitle={this.props.selectedTitle}
                                edit={this.edit}
                                toogleMakePositionVacantModal={this.toogleMakePositionVacantModal}
                                toogleUnmarkPositionActingModal ={this.toogleUnmarkPositionActingModal}
                                toogleResetPositionAcceptModal  ={this.toogleResetPositionAcceptModal}
                                toogleMarkPositionDeclineModal ={this.toogleMarkPositionDeclineModal}
                                toogleMarkPositionActingModal ={this.toogleMarkPositionActingModal}
                                toogleMarkPositionAcceptModal = {this.toogleMarkPositionAcceptModal}
                                toogleAssignPositionModal = {this.toogleAssignPositionModal}
                                toogleUpdatePositionModal = {this.toogleUpdatePositionModal}
                            />
                        </TabPane>

                        <TabPane tabId="replyYesNoRoles">
                            <ReplyYesNoRole


                                replyYesNoRoles={this.props.replyYesNoRoles}
                                // getReplyYesNoRoles={(sourcemarket, criteria) =>
                                // this.props.replyYesNoRolesActions.getReplyYesNoRoles(sourcemarket, criteria)
                                // }
                                getReplyYesNoRoles={this.props.replyYesNoRolesActions.getReplyYesNoRoles}
                                handleSelectedTitle={this.props.filterActions.handleSelectedTitle}
                                selectedTitle={this.props.selectedTitle}
                                edit={this.edit}
                                toogleMakePositionVacantModal={this.toogleMakePositionVacantModal}
                                toogleUnmarkPositionActingModal ={this.toogleUnmarkPositionActingModal}
                                toogleResetPositionAcceptModal  ={this.toogleResetPositionAcceptModal}
                                toogleMarkPositionDeclineModal ={this.toogleMarkPositionDeclineModal}
                                toogleMarkPositionActingModal ={this.toogleMarkPositionActingModal}
                                toogleMarkPositionAcceptModal = {this.toogleMarkPositionAcceptModal}
                                toogleAssignPositionModal = {this.toogleAssignPositionModal}
                                toogleUpdatePositionModal = {this.toogleUpdatePositionModal}
                            />
                        </TabPane>
                        <TabPane tabId="newPosition">
                            <NewPosition
                             
                            
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
        newPosition: state.planning.planning.newPosition,
        allRoles: state.planning.planning.allRoles,
        placedRoles: state.planning.planning.placedRoles,
        vacantRoles: state.planning.planning.vacantRoles,
        replyYesNoRoles: state.planning.planning.replyYesNoRoles,
        selectedTitle: state.planning.filter.selectedTitle,
        candidate: state.planning.candidate
    }
}

function mapDispatchToProps(dispatch) {
    return {
        planningActions: bindActionCreators(planningActions, dispatch),
        allRolesActions: bindActionCreators(allRolesActions, dispatch),
        placedRolesActions: bindActionCreators(placedRolesActions, dispatch),
        vacantRolesActions: bindActionCreators(vacantRolesActions, dispatch),
        newPositionActions: bindActionCreators(newPositionActions, dispatch),
        filterActions: bindActionCreators(filterActions, dispatch),
        replyYesNoRolesActions: bindActionCreators(replyYesNoRolesActions, dispatch)
    } 
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Planning)
