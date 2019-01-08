import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col,Button } from 'reactstrap'
import TextInput from '../../../../components/textInput'
import Select from 'react-select'

import Datetime from 'react-datetime'


const Report = (props) => {
 
    return (
 
        <Card>
            <CardHeader>Reports: Onboard Report</CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row">

        <Col key={0} sm="12" md="4" lg="3" xl="3" className="form-group form-group-select">

    {/* <label htmlFor="year">Year</label> */}

{/* <Select
    id="years"
    valueKey="id"
    labelKey="name"
    className="form-control"
    options={props.years}
    onChange = { props.handleYearSelect }
     value={props.selectedYear}
    placeholder="Select Year"
/>
<p></p> */}
 <label htmlFor="destination">Destination</label>

       
       <Select
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
           <Button   color="success"  onClick={() => { props.createOnboard(props.selectedDestination) }}>Create Report</Button>
           {/* <input type="file" /> */}
      </Col>
</div>
            </CardBody>
        </Card>
    );
};

export default Report

