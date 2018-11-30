import React, { Component } from 'react'
import { Button,Modal,ModalHeader, ModalBody, ModalFooter,Alert,Row,Col,Table,Label,Input} from 'reactstrap'
import Datetime from 'react-datetime'
import Select from 'react-select'

class MakePositionVacant extends Component {

//const ResignStaff = props => {
  constructor() {
    super();

    // this.state = {
    //   selectedResignAppDate:null
    // };
}

createVacant = (val) => {
       
  this.toggle();

  var currentdate = new Date(); 
  var newdatemodified  = currentdate.getFullYear() + "-"
+ (currentdate.getMonth()+1)  + "-" 
 + currentdate.getDate() ; 

  let model = {

      dateModified: newdatemodified ,
      mplid:this.props.selectedTitle[0]

  }

 this.props.createVacant(model);
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
          Make Position Vacant - {this.props.selectedTitle}
        </ModalHeader>
        <ModalBody>
                    <Alert color="danger">
                        Are you sure you want to make position vacant? 
                    </Alert>
                </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => this.createVacant()}
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


export default MakePositionVacant
