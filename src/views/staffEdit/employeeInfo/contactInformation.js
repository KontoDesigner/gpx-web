import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import TextInput from '../../../components/textInput'

const ContactInformation = props => {
    return (
        <Card>
            <CardHeader>Contact Information</CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row">
                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="firstName" label="First Name" disabled value={props.staff.firstName} onChange={props.handleStaffField} />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="lastName" label="Sur Name" disabled value={props.staff.lastName} onChange={props.handleStaffField} />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="lastName2" label="2nd Sur Name" disabled value={props.staff.lastName2} disabled={true} />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="title" label="Title" value={props.staff.title} onChange={props.handleStaffField} />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="email" label="E-Mail" value={props.staff.email} onChange={props.handleStaffField} />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="emailWork" label="E-Mail (Work)" value={props.staff.emailWork} onChange={props.handleStaffField} />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="phoneHome" label="Phone" value={props.staff.phoneHome} onChange={props.handleStaffField} />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput
                            name="phoneDestination"
                            label="Phone (Destination)"
                            value={props.staff.phoneDestination}
                            onChange={props.handleStaffField}
                        />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="adCountry" label="Country of Residence" value={props.staff.adCountry} onChange={props.handleStaffField} />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="adCity" label="City" value={props.staff.adCity} onChange={props.handleStaffField} />
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="adZip" label="Zip" value={props.staff.adZip} onChange={props.handleStaffField} />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="address" label="Address" value={props.staff.address} onChange={props.handleStaffField} />
                    </Col>
                </div>
            </CardBody>
        </Card>
    )
}

export default ContactInformation
