import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Row, Col, Button } from 'reactstrap'
import TextInput from '../../../components/textInput'

const Season = (props) => {
    if (props.season === undefined) {
        return (
            <Card>
                <CardHeader>{props.title}</CardHeader>

                <CardBody>
                    <Row>
                        <Col sm="12" md="6" lg="6" xl="4">
                            <b className="card-text text-danger">No {props.title.toLowerCase()} found.</b>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        );
    }
    else {
        return (
            <Card>
                <CardHeader>{props.title}</CardHeader>

                <CardBody className="no-padding-bottom">
                    <Row>
                        <Col sm="12" md="6" lg="6" xl="6">
                            <div className="form-group">
                                <TextInput name="regionHeadOf" label="Region/Head Of" disabled={true} value={props.season.Region + ' ' + props.season.HeadOf} />
                            </div>
                        </Col>

                        <Col sm="12" md="6" lg="6" xl="6">
                            <div className="form-group">
                                <TextInput name="location" label="Location" disabled={true} value={props.season.SDD_DM + ' ' + props.season.Destination + ' ' + props.season.ConceptHotel} />
                            </div>
                        </Col>

                        <Col sm="12" md="6" lg="6" xl="6">
                            <div className="form-group">
                                <TextInput name="jobFamily" label="Job Family" disabled={true} value={props.season.JobFamily} />
                            </div>
                        </Col>

                        <Col sm="12" md="6" lg="6" xl="6">
                            <div className="form-group">
                                <TextInput name="jobTitle" label="Job Title" disabled={true} value={props.season.JobTitle} />
                            </div>
                        </Col>
                    </Row>
                </CardBody>

                <CardFooter style={{ paddingBottom: '5px' }}>
                    <Row>
                        <Col>
                            <Button size="sm" onClick={() => { alert(1) }} color="primary" style={{ marginRight: '5px', marginBottom: '5px' }}>Assign Role</Button>
                            <Button size="sm" onClick={() => { alert(1) }} color="primary" style={{ marginRight: '5px', marginBottom: '5px' }}>Move Role</Button>
                            <Button size="sm" onClick={() => { alert(1) }} color="danger" style={{ marginBottom: '5px' }}>Remove Role</Button>
                        </Col>
                    </Row>
                </CardFooter>
            </Card>
        );
    }
};

export default Season