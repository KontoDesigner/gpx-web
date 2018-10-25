

import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col,Button } from 'reactstrap'
import TextInput from '../../../components/textInput'
import Select from 'react-select'

import Datetime from 'react-datetime'


const Setting = (props) => {

    return (
 
        <Card>
            <CardHeader>General Settings</CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row"> 
                <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="curSeason" label="Current Season"  value={props.setting.curSeason}  />
                    </Col>

                              <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="mplidVersion" label="Next Season"  value={props.setting.mplidVersion}  />
                    </Col>

            


                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="region" label="Following Season"  value={props.setting.region}  />
                    </Col>

                                           <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                                           <label htmlFor="applyOpen">Application for work is open </label>

<Select 
  id="applyOpen"
  valueKey="applyOpen"
  labelKey="applyOpen"
  className="form-control"
  options={props.options}
 onChange = { props.handleApplyOpenSelect}
 value={props.selectedSetting}
 placeholder=""
/>
                       
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                                           <label htmlFor="applyOpen">Manager Comments (in applications for work) </label>

<Select 
  id="destinations"
  valueKey="destination"
  labelKey="destination"
  className="form-control"
  options={props.setting.options}
 onChange = { props.handleSetting}
 value={props.selectedSetting}
 placeholder=""
/>
                       
                    </Col>

                      <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                                           <label htmlFor="applyOpen">Staff can approve/reject placement in BlueNet profile </label>

<Select 
  id="destinations"
  valueKey="destination"
  labelKey="destination"
  className="form-control"
  options={props.setting.options}
 onChange = { props.handleSetting}
 value={props.selectedSetting}
 placeholder=""
/>
                       
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                                           <label htmlFor="applyOpen">Arrival Dates &  Gap Description can be updated from BlueNet </label>

<Select 
  id="destinations"
  valueKey="destination"
  labelKey="destination"
  className="form-control"
  options={props.setting.options}
 onChange = { props.handleSetting}
 value={props.selectedSetting}
 placeholder=""
/>
                       
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                                           <label htmlFor="applyOpen">Departure Dates &  Gap Description can be updated from BlueNet</label>

<Select 
  id="destinations"
  valueKey="destination"
  labelKey="destination"
  className="form-control"
  options={props.setting.options}
 onChange = { props.handleSetting}
 value={props.selectedSetting}
 placeholder=""
/>
                       
                    </Col>
                       
 
</div>
            </CardBody>
        </Card>
    );
};

export default Setting