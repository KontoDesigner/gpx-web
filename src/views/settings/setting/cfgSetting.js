

import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col,Button } from 'reactstrap'
import TextInput from '../../../components/textInput'
import Select from 'react-select'

import Datetime from 'react-datetime'


const Setting = (props) => {

    return (
 
        <Card>
            <CardHeader>Reports: Placement Request Report</CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row"> 
                <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="mplid" label="MPLID"  value={props.setting.generalid}  />
                    </Col>
 
</div>
            </CardBody>
        </Card>
    );
};

export default Setting