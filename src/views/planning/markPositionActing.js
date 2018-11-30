import React, { Component } from 'react'
import { Button,Modal,ModalHeader, ModalBody, ModalFooter,Alert,Row,Col,Table,Label,Input} from 'reactstrap'
import Datetime from 'react-datetime'
import Select from 'react-select'

class MarkPositionActing extends Component {

//const ResignStaff = props => {
  constructor() {
    super();

    // this.state = {
    //   selectedResignAppDate:null
    // };
}

createActing = (val) => {
       
  this.toggle();

  var currentdate = new Date(); 
  var newdatemodified  = currentdate.getFullYear() + "-"
+ (currentdate.getMonth()+1)  + "-" 
 + currentdate.getDate() ; 

  let model = {
    dateModified: newdatemodified ,
    mplid:this.props.selectedTitle[0]
  }
debugger;
 this.props.createActing(model);
}




toggle = () => {
  // this.setState({
  //   selectedResignAppDate:null,

  // })

   this.props.toggle();
}

  render() {
  return (
    <div>
      <Modal isOpen={this.props.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>
          Mark Position as Acting - {this.props.selectedTitle}
        </ModalHeader>
        <ModalBody>
                    <Alert color="primary">
                        Are you sure you want to mark position as acting? 
                    </Alert>
                </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => this.createActing()}
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


export default MarkPositionActing
