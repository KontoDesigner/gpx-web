import React from 'react';
import { Card, CardBody,CardFooter, CardHeader } from 'reactstrap'
import TextInput from '../../../components/textInput'
import Select from 'react-select'
import Datetime from 'react-datetime'
import { Row, Col,  Label, Input,Button } from 'reactstrap'

const Education = (props) => {
    return (
        <Card>
            <CardHeader>Education</CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row">
    
                <Col sm="12" md="6" lg="4" xl="4" className="form-group">
             
             <TextInput name="education" label="Education"  value={props.staff.resignmentReasons}/>
         </Col>

         <Col sm="12" md="6" lg="4" xl="4" className="form-group form-group-select">
                        <label htmlFor="reasonForResignment">Childcare Level</label>

                        <Select 
                            id="reasonForResignment"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.resignmentReasons}
                            onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
                            value={props.staff.resignmentReasons === '' ? null : props.staff.resignmentReasons}
                            placeholder="ReasonForResignment"
                           
                            
                        />
                    </Col>

                    <Col sm="12" md="6" lg="12" xl="4" className="form-group">
                        {/* <TextInput name="title" label="Title" value={props.staff.title} onChange={props.handleStaffField} /> */}
                        <Label for='comment'>Comments</Label>
                <Input required type='textarea' maxLength='1000' name='comment' id='comment' rows={6}  aria-multiline='true'/>
                    </Col>
                    
                  
                </div>
            </CardBody>
        
        </Card>
    );
};

export default Education