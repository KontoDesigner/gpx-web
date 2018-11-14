import React from 'react';
import { Card, CardBody,CardFooter, CardHeader } from 'reactstrap'
import TextInput from '../../../components/textInput'
import Select from 'react-select'
import Datetime from 'react-datetime'
import { Row, Col,  Label, Input,Button } from 'reactstrap'

const CvInformation = (props) => {
    return (
        <Card>
            <CardHeader>Languages</CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row">
    
                <Col sm="12" md="12" lg="12" xl="12" className="form-group">
             
             <TextInput name="language" label="Language(s) (not in list below)"  value={props.staff.resignmentReasons}/>
         </Col>

         <Col sm="12" md="6" lg="6" xl="6" className="form-group form-group-select">
                        <label htmlFor="arabic">Arabic</label>

                        <Select 
                            id="arabic"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.languages}
                            onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
                            value={props.staff.resignmentReasons === '' ? null : props.staff.resignmentReasons}
                            placeholder="Select"
                           
                            
                        />
                    </Col>

                           <Col sm="12" md="6" lg="6" xl="6" className="form-group form-group-select">
                        <label htmlFor="danish">Danish</label>

                        <Select 
                            id="danish"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.languages}
                            onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
                            value={props.staff.resignmentReasons === '' ? null : props.staff.resignmentReasons}
                            placeholder="Select"
                           
                            
                        />
                    </Col>

                           <Col sm="12" md="6" lg="6" xl="6" className="form-group form-group-select">
                        <label htmlFor="arabic">Dutch</label>

                        <Select 
                            id="dutch"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.languages}
                            onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
                            value={props.staff.resignmentReasons === '' ? null : props.staff.resignmentReasons}
                            placeholder="Select"
                           
                            
                        />
                    </Col>

                           <Col sm="12" md="6" lg="6" xl="6" className="form-group form-group-select">
                        <label htmlFor="english">English</label>

                        <Select 
                            id="english"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.languages}
                            onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
                            value={props.staff.resignmentReasons === '' ? null : props.staff.resignmentReasons}
                            placeholder="Select"
                           
                            
                        />
                    </Col>

                           <Col sm="12" md="6" lg="6" xl="6" className="form-group form-group-select">
                        <label htmlFor="finnish">Finnish</label>

                        <Select 
                            id="finnish"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.languages}
                            onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
                            value={props.staff.resignmentReasons === '' ? null : props.staff.resignmentReasons}
                            placeholder="Select"
                           
                            
                        />
                    </Col>

                           <Col sm="12" md="6" lg="6" xl="6" className="form-group form-group-select">
                        <label htmlFor="french">French</label>

                        <Select 
                            id="french"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.languages}
                            onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
                            value={props.staff.resignmentReasons === '' ? null : props.staff.resignmentReasons}
                            placeholder="Select"
                           
                            
                        />
                    </Col>

                           <Col sm="12" md="6" lg="6" xl="6" className="form-group form-group-select">
                        <label htmlFor="german">German</label>

                        <Select 
                            id="german"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.languages}
                            onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
                            value={props.staff.resignmentReasons === '' ? null : props.staff.resignmentReasons}
                            placeholder="Select"
                           
                            
                        />
                    </Col>

                           <Col sm="12" md="6" lg="6" xl="6" className="form-group form-group-select">
                        <label htmlFor="greek">Greek</label>

                        <Select 
                            id="greek"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.languages}
                            onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
                            value={props.staff.resignmentReasons === '' ? null : props.staff.resignmentReasons}
                            placeholder="Select"
                           
                            
                        />
                    </Col>

                           <Col sm="12" md="6" lg="6" xl="6" className="form-group form-group-select">
                        <label htmlFor="norwegian">Norwegian</label>

                        <Select 
                            id="norwegian"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.languages}
                            onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
                            value={props.staff.resignmentReasons === '' ? null : props.staff.resignmentReasons}
                            placeholder="Select"
                           
                            
                        />
                    </Col>

                           <Col sm="12" md="6" lg="6" xl="6" className="form-group form-group-select">
                        <label htmlFor="italian">Italian</label>

                        <Select 
                            id="italian"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.languages}
                            onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
                            value={props.staff.resignmentReasons === '' ? null : props.staff.resignmentReasons}
                            placeholder="Select"
                           
                            
                        />
                    </Col>

                              <Col sm="12" md="6" lg="6" xl="6" className="form-group form-group-select">
                        <label htmlFor="polish">Polish</label>

                        <Select 
                            id="polish"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.languages}
                            onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
                            value={props.staff.resignmentReasons === '' ? null : props.staff.resignmentReasons}
                            placeholder="Select"
                           
                            
                        />
                    </Col>

                              <Col sm="12" md="6" lg="6" xl="6" className="form-group form-group-select">
                        <label htmlFor="portuguese">Portuguese</label>

                        <Select 
                            id="portuguese"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.languages}
                            onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
                            value={props.staff.resignmentReasons === '' ? null : props.staff.resignmentReasons}
                            placeholder="Select"
                           
                            
                        />
                    </Col>

                        <Col sm="12" md="6" lg="6" xl="6" className="form-group form-group-select">
                        <label htmlFor="russia">Russia</label>

                        <Select 
                            
                            id="russia"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.languages}
                            onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
                            value={props.staff.resignmentReasons === '' ? null : props.staff.resignmentReasons}
                            placeholder="Select"
                           
                            
                        />
                    </Col>

                        <Col sm="12" md="6" lg="6" xl="6" className="form-group form-group-select">
                        <label htmlFor="spanish">Spanish</label>

                        <Select 
                            id="spanish"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.languages}
                            onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
                            value={props.staff.resignmentReasons === '' ? null : props.staff.resignmentReasons}
                            placeholder="Select"
                           
                            
                        />
                    </Col>

                        <Col sm="12" md="6" lg="6" xl="6" className="form-group form-group-select">
                        <label htmlFor="turkish">Turkish</label>

                        <Select 
                            id="turkish"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.languages}
                            onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
                            value={props.staff.resignmentReasons === '' ? null : props.staff.resignmentReasons}
                            placeholder="Select"
                           
                            
                        />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="6" className="form-group form-group-select">
                        <label htmlFor="swedish">Swedish</label>

                        <Select 
                            id="swedish"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.languages}
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


export default CvInformation