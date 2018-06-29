import React, { Component } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Row, Col, Button } from 'reactstrap'
import TextInput from '../../../../components/textInput'
import AssignRole from './assignRole/assignRole'
import MoveRole from './moveRole/moveRole'
import RemoveRole from './removeRole/removeRole'

class Season extends Component {
    constructor() {
        super();

        this.state = {
            assignRoleModal: false,
            moveRoleModal: false,
            removeRoleModal: false
        };
    }

    toggleAssignRoleModal = () => {
        this.setState({
            assignRoleModal: !this.state.assignRoleModal
        });
    }

    toggleMoveRoleModal = () => {
        this.setState({
            moveRoleModal: !this.state.moveRoleModal
        });
    }

    toggleRemoveRoleModal = () => {
        this.setState({
            removeRoleModal: !this.state.removeRoleModal
        });
    }

    render() {
        if (this.props.season === undefined) {
            return (
                <Card>
                    <CardHeader>{this.props.title}</CardHeader>

                    <CardBody>
                        <Row>
                            <Col sm="12" md="6" lg="6" xl="4">
                                <b className="card-text text-danger">No {this.props.title.toLowerCase()} found.</b>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                <div>
                    <Card>
                        <CardHeader>{this.props.title}</CardHeader>

                        <CardBody className="no-padding-bottom">
                            <Row>
                                <Col sm="12" md="6" lg="6" xl="6">
                                    <div className="form-group">
                                        <TextInput name="regionHeadOf" label="Region/Head Of" disabled={true} value={this.props.season.Region + ' ' + this.props.season.HeadOf} />
                                    </div>
                                </Col>

                                <Col sm="12" md="6" lg="6" xl="6">
                                    <div className="form-group">
                                        <TextInput name="location" label="Location" disabled={true} value={this.props.season.SDD_DM + ' ' + this.props.season.Destination + ' ' + this.props.season.ConceptHotel} />
                                    </div>
                                </Col>

                                <Col sm="12" md="6" lg="6" xl="6">
                                    <div className="form-group">
                                        <TextInput name="jobFamily" label="Job Family" disabled={true} value={this.props.season.JobFamily} />
                                    </div>
                                </Col>

                                <Col sm="12" md="6" lg="6" xl="6">
                                    <div className="form-group">
                                        <TextInput name="jobTitle" label="Job Title" disabled={true} value={this.props.season.JobTitle} />
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>

                        <CardFooter style={{ paddingBottom: '5px' }}>
                            <Row>
                                <Col>
                                    <Button size="sm" onClick={() => { this.toggleAssignRoleModal() }} color="primary" style={{ marginRight: '5px', marginBottom: '5px' }}>Assign Role</Button>
                                    <Button size="sm" onClick={() => { this.toggleMoveRoleModal() }} color="primary" style={{ marginRight: '5px', marginBottom: '5px' }}>Move Role</Button>
                                    <Button size="sm" onClick={() => { this.toggleRemoveRoleModal() }} color="danger" style={{ marginBottom: '5px' }}>Remove Role</Button>
                                </Col>
                            </Row>
                        </CardFooter>
                    </Card>

                    {/* Modals */}
                    <AssignRole
                        modal={this.state.assignRoleModal}
                        toggle={this.toggleAssignRoleModal}
                        availablePositions={this.props.availablePositions}
                    />

                    <MoveRole
                        modal={this.state.moveRoleModal}
                        toggle={this.toggleMoveRoleModal}
                    />

                    <RemoveRole
                        modal={this.state.removeRoleModal}
                        toggle={this.toggleRemoveRoleModal}
                    />
                </div>
            );
        }
    }
};

export default Season