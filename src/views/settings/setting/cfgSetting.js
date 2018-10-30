

import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col,Button } from 'reactstrap'
import TextInput from '../../../components/textInput'
import Select from 'react-select'

import Datetime from 'react-datetime'
import Buttons from '../buttons';


const Setting = (props) => {
    // const buttons = <Buttons save={props.save} unsavedEdit={props.unsavedEdit} />
    return (
  
 
        <Card>
            <CardHeader>General Setting  </CardHeader>
           
            <CardBody className="no-padding-bottom">
                <div className="form-row"> 
         

<Col sm="12" md="6" lg="6" xl="4" className="form-group">
<label htmlFor="curSeason">Current Season</label>

<Select 
  id="curSeason"
  valueKey="id"
  labelKey="name"
  className="form-control"
  options={props.seasons}
 onChange = {props.handleCurSeasonSelect}
 value={props.curSeason}
 placeholder=""
/>
</Col>

<Col sm="12" md="6" lg="6" xl="4" className="form-group">
<label htmlFor="nextSeason">Next Season</label>

<Select 
  id="nextSeason"
  valueKey="id"
  labelKey="name"
  className="form-control"
  options={props.seasons}
 onChange = {props.handleNextSeasonSelect}
 value={props.nextSeason}
 placeholder=""
/>
</Col>

<Col sm="12" md="6" lg="6" xl="4" className="form-group">
<label htmlFor="nextnextSeason">Following Season</label>

<Select 
  id="nextnextSeason"
  valueKey="id"
  labelKey="name"
  className="form-control"
  options={props.seasons}
 onChange = { props.handleNextNextSeasonSelect}
 value={props.nextnextSeason} 
 placeholder=""
/>
</Col>


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
 value={props.applyOpen}
 placeholder=""
/>
                       
</Col>
<Col sm="12" md="6" lg="6" xl="4" className="form-group">
 <label htmlFor="mgrComment">Manager Comments (in applications for work) </label>

<Select 
  id="mgrComment"
  valueKey="id"
  labelKey="name"
  className="form-control"
  options={props.options}
 onChange = { props.handleManagerCommentSelect}
 value={props.mgrComment}
 placeholder=""
/>
                       
</Col>

<Col sm="12" md="6" lg="6" xl="4" className="form-group">
<label htmlFor="staffApprove">Staff can approve/reject placement in  profile </label>

<Select 
  id="staffApprove"
  valueKey="id"
  labelKey="name"
  className="form-control"
  options={props.options}
 onChange = { props.handleStaffApproveSelect}
 value={props.staffApprove}
 placeholder=""
/>
                       
</Col>
<Col sm="12" md="6" lg="6" xl="4" className="form-group">
<label htmlFor="arrivalDateSelect">Arrival Dates &  Gap Description can be updated  </label>

<Select 
  id="arrivalDateSelect"
  valueKey="id"
  labelKey="name"
  className="form-control"
  options={props.options}
 onChange = { props.handleArrivalDateSelect}
 value={props.arrivalDateSelect}
 placeholder=""
/>
                       
</Col>
<Col sm="12" md="6" lg="6" xl="4" className="form-group">
 <label htmlFor="departureDateSelect">Departure Dates &  Gap Description can be updated</label>

<Select 
  id="departureDateSelect"
  valueKey="id"
  labelKey="name"
  className="form-control"
  options={props.options}
 onChange = { props.handleDepartureDateSelect}
 value={props.departureDateSelect}
 placeholder=""
/>

          
</Col>
                  
</div>

<div className="col-btn-menu" >
<Button onClick={() => { window.close() }} color="danger">Close</Button>
                {/* <Button onClick={() => { window.print() }} color="primary">Print</Button> */}
                <Button color="success" onClick={() => { props.save() }}>Save</Button>
                </div>
            <p></p>
           
            </CardBody>
        </Card>
    );
};

export default Setting