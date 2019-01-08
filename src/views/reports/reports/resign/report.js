import React, { Component } from 'react'
import moment from "moment";
import { Card, CardBody, CardHeader, Col,Button } from 'reactstrap'
import TextInput from '../../../../components/textInput'
import Select from 'react-select'

import Datetime from 'react-datetime'


class Report extends Component {
    constructor(props) {
        super(props);
        
        

    }



render() {

    const options = this.props.resigndate ? this.props.resigndate.map(c => (
         {
        appDate: moment(c.appDate).format("YYYY-MM-DD"),
         appDate: moment(c.appDate).format("YYYY-MM-DD")


    }
    )
    
    )
    
    :[]


 


    return (

   
 
        <Card>
            <CardHeader>Reports: Resign Report</CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row">

        <Col key={0} sm="12" md="4" lg="3" xl="3" className="form-group form-group-select">

        
                
    <label htmlFor="destination">Destination</label>


         <Select
            multi={true}
          id="destinations"
          valueKey="destination"
          labelKey="destination"
          className="form-group form-group-select"
          options={this.props.position}
          onChange = { this.props.handleDestinationSelect }
          value={this.props.selectedDestination}
          placeholder="All Destinations"
        
        />
        <p></p>

    <label htmlFor="month">Month</label>


<Select

    id="month"
    valueKey="appDate"
    labelKey="appDate"
    className="form-group form-group-select"
    options={this.props.resigndate}
   
    //options={options}

   onChange = { this.props.handleMonthSelect }
   value={this.props.selectedResignDates}
    placeholder="Select Month"
/>

<p></p> 

           <Button   color="success"  onClick={() => { this.props.createResign(this.props.selectedResignDates,this.props.selectedDestination) }}>Create Report</Button>
           {/* <input type="file" /> */}
      </Col>
</div>
            </CardBody>
        </Card>
        )
    }
}

export default Report

