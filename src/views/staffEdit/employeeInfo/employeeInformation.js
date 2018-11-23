import React from 'react';
import { Card, CardBody, CardHeader, Col,Label,Input } from 'reactstrap'
import TextInput from '../../../components/textInput'
import Select from 'react-select'
import Datetime from 'react-datetime'

const EmployeeInformation = (props) => {
    return (
        <Card>
            <CardHeader>Employee Information</CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row">
                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="nationality" label="Nationality" value={props.staff.nationality} onChange={props.handleStaffField} />
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

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="empID" label="SAP ID" disabled value={props.staff.sapID} onChange={props.handleStaffField} />
                    </Col>

                       <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="mopedID" disabled label="Moped ID" value={props.staff.mopedID} onChange={props.handleStaffField} />
                    </Col>

                       <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="centralID" disabled label="Central ID" value={props.staff.centralID} onChange={props.handleStaffField} />
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
                        <label htmlFor="dateOfBirth">Date Of Birth</label>

                        <Datetime
                            value={props.staff.dateOfBirth}
                            onChange={(v) => { props.handleStaffDatePicker('dateOfBirth', v) }}
                            timeFormat={false}
                            dateFormat="YYYY-MM-DD"
                            closeOnSelect
                            utc={true}
                            inputProps={{ placeholder: 'YYYY-MM-DD' }} />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <label htmlFor="dateOfBirth">Date First Joined The Company</label>

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
            <Label for="content">Remarks</Label>
            <Input
              required
              type="textarea"
              maxLength="1000"
              name="content"
              id="content"
              rows={3}
              value={props.staff.drivingYear}
              aria-multiline="true"
            />
          </Col>
                </div>
            </CardBody>
        </Card>
    );
};

export default EmployeeInformation