import React from 'react'
import { Button,Modal,ModalHeader, ModalBody, ModalFooter,Alert,Row,Col,Table,Label,Input} from 'reactstrap'
import Datetime from 'react-datetime'
import Select from 'react-select'


const AbsentStaff = props => {
 
  function absentStaff(staffID) {
    props.absentStaff(staffID)

    props.toggle()
  }

  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>
          Leave of abscense has been approved for selected staff{' '}
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th>Absent StartDate</th> <th> Absent EndDate</th>{' '}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Datetime
                        className={'custom-datepicker'}
                        // value={this.props.staff.dateOfBirth}
                        //onChange={(v) => { this.props.handleStaffDatePicker('dateOfBirth', v) }}
                        timeFormat={false}
                        dateFormat="YYYY-MM-DD"
                        closeOnSelect
                        utc={true}
                        inputProps={{ placeholder: 'YYYY-MM-DD' }}
                      />
                    </td>
                    <td>
                      <Datetime
                        className={'custom-datepicker'}
                        // value={this.props.staff.dateOfBirth}
                        //onChange={(v) => { this.props.handleStaffDatePicker('dateOfBirth', v) }}
                        timeFormat={false}
                        dateFormat="YYYY-MM-DD"
                        closeOnSelect
                        utc={true}
                        inputProps={{ placeholder: 'YYYY-MM-DD' }}
                      />
                    </td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th colSpan="2">Absent reason</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2">
                    <select value={props.value} onChange={props.handleChange}  className="form-control"  >
                    <option value="" disabled selected>Select</option>
            <option value="Studies">Studies</option>
            <option value="Parental Leave">Parental Leave</option>
            <option value="Other Please Specify">Other Please Specify</option>
           
          </select>
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
                        onBlur={props.handleChange}
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
            onClick={() => absentStaff(props.staff.StaffID)}
          >
            Ok
          </Button>{' '}
          <Button color="danger" onClick={props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default AbsentStaff
