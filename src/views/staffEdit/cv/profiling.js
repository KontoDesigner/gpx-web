import React from 'react';
import { Card, CardBody,CardFooter, CardHeader } from 'reactstrap'
import TextInput from '../../../components/textInput'
import Select from 'react-select'
import { colourOptions } from './docs/data';
import Datetime from 'react-datetime'
import { Row, Col,  Label, Input,Button } from 'reactstrap'

const Profiling = (props) => {
    return (
        <Card>
            <CardHeader>Profiling</CardHeader>

            <CardBody className="no-padding-bottom">
            <div className="form-row">
         
      <Col sm="12" md="12" lg="12" xl="12" className="form-group form-group-select">
                        <label htmlFor="childCare">If applicable to your job role. Indicate what type of guest you are suitable to work with</label>

                        <Select 
                            id="suitable"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.suitable}
                            onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
                            value={props.staff.resignmentReasons === '' ? null : props.staff.resignmentReasons}
                            placeholder="Select"
                           
                            
                        />
                    </Col>

           <Col sm="12" md="12" lg="12" xl="12" className="form-group form-group-select">
                        <label htmlFor="childCare">I am interested and happy to work in following international concepts</label>

                        <Select 
                            id="international"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.international}
                            onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
                            value={props.staff.resignmentReasons === '' ? null : props.staff.resignmentReasons}
                            placeholder="Select"
                           
                            
                        />
                    </Col>

  <Col sm="12" md="12" lg="12" xl="12" className="form-group form-group-select">
                        <label htmlFor="childCare">I am interested and happy to work in following national concepts</label>

                        <Select 
                            id="national"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.national}
                            onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
                            value={props.staff.resignmentReasons === '' ? null : props.staff.resignmentReasons}
                            placeholder="Select"
                           
                            
                        />
                    </Col>

                </div>
            </CardBody>
        
        </Card>
    );
};

export default Profiling

