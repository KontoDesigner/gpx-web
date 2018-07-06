import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Table } from 'reactstrap'
import Select from 'react-select'

class MoveRole extends Component {
    constructor() {
        super();

        this.state = {
            jobTitles: [],
            selectedDestination: null,
            selectedJobTitle: null
        };
    }

    destinationOnChange = destination => {
        const selectedDestination = destination != null ? destination.destination : null

        const dest = this.props.availablePositions.filter(ap => ap.destination === selectedDestination)[0];

        let jobTitles = [];

        if (dest !== undefined) {
            jobTitles = dest.jobTitles;
        }

        this.setState({
            selectedDestination,
            selectedJobTitle: null,
            jobTitles
        })
    }

    jobTitleOnChange = jobTitle => {
        const selectedJobTitle = jobTitle != null ? jobTitle.mplid : null

        this.setState({
            selectedJobTitle
        })
    }

    toggle = () => {
        this.setState({
            selectedDestination: null,
            selectedJobTitle: null
        })

        this.props.toggle();
    }

    moveRole = (mplid) => {
        this.toggle();

        const destination = this.props.availablePositions.filter(ap => ap.destination === this.state.selectedDestination)[0];
        const position = destination.jobTitles.filter(ap => ap.mplid === mplid)[0];

        this.props.moveRole(this.props.positionAssign.PositionAssignId, position.mplid);
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Move Role</ModalHeader>

                    <ModalBody className="no-padding-bottom">
                        <Row>
                            <Col sm="12" md="6" lg="6" xl="6">
                                <div className="form-group form-group-select">
                                    <label htmlFor="destination">Destination</label>

                                    <Select
                                        id="destination"
                                        valueKey="destination"
                                        labelKey="destination"
                                        className="form-control"
                                        options={this.props.availablePositions}
                                        onChange={this.destinationOnChange}
                                        value={this.state.selectedDestination}
                                        placeholder="Destination"
                                    />
                                </div>
                            </Col>

                            <Col sm="12" md="6" lg="6" xl="6">
                                <div className="form-group form-group-select">
                                    <label htmlFor="jobTitle">Position</label>

                                    <Select
                                        id="jobTitle"
                                        valueKey="mplid"
                                        labelKey="jobTitle"
                                        className="form-control"
                                        options={this.state.jobTitles}
                                        onChange={this.jobTitleOnChange}
                                        value={this.state.selectedJobTitle}
                                        disabled={this.state.selectedDestination === null}
                                        placeholder="Position"
                                    />
                                </div>
                            </Col>
                        </Row>

                        {this.state.selectedJobTitle !== null ?
                            <Row>
                                <Col>
                                    <Table striped bordered responsive>
                                        <thead>
                                            <tr>
                                                <th>MPLID</th>
                                                <th>Version</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>1</th>
                                                <td>Mark</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            : ''}
                    </ModalBody>

                    <ModalFooter>
                        <Button disabled={this.state.selectedJobTitle === null} onClick={() => this.moveRole(this.state.selectedJobTitle)} color="success">Move</Button>{' '}
                        <Button color="danger" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default MoveRole;