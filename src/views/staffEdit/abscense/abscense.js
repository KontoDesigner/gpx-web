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
    let abscenseLocal = this.props.abscenseHistory[0]?this.props.abscenseHistory[0]:{};
    let resignHistoryLocal = this.props.resignHistory?this.props.resignHistory[0]:{};
    debugger;
    this.state = {
      value: '',
      resignHistoryLocal: Object.assign({}, resignHistoryLocal ? resignHistoryLocal : {}),
      abscenseLocal: Object.assign({}, abscenseLocal ? abscenseLocal : {})
    }
  } 

  //**************************************************************************************************
  handleSaveAbscense = async () => {
    // this.props.settingActions.save()
    var currentdate = new Date()
    var newdatemodified =
      currentdate.getFullYear() +
      '-' +
      (currentdate.getMonth() + 1) +
      '-' +
      currentdate.getDate()
    debugger

    let model = {
      // to the database
      ApplicationType: 'LeaveOfAbscense',
      AbsentStart : this.state.abscenseLocal.absentStart,   // this is wrong
      AbsentEnd: this.state.abscenseLocal.absentEnd,
      AbsentReason: this.state.abscenseLocal.absentReason,
      AbsentReason2: this.state.abscenseLocal.absentReason2,
      DateModified: newdatemodified,

      StaffID: this.props.staff.staffID
    }

    debugger;

    try {
      const res = await RestClient.Post('abscense/abscenseUser', model)
      debugger

      if (res) {
        toastr.success('Success', `Abscense Document is updated`)
      } else {
        toastr.error(
          'Error',
          `Could not update Abscense document: ${res ? res.message : 'Error'}`
        )
      }
    } catch (error) {
      throw error
    }
  }

  handleSaveResign = async () => {
    // this.props.settingActions.save()
    var currentdate = new Date()
    var newdatemodified =
      currentdate.getFullYear() +
      '-' +
      (currentdate.getMonth() + 1) +
      '-' +
      currentdate.getDate()

    let model = {
      // to the database
      ApplicationType: this.state.resignHistoryLocal.applicationType,
      FromDate: this.state.resignHistoryLocal.appDate, // this is wrong
      AppDate: this.state.resignHistoryLocal.appDate,
      ManagerReason: this.state.resignHistoryLocal.managerReason,
      Signature: this.state.resignHistoryLocal.signature,
      JobTitleWhenResigned: this.state.resignHistoryLocal.jobTitleWhenResigned,
      ReasonForResignment: this.state.resignHistoryLocal.reasonForResignment,
      ResignComm: this.state.resignHistoryLocal.resignComm,
      DateModified: newdatemodified,
      // //EmpID: this.state.resignHistory.empID,
      StaffID: this.props.staff.staffID
    } 

    debugger;
    try {
      const res = await RestClient.Post('resign/resignUser', model)
      debugger

      if (res) {
        toastr.success('Success', `Resign Document is updated`)
      } else {
        toastr.error(
          'Error',
          `Could not update Resign document: ${res ? res.message : 'Error'}`
        )
      }
    } catch (error) {
      throw error
    }
  }

  handleResignDatePicker = (field, date) => {
    let val = ''
    //debugger

    let resignHistoryLocal = Object.assign({}, this.state.resignHistoryLocal)

    //Picker
    if (date._d) {
      resignHistoryLocal[field] = date._d
      console
    }

    //Manual
    else if (!date._d) {
      resignHistoryLocal[field] = date
    }

    this.setState({ resignHistoryLocal })
  }

  handleSelectTypes = (field, val, id) => {
    //let val = ''
    // debugger

    let resignHistoryLocal = Object.assign({}, this.state.resignHistoryLocal)
    resignHistoryLocal[field] = val[id]
    //  this.setState({applicationHistory})
    this.setState({ resignHistoryLocal })
  }

  handleStaffDatePicker = (field, date) => {
    debugger;
    let val = ''

    //Picker
    if (date._d) {
      val = date._d
    }

    //Manual
    if (!date._d) {
      val = date
    }
    let abscenseLocal = Object.assign({}, this.state.abscenseLocal)
    abscenseLocal[field] = val
    this.setState({abscenseLocal})
    // this.props.employeeInfoActions.handleStaffField(field, val)

    // this.props.handleUnsavedEdit()
  }

  handleStaffSelect = (field, val, selector) => {
    const id = val != null ? val[selector] : undefined

    let abscenseLocal = Object.assign({}, this.state.abscenseLocal)
    abscenseLocal[field] = id
    this.setState({abscenseLocal})

    
  }

  handleStaffField = event => {
    debugger
    const field = event.target.name
    const val = event.target.value

    let resignHistoryLocal = Object.assign({}, this.state.resignHistoryLocal)
    resignHistoryLocal[field] = val

    this.setState({ resignHistoryLocal })
    //this.props.abscenseActions.handleStaffField(field, val)

    //this.props.handleUnsavedEdit()
  }

  
  handleStaffFieldAbscense = event => {
    debugger
    const field = event.target.name
    const val = event.target.value

    let abscenseLocal = Object.assign({}, this.state.abscenseLocal)
    abscenseLocal[field] = val
    //  this.setState({applicationHistory})
    this.setState({ abscenseLocal})
    //this.props.abscenseActions.handleStaffField(field, val)

    //this.props.handleUnsavedEdit()
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
              handleSaveAbscense={this.handleSaveAbscense}
              abscenseHistory={this.state.abscenseLocal}
              handleStaffFieldAbscense={this.handleStaffFieldAbscense}
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
              handleSaveResign={this.handleSaveResign}
              allJobTitles={this.props.allJobTitles}
              handleChangeMultiple={this.props.handleChangeMultiple}
              resignmentReasons={this.props.resignmentReasons}
              resignHistory={this.state.resignHistoryLocal}
              handleSelectTypes={this.handleSelectTypes}
              managerReasons={this.props.managerReasons}

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
