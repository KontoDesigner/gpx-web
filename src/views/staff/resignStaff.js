import React, { Component } from 'react'
import { Button,Modal,ModalHeader, ModalBody, ModalFooter,Alert,Row,Col,Table,Label,Input} from 'reactstrap'
import Datetime from 'react-datetime'
import Select from 'react-select'
import TextInput from '../../components/textInput'
import { connect } from 'react-redux'

class ResignStaff extends Component {

//const ResignStaff = props => {
  constructor() {
    super();

    this.state = {
      selectedResignAppDate:null,
      selectedReasonForResign:null,
      selectedJobTitle:null,
      selectedManagerReason:null,
      selectedRecommend:null,
      recommend: [    //not in use  delete
        {
            id: 'Yes',
            name: 'Yes' 
        },
        {
            id: 'No',
            name: 'No'
        },
  
    ]
    };
}

handleResonforResign = reasonForResign => {
  debugger;
  const selectedReasonForResign = reasonForResign ;
  
  this.setState({
    selectedReasonForResign

  })
}

handleChange = event => {

  this.setState({value: event.target.value});
}


handleJobTitle = jobTitle => {
  debugger;
  const selectedJobTitle = jobTitle ;
  
  this.setState({
    selectedJobTitle

  })
}
handleManagerReason = managerReason => {
  debugger;
  const selectedManagerReason = managerReason ;
  
  this.setState({
    selectedManagerReason

  })
}
handleRecommend = recommend => {
  debugger;
  const selectedRecommend = recommend ;
  
  this.setState({
    selectedRecommend

  })
}

createResign = (val) => {
       
  this.toggle();

  var currentdate = new Date(); 
  var newdatemodified  = currentdate.getFullYear() + "-"
+ (currentdate.getMonth()+1)  + "-" 
 + currentdate.getDate() ; 

 // const destination = this.props.availablePositions.filter(ap => ap.destination === this.state.selectedDestination)[0];
 // const position = destination.jobTitles.filter(ap => ap.mplid === mplid)[0];

  let model = {
      // staffID: position.mplid,
      dateModified: newdatemodified ,
       fromDate: this.state.selectedResignAppDate,
      // startDate: this.state.selectedAbsentStart,
      //  endDate: this.state.selectedAbsentEnd
  }

 this.props.createResign(model);
}


resignAppDateChange = appDate => {
  const selectedResignAppDate = appDate ;

  this.setState({
    selectedResignAppDate
 
  })

}

toggle = () => {
  this.setState({
    selectedResignAppDate:null,
    selectedReasonForResign:null,
    selectedJobTitle:null,
    selectedRecommend:null

  })

  this.props.toggle();
}

  // function resignStaff(staffID) {
  //   props.resignStaff(staffID)

  //   props.toggle()
  // }
  render() {
  return (
    <div>
      <Modal isOpen={this.props.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>
          The selected staff is resigned / will resign{' '}
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th >Last Working Date</th><th>Manager Reason</th><th>Reason For Resignment</th>  {' '}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Datetime
                        className={'custom-datepicker'}
                        onChange={this.resignAppDateChange}
                        value={this.state.selectedResignAppDate}
                        timeFormat={false}
                        dateFormat="YYYY-MM-DD"
                        closeOnSelect
                        utc={true}
                        inputProps={{ placeholder: 'YYYY-MM-DD' }}
                      />
                    </td>
                    <td >
                    <Select
              id="managerReason"
              valueKey="id"
              labelKey="name"
              className="form-group form-group-select"
              options={this.props.managerReasons}
              onChange={this.handleManagerReason }
                value={this.state.selectedManagerReason}
              placeholder="Select"
            />
               {/* <b className="card-text text-danger">{this.props.validMgrReason }</b> */}
                    </td>
                    <td >
                    <Select
              id="reasonForResignment"
              valueKey="id"
              labelKey="name"
              className="form-group form-group-select"
               options={this.props.resignmentReasons}
               onChange={this.handleResonforResign }
                value={this.state.selectedReasonForResign}
              placeholder="Select"
            />
               {/* <b className="card-text text-danger">{props.validReasonFor }</b> */}
                    </td>
                  </tr>
                  </tbody>
                  <thead>
                  <tr>
                    <th >JobTitle When Resigned</th><th>Do you recommend for re-employment?</th><th>Signature</th>  {' '}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>
                  <Select
              id="jobTitleWhenResigned"
              valueKey="id"
              labelKey="name"
              className="form-group form-group-select"
              options={this.props.allJobTitles}
              onChange={this.handleJobTitle }
              value={this.state.selectedJobTitle}
              placeholder="JobTitleWhenResigned"
            />
               {/* <b className="card-text text-danger">{props.validJobTitleWhen }</b> */}
                    </td>
                    <td >
                    <Select
              id="recommend"
              valueKey="id"
              labelKey="name"
              className="form-group form-group-select"
               options={this.state.recommend}
               onChange={this.handleRecommend }
               value={this.state.selectedRecommend}
              placeholder="Select"
            />
                {<b className="card-text text-danger">{this.props.validRecommend}</b> } 
                    </td>
                    <td >
                    <Input
              name="signature" 
      
              // value={props.resignHistory.signature}
              onBlur={this.props.handleChange}
             
            />
               {/* <b className="card-text text-danger">{this.props.validSignature }</b> */}
                    </td>
                    </tr>
                    <tr>
                  <td colSpan="3">
                      {' '}
                      <Label for="resignComm">Comments</Label>
                      <Input
                        required
                        type="textarea"
                        maxLength="1000"
                        name="resignComm"
                        id="resignComm"
                        onBlur={this.props.handleChange}
                        rows={6}
                        aria-multiline="true"
                      />
                    </td>
                    </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => this.createResign()}
          >
            Ok
          </Button>{' '}
          <Button color="danger" onClick={this.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
}

function mapStateToProps(state) {
  return {
    allJobTitles: state.setting.setting.jobTitle
     
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//       confirmedDatesActions: bindActionCreators(confirmedDatesActions, dispatch),
//       employeeInfoActions: bindActionCreators(employeeInfoActions, dispatch),
//       abscenseActions: bindActionCreators(abscenseActions, dispatch),
//       destinationHistoryActions: bindActionCreators(destinationHistoryActions, dispatch),
//       historyActions: bindActionCreators(historyActions, dispatch),
//       applicationHistoryActions: bindActionCreators(applicationHistoryActions, dispatch),
//       abscenseHistoryActions: bindActionCreators(abscenseHistoryActions, dispatch)
//   }
// }
export default connect(
  mapStateToProps,
  //mapDispatchToProps
)(ResignStaff)
