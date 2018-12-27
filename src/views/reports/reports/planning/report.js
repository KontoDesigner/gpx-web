import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col,Button } from 'reactstrap'
import TextInput from '../../../../components/textInput'
import Select from 'react-select'
import Datetime from 'react-datetime'

 
class Report extends Component {
    constructor() {
        super();
    }

 
    render() {
        return (
 
        <Card>
            <CardHeader>Reports: Planning Report</CardHeader>

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
          id="destinations"
          valueKey="destination"
          labelKey="destination"
          className="form-control"
          options={this.props.position}
         onChange = {this.props.handleDestinationSelect}
         value={this.props.selectedDestination}
         placeholder="All Destinations"
        />
        <p></p>
           <Button   color="success"  onClick={() => { this.props.create(this.props.selectedDestination) }}>Create Report</Button>
           {/* <input type="file" /> */}
      </Col>
</div>
            </CardBody>
        </Card>
        )
    }
}

export default Report

