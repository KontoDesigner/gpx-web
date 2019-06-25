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
    
                <Col sm="12" md="12" lg="12" xl="12" className="form-group">

                <Label for='education'>Education</Label>
                <Input required type='textarea' className="form-control" maxLength='1000' name='education' id='education' rows={6} value={props.staff.education} onChange={props.handleStaffField} aria-multiline='true'/>
{/*                    
                   
             
             <TextInput name="education" label="Education"  value={props.staff.education} onChange={props.handleStaffField}/> */}
         </Col>

          <Col sm="12" md="6" lg="6" xl="6" className="form-group form-group-select">
                        <label htmlFor="childCare">Childcare Level</label>

                        <Select 
                           id="childCare"
                           valueKey="id"
                           labelKey="name"
                           className="form-control"
                           options={props.childCareLevelArr}
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

           
              
                </div>
            </CardBody>
        
        </Card>
    );
};

export default Education