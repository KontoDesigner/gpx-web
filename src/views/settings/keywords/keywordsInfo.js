import React from 'react'
import { Card, CardBody, CardHeader, Col, Button } from 'reactstrap'
import { Row, Form, FormGroup, Label, Input } from 'reactstrap'
import TextInput from '../../../components/textInput'
import Select from 'react-select'
const KeywordsEdit = props => {
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

      <CardHeader>{props.keywords.keywordName?props.keywords.keywordName:"New Keyword"} </CardHeader>

      <CardBody className="no-padding-bottom">
        <div className="form-row">

          <Col sm="12" md="6" lg="6" xl="4" className="form-group">
            <TextInput
              name="keywordname"
              label="Type"
              value={props.keywords.keywordName}
              onChange={props.handleInputField}
            />
          </Col>
          <Col sm="12" md="6" lg="6" xl="4" className="form-group">

                 <TextInput
              name="keywordValues"
              label="Type"
              value={props.keywords.keywordValues}
              onChange={props.handleInputField}
            />
          {/* <label htmlFor="keywordValues">Values</label>

<Select
    id="keywordValues"
    valueKey="keywordValues"
    labelKey="keywordValues"
    className="form-control"
    // options={props.keywordValues} 
    onChange={props.handleInputField}
    // value={props.selectedDestination}
    placeholder="Select"
/>  */}
          </Col>
      

          <Col sm="12" md="12" lg="12" xl="12" className="form-group">
            <Label for="keywordComment">Comment</Label>
            <Input
              required
              type="textarea"
              //maxLength="1000"
              name="content"
              id="content"
              rows={16}
              value={props.keywords.keywordComment}
            
              onChange={props.handleInputField}
              aria-multiline="true"
            />
          </Col>
        </div>

        <div className="col-btn-menu">
          {/* <Button
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
            Save
          </Button>
        </div>
        <p />
      </CardBody>
    </Card>
  )
}

export default KeywordsEdit
