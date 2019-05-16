import React from 'react'
import { Card, CardBody, CardHeader, Col, Button } from 'reactstrap'
import { Row, Form, FormGroup, Label, Input } from 'reactstrap'
import TextInput from '../../../components/textInput'
import Select from 'react-select'
import { ButtonDropdown, UncontrolledDropdown,DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import AutoWords from '../../../components/autoWords'
//import {Editor, EditorState} from 'draft-js';


const NotificationInfo = props => {
  let model = {
    // to the database
    TemplateType: props.notification.templateType,
    TemplateName: props.notification.templateName,
    Language: props.notification.language,
    Subject: props.notification.subject,
    Content: props.notification.content,
    Description: props.notification.description
  }





  return (


  
    <Card>

      <CardHeader>{props.notification.subject?props.notification.subject:"New Notification Template"} </CardHeader>

      <CardBody className="no-padding-bottom">
        <div className="form-row">

          <Col sm="12" md="6" lg="6" xl="4" className="form-group">


            <TextInput
              name="subject"
              id="subject"
              label="Subject"
              value={props.notification.subject}
              onChange={props.handleInputField}
            />
        
          </Col>
          <Col sm="12" md="6" lg="6" xl="4" className="form-group">
            <TextInput
              name="templateName"
              label="Template name"
              value={props.notification.templateName}
              onChange={props.handleInputField}
            />
          </Col>
          <Col sm="12" md="6" lg="6" xl="4" className="form-group">
            <TextInput
              name="templateType"
              label="Template type"
              value={props.notification.templateType}
              onChange={props.handleInputField}
            />
          </Col>

          <Col sm="12" md="6" lg="6" xl="4" className="form-group">
            <TextInput
     
              name="language"
              label="Language"
              value={props.languages}
              onChange={props.handleInputField}
              //placeholder={props.languages}
              disabled
            />
          </Col>


        
          <Col sm="12" md="6" lg="6" xl="4" className="form-group">
            <TextInput
              name="description"
              label="Description"
              value={props.notification.description}
              onChange={props.handleInputField}
            />
          </Col>
          {/* <Col sm="12" md="6" lg="6" xl="4" className="form-group">
          <label htmlFor="autoWord">Insert Auto-Word</label>
          <Select
        
                         id="autoWord"
                         valueKey="name"
                          labelKey="id"
                          className="form-control"
                         
                          options={props.autoWords}
                          onChange={props.actionChange}
                           value={props.selectedNotification}
                          
                          placeholder="Select"
                          className="form-group form-group-select"
                        />
                        </Col> */}
                      
          <Col sm="12" md="12" lg="12" xl="12" className="form-group">
            <Label for="content"> </Label>
            
            <UncontrolledDropdown>
<DropdownToggle caret>
 Insert Auto-Word 
</DropdownToggle>
<DropdownMenu>  

<DropdownItem title="firstName" onClick={() => {props.getSelection('<FIRSTNAME>')}}> 
         FirstName  </DropdownItem>
 
         <DropdownItem title="firstName" onClick={() => {props.getSelection('<LASTNAME>')}}>
         LastName  </DropdownItem>
 
        

            <DropdownItem title="firstName" onClick={() => {props.getSelection('<CENTRALID>')}}>
         CentralID  </DropdownItem>

            <DropdownItem title="firstName" onClick={() => {props.getSelection('<MPLID1>')}}>
         MPLID </DropdownItem>

            <DropdownItem title="firstName" onClick={() => {props.getSelection('<DESTINATION1>')}}>
        Destination 1 </DropdownItem>

            <DropdownItem title="firstName" onClick={() => {props.getSelection('<RESORT1>')}}>
         Resort 1 </DropdownItem>

           <DropdownItem title="firstName" onClick={() => {props.getSelection('<JOBTITLE1>')}}>
         JobTitle 1 </DropdownItem>

           <DropdownItem title="firstName" onClick={() => {props.getSelection('<ASSIGNSTARTDATE1>')}}>
         AssignStartDate 1 </DropdownItem>

          <DropdownItem title="firstName" onClick={() => {props.getSelection('<ASSIGNENDDATE1>')}}>
          AssignEndDate 1</DropdownItem>

           <DropdownItem title="firstName" onClick={() => {props.getSelection('<MPLID2>')}}>
         MPLID 2</DropdownItem>

            <DropdownItem title="firstName" onClick={() => {props.getSelection('<DESTINATION2>')}}>
        Destination 2 </DropdownItem>

            <DropdownItem title="firstName" onClick={() => {props.getSelection('<RESORT2>')}}>
         Resort 2 </DropdownItem>

           <DropdownItem title="firstName" onClick={() => {props.getSelection('<JOBTITLE2>')}}>
         JobTitle 2 </DropdownItem>

           <DropdownItem title="firstName" onClick={() => {props.getSelection('<ASSIGNSTARTDATE2>')}}>
         AssignStartDate 2 </DropdownItem>

          <DropdownItem title="firstName" onClick={() => {props.getSelection('<ASSIGNENDDATE2>')}}>
          AssignEndDate 2</DropdownItem>
          <DropdownItem title="firstName" onClick={() => {props.getSelection('<MPLID3>')}}>
         MPLID 3 </DropdownItem>

            <DropdownItem title="firstName" onClick={() => {props.getSelection('<DESTINATION3>')}}>
        Destination 3 </DropdownItem>

            <DropdownItem title="firstName" onClick={() => {props.getSelection('<RESORT3>')}}>
         Resort 3 </DropdownItem>

           <DropdownItem title="firstName" onClick={() => {props.getSelection('<JOBTITLE3>')}}>
         JobTitle 3 </DropdownItem>
 
           <DropdownItem title="firstName" onClick={() => {props.getSelection('<ASSIGNSTARTDATE3>')}}>
         AssignStartDate 3 </DropdownItem>

          <DropdownItem title="firstName" onClick={() => {props.getSelection('<ASSIGNENDDATE3>')}}>
          AssignEndDate 3</DropdownItem>
         {/* <DropdownItem title="firstName" onClick={() => {props.getSelection('<LASTWORKINGDATE>')}}>
         Last WorkingDate</DropdownItem>
         <DropdownItem title="firstName" onClick={() => {props.getSelection('<LOAREASON>')}}> 
         LOA Reason</DropdownItem>
         <DropdownItem title="firstName" onClick={() => {props.getSelection('<LOASTARTDATE>')}}> 
         LOA StartDate</DropdownItem>
         <DropdownItem title="firstName" onClick={() => {props.getSelection('<LOAENDATE>')}}> 
         LOA EndDate</DropdownItem>  */}

</DropdownMenu> 

</UncontrolledDropdown>

            <Input
              required
              type="textarea"
              //maxLength="1000"
              name="content"
              id="content"
              rows={16}
              value={props.notification.content}
            
              onChange={props.handleInputField}
              aria-multiline="true"
            />
          </Col>
        </div>
       
        <div className="col-btn-menu">
          {/* <Buttoning
            onClick={() => {
              window.close()
            }}
            color="primary"
          >
            New Template
          </Button> */}
          <Button
            onClick={() => {
              window.close()
            }}
            color="danger"
          >
            Close
          </Button>

          <Button
            color="success"
            onClick={() => {
              props.save(model)
            }}
          >
            Save & Close
          </Button>

     

          
        </div>
        <p />
      </CardBody>
    </Card>
  )
}

export default NotificationInfo
