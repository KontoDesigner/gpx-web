import React, { Component } from 'react'
import { Button,Modal,ModalHeader, ModalBody, ModalFooter,Alert,Row,Col,Table,Label,Input} from 'reactstrap'
import Datetime from 'react-datetime'
import Select from 'react-select'

class MarkPositionDecline extends Component {

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
          Mark Position Declined{' '}
        </ModalHeader>
        <ModalBody>
                    <Alert color="danger">
                        Are you sure you want to mark position as declined? 
                    </Alert>
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


export default MarkPositionDecline
