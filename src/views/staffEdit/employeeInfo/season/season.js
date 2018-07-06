import React, { Component } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Row, Col, Button } from 'reactstrap'
import TextInput from '../../../../components/textInput'
import AssignRole from './assignRole'
import MoveRole from './moveRole'
import RemoveRole from './removeRole'
import Datetime from 'react-datetime'

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
        const assignModal = (
            <AssignRole
                modal={this.state.assignRoleModal}
                toggle={this.toggleAssignRoleModal}
                availablePositions={this.props.availablePositions}
                assignRole={this.props.assignRole}
                positionAssign={this.props.positionAssign}
                season={this.props.season}
            />
        )

        const assignBtn = (
            <Button disabled={this.props.positionAssign !== undefined && this.props.positionAssign !== null} size="sm" onClick={() => { this.toggleAssignRoleModal() }} color="primary" style={{ marginRight: '10px', marginBottom: '10px' }}>Assign Role</Button>
        )

        if (this.props.positionAssign === undefined || this.props.positionAssign === null) {
            return (
                <div>
                    <Card>
                        <CardHeader>{this.props.title}</CardHeader>

                        <CardBody>
                            <Row>
                                <Col>
                                    <b className="card-text text-danger">No {this.props.title.toLowerCase()} found.</b>
                                </Col>
                            </Row>
                        </CardBody>

                        <CardFooter style={{ paddingBottom: '0px' }}>
                            <Row>
                                <Col>
                                    {assignBtn}
                                </Col>
                            </Row>
                        </CardFooter>
                    </Card>

                    {assignModal}
                </div>
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
                                        <TextInput name="regionHeadOf" label="Region/Head Of" disabled={true} value={this.props.positionAssign.Region + ' ' + this.props.positionAssign.HeadOf} />
                                    </div>
                                </Col>

                                <Col sm="12" md="6" lg="6" xl="6">
                                    <div className="form-group">
                                        <TextInput name="location" label="Location" disabled={true} value={this.props.positionAssign.SDD_DM + ' ' + this.props.positionAssign.Destination + ' ' + this.props.positionAssign.ConceptHotel} />
                                    </div>
                                </Col>

                                <Col sm="12" md="6" lg="6" xl="6">
                                    <div className="form-group">
                                        <TextInput name="jobFamily" label="Job Family" disabled={true} value={this.props.positionAssign.JobFamily} />
                                    </div>
                                </Col>

                                <Col sm="12" md="6" lg="6" xl="6">
                                    <div className="form-group">
                                        <TextInput name="jobTitle" label="Job Title" disabled={true} value={this.props.positionAssign.JobTitle} />
                                    </div>
                                </Col>

                                <Col sm="12" md="6" lg="6" xl="6">
                                    <div className="form-group">
                                        <label htmlFor="StaffStartDate">Start Date</label>

                                        <Datetime
                                            value={this.props.positionAssign !== null ? this.props.positionAssign.StaffStartDate : ''}
                                            onChange={(v) => { this.props.handlePositionAssignDatePicker('StaffStartDate', v, this.props.title) }}
                                            timeFormat={false}
                                            dateFormat="YYYY-MM-DD"
                                            closeOnSelect
                                            utc={true}
                                            inputProps={{ placeholder: 'YYYY-MM-DD' }} />
                                    </div>
                                </Col>

                                <Col sm="12" md="6" lg="6" xl="6">
                                    <div className="form-group">
                                        <label htmlFor="StaffEndDate">End Date</label>

                                        <Datetime
                                            value={this.props.positionAssign !== null ? this.props.positionAssign.StaffEndDate : ''}
                                            onChange={(v) => { this.props.handlePositionAssignDatePicker('StaffEndDate', v, this.props.title) }}
                                            timeFormat={false}
                                            dateFormat="YYYY-MM-DD"
                                            closeOnSelect
                                            utc={true}
                                            inputProps={{ placeholder: 'YYYY-MM-DD' }} />
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>

                        <CardFooter style={{ paddingBottom: '0px' }}>
                            <Row>
                                <Col>
                                    {assignBtn}
                                    <Button size="sm" onClick={() => { this.toggleMoveRoleModal() }} color="primary" style={{ marginRight: '10px', marginBottom: '10px' }}>Move Role</Button>
                                    <Button size="sm" onClick={() => { this.toggleRemoveRoleModal() }} color="danger" style={{ marginBottom: '10px' }}>Remove Role</Button>
                                </Col>
                            </Row>
                        </CardFooter>
                    </Card>

                    {assignModal}

                    <MoveRole
                        modal={this.state.moveRoleModal}
                        toggle={this.toggleMoveRoleModal}
                        availablePositions={this.props.availablePositions}
                        moveRole={this.props.moveRole}
                        positionMove={this.props.positionMove}
                        season={this.props.season}
                        positionAssign={this.props.positionAssign}
                    />

                    <RemoveRole
                        modal={this.state.removeRoleModal}
                        toggle={this.toggleRemoveRoleModal}
                        positionAssign={this.props.positionAssign}
                        season={this.props.season}
                        removeRole={this.props.removeRole}
                    />
                </div>
            );
        }
    }
};

export default Season