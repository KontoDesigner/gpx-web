

import React, { Component } from 'react'
import Moment from 'react-moment';
import { Row, Col,  Label, Input,Button ,Card,CardHeader,CardBody} from 'reactstrap'
import TextInput from '../../components/textInput'
import Select from 'react-select'

import Datetime from 'react-datetime'


const Import = (props) => {
    return (
 
        <Card>
            <CardHeader>File Imports</CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row">

        <Col key={0} sm="12" md="4" lg="3" xl="3" className="form-group form-group-select">

 <label htmlFor="destination">Select File Import Type</label>

        <Select 
          id="destinations"
          valueKey="destination"
          labelKey="destination"
          className="form-control"
          options={props.years}
       // onChange = { props.handleDestinationSelect }
        //  value={props.selectedDestination}
         placeholder="Select"
        />
        <p></p>
           <Button   color="success"  onClick={() => { props.create() }}>Start Import</Button>
  
      </Col>
</div>
            </CardBody>
        </Card>
    );
};

export default Import
