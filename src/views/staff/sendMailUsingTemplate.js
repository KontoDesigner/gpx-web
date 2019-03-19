import React, { Component } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
 // Alert,
  Row,
  Col,
  Table,
  //Label,
  Input
} from 'reactstrap'
//import Datetime from 'react-datetime'
import Select from 'react-select'

class SendMailUsingTemplate extends Component {
    constructor() {
        super();

        this.state = {
             dateModified: null,
             selectedNotification: null,
             selectedContent: null
          
        };
    }

    toggle = () => {
        this.setState({
          selectedNotification: null,
          selectedContent: null

        })

        this.props.toggle();
    }




    notificationChange = notification => {
        const selectedNotification = notification.templateName ;
        const selectedContent= notification  != null ? notification.content.replace(/\r?\n/g, '<br />'): null


     
        //   var currentdate = new Date(); 
        //   var newdatemodified  = currentdate.getFullYear() + "-"
        // + (currentdate.getMonth()+1)  + "-" 
        //  + currentdate.getDate() ; 
      
        this.setState({
          selectedNotification,
          selectedContent
            //dateModified:newdatemodified
       
        })
    }


    createMail = (val) => {
       
        this.toggle();

       // const destination = this.props.availablePositions.filter(ap => ap.destination === this.state.selectedDestination)[0];
       // const position = destination.jobTitles.filter(ap => ap.mplid === mplid)[0];
       
       var currentdate = new Date(); 
       var newdatemodified  = currentdate.getFullYear() + "-"
     + (currentdate.getMonth()+1)  + "-" 
      + currentdate.getDate() ; 

        let model = {
            // staffID: position.mplid,
            dateModified: newdatemodified ,
             selectedNotification: this.state.selectedNotification,
           
        }

       this.props.createMail(model);
    }
    


    render() {
  return (
    <div>
      <Modal isOpen={this.props.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>
          Send Mail Using Template{' '}
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <Table striped bordered responsive>
             
                <thead>
                  <tr>
                    <th colSpan="2">Select Template</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2" height="150"> 

                        <Select
                                       id="templateName"
                                       valueKey="templateName"
                                       labelKey="templateName"
                                        className="form-control"
                                        options={this.props.notification}
                                        onChange={this.notificationChange}
                                       value={this.state.selectedNotification}
                                        placeholder="Select"
                                        className="form-group form-group-select"
                                    />

                    {/* <select value={this.props.value} onChange={this.props.handleChange}  className="form-control"  >
                    <option value="" disabled selected>Select your option</option>
            <option value="Studies">Studies</option>
            <option value="Parental Leave">Parental Leave</option>
            <option value="Other Please Specify">Other Please Specify</option>
           
          </select> */}
                    </td>
              
                  </tr>




                  
                </tbody>
              </Table>



            </Col>
          </Row>
  {this.state.selectedNotification !== null ?
                            <Row>
                                <Col>
                                <Input
                        required
                        type="textarea"
                        maxLength="1000"
                        name="resignComm"
                        id="resignComm"
                        onChange={this.props.handleChange}
                        rows={20}
                        aria-multiline="true"
                        value={this.state.selectedContent}
                      />
                                {/* {this.state.selectedContent} */}
                                    {/* <Table striped bordered responsive>
                                        <thead>
                                            <tr>
                                                <th>{this.state.selectedEndDate} </th>
                                                <th></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                              </tbody>
                                              </Table> */}
</Col>
</Row>
            : ''}
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => this.createMail()}
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

export default SendMailUsingTemplate
