import React, { Component } from 'react'
import { Card, CardBody, CardFooter, CardHeader, Row, Col, Button } from 'reactstrap'
import TextInput from '../../../../components/textInput'
import AssignRole from './assignRole'
import MoveRole from './moveRole'
import RemoveRole from './removeRole'
import Datetime from 'react-datetime'
import moment from "moment";
class Season extends Component {
    constructor() {
        super()

        this.state = {
            assignRoleModal: false,
            moveRoleModal: false,
            removeRoleModal: false
        }
    }

    toggleAssignRoleModal = () => {
        this.setState({
            assignRoleModal: !this.state.assignRoleModal
        })
    }

    toggleMoveRoleModal = () => {
        this.setState({
            moveRoleModal: !this.state.moveRoleModal
        })
    }

    toggleRemoveRoleModal = () => {
        this.setState({
            removeRoleModal: !this.state.removeRoleModal
        })
    }

    handlePositionAssignDatePicker = (field, date, season) => {
        let val = ''

        //Picker
        if (date._d) {
            val = date._d
        }

        //Manual
        if (!date._d) {
            val = date
        }

        this.props.handlePositionAssignField(field, val)

        this.props.handleUnsavedEdit()
    }

    render() {
        const assignModal = (
            <AssignRole
                modal={this.state.assignRoleModal}
                toggle={this.toggleAssignRoleModal}
                availablePositions={this.props.nowAvailablePositions}
                assignRole={this.props.assignRole}
                positionAssign={this.props.positionAssign}
                season={this.props.season}
            />
        )

        const assignBtn = (
            <Button
                disabled={this.props.positionAssign !== undefined && this.props.positionAssign !== null}
                size="sm"
                onClick={() => {
                    this.toggleAssignRoleModal()
                }}
                color="primary"
                style={{ marginRight: '10px', marginBottom: '10px' }}>
                Assign Position
            </Button>
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
                                <Col>{assignBtn}</Col>
                            </Row>
                        </CardFooter>
                    </Card>

                    {assignModal}
                </div>
            )
        } else {
            return (
                <div>
                    <Card>
                        <CardHeader>{this.props.title}</CardHeader>

                        <CardBody className="no-padding-bottom">
                            <div className="form-row">
                                <Col sm="12" md="6" lg="6" xl="6" className="form-group">
                                    <TextInput
                                        name="regionHeadOf"
                                        label="Region/Head Of"
                                        disabled={true}
                                        value={this.props.positionAssign.Region + ' ' + this.props.positionAssign.HeadOf}
                                    />
                                </Col>

                                <Col sm="12" md="6" lg="6" xl="6" className="form-group">
                                    <TextInput
                                        name="location"
                                        label="Location"
                                        disabled={true}
                                        value={
                                            this.props.positionAssign.SDD_DM +
                                            ' ' +
                                            this.props.positionAssign.Destination +
                                            ' ' +
                                            this.props.positionAssign.ConceptHotel
                                        }
                                    />
                                </Col>

                                <Col sm="12" md="6" lg="6" xl="6" className="form-group">
                                    <TextInput name="jobFamily" label="Job Family" disabled={true} value={this.props.positionAssign.JobFamily} />
                                </Col>

                                <Col sm="12" md="6" lg="6" xl="6" className="form-group">
                                    <TextInput name="jobTitle" label="Job Title" disabled={true} value={this.props.positionAssign.JobTitle} />
                                </Col>

                                <Col sm="12" md="6" lg="6" xl="6" className="form-group">
                                    <label htmlFor="StaffStartDate">Start Date</label>

                                    <Datetime
                                        value={this.props.positionAssign !== null ? moment(this.props.positionAssign.StaffStartDate).format("YYYY-MM-DD") : ''}
                                        onChange={v => {
                                            this.handlePositionAssignDatePicker('StaffStartDate', v, this.props.title)
                                        }}
                                        timeFormat={false}
                                        dateFormat="YYYY-MM-DD"
                                        closeOnSelect
                                        utc={true}
                                        inputProps={{ placeholder: 'YYYY-MM-DD' }}
                                    />
                                </Col>

                                <Col sm="12" md="6" lg="6" xl="6" className="form-group">
                                    <label htmlFor="StaffEndDate">End Date</label>
                                
                                    <Datetime
                                        value={this.props.positionAssign !== null ? moment(this.props.positionAssign.StaffEndDate).format("YYYY-MM-DD") : ''}
                                        onChange={v => {
                                            this.handlePositionAssignDatePicker('StaffEndDate', v, this.props.title)
                                        }}
                                        timeFormat={false}
                                        dateFormat="YYYY-MM-DD"
                                        closeOnSelect
                                        utc={true}
                                        inputProps={{ placeholder: 'YYYY-MM-DD' }}
                                    />
                                </Col>
                            </div>
                        </CardBody>

                        <CardFooter style={{ paddingBottom: '0px' }}>
                            <Row>
                                <Col>
                                    {assignBtn}
                              
                                    <Button
                                        size="sm"
                                        onClick={() => {
                                            this.toggleRemoveRoleModal()
                                        }}
                                        color="danger"
                                        style={{ marginRight: '10px', marginBottom: '10px' }}>
                                        Remove Assignment
                                    </Button>
                                    {this.props.send !== null && (
                                        <Button
                                            size="sm"
                                            onClick={() => {
                                                this.props.send(this.props.positionAssign)
                                            }}
                                            color="warning"
                                            style={{ marginBottom: '10px' }}>
                                            Send to Fly2Work
                                        </Button>
                                    )}
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
            )
        }
    }
}

export default Season
