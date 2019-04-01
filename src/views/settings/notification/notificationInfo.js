import React from 'react'
import { Card, CardBody, CardHeader, Col, Button } from 'reactstrap'
import { Row, Form, FormGroup, Label, Input } from 'reactstrap'
import TextInput from '../../../components/textInput'
import Select from 'react-select'
import { ButtonDropdown, UncontrolledDropdown,DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
       
               <DropdownItem title="firstName" onClick={() => {props.getSelection('<FORMNAME>')}}>
               FormName  </DropdownItem>

                  <DropdownItem title="firstName" onClick={() => {props.getSelection('<NEXTDESTINATION>')}}>
               NextDestination  </DropdownItem>

                  <DropdownItem title="firstName" onClick={() => {props.getSelection('<NEXTPOSITION>')}}>
               NextPosition </DropdownItem>

                  <DropdownItem title="firstName" onClick={() => {props.getSelection('<PLACEMENTDATE>')}}>
               Placement Date </DropdownItem>

                  <DropdownItem title="firstName" onClick={() => {props.getSelection('<LASTWORKDATE>')}}>
               Last Work Date </DropdownItem>

                 <DropdownItem title="firstName" onClick={() => {props.getSelection('<CENTRALID>')}}>
               CentralID </DropdownItem>

                 <DropdownItem title="firstName" onClick={() => {props.getSelection('<NATIONALITY>')}}>
               Nationality </DropdownItem>

                <DropdownItem title="firstName" onClick={() => {props.getSelection('<CURRENTPOSITION>')}}>
               Current Position</DropdownItem>

                 <DropdownItem title="firstName" onClick={() => {props.getSelection('<CURRENTDESTINATION>')}}>
               Current Destination</DropdownItem>

               {/* <DropdownItem title="undo" onClick={() => {props.undoSelection('<UNDO>')}}>
               Undo Last Selection</DropdownItem> */}
      
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
