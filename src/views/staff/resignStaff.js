import React from 'react'
import { Button,Modal,ModalHeader, ModalBody, ModalFooter,Alert,Row,Col,Table,Label,Input} from 'reactstrap'
import Datetime from 'react-datetime'
import Select from 'react-select'


const ResignStaff = props => {
 
  function resignStaff(staffID) {
    props.resignStaff(staffID)

    props.toggle()
  }

  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>
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
              </Table>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => resignStaff(props.staff.StaffID)}
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

export default ResignStaff
