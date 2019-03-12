import React, { Component } from 'react'
import { Card, CardBody, CardFooter, CardHeader, Row, Col, Button } from 'reactstrap'
import TextInput from '../../../../components/textInput'
import AssignRole from './assignRole'
import MoveRole from './moveRole'
import RemoveRole from './removeRole'
import EditPosition from './editPosition'
import Fly2Work from './fly2Work'
import Datetime from 'react-datetime'
import moment from "moment";
class Season extends Component {
    constructor() {
        super()

        this.state = {
            assignRoleModal: false,
            moveRoleModal: false,
            removeRoleModal: false,
            fly2WorkModal: false,
            editPositionModal:false

        



        }
    }

    toggleAssignRoleModal = () => {
        this.setState({
            assignRoleModal: !this.state.assignRoleModal
        })
    }


    toggleEditPositionModal = () => {
        this.setState({
            editPositionModal: !this.state.editPositionModal
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

    toggleFly2WorkModal = (positionAssign) => {
        
        this.setState({
            fly2WorkModal: !this.state.fly2WorkModal
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

               // currentPositionAssign={this.props.currentPositionAssign}
               // nextPositionAssign={this.props.nextPositionAssign}
               // followingPositionAssign={this.props.followingPositionAssign}
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
                Assign To Position
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
                                    {/* <b className="card-text text-danger">No {this.props.title.toLowerCase()} found.</b> */}
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
                                          {/* {this.props.positionAssign.StaffStartDate} */}
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
                                        label="Destination"
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
                                    <TextInput name="jobTitle" label="Job Title" disabled={true} value={this.props.positionAssign.JobTitle } />
                                </Col>

                                <Col sm="12" md="6" lg="6" xl="6" className="form-group">
                                    <label htmlFor="StaffStartDate">Planned Staff Arrival</label>

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
                                    <label htmlFor="StaffEndDate">Planned Staff Departure</label>
                                
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
                                <Col sm="12" md="6" lg="6" xl="6" className="form-group">
                                    <TextInput name="ConfirmedDate" label="Confirmed Staff Arrival" disabled={true} value={this.props.positionAssign.ConfirmedDate? moment(this.props.positionAssign.ConfirmedDate).format("YYYY-MM-DD"):""} />
                                </Col>

                                     <Col sm="12" md="6" lg="6" xl="6" className="form-group">
                                    <TextInput name="ConfirmedDepDate" label="Confirmed Staff Departure" disabled={true} value={this.props.positionAssign.ConfirmedDepDate? moment(this.props.positionAssign.ConfirmedDepDate).format("YYYY-MM-DD"):""} />
                                </Col>

                            </div>
                        </CardBody>

                        <CardFooter style={{ paddingBottom: '0px' }}>
                            <Row>
                                <Col>
                                    {assignBtn}

                                         <Button
                disabled={this.props.positionAssign === undefined && this.props.positionAssign === null}
                size="sm"
                onClick={() => {
                    this.toggleEditPositionModal()
                }}
               color="info"
                style={{ marginRight: '10px', marginBottom: '10px' }}>
                Edit Assignment
            </Button>
                              
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

                                                
                                                    this.toggleFly2WorkModal()
                
                                               // this.props.send(this.props.positionAssign)
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


       <EditPosition
                modal={this.state.editPositionModal}
                toggle={this.toggleEditPositionModal}
                availablePositions={this.props.nowAvailablePositions}
                editPosition={this.props.editPosition}
                positionAssign={this.props.positionAssign}
                season={this.props.season}
            />

            <Fly2Work
                modal={this.state.fly2WorkModal}
                toggle={this.toggleFly2WorkModal}
                positionAssign={this.props.positionAssign}
                send={this.props.send}
               
            />
        

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
