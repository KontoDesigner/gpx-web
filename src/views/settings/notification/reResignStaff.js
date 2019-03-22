import React, { Component } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
  Row,
  Col,
  Table,
  Label,
  Input
} from 'reactstrap'
import Datetime from 'react-datetime'
import Select from 'react-select'
import moment from 'moment'
class ReResignStaff extends Component {
  //const ResignStaff = props => {
  constructor(props) {
    super(props)
this.dates=[]
    debugger
    this.state = {
      //dates:[],
      selectedCandidate: null,
      placementDynamicPeriods: []
    }
  }

 removeTemplate = val => {
    debugger;
    this.toggle()

    var currentdate = new Date()

    var newdatemodified=moment(currentdate).format("YYYY-MM-DD HH:mm:ss")

    let model = {
      dateModified: newdatemodified,
      templateName: this.props.templateName,
     
      oldDate:newdatemodified
    }
debugger;
    this.props.removeTemplate(model)
  }

  

  

  toggle = () => {


    this.props.toggle()
  }

  render() {
    

      
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Remove Template - {this.props.templateName + " "}   
          </ModalHeader>
          <ModalBody>
            { <Alert color="danger">
                        Are you sure you want to Remove Template  {this.props.templateName + " "}   ? 
                    </Alert> }

            {/* <Row>
           
            </Row> */} 
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={() => this.removeTemplate()}>
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

export default ReResignStaff
