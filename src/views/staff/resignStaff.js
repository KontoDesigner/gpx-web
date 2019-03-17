import React, { Component } from 'react'
import { Button,Modal,ModalHeader, ModalBody, ModalFooter,Alert,Row,Col,Table,Label,Input} from 'reactstrap'
import Datetime from 'react-datetime'
import Select from 'react-select'
import TextInput from '../../components/textInput'
class ResignStaff extends Component {

//const ResignStaff = props => {
  constructor() {
    super();

    this.state = {
      selectedResignAppDate:null
    };
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
              // options={props.managerReasons}
              onChange={v => {
                this.props.handleSelectTypes('managerReason', v, 'id')
              }}
              // value={
              //   this.props.resignHistory.managerReason === ''
              //     ? null
              //     : this.props.resignHistory.managerReason
              // }
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
              // options={props.resignmentReasons}
              onChange={v => {
                this.props.handleSelectTypes('reasonForResignment', v, 'id')
              }}
              // value={
              //   props.resignHistory.reasonForResignment === ''
              //     ? null
              //     : props.resignHistory.reasonForResignment
              // }
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
              // options={props.allJobTitles}
              onChange={v => {
                this.props.handleSelectTypes('jobTitleWhenResigned', v, 'id')
              }}
              // value={
              //   props.resignHistory.jobTitleWhenResigned === ''
              //     ? null
              //     : props.resignHistory.jobTitleWhenResigned
              // }
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
              // options={props.recommend}
              onChange={v => {
                this.props.handleSelectTypes('recommend', v, 'id')
              }}
              // value={
              //   props.resignHistory.recommend === ''
              //     ? null
              //     : props.resignHistory.recommend
              // }
              placeholder="Select"
            />
                {<b className="card-text text-danger">{this.props.validRecommend}</b> } 
                    </td>
                    <td >
                    <Input
              name="signature" 
      
              // value={props.resignHistory.signature}
              onChange={this.props.handleStaffField}
             
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


export default ResignStaff
