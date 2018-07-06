import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
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
                        <TextInput name="empID" label="Employee ID" value={props.staff.empID} onChange={props.handleStaffField} />
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
                </div>
            </CardBody>
        </Card>
    );
};

export default EmployeeInformation