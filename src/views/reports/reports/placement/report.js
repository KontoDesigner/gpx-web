
import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col,Button,Row } from 'reactstrap'
import TextInput from '../../../../components/textInput'
import Select from 'react-select'

import Datetime from 'react-datetime'


const Report = (props) => {

    return (
 
        <Card>
            <CardHeader>Reports: Placement Reports</CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row">

                       <Col key={0} sm="12" md="4" lg="3" xl="3" className="form-group form-group-select">

                       
<label htmlFor="applySeason">Apply Season(s)</label>

        <Select 
        multi={true}
          id="applySeason"
          valueKey="id"
          labelKey="name"
          className="form-control"
        //options={[...[{season: 'All Seasons"'}],...props.seasons]}
          options={props.seasons}  
         onChange = {props.handleSeasonSelect }
         value={props.selectedSeason}
         placeholder="Select Season(s)"
        />
       
      </Col>
     </div>
     <div className="form-row">
     <Col key={0} sm="12" md="4" lg="3" xl="3" className="form-group form-group-select">
                       
<label htmlFor="managerApplication">Show Only</label>

        <Select 
        //multi={true}
          id="managerApplication"
          valueKey="id"
          labelKey="name"
          className="form-control"
        //options={[...[{season: 'All Seasons"'}],...props.seasons]}
          options={props.details}  
         onChange = {props.handleChangeSelect }
         value={props.valueSingle}
         placeholder="Select"
        />
    
      </Col>
      </div>
      <div className="form-row">
      <Col key={0} sm="12" md="4" lg="3" xl="3" className="form-group form-group-select">
    
           <Button   color="success"  onClick={() => { props.createPlacement(props.selectedSeason,props.valueSingle) }}>Create Report</Button>
           {/* <input type="file" /> */}
      </Col>
      </div>

            </CardBody>
        </Card>
    );
};

export default Report

