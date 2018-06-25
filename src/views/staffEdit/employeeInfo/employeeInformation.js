import React from 'react';
import { Card, CardBody, CardHeader, Row, Col } from 'reactstrap'
import TextInput from '../../../components/textInput'

const EmployeeInformation = (props) => {
    console.log(props.staff);
    return (
        <Card>
            <CardHeader>Employee Information</CardHeader>

            <CardBody className="no-padding-bottom">
                <Row>
                    <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <TextInput name="nationality" label="Nationality" value={props.staff.nationality} onChange={props.updateStaffFieldState} />
                        </div>
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <TextInput name="sourceMarket" label="Source Market" value={props.staff.sourceMarket} onChange={props.updateStaffFieldState} />
                        </div>
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <TextInput name="empID" label="Employee ID" value={props.staff.empID} onChange={props.updateStaffFieldState} />
                        </div>
                    </Col>

                    {/* <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <TextInput name="empID" label="SAP ID" value={props.staff.empID} onChange={props.updateStaffFieldState} />
                        </div>
                    </Col> */}

                    <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <TextInput name="positionType" label="Position Type" value={props.staff.positionType} onChange={props.updateStaffFieldState} />
                        </div>
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <TextInput name="costCenter" label="Cost Center" value={props.staff.costCenter} onChange={props.updateStaffFieldState} />
                        </div>
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <TextInput name="dateOfBirth" label="Date Of Birth" value={props.staff.dateOfBirth} onChange={props.updateStaffFieldState} />
                        </div>
                    </Col>

                    {/* <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <TextInput name="dateOfBirth" label="Manager" value={props.staff.dateOfBirth} onChange={props.updateStaffFieldState} />
                        </div>
                    </Col> */}

                    <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <TextInput name="dateJoined" label="Date First Joined The Company" value={props.staff.dateJoined} onChange={props.updateStaffFieldState} />
                        </div>
                    </Col>

                    {/* <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <TextInput name="dateJoined" label="Passport" value={props.staff.dateJoined} onChange={props.updateStaffFieldState} />
                        </div>
                    </Col> */}

                    {/* <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <TextInput name="dateJoined" label="Passport Expires" value={props.staff.dateJoined} onChange={props.updateStaffFieldState} />
                        </div>
                    </Col> */}

                    <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <TextInput name="driver" label="Driver" value={props.staff.driver} onChange={props.updateStaffFieldState} />
                        </div>
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <TextInput name="drivingYear" label="Driving Year" value={props.staff.drivingYear} onChange={props.updateStaffFieldState} />
                        </div>
                    </Col>

                    {/* <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <label>Next of Kin</label>
                        </div>
                    </Col> */}
                </Row>
            </CardBody>
        </Card>
    );
};

export default EmployeeInformation