

import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col,Button } from 'reactstrap'
import TextInput from '../../../components/textInput'
import Select from 'react-select'

import Datetime from 'react-datetime'
import Buttons from '../buttons';

 
const Setting = (props) => {
//from the database
const curSeason={id:props.setting.curSeason,name:props.setting.curSeason}
const nextSeason={id:props.setting.nextSeason,name:props.setting.nextSeason}
const nextNextSeason={id:props.setting.nextNextSeason,name:props.setting.nextNextSeason}
const applyOpen={id:props.setting.applyOpen,name:props.setting.applyOpen}
const managerComments={id:props.setting.managerComments,name:props.setting.managerComments}
const staffApprove={id:props.setting.staffApprove,name:props.setting.staffApprove}
const jobFamilies={id:props.setting.jobFamilies,name:props.setting.jobFamilies}
//const jobFamiliesWork={id:props.setting.jobFamiliesWork,name:props.setting.jobFamiliesWork}
const arrivalDateUpdate={id:props.setting.arrivalDateUpdate,name:props.setting.arrivalDateUpdate}
const departureDateUpdate={id:props.setting.departureDateUpdate,name:props.setting.departureDateUpdate}




let model = {
    
  // to the database
   settingid: props.setting.settingId,
   departureDateUpdate: props.setting.departureDateUpdate,
   arrivalDateUpdate: props.setting.arrivalDateUpdate,
   staffApprove: props.setting.staffApprove,
   curSeason: props.setting.curSeason,
   nextSeason: props.setting.nextSeason,
   nextNextSeason:props.setting.nextNextSeason,
   applyOpen: props.setting.applyOpen,
   managerComments: props.setting.managerComments,
   jobFamiliesWork: props.setting.jobFamiliesWork
}

    // const buttons = <Buttons save={props.save} unsavedEdit={props.unsavedEdit} />
    return (
 
 
        <Card>
            <CardHeader>General Setting  </CardHeader>
           
            <CardBody className="no-padding-bottom">
                <div className="form-row"> 
         




{/* <Col sm="12" md="6" lg="6" xl="4" className="form-group">
 <TextInput name="nextSeason" label="Next Season"  value={props.setting.nextSeason}  />
</Col> */}

            
{/* <Col sm="12" md="6" lg="6" xl="4" className="form-group">
<TextInput name="nextnextSeason" label="Following Season"  value={props.setting.nextnextSeason}  />
 </Col> */}

<Col sm="12" md="6" lg="6" xl="4" className="form-group">
<label htmlFor="applyOpen">Application for work is open </label>

<Select 
  id="applyOpen"
  valueKey="id"
  labelKey="name"
  className="form-control"
  options={props.options}
 onChange = { props.handleApplyOpenSelect}
  value={applyOpen}
 placeholder=""
/>
                       
</Col>
<Col sm="12" md="6" lg="6" xl="4" className="form-group">
 <label htmlFor="managerComments">Manager Comments (in applications for work) is open </label>

<Select 
  id="managerComments"
  valueKey="id"
  labelKey="name"
  className="form-control"
  options={props.options}
 onChange = { props.handleManagerCommentSelect}
 value={managerComments}
 placeholder=""
/>
                       
</Col>
<Col sm="12" md="6" lg="6" xl="4" className="form-group">
<label htmlFor="jobFamiliesWork"> Currently active JobFamilies (in applications for work) </label>

<Select 
  multi={true}
  id="jobFamiliesWork"
  valueKey="id"
  labelKey="name"
  className="form-control"
  options={props.jobFamilies}
  onChange={v => {
    props.handleMultiSelect('jobFamiliesWork', v)
}}
value={props.setting.jobFamiliesWork === '' ? null : props.setting.jobFamiliesWork}
                            
 placeholder=""
/>
                       
</Col>
{/* <Col sm="12" md="6" lg="6" xl="4" className="form-group">
<label htmlFor="staffApprove">Staff can approve/reject placement in  profile </label>

<Select 
  id="staffApprove"
  valueKey="id"
  labelKey="name"
  className="form-control"
  options={props.options}
 onChange = { props.handleStaffApproveSelect}
 value={staffApprove}
 placeholder=""
/>
                       
</Col> */}
{/* <Col sm="12" md="6" lg="6" xl="4" className="form-group">
<label htmlFor="arrivalDateUpdate">Arrival Dates &  Gap Description can be updated  </label>

<Select 
  id="arrivalDateUpdate"
  valueKey="id"
  labelKey="name"
  className="form-control"
  options={props.options}
 onChange = { props.handleArrivalDateSelect}
 value={arrivalDateUpdate}
 placeholder=""
/>
                       
</Col>
<Col sm="12" md="6" lg="6" xl="4" className="form-group">
 <label htmlFor="departureDateUpdate">Departure Dates &  Gap Description can be updated</label>

<Select 
  id="departureDateUpdate"
  valueKey="id"
  labelKey="name"
  className="form-control"
  options={props.options}
 onChange = { props.handleDepartureDateSelect}
 value={departureDateUpdate}
 placeholder=""
/>

          
</Col>

<Col sm="12" md="6" lg="6" xl="4" className="form-group">
<label htmlFor="curSeason">Current Season (obsolete)</label>

<Select 
  id="curSeason"
  valueKey="id"
  labelKey="name"
  className="form-control"
  options={props.seasons}
 onChange = {props.handleCurSeasonSelect}
 
  value={curSeason}
 placeholder=""
/>
</Col>

<Col sm="12" md="6" lg="6" xl="4" className="form-group">
<label htmlFor="nextSeason">Next Season (obsolete)</label>

<Select 
  id="nextSeason"
  valueKey="id"
  labelKey="name"
  className="form-control"
  options={props.seasons}
 onChange = {props.handleNextSeasonSelect}
 value={nextSeason}
 placeholder=""
/>
</Col>

<Col sm="12" md="6" lg="6" xl="4" className="form-group">
<label htmlFor="nextNextSeason">Following Season (obsolete)</label>

<Select 
  id="nextNextSeason"
  valueKey="id"
  labelKey="name"
  className="form-control"
  options={props.seasons}
 onChange = { props.handleNextNextSeasonSelect}
 value={nextNextSeason} 
 placeholder=""
/>
</Col> */}
                  
</div>

<div className="col-btn-menu" >
<Button onClick={() => { window.close() }} color="danger">Close</Button>

                {/* <Button onClick={() => { window.print() }} color="primary">Print</Button> */}
                <Button color="success" onClick={() => { props.save(model) }}>Save</Button>
                </div>
            <p></p>
           
            </CardBody>
        </Card>
    );
};

export default Setting