import React, { Component } from 'react'
import AutoWords from '../../components/autoWords'
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
  Input,ButtonDropdown, UncontrolledDropdown,DropdownToggle, DropdownMenu, DropdownItem 

} from 'reactstrap'
//import Datetime from 'react-datetime'
import Select from 'react-select'

class SendMailUsingTemplate extends Component {
    constructor() {
     
        super();

        this.state = {
             dateModified: null,
             selectedNotification: null,
             selectedEmail: null,
             selectedContent: null,
             localValue:null,
             senderEmailArr : []
           
          
        };
    }
    
  async componentDidMount() {

const senderEmail= this.props.keywordslookup.filter(ap => ap.ids === 'SenderEmail')[0];
const senderEmailArr = senderEmail.keywordValues.split(',')



const senderEmailObjArr = senderEmailArr.map(s => ({
   ids: s,
   name: s
}))

        if (senderEmail !== undefined) {

       
         this.setState({ senderEmailArr: senderEmailObjArr })

        
          
       //}
      // const _this = this
      // return Promise.all([
      //   this.props.reportActions.getReport()
      //   ]).then(function() {
      //   _this.setState({ loaded: true })
      // })
        }
    }

    toggle = () => {
        this.setState({
          selectedNotification: null,
          selectedContent: null

        })

        this.props.toggle();
    }


    handleChange= (event) => {
      debugger;

      this.setState({localValue: event.target.value});
    }


    
    getSelection=(val)=>{



      var txtarea = document.getElementById("resignComm");
  
  
       debugger;
      var start = txtarea.selectionStart;
  
      var finish = txtarea.selectionEnd;
  
      var allText = txtarea.value;
  
      var sel = allText.substring(start, finish);
  
      var newText=allText.substring(0, start)+val+allText.substring(finish, allText.length);
  
  
      txtarea.value=newText;

      this.setState({localValue: newText});
  }

  emailChange = email => {
    debugger;
    const selectedEmail = email.ids ;
   

  
    this.setState({
      selectedEmail,
  
   
    })
}
    notificationChange = notification => {
        const selectedNotification = notification.templateName ;
        const selectedContent= notification  != null ? notification.content: null
        //const selectedContent= notification  != null ? notification.content.replace(/\r?\n/g, '<br />'): null

     
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
debugger;
        let model = {
        
            // staffID: position.mplid,
            dateModified: newdatemodified ,
             selectedNotification: this.state.selectedNotification,
             selectedEmail: this.state.selectedEmail,
             content: this.state.localValue ? this.state.localValue:this.state.selectedContent
           
        }
        debugger;
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
                            <Col sm="12" md="6" lg="6" xl="6">
                                <div className="form-group form-group-select">
                                    <label htmlFor="email">Select Sender Email</label>

                               <Select
                                       id="ids"
                                       valueKey="ids"
                                       labelKey="ids"
                                       options = {this.state.senderEmailArr}
                                        
                                        onChange={this.emailChange}
                                       value={this.state.selectedEmail}
                                        placeholder="Select"
                                        className="form-group form-group-select"
                                    />
                                </div>
                            </Col>

                            <Col sm="12" md="6" lg="6" xl="6">
                                <div className="form-group form-group-select">
                                <label htmlFor="destination">Select Template</label>
                               <Select
                                       id="templateName"
                                       valueKey="templateName"
                                       labelKey="templateName"
                                    
                                        options={this.props.notification}
                                        onChange={this.notificationChange}
                                      value={this.state.selectedNotification}
                                        placeholder="Select"
                                        className="form-group form-group-select"
                                    />
                                </div>
                            </Col>
                        </Row>
  {this.state.selectedNotification !== null ?
                            <Row>
                                <Col>  
                                <UncontrolledDropdown>
<DropdownToggle caret>
 Insert Auto-Word 
</DropdownToggle>
<DropdownMenu>  

<DropdownItem title="firstName" onClick={() => {this.getSelection('<FIRSTNAME>')}}>
         FirstName  </DropdownItem>
 
         <DropdownItem title="firstName" onClick={() => {this.getSelection('<LASTNAME>')}}>
         LastName  </DropdownItem>
 
         <DropdownItem title="firstName" onClick={() => {this.getSelection('<FORMNAME>')}}>
         FormName  </DropdownItem>

            <DropdownItem title="firstName" onClick={() => {this.getSelection('<NEXTDESTINATION>')}}>
         NextDestination  </DropdownItem>

            <DropdownItem title="firstName" onClick={() => {this.getSelection('<NEXTPOSITION>')}}>
         NextPosition </DropdownItem>

            <DropdownItem title="firstName" onClick={() => {this.getSelection('<PLACEMENTDATE>')}}>
         Placement Date </DropdownItem>

            <DropdownItem title="firstName" onClick={() => {this.getSelection('<LASTWORKDATE>')}}>
         Last Work Date </DropdownItem>

           <DropdownItem title="firstName" onClick={() => {this.getSelection('<CENTRALID>')}}>
         CentralID </DropdownItem>

           <DropdownItem title="firstName" onClick={() => {this.getSelection('<NATIONALITY>')}}>
         Nationality </DropdownItem>

          <DropdownItem title="firstName" onClick={() => {this.getSelection('<CURRENTPOSITION>')}}>
         Current Position</DropdownItem>

           <DropdownItem title="firstName" onClick={() => {this.getSelection('<CURRENTDESTINATION>')}}>
         Current Destination</DropdownItem>

         {/* <DropdownItem title="undo" onClick={() => {this.props.undoSelection('<UNDO>')}}>
         Undo Last Selection</DropdownItem> */}

</DropdownMenu> 

</UncontrolledDropdown>
                                
  
                                <Input
                        required
                        type="textarea"
                        maxLength="1000"
                        name="resignComm"
                        id="resignComm"
                        onChange={this.handleChange}
                        rows={20}
                        aria-multiline="true"
                        value={this.state.localValue}
                        defaultValue ={this.state.selectedContent} 
                      />
                               
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