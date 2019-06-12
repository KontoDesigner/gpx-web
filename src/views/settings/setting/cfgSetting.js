

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
const acceptDeclineOpen={id:props.setting.applyOpen,name:props.setting.acceptDeclineOpen}
const managerComments={id:props.setting.managerComments,name:props.setting.managerComments}
const staffApprove={id:props.setting.staffApprove,name:props.setting.staffApprove}
const jobFamilies={id:props.setting.jobFamilies,name:props.setting.jobFamilies}
//onst jobFamiliesWork=props.settingWork.jobFamiliesWork
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
  jobFamiliesWork: props.setting.jobFamiliesWork,
  acceptDeclineOpen: props.setting.acceptDeclineOpen,
  jobTitlesWork: props.setting.jobTitlesWork,
  acceptDeclineSeason: props.setting.acceptDeclineSeason,
  acceptDeclineCountry: props.setting.acceptDeclineCountry
  
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
 <label htmlFor="managerComments">Manager Comments (in application for work) is open </label>

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
 <label htmlFor="acceptDeclineOpen">Accept / Decline (in application for work) is open </label>

<Select 
  id="acceptDeclineOpen"
  valueKey="id"
  labelKey="name"
  className="form-control"
  options={props.options}
  onChange = { props.handleAcceptDeclineOpenSelect}
 value={acceptDeclineOpen}
 placeholder=""
/>


                       
</Col>



<Col sm="12" md="6" lg="6" xl="4" className="form-group">
<label htmlFor="acceptDeclineSeason"> Accept / Decline Season(s) (in application for work) </label>

<Select 
  multi={true}
  id="acceptDeclineSeason"
  valueKey="id"
  labelKey="name"
  className="form-control"
  options={props.seasons}

  onChange={v => {
    props.handleChange2('acceptDeclineSeason', v)
}}
value={props.acceptDeclineSeason === '' ? null : props.acceptDeclineSeason}
                            
 placeholder=""
/>
                       
</Col>
<Col sm="12" md="6" lg="6" xl="4" className="form-group">
<label htmlFor="acceptDeclineCountry"> Accept / Decline Country (in application for work) </label>

<Select 
  multi={true}
 id="acceptDeclineCountry"
  valueKey="id"
  labelKey="name"
  className="form-control"
  options={props.jobFamilies}
  onChange={v => {
    props.handleChange3('acceptDeclineCountry', v)
}}
value={props.acceptDeclineCountry === '' ? null : props.acceptDeclineCountry}
                            
 placeholder=""
/>
                       
</Col>

<Col sm="12" md="6" lg="6" xl="4" className="form-group">
<label htmlFor="jobFamiliesWork"> Accept / Decline JobFamilies (in application for work) </label>

<Select 
  multi={true}
 id="jobFamiliesWork"
  valueKey="id"
  labelKey="name"
  className="form-control"
  options={props.jobFamilies}
  onChange={v => {
    props.handleChange('jobFamiliesWork', v)
}}
value={props.jobFamiliesWork === '' ? null : props.jobFamiliesWork}
                            
 placeholder=""
/>
                       
</Col>



<Col sm="12" md="6" lg="6" xl="4" className="form-group">
<label htmlFor="jobTitlesWork"> Accept / Decline JobTitles (in application for work) </label>

<Select 
  multi={true}
 id="jobTitlesWork"
  valueKey="id"
  labelKey="name"
  className="form-control" 
  options={props.jobFamilies}
  onChange={v => {
    props.handleChange4('jobTitlesWork', v)
}}
value={props.jobTitlesWork === '' ? null : props.jobTitlesWork}
                            
 placeholder=""
/>
                       
</Col>

<Col sm="12" md="12" lg="12" xl="12" className="form-group"></Col>
<Col sm="12" md="6" lg="6" xl="4" className="form-group">
<label htmlFor="curSeason">Current Season </label>

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
<label htmlFor="nextSeason">Next Season </label>

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
<label htmlFor="nextNextSeason">Following Season</label>

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
</Col> 
                  
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