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
import moment from "moment";
class Abscense extends Component {
  constructor(props) {
    super(props)

    //*************** */add a local state for the resign part since that is not part of the staff object*********************
    let abscenseLocal = this.props.abscenseHistory[0]?this.props.abscenseHistory[0]:{};
    let resignHistoryLocal = this.props.resignHistory?this.props.resignHistory[0]:{};
    debugger;
    this.state = {
      value: '',   
      validLastWorking:'',
      validMgrReason:'',
      validReasonFor:'',
      validJobTitleWhen:'',
      validSignature:'',
      validAbsentStart:'',
      validAbsentEnd:'',
      validAbsentReason:'',
      validRecommend:'',
      validComment:'',
      resignHistoryLocal: Object.assign({}, resignHistoryLocal ? resignHistoryLocal : {}),
      abscenseLocal: Object.assign({}, abscenseLocal ? abscenseLocal : {}),
      recommend: [    //not in use  delete
        {
            id: 'Yes',
            name: 'Yes' 
        },
        {
            id: 'No',
            name: 'No'
        },
  
    ],

    }
  } 

  //**************************************************************************************************
  handleSaveAbscense = async () => {
    // this.props.settingActions.save()
    var currentdate = new Date()

    var newdatemodified=moment(currentdate).format("YYYY-MM-DD HH:mm:ss")

    var check= this.state.abscenseLocal.absentStart ? true: false
    var check2= this.state.abscenseLocal.absentEnd ? true: false
    var check3= this.state.abscenseLocal.absentReason ? true: false


    if(!check){  
      this.setState({
        validAbsentStart:'Date´s missing'
      })
      return false;
    }
    this.setState({
      validAbsentStart:''
    })

    if(!check2){  
      this.setState({
        validAbsentEnd:'Date´s missing'
      })
      return false;
    }

    this.setState({
      validAbsentEnd:''
    })

    if(!check3){  
      this.setState({
        validAbsentReason:'Select reason for abscense'
      })
      return false;
    }

    this.setState({
      validAbsentReason:''
    })

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

    var newdatemodified=moment(currentdate).format("YYYY-MM-DD HH:mm:ss")
debugger;
      var check= this.state.resignHistoryLocal.appDate ?  true: false
      var check2= this.state.resignHistoryLocal.managerReason ? true: false
      var check3= this.state.resignHistoryLocal.reasonForResignment ? true: false
      var check4= this.state.resignHistoryLocal.jobTitleWhenResigned ? true: false
      var check6= this.state.resignHistoryLocal.recommend ? true: false
      var check5= this.state.resignHistoryLocal.signature ? true: false
      
  
      if(!check){  
        this.setState({
          validLastWorking:'Date´s missing'
        })
        return false;
      }
      this.setState({
        validLastWorking:''
      })

      if(!check2){  
        this.setState({
          validMgrReason:'Select a manager reason'
        })
        return false;
      }
      this.setState({
        validMgrReason:''
      })


      if(!check3){  
        this.setState({
          validReasonFor:'Select a reason for resignment'
        })
        return false;
      }
      this.setState({
        validReasonFor:''
      })

      if(!check4){  
        this.setState({
          validJobTitleWhen:'Select a Jobtitle'
        })
        return false;
      }
      this.setState({
        validJobTitleWhen:''
      })

      if(!check6){ 
        this.setState({
          validRecommend:'Select recommendation'
        })
        return false;
      }
      this.setState({
        validRecommend:''
      })

           if(!check6){ 
             debugger;
        this.setState({
          validRecommend:'Select recommendation'
        })
        return false;
      }
      this.setState({
        validRecommend:''
      })


      if(this.state.resignHistoryLocal.recommend=='No'){ 
        debugger;

   this.setState({
     validComment:'Enter comment'
   })
   return false;
 }
 this.setState({
   validComment:''
 })


      if(!check5){  
        this.setState({
          validSignature:'Enter a signature'
        })
        return false;
      }
      this.setState({
        validSignature:''
      })
    






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

    field=='appDate'  ?
    this.setState({
            validLastWorking:''
          }):null;
  }

  handleSelectTypes = (field, val, id) => {
    //let val = ''
    // debugger

    let resignHistoryLocal = Object.assign({}, this.state.resignHistoryLocal)
    resignHistoryLocal[field] = val[id]
    //  this.setState({applicationHistory})
    this.setState({ resignHistoryLocal })

    field=='managerReason' || field=='reasonForResignment' || field=='jobTitleWhenResigned' || field=='recommend'  ?
    this.setState({
      validMgrReason:'',
      validReasonFor:'',
            validJobTitleWhen:'',
            validRecommend:''
          }):'';

          

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

    field=='absentEnd' || field=='absentStart' ?
    this.setState({
            validAbsentStart:'',
            validAbsentEnd:''
          }):'';


  }

  handleStaffSelect = (field, val, selector) => {
    const id = val != null ? val[selector] : undefined

    let abscenseLocal = Object.assign({}, this.state.abscenseLocal)
    abscenseLocal[field] = id
    this.setState({abscenseLocal})

    field=='absentReason' ?
    this.setState({
            validAbsentReason:''
          }):'';
    
  }

  handleStaffField = event => {
    debugger
    const field = event.target.name
    const val = event.target.value

    field=='signature' || field=='resignComm' ?
  this.setState({
          validSignature:'',
          validComment:''
        }):'';

    

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
              validAbsentStart={this.state.validAbsentStart}
              validAbsentEnd={this.state.validAbsentEnd}
              validAbsentReason={this.state.validAbsentReason}
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
              validLastWorking={this.state.validLastWorking}
              validMgrReason={this.state.validMgrReason}
              validJobTitleWhen={this.state.validJobTitleWhen}
              validLastWorking={this.state.validLastWorking}
              validSignature={this.state.validSignature}
              validReasonFor={this.state.validReasonFor}
              validRecommend={this.state.validRecommend}
              validComment={this.state.validComment}
              recommend={this.state.recommend}
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
