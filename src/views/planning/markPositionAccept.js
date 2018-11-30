import React, { Component } from 'react'
import { Button,Modal,ModalHeader, ModalBody, ModalFooter,Alert,Row,Col,Table,Label,Input} from 'reactstrap'
import Datetime from 'react-datetime'
import Select from 'react-select'

class MarkPositionAccept extends Component {

//const ResignStaff = props => {
  constructor() {
    super();

    // this.state = {
    //   selectedResignAppDate:null
    // };
}

createAccept = (val) => {
       
  this.toggle();

  var currentdate = new Date(); 
  var newdatemodified  = currentdate.getFullYear() + "-"
+ (currentdate.getMonth()+1)  + "-" 
 + currentdate.getDate() ; 

  let model = {

      dateModified: newdatemodified ,
      mplid:this.props.selectedTitle[0]

  }

 this.props.createAccept(model);
}


toggle = () => {
  //this.setState({
    //selectedResignAppDate:null,

  //})

  this.props.toggle();
}


  render() {
  return (
    <div>
      <Modal isOpen={this.props.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>
          Mark Position Accept - {this.props.selectedTitle}
        </ModalHeader>
        <ModalBody>
                    <Alert color="success">
                    Are you sure you want to mark the assigned position as accepted?<br></br> This action will also create a flight request in the CTX system.
                 
                    </Alert>
                </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => this.createAccept()}
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
export default MarkPositionAccept
