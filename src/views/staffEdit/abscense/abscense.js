import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import AbscenseInformation from './abscenseInformation'
import ResignInformation from './resignInformation'
import * as employeeInfoActions from '../../../actions/staffEdit/employeeInfoActions'
import * as abscenseActions from '../../../actions/staffEdit/abscenseActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import restClientConfig from '../../../infrastructure/restClientConfig'
import { toastr } from 'react-redux-toastr'
import RestClient from '../../../infrastructure/restClient'

class Abscense extends Component {
  constructor(props) {
    super(props)

    //*************** */add a local state for the resign part since that is not part of the staff object*********************
     //let abscenseHistory = this.props.abscenseHistory;
  let resignHistory = this.props.resignHistory;
  debugger;
 this.state = {
    value: '',
  resignHistory: Object.assign(
   {},
       resignHistory ? resignHistory : {}
   ),
   //abscenseHistory: Object.assign(
    //{},
    //abscenseHistory ? abscenseHistory : {}
  //  )
 }
  }
  //**************************************************************************************************
  handleSaveAbscense = async() => {
 
    // this.props.settingActions.save()
    var currentdate = new Date(); 
    var newdatemodified   = currentdate.getFullYear() + "-"
                    + (currentdate.getMonth()+1)  + "-" 
                    + currentdate.getDate() ;
            
                    

    let model = {
      // to the database
      ApplicationType: "LeaveOfAbscense",
     AbsentStart : this.props.abscenseHistory.absentStart,   // this is wrong
      AbsentEnd: this.state.abscenseHistory.absentEnd,
      AbsentReason: this.state.abscenseHistory.absentReason,
      // Signature: this.state.resignHistory.signature, 
      // JobTitleWhenResigned: this.state.resignHistory.jobTitleWhenResigned,
      // ReasonForResignment: this.state.resignHistory.reasonForResignment,
      // ResignComm: this.state.resignHistory.resignComm,
      DateModified: newdatemodified,
      //EmpID: this.state.resignHistory.empID,
      StaffID: this.state.abscenseHistory.staffID

    
    }


  debugger;
  try {
      const res =  await RestClient.Post('abscense/abscenseUser',model)
  debugger;
 
  
      if (res) {
          toastr.success('Success', `Abscense Document is updated`)
      } else {
          toastr.error('Error', `Could not update Abscense document: ${res ? res.message : 'Error'}`)
      }
  } catch (error) {
 
  
      throw error
  }
  
  }
  
  
  handleSaveResign = async() => {
    // this.props.settingActions.save()
    var currentdate = new Date(); 
    var newdatemodified   = currentdate.getFullYear() + "-"
                    + (currentdate.getMonth()+1)  + "-" 
                    + currentdate.getDate() ; 
                  

    let model = {
      // to the database
      ApplicationType: this.state.resignHistory.applicationType,
      FromDate : this.state.resignHistory.appDate,   // this is wrong
      AppDate: this.state.resignHistory.appDate,
      ManagerReason: this.state.resignHistory.managerReason,
      Signature: this.state.resignHistory.signature, 
      JobTitleWhenResigned: this.state.resignHistory.jobTitleWhenResigned,
      ReasonForResignment: this.state.resignHistory.reasonForResignment,
      ResignComm: this.state.resignHistory.resignComm,
      DateModified: newdatemodified,
      //EmpID: this.state.resignHistory.empID,
      StaffID: this.state.resignHistory.staffID

    
    }


  debugger;
  try {
      const res =  await RestClient.Post('resign/resignUser',model)
  debugger;
 
  
      if (res) {
          toastr.success('Success', `Resign Document is updated`)
      } else {
          toastr.error('Error', `Could not update Resign document: ${res ? res.message : 'Error'}`)
      }
  } catch (error) {
 
  
      throw error
  }
  
  }


  handleResignDatePicker = (field, date) => {
    let val = ''
    //debugger

    let resignHistory = Object.assign({}, this.state.resignHistory)

    //Picker
    if (date._d) {
        resignHistory[field] = date._d
      console
    }

    //Manual
    else if (!date._d) {
        resignHistory[field] = date
    }

    this.setState({ resignHistory })
  }

  handleSelectTypes = (field, val, id) => {
    //let val = ''
    // debugger

    let resignHistory= Object.assign({}, this.state.resignHistory)
    resignHistory[field] = val[id]
    //  this.setState({applicationHistory})
    this.setState({ resignHistory })
  }

  handleStaffDatePicker = (field, date) => {
    let val = ''

    //Picker
    if (date._d) {
      val = date._d
    }

    //Manual
    if (!date._d) {
      val = date
    }

    this.props.employeeInfoActions.handleStaffField(field, val)

    this.props.handleUnsavedEdit()
  }

  handleStaffSelect = (field, val, selector) => {
    const id = val != null ? val[selector] : undefined

    this.props.abscenseActions.handleStaffField(field, id)

    this.props.handleUnsavedEdit()
  }

  handleStaffField = event => {
    const field = event.target.name
    const val = event.target.value

    this.props.abscenseActions.handleStaffField(field, val)

    this.props.handleUnsavedEdit() 
  }

//  handleSelectTypes = (field, val) => {
  //  this.setState({ field: val.id })
 // }

  render() {
    return (
      <div>
        <Row className="row-panel-4">
          <Col sm="12" md="12" lg="6">
            <AbscenseInformation
              staff={this.props.staff}
              handleStaffDatePicker={this.handleStaffDatePicker}
              handleStaffSelect={this.handleStaffSelect}
              handleSaveAbscense = {this.handleSaveAbscense}
              //abscenseHistory={this.props.abscenseHistory}
              //handleSelectTypes={this.handleSelectTypes}
               resignType={this.props.resignType}
            />
          </Col>

          <Col sm="12" md="12" lg="6">
            <ResignInformation
              staff={this.props.staff}
              // handleStaffDatePicker={this.handleStaffDatePicker}
              handleResignDatePicker={this.handleResignDatePicker}
              handleStaffSelect={this.handleStaffSelect}
              handleStaffField={this.handleStaffField}
              handleSaveResign = {this.handleSaveResign}
              allJobTitles={this.props.allJobTitles}
              handleChangeMultiple={this.props.handleChangeMultiple}
              resignmentReasons={this.props.resignmentReasons}
              resignHistory={this.state.resignHistory}
              handleSelectTypes={this.handleSelectTypes}
              managerReasons= {this.props.managerReasons} 

              // title={"Skills"}
              // name={"skills"}
              // options={this.props.skillOptions}
              // selectedOptions={selectedOptions}
              // handleChange={this.props.handleCheckBox}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    employeeInfoActions: bindActionCreators(employeeInfoActions, dispatch),
    abscenseActions: bindActionCreators(abscenseActions, dispatch)
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Abscense)
