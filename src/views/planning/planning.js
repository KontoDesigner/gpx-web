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
//import RestClient from '../../infrastructure/restClient'
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
      nowAvailablePositions: [],
      activeTab: 'allRole',
      resetData: this.props.allRolesActions.handleAllRoles,  // send to all role view
      markPositionAcceptModal: false,
      makePositionVacantModal: false,
      markPositionActingModal: false,
      markPositionDeclineModal: false,
      resetPositionAcceptModal: false,
      unmarkPositionActingModal: false,
      assignPositionModal: false,
      updatePositionModal: false,
      selectedMplID:null,
 
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  toogleMakePositionVacantModal = val => {
    if(val) {
      this.setState({
        makePositionVacantModal: !this.state.makePositionVacantModal,
        selectedMplID: val
      })

    }else 
    {

      this.setState({
        makePositionVacantModal: !this.state.makePositionVacantModal,
        selectedMplID: this.props.selectedTitle
      })
      

    }
this.toogleMarkPositionAcceptModal
  }

  toogleAssignPositionModal = val => {

        if(val) {
          this.setState({
            assignPositionModal: !this.state.assignPositionModal,
            selectedMplID: val
          })

        }else 
        {

          this.setState({
            assignPositionModal: !this.state.assignPositionModal,
            selectedMplID: this.props.selectedTitle
          })
          

        }



      // this.setState({
      //   assignPositionModal: !this.state.assignPositionModal,
      //   selectedMplID: val
      // })




  }

  toogleUpdatePositionModal = val => {
    this.setState({
      updatePositionModal: !this.state.updatePositionModal
    })
  }

  toogleMarkPositionAcceptModal = val => {

    if(val) {
      this.setState({
        markPositionAcceptModal: !this.state.markPositionAcceptModal,
        selectedMplID: [val]
      })

    }else 
    {

      this.setState({
        markPositionAcceptModal: !this.state.markPositionAcceptModal,
        selectedMplID: this.props.selectedTitle
      })
      

    }
    
 

    // this.setState({
    //   markPositionAcceptModal: !this.state.markPositionAcceptModal
    // })
  }

  toogleMarkPositionActingModal = val => {

   
    if(val) {
      this.setState({
        markPositionActingModal: !this.state.markPositionActingModal,
        selectedMplID: val
      })

    }else 
    {

      this.setState({
        markPositionActingModal: !this.state.markPositionActingModal,
        selectedMplID: this.props.selectedTitle
      })
      

    }


    // this.setState({
    //   markPositionActingModal: !this.state.markPositionActingModal
    // })
  }

  toogleMarkPositionDeclineModal = val => {

    if(val) {
      this.setState({
        markPositionDeclineModal: !this.state.markPositionDeclineModal,
        selectedMplID: val
      })

    }else 
    {

      this.setState({
        markPositionDeclineModal: !this.state.markPositionDeclineModal,
        selectedMplID: this.props.selectedTitle
      })
      

    }







    // this.setState({
    //   markPositionDeclineModal: !this.state.markPositionDeclineModal
    // })
  }

  toogleResetPositionAcceptModal = val => {

    
    if(val) {
      this.setState({
        resetPositionAcceptModal: !this.state.resetPositionAcceptModal,
        selectedMplID: val
      })

    }else 
    {

      this.setState({
        resetPositionAcceptModal: !this.state.resetPositionAcceptModal,
        selectedMplID: this.props.selectedTitle
      })
      

    }








    // this.setState({
    //   resetPositionAcceptModal: !this.state.resetPositionAcceptModal
    // })
  }

  toogleUnmarkPositionActingModal = val => {

    if(val) {
      this.setState({
        unmarkPositionActingModal: !this.state.unmarkPositionActingModal,
        selectedMplID: val
      })

    }else 
    {

      this.setState({
        unmarkPositionActingModal: !this.state.unmarkPositionActingModal,
        selectedMplID: this.props.selectedTitle
      })
      

    }

    // this.setState({
    //   unmarkPositionActingModal: !this.state.unmarkPositionActingModal
    // })
  }
  createPosition = model => {
    debugger

    this.props.planningActions.createPosition(model)
  }

  //   getAvailablePositionNew = async () => {
  //     const nowAvailablePositions = await RestClient.Get(
  //       'positionassign/getallcand'
  //     )

  //     this.setState({
  //       nowAvailablePositions
  //     })
  //   }

  createVacant = async model => {
    let vacantModel = {
        Id: this.state.selectedMplID,
        DateModified: model.dateModified,
        OldDate: model.oldDate
    }
   

    this.props.planningActions.createVacant(vacantModel)
    // this.props.placedRolesActions.getPlacedRoles()
    // return
    
   
    // let all = JSON.parse(JSON.stringify(this.props.placedRoles))  // All Role view or array into this let var
 // All Role view or array into this let var



 this.getActTabAndRequest(this.state.activeTab) 

 this.props.filterActions.handleSelectedTitle([])


    // for (var row1 = 0; row1 < all.length; row1++) {
    //   for (var row2 = 0; row2 < all[row1].headOfs.length; row2++) {
    //     for (var row3 = 0; row3 < all[row1].headOfs[row2].destinations.length; row3++) {
    //       for (var row4 = 0; row4 < all[row1].headOfs[row2].destinations[row3].positions.length; row4++) {
    //         if (all[row1].headOfs[row2].destinations[row3].positions[row4].mplID === vacantModel.Id)
    //         {
    //           alert(row1)
    //           alert(row2)
    //           alert(row3)
    //           alert(row4)
    //           all[row1].headOfs[row2].destinations[row3].positions.splice(row4, 1)

    //           this.props.placedRolesActions.handlePlacedRoles(all)
    //         }
    //       }
    //     }
    //   }
    // }


//  let mplresult = all
//       .filter( x => x != null ).map(x => x.headOfs).reduce((prev, x) => prev.concat(x), [])
//       .filter( x => x != null ).map(x => x.destinations).reduce((prev, x) => prev.concat(x), [])
//       .filter( x => x !=null ).map(x => x.positions).reduce((prev, x) => prev.concat(x), []).filter(x => x.mplID == vacantModel.Id)

//       const row = all[0].headOfs[0].destinations[0].positions[0]

 //const index = all.findIndex(pr => pr.mplid === model.mplid)
 
//  all{index}.mplid = 'test'

//  if (index !== -1) {
//    //all[index] = "Kiwi";
//      all.splice(index, 1)
//  }



            // const index = all.findIndex(model.mplid)

            // if (index !== -1) {
            //   //all[index] = "Kiwi";
            //     all.splice(index, 1)
            // }

            //this.props.handleAllRoles(all)
    
}

  // createVacant = model => {
  //   let vacantModel = {
  //     Id: model.mplid,
  //     DateModified: model.dateModified,
  //     OldDate: model.oldDate
  //   }
  //   debugger



  //   this.props.planningActions.createVacant(vacantModel)
  
  // }

  createActing = model => {
    debugger
    let actingModel = {
      Id: model.mplid,
      DateModified: model.dateModified,
      Acting: 'Y',
      OldDate: model.oldDate
    }
    debugger

    this.props.planningActions.createActing(actingModel)

    this.getActTabAndRequest(this.state.activeTab) 

  }

  createUnActing = model => {
    debugger
    let actingModel = {
      Id: model.mplid,
      DateModified: model.dateModified,
      Acting: '',
      OldDate: model.oldDate
    }
    debugger

    this.props.planningActions.createActing(actingModel)

    this.getActTabAndRequest(this.state.activeTab) 
  }

  createAccept = model => {
    debugger
    let acceptModel = {
      Id: model.mplid,
      DateModified: model.dateModified,
      Accept: 'Accepted',
      AcceptDate: model.dateModified,
      AcceptBy: '',
      OldDate: model.oldDate
    }
    debugger

    // _this.props.planningActions.sendToCtx(positionAssign)

    this.props.planningActions.createAccept(acceptModel)

    this.getActTabAndRequest(this.state.activeTab) 
  }

  createResetAccept = model => {
    debugger
    let resetAcceptModel = {
      Id: model.mplid,
      DateModified: model.dateModified,
      Accept: '',
      AcceptDate: model.dateModified,
      AcceptBy: '',
      OldDate: model.oldDate
    }
    debugger

    // _this.props.planningActions.sendToCtx(positionAssign)

    this.props.planningActions.createResetAccept(resetAcceptModel)

 
    this.getActTabAndRequest(this.state.activeTab) 
  }

  createDecline = model => {
    debugger
    let declineModel = {
      Id: model.mplid,
      DateModified: model.dateModified,
      Accept: 'Declined',
      AcceptDate: model.dateModified,
      AcceptBy: '',
      OldDate: model.oldDate
    }
    debugger

    // _this.props.planningActions.sendToCtx(positionAssign)

    this.props.planningActions.createDecline(declineModel)
    this.getActTabAndRequest(this.state.activeTab) 
  }

  createAssign = model => {
    let assignmodel = {
      // TemplateName:model.selectedNotification,
      // StaffID:this.props.selectedStaff,
      DateModified: model.dateModified,

      StaffID: model.candidate,
      MPLID: this.state.selectedMplID,

      StartDate: model.startDate,
      EndDate: model.endDate,
      OldDate: model.oldDate
    }
    debugger
    const _this = this

    if (assignmodel.OldDate != 'Add New') {
      this.props.planningActions
        .deletePositionAssign(assignmodel)
        .then(function() {
          _this.props.planningActions.insertStaffAssign(assignmodel)
        })
    } else {
      _this.props.planningActions.insertStaffAssign(assignmodel)
    }
    //this.props.planningActions.insertStaffAssign(assignmodel)

    this.getActTabAndRequest(this.state.activeTab) 
  }


  getActTabAndRequest =  actTab => {
    debugger;
       switch (actTab) {
         case "allRole":
         this.props.allRolesActions.getAllRoles(this.props.filter.sourceMarket,this.props.filter.selectedJobFamily,this.props.filter.text)

           break;
          case "placedRoles":
          // this.props.placedRolesActions.getPlacedRoles()
          
            this.props.placedRolesActions.getPlacedRoles(this.props.filter.sourceMarket,this.props.filter.selectedJobTitle,this.props.filter.text)
        
             break;
           case "vacantRoles":
          this.props.vacantRolesActions.getVacantRoles(this.props.filter.sourceMarket,this.props.filter.selectedJobTitle,this.props.filter.text)
            break;
           case "replyYesNoRoles":
          this.props.replyYesNoRolesActions.getreplyYesNoRoles(this.props.filter.sourceMarket,this.props.filter.selectedJobTitle,this.props.filter.text)
             break;
        
   
          }
         }
   


  createUpdate = model => {
    let updatemodel = {
      // TemplateName:model.selectedNotification,
      // StaffID:this.props.selectedStaff,
      DateModified: model.dateModified,

      StaffID: model.candidate,
      MPLID: model.selectedTitle,

      StartDate: model.startDate,
      EndDate: model.endDate
    }
    debugger
    const _this = this

    this.props.planningActions.createUpdate(updatemodel)

    //this.props.planningActions.insertStaffAssign(assignmodel)
  }

  edit = (e, position) => {
    if (!$(e.target).is(':checkbox')) {
      // alert(position.staffID);
      if (position.staffID != null) {
        const win = window.open(`/staff/${position.staffID}`, '_blank')
        win.focus()
      } else {
        const win2 = window.open(`/planning/${position.mplID}`, '_blank')
        win2.focus()
      }
    }
  }

  componentDidMount() {
    
    this.props.filterActions.handleFilter() //when page loads

    this.props.allRolesActions.getAllRoles(this.props.filter.sourceMarket,this.props.filter.selectedJobFamily,this.props.filter.text)
    
    this.props.planningActions.getStaffCandidate()
    //this.getAvailablePositionNew()
  }

  toggle = (tab, getData, resetData) => {
  debugger;
     if (this.state.activeTab !== tab) {
       //Reset current tab state
       this.state.resetData([])

       //Reset filter
      //this.props.filterActions.handleFilter()

       //Get tab data
       getData(this.props.filter.sourceMarket,this.props.filter.selectedJobFamily,this.props.filter.text)

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
          getReplyYesNoRoles={
            this.props.replyYesNoRolesActions.getReplyYesNoRoles
          } 
          handleReplyYesNoRoles={
            this.props.replyYesNoRolesActions.handleReplyYesNoRoles
          }
          getNewPosition={this.props.newPositionActions.getNewPosition}
          handleNewPosition={this.props.newPositionActions.handleNewPosition}
        />

        <AssignPosition
          modal={this.state.assignPositionModal}
          toggle={this.toogleAssignPositionModal}
          createAssign={this.createAssign}
          candidate={this.props.candidate}
          selectedTitle={this.props.selectedTitle}
          selectedMplID={this.state.selectedMplID}
       
          allRoles={[...this.props.allRoles,...this.props.placedRoles, ...this.props.vacantRoles, ...this.props.replyYesNoRoles]}
        />

        <UpdatePosition
          modal={this.state.updatePositionModal}
          toggle={this.toogleUpdatePositionModal}
          createUpdate={this.createUpdate}
          selectedTitle={this.props.selectedTitle}
   
          // candidate={this.props.candidate }
          // selectedTitle={this.props.selectedTitle}
        />

        <MakePositionVacant
          modal={this.state.makePositionVacantModal}
          toggle={this.toogleMakePositionVacantModal}
          createVacant={this.createVacant}
          selectedTitle={this.props.selectedTitle}
          candidate={this.props.candidate}
          selectedMplID={this.state.selectedMplID}
         // runApi={this.state.runApi}
        />

        <MarkPositionAccept
          modal={this.state.markPositionAcceptModal}
          toggle={this.toogleMarkPositionAcceptModal}
          createAccept={this.createAccept}
          selectedTitle={this.props.selectedTitle}
          candidate={this.props.candidate}
          selectedMplID={this.state.selectedMplID}
        />

        <MarkPositionActing
          modal={this.state.markPositionActingModal}
          toggle={this.toogleMarkPositionActingModal}
          createActing={this.createActing}
          selectedTitle={this.props.selectedTitle}
          candidate={this.props.candidate}
          selectedMplID={this.state.selectedMplID}
        />

        <MarkPositionDecline
          modal={this.state.markPositionDeclineModal}
          toggle={this.toogleMarkPositionDeclineModal}
          createDecline={this.createDecline}
          selectedTitle={this.props.selectedTitle}
          candidate={this.props.candidate}
          selectedMplID={this.state.selectedMplID}
        />

        <ResetPositionAccept
          modal={this.state.resetPositionAcceptModal}
          toggle={this.toogleResetPositionAcceptModal}
          createResetAccept={this.createResetAccept}
          selectedTitle={this.props.selectedTitle}
          candidate={this.props.candidate}
          selectedMplID={this.state.selectedMplID}
        />

        <UnmarkPositionActing
          modal={this.state.unmarkPositionActingModal}
          toggle={this.toogleUnmarkPositionActingModal}
          createUnActing={this.createUnActing}
          selectedTitle={this.props.selectedTitle}
          candidate={this.props.candidate}
          selectedMplID={this.state.selectedMplID}
        />

        <Col sm="12" md="9" lg="9" xl="10">
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="allRole">
              <AllRole
                allRoles={this.props.allRoles}
                getAllRoles={this.props.allRolesActions.getAllRoles}
                //getAllRoles={(sourcemarket, jobfamily,criteria) => this.props.allRolesActions.getAllRoles(sourcemarket, jobfamily,criteria)}
               
                handleSelectedTitle={
                  this.props.filterActions.handleSelectedTitle
                }
                selectedTitle={this.props.selectedTitle}
                edit={this.edit}
                toogleMakePositionVacantModal={
                  this.toogleMakePositionVacantModal
                }
                toogleUnmarkPositionActingModal={
                  this.toogleUnmarkPositionActingModal
                }
                toogleResetPositionAcceptModal={
                  this.toogleResetPositionAcceptModal
                }
                toogleMarkPositionDeclineModal={
                  this.toogleMarkPositionDeclineModal
                }
                toogleMarkPositionActingModal={
                  this.toogleMarkPositionActingModal
                }
                toogleMarkPositionAcceptModal={
                  this.toogleMarkPositionAcceptModal
                }
                toogleAssignPositionModal={this.toogleAssignPositionModal}
                toogleUpdatePositionModal={this.toogleUpdatePositionModal}
                
              />
            </TabPane>

            <TabPane tabId="placedRoles">
              <PlacedRole
                placedRoles={this.props.placedRoles}
                getPlacedRoles={this.props.placedRolesActions.getPlacedRoles}
                //  getPlacedRoles={(sourcemarket, criteria) => this.props.placedRolesActions.getPlacedRoles(sourcemarket, criteria)}
                handleSelectedTitle={
                  this.props.filterActions.handleSelectedTitle
                }
                selectedTitle={this.props.selectedTitle}
                edit={this.edit}
                toogleMakePositionVacantModal={
                  this.toogleMakePositionVacantModal
                }
                toogleUnmarkPositionActingModal={
                  this.toogleUnmarkPositionActingModal
                }
                toogleResetPositionAcceptModal={
                  this.toogleResetPositionAcceptModal
                }
                toogleMarkPositionDeclineModal={
                  this.toogleMarkPositionDeclineModal
                }
                toogleMarkPositionActingModal={
                  this.toogleMarkPositionActingModal 
                }
                toogleMarkPositionAcceptModal={
                  this.toogleMarkPositionAcceptModal
                }
                toogleAssignPositionModal={this.toogleAssignPositionModal}
                toogleUpdatePositionModal={this.toogleUpdatePositionModal}
              />
            </TabPane>

            <TabPane tabId="vacantRoles">
              <VacantRole
                vacantRoles={this.props.vacantRoles}
                getVacantRoles={this.props.vacantRolesActions.getVacantRoles}
                //getVacantRoles={(sourcemarket, criteria) => this.props.vacantRolesActions.getVacantRoles(sourcemarket, criteria)}
                handleSelectedTitle={
                  this.props.filterActions.handleSelectedTitle
                }
                selectedTitle={this.props.selectedTitle}
                edit={this.edit}
                toogleMakePositionVacantModal={
                  this.toogleMakePositionVacantModal
                }
                toogleUnmarkPositionActingModal={
                  this.toogleUnmarkPositionActingModal
                }
                toogleResetPositionAcceptModal={
                  this.toogleResetPositionAcceptModal
                }
                toogleMarkPositionDeclineModal={
                  this.toogleMarkPositionDeclineModal
                }
                toogleMarkPositionActingModal={
                  this.toogleMarkPositionActingModal
                }
                toogleMarkPositionAcceptModal={
                  this.toogleMarkPositionAcceptModal
                }
                toogleAssignPositionModal={this.toogleAssignPositionModal}
                toogleUpdatePositionModal={this.toogleUpdatePositionModal}
              />
            </TabPane>

            <TabPane tabId="replyYesNoRoles">
              <ReplyYesNoRole
                replyYesNoRoles={this.props.replyYesNoRoles}
                // getReplyYesNoRoles={(sourcemarket, criteria) =>
                // this.props.replyYesNoRolesActions.getReplyYesNoRoles(sourcemarket, criteria)
                // }
                getReplyYesNoRoles={
                  this.props.replyYesNoRolesActions.getReplyYesNoRoles
                }
                handleSelectedTitle={
                  this.props.filterActions.handleSelectedTitle
                }
                selectedTitle={this.props.selectedTitle}
                edit={this.edit}
                toogleMakePositionVacantModal={
                  this.toogleMakePositionVacantModal
                }
                toogleUnmarkPositionActingModal={
                  this.toogleUnmarkPositionActingModal
                }
                toogleResetPositionAcceptModal={
                  this.toogleResetPositionAcceptModal
                }
                toogleMarkPositionDeclineModal={
                  this.toogleMarkPositionDeclineModal
                }
                toogleMarkPositionActingModal={
                  this.toogleMarkPositionActingModal
                }
                toogleMarkPositionAcceptModal={
                  this.toogleMarkPositionAcceptModal
                }
                toogleAssignPositionModal={this.toogleAssignPositionModal}
                toogleUpdatePositionModal={this.toogleUpdatePositionModal}
              />
            </TabPane>
            <TabPane tabId="newPosition">
              <NewPosition createPosition={this.createPosition} />
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
    candidate: state.planning.candidate,
    filter: state.planning.filter
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