import React from 'react';
import { Card, CardBody, CardHeader, Row, Col } from 'reactstrap'
import TextInput from '../../../../components/textInput'

const ContactInformation = (props) => {
    return (
        <Card>
            <CardHeader>Contact Information</CardHeader>

            <CardBody className="no-padding-bottom">
                <Row>
                    <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <TextInput name="firstNameLastName" label="Full Name" value={props.staff.firstNameLastName} onChange={props.updateStaffFieldState} />
                        </div>
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <TextInput name="title" label="Title" value={props.staff.title} onChange={props.updateStaffFieldState} />
                        </div>
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <TextInput name="email" label="E-Mail (Private)" value={props.staff.email} onChange={props.updateStaffFieldState} />
                        </div>
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <TextInput name="emailWork" label="E-Mail (Work)" value={props.staff.emailWork} onChange={props.updateStaffFieldState} />
                        </div>
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <TextInput name="phone" label="Phone" value={props.staff.phone} onChange={props.updateStaffFieldState} />
                        </div>
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <TextInput name="phoneDestination" label="Phone (Destination)" value={props.staff.phone} onChange={props.updateStaffFieldState} />
                        </div>
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <TextInput name="homeAirport" label="Home Airport" value={props.staff.homeAirport} onChange={props.updateStaffFieldState} />
                        </div>
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <TextInput name="homeAirportAlt" label="Alt Home Airport" value={props.staff.homeAirportAlt} onChange={props.updateStaffFieldState} />
                        </div>
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4">
                        <div className="form-group">
                            <TextInput name="homeAirportAlt2" label="Alt Home Airport 2" value={props.staff.homeAirportAlt2} onChange={props.updateStaffFieldState} />
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default ContactInformation