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
             
             <TextInput name="language" label="Language(s) (not in list below)"  value={props.staff.languages} onChange={props.handleStaffField}/>
         </Col>

         <Col sm="12" md="6" lg="6" xl="6" className="form-group form-group-select">
                        <label htmlFor="arabic">Arabic</label>

                        <Select 

id="arabic"
valueKey="id"
labelKey="name"
className="form-control"
options={props.languages}
onChange={(v) => { props.handleStaffSelect('arabic', v) }}
value={props.staff.arabic === '' ? null : props.staff.arabic}
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
                            onChange={(v) => { props.handleStaffSelect('danish', v) }}
                            value={props.staff.danish === '' ? null : props.staff.danish}
                            placeholder="Select"
                           
                            
                        />
                    </Col>

                           <Col sm="12" md="6" lg="6" xl="6" className="form-group form-group-select">
                        <label htmlFor="dutch">Dutch</label>

                        <Select 
                            id="dutch"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.languages}
                            onChange={(v) => { props.handleStaffSelect('dutch', v) }}
                            value={props.staff.dutch === '' ? null : props.staff.dutch}
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
                            onChange={(v) => { props.handleStaffSelect('english', v) }}
                            value={props.staff.english === '' ? null : props.staff.english}
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
                            onChange={(v) => { props.handleStaffSelect('finnish', v) }}
                            value={props.staff.finnish=== '' ? null : props.staff.finnish}
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
                            onChange={(v) => { props.handleStaffSelect('french', v) }}
                            value={props.staff.french === '' ? null : props.staff.french}
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
                            onChange={(v) => { props.handleStaffSelect('german', v) }}
                            value={props.staff.german === '' ? null : props.staff.german}
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
                            onChange={(v) => { props.handleStaffSelect('greek', v) }}
                            value={props.staff.greek === '' ? null : props.staff.greek}
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
                            onChange={(v) => { props.handleStaffSelect('norwegian', v) }}
                            value={props.staff.norwegian === '' ? null : props.staff.norwegian}
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
                            onChange={(v) => { props.handleStaffSelect('italian', v) }}
                            value={props.staff.italian === '' ? null : props.staff.italian}
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
                            onChange={(v) => { props.handleStaffSelect('polish', v) }}
                            value={props.staff.polish === '' ? null : props.staff.polish}
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
                            onChange={(v) => { props.handleStaffSelect('portuguese', v) }}
                            value={props.staff.portuguese=== '' ? null : props.staff.portuguese}
                            placeholder="Select"
                            
                        />
                    </Col>

                        <Col sm="12" md="6" lg="6" xl="6" className="form-group form-group-select">
                        <label htmlFor="russia">Russia</label>

                        <Select 
                            
                            id="russian"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.languages}
                            onChange={(v) => { props.handleStaffSelect('russian', v) }}
                            value={props.staff.russian === '' ? null : props.staff.russian}
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
                            onChange={(v) => { props.handleStaffSelect('spanish', v) }}
                            value={props.staff.spanish === '' ? null : props.staff.spanish}
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
                            onChange={(v) => { props.handleStaffSelect('turkish', v) }}
                            value={props.staff.turkish === '' ? null : props.staff.turkish}
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
                            onChange={(v) => { props.handleStaffSelect('swedish', v) }}
                            value={props.staff.swedish === '' ? null : props.staff.swedish}
                            placeholder="Select"
                            
                        />
                    </Col>

                </div>
            </CardBody>
        
        </Card>
    );
};


export default CvInformation