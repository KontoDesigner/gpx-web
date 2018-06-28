import React from 'react';
import { Card, CardBody, CardHeader, Row, Col } from 'reactstrap'
import TextInput from '../../../components/textInput'

const CurrentSeason = (props) => {
    if (props.currentSeason === undefined) {
        return (
            <Card>
                <CardHeader>Current Season</CardHeader>

                <CardBody>
                    <Row>
                        <Col sm="12" md="6" lg="6" xl="4">
                            <b className="card-text text-danger">No current season found.</b>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        );
    }
    else {
        return (
            <Card>
                <CardHeader>Current Season</CardHeader>

                <CardBody className="no-padding-bottom">
                    <Row>
                        <Col sm="12" md="6" lg="6" xl="6">
                            <div className="form-group">
                                <TextInput name="regionHeadOf" label="Region/Head Of" disabled={true} value={props.currentSeason.Region + ' ' + props.currentSeason.HeadOf} />
                            </div>
                        </Col>

                        <Col sm="12" md="6" lg="6" xl="6">
                            <div className="form-group">
                                <TextInput name="location" label="Location" disabled={true} value={props.currentSeason.SDD_DM + ' ' + props.currentSeason.Destination + ' ' + props.currentSeason.ConceptHotel} />
                            </div>
                        </Col>

                        <Col sm="12" md="6" lg="6" xl="6">
                            <div className="form-group">
                                <TextInput name="jobFamily" label="Job Family" disabled={true} value={props.currentSeason.JobFamily} />
                            </div>
                        </Col>

                        <Col sm="12" md="6" lg="6" xl="6">
                            <div className="form-group">
                                <TextInput name="jobTitle" label="Job Title" disabled={true} value={props.currentSeason.JobTitle} />
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        );
    }
};

export default CurrentSeason