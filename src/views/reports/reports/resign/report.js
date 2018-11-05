

import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col,Button } from 'reactstrap'
import TextInput from '../../../../components/textInput'
import Select from 'react-select'

import Datetime from 'react-datetime'


const Report = (props) => {
 

    // const availdest={id:props.position,name:props.position}
  
   
    debugger;
 
    return (
 
        <Card>
            <CardHeader>Reports: Resign Report</CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row">

                       <Col key={0} sm="12" md="4" lg="3" xl="3" className="form-group form-group-select">
                
    <label htmlFor="destination">Destination</label>

        <Select 
          id="destinations"
          valueKey="destination"
          labelKey="destination"
          className="form-control"
          options={props.position}
          onChange = { props.handleDestinationSelect }
          value={props.selectedDestination}
          placeholder="All Destinations"
        />
        <p></p>

    <label htmlFor="month">Month</label>


<Select
    id="month"
    valueKey="appDate"
    labelKey="appDate"
    className="form-control"
    options={props.resigndate}
   onChange = { props.handleMonthSelect }
   value={props.selectedResignDates}
    placeholder="Select Month"
/>

<p></p> 

           <Button   color="success"  onClick={() => { props.create() }}>Create Report</Button>
           {/* <input type="file" /> */}
      </Col>
</div>
            </CardBody>
        </Card>
    );
};

export default Report

