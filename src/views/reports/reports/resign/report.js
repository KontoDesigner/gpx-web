

import React, { Component } from 'react'
import moment from "moment";

import { Card, CardBody, CardHeader, Col,Button } from 'reactstrap'
import TextInput from '../../../../components/textInput'
import Select from 'react-select'

import Datetime from 'react-datetime'


const Report = (props) => {
 
    const options = props.resigndate ? props.resigndate.map(c => ({
        appDate: moment(c.appDate).format("YYYY-MM-DD"),
        appDate: moment(c.appDate).format("YYYY-MM-DD")

    })):[]


   // const distinctyears=[... new Set(options)];
  debugger;
    return (
 
        <Card>
            <CardHeader>Reports: Resign Report</CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row">

        <Col key={0} sm="12" md="4" lg="3" xl="3" className="form-group form-group-select">

       
                
    <label htmlFor="destination">Destination</label>


         <Select.Creatable 
            multi={true}
          id="destinations"
          valueKey="destination"
          labelKey="destination"
          className="form-group form-group-select"
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
    className="form-group form-group-select"
   // options={moment(props.resigndate).format('YYYY-MM-DD')}
   
    options={options}

   onChange = { props.handleMonthSelect }
   value={props.selectedResignDates}
    placeholder="Select Month"
/>

<p></p> 

           <Button   color="success"  onClick={() => { props.createResign(props.selectedResignDates,props.selectedDestination) }}>Create Report</Button>
           {/* <input type="file" /> */}
      </Col>
</div>
            </CardBody>
        </Card>
    );
};

export default Report

