import React from 'react'
import { Card, CardBody, CardHeader, Col, Button } from 'reactstrap'
import { Row, Form, FormGroup, Label, Input } from 'reactstrap'
import TextInput from '../../../components/textInput'
import Select from 'react-select'
import CreatableSelect from 'react-select/lib/Creatable';
const KeywordsInfo = props => {

  let model = {
  
    // to the database
   id: props.keywords.id,
  KeywordName: props.selectedKeyName ? props.selectedKeyName:null,
   //  KeywordValues: props.keywords.keywordValues,
     KeywordValues: props.value ? props.value : null,
     KeywordComment: props.keywords.keywordComment,
     
  }

  return (

    <Card>

      <CardHeader>{props.keywords.keywordName?props.keywords.keywordName:"New Keyword"} </CardHeader>

      <CardBody className="no-padding-bottom">
        <div className="form-row">

          <Col sm="12" md="6" lg="6" xl="4" className="form-group">
          <label htmlFor="keywordName">Types</label>
          <Select
         
                         id="keywordName"
                         valueKey="name"
                          labelKey="id"
                          className="form-control"
                         
                          options={props.keywordTypes}
                           onChange={props.actionChange}
                           value={props.selectedKeyName}
                          
                          placeholder="Select"
                          className="form-group form-group-select"
                        />
                          <b className="card-text text-danger">{props.validKeywordName}</b>
          </Col>
          <Col sm="12" md="6" lg="6" xl="4" className="form-group">


          <label htmlFor="keywordValues">Values</label>
          <Select.Creatable
                          
                         id="keywordValues"
                         valueKey="name"
                          labelKey="id"
                          className="form-control"
                         
                        // options={props.keywordTypes}
                         onChange={props.handleChange}
                      //     onChange={v => {
                      //      props.handleKeyValuesMultiSelect('keywordValues', v)
                      //  }}
                           //value={props.value}

         
                        value={props.value === '' ? null : props.value}
                           multi={true}
                          placeholder="Select"
                          className="form-group form-group-select"
                        />
                 {/* <TextInput
              name="keywordValues"
              label="Value"
              value={props.keywords.keywordValues}
              onChange={props.handleInputField}
            /> */}
            <b className="card-text text-danger">{props.validKeywordValues}</b>
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
              name="keywordComment"
              id="keywordComment"
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
            Save & Close
          </Button>
        </div>
        <p />
      </CardBody>
    </Card>
  )
}

export default KeywordsInfo
