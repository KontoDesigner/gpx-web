import React, { Component } from 'react'
import { Button,Modal,ModalHeader, ModalBody, ModalFooter,Alert,Row,Col,Table,Label,Input} from 'reactstrap'
import Datetime from 'react-datetime'
import Select from 'react-select'

class ResignStaff extends Component {

//const ResignStaff = props => {
  constructor() {
    super();

    this.state = {
      selectedResignAppDate:null
    };
}

createResign = (val) => {
       
  //this.toggle();

 // const destination = this.props.availablePositions.filter(ap => ap.destination === this.state.selectedDestination)[0];
 // const position = destination.jobTitles.filter(ap => ap.mplid === mplid)[0];

  let model = {
      // staffID: position.mplid,
      staffs: this.props.selectedStaffs ,
       startDate: this.state.selectedResignAppDate,
      // startDate: this.state.selectedAbsentStart,
      //  endDate: this.state.selectedAbsentEnd
  }
debugger;
 this.props.createResign(model);
}


resignAppDateChange = appDate => {
  const selectedResignAppDate = appDate ;
debugger;
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
                    <th colSpan="2">Last Working Date</th> {' '}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2">
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
                    
                  </tr>
                  <tr>
                  <td colSpan="2">
                      {' '}
                      <Label for="reason">Comments</Label>
                      <Input
                        required
                        type="textarea"
                        maxLength="1000"
                        name="reason"
                        id="reason"
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
