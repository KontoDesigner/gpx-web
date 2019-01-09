import React from 'react';
import { Card, CardBody, CardHeader, Col,Label,Input } from 'reactstrap'
import TextInput from '../../../components/textInput'
import Select from 'react-select'
import Datetime from 'react-datetime'

const EmployeeInformation = (props) => {
    return (
        <Card>
            <CardHeader>Employee Information    <div class="pull-right">Status = {props.staff.status}</div> </CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row">
                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="nat" label="Nationality" value={props.staff.nat} onChange={props.handleStaffField} />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group form-group-select">
                        <label htmlFor="sourceMarket">Source Market</label>

                        <Select
                            id="sourceMarket"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.sourceMarkets}
                            onChange={(v) => { props.handleStaffSelect('sourceMarket', v, 'id') }}
                            value={props.staff.sourceMarket === '' ? null : props.staff.sourceMarket}
                            placeholder="Source Market"
                        />
                    </Col>

                    {/* <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="sapID" label="SAP ID" disabled value={props.staff.sapID} onChange={props.handleStaffField} />
                    </Col>

                       <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="mopedID"  label="Moped ID" disabled value={props.staff.mopedID} onChange={props.handleStaffField} />
                    </Col> */}

                       <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="centralID" label="Central ID" disabled value={props.staff.centralID} onChange={props.handleStaffField} />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group form-group-select">
                        <label htmlFor="positionType">Position Type</label>

                        <Select
              
                            id="positionType"
                         
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.positionTypes}
                            onChange={(v) => { props.handleStaffSelect('positionType', v, 'id') }}
                            value={props.staff.positionType === '' ? null : props.staff.positionType}
                            placeholder="Position Type"
                           
                        />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="costCenter" label="Cost Center" value={props.staff.costCenter} onChange={props.handleStaffField} />
                    
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        {/* <label htmlFor="dateOfBirth">Date Of Birth</label> */}
                        <TextInput name="dateOfBirth" label="Date Of Birth" disabled value={props.staff.dateOfBirth} onChange={props.handleStaffField} />
                    
                        {/* <Datetime
                    
                            value={props.staff.dateOfBirth}
                            onChange={(v) => { props.handleStaffDatePicker('dateOfBirth', v) }}
                            timeFormat={false}
                            dateFormat="YYYY-MM-DD"
                            closeOnSelect
                            utc={true}
                            inputProps={{ placeholder: 'YYYY-MM-DD' }} 
                            disabled = {true}
                            />
                      */}
                    </Col> 

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <label htmlFor="dateJoined">Candidate Available From</label>

                        <Datetime
                            value={props.staff.dateJoined}
                            onChange={(v) => { props.handleStaffDatePicker('dateJoined', v) }}
                            timeFormat={false}
                            dateFormat="YYYY-MM-DD"
                            closeOnSelect
                            utc={true}
                            inputProps={{ placeholder: 'YYYY-MM-DD' }} />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="driver" label="Driver" value={props.staff.driver} onChange={props.handleStaffField} />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="drivingYear" label="Driving Year" value={props.staff.drivingYear} onChange={props.handleStaffField} />
                    </Col>
                    <Col sm="12" md="12" lg="12" xl="12" className="form-group">
            <Label for="empContent">Remarks</Label>
            <Input
              required
              type="textarea"
              maxLength="1000"
              name="empContent"
              id="empContent"
              rows={3}
              value={props.staff.empContent}
              onChange={props.handleStaffField}
              aria-multiline="true"
            />
          </Col>
                </div>
            </CardBody>
        </Card>
    );
};

export default EmployeeInformation