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
    
                <Col sm="12" md="6" lg="6" xl="6" className="form-group">
             
             <TextInput name="education" label="Education"  value={props.staff.education} onChange={props.handleStaffField}/>
         </Col>

         <Col sm="12" md="6" lg="6" xl="6" className="form-group form-group-select">
                        <label htmlFor="childCare">Childcare Level</label>

                        <Select 
                           id="childCare"
                           valueKey="id"
                           labelKey="name"
                           className="form-control"
                           options={props.childCareLevels}
                           onChange={(v) => { props.handleStaffSelect('childCare', v, 'id') }}
                           value={props.staff.childCare === '' ? null : props.staff.childCare}
                           placeholder="Select"


                        //    id="childCare"
                            
                        //    valueKey="id"
                        //    labelKey="name"
                        //    className="form-control"
                        //    options={props.childCareLevels}
                        //    onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
                        //    value={props.staff.resignmentReasons === '' ? null : props.staff.resignmentReasons}
                        //    placeholder="childCare"

                           
                            
                        />
                    </Col>

                    <Col sm="12" md="12" lg="12" xl="12" className="form-group">
                        {/* <TextInput name="title" label="Title" value={props.staff.title} onChange={props.handleStaffField} /> */}
                        <Label for='comment'>Comments</Label>
                <Input required type='textarea' className="form-control" vv maxLength='1000' name='comment' id='comment' rows={6}  aria-multiline='true'/>
                    </Col>
              
                </div>
            </CardBody>
        
        </Card>
    );
};

export default Education