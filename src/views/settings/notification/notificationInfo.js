
import React from 'react';
import { Card, CardBody, CardHeader, Col,Button } from 'reactstrap'
import TextInput from '../../../components/textInput'

const NotificationEdit = (props) => {
    let model = {
    
        // to the database
        TemplateType : props.notification.templateType,
         TemplateName: props.notification.templateName,
         Language: props.notification.language,
         Subject: props.notification.subject,
         Content: props.notification.content,
         Description: props.notification.description
         
      }
   
    return (
     
        <Card>
            <CardHeader>Mail Templates    </CardHeader>
        
            <CardBody className="no-padding-bottom">
                <div className="form-row">

                          <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="subject" label="Subject"  value={props.notification.subject}  />
                    </Col> 
                <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="templateName" label="Template name"  value={props.notification.templateName}  />
                    </Col>
                          <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="templateType" label="Template type"  value={props.notification.templateType} onChange={props.handleInputField} />
                    </Col>

              

                          <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="language" label="Language"  value={props.notification.language}  />
                    </Col>

                 

                             <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="description" label="Description"  value={props.notification.description}  />
                    </Col>

              <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <textarea rows="8" cols="100" name="content" label="Content"  value={props.notification.content}  />
                    </Col>
                         
                </div>

                <div className="col-btn-menu" >
                <Button onClick={() => { window.close() }} color="primary">New Template</Button>
<Button onClick={() => { window.close() }} color="danger">Close</Button>

           
               
                <Button color="success" onClick={() => { props.save(model) }}>Save</Button>
                  
       
                </div>
            <p></p>
            </CardBody>
        </Card>
    );
};

export default NotificationEdit