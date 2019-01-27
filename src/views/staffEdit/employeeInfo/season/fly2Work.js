import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Row, Col, Table } from 'reactstrap'
import Select from 'react-select'

class Fly2Work extends Component {
    //const ResignStaff = props => {
    constructor(props) {
        super(props)
        this.dates = []
        debugger
        this.state = {
            selectedDirection: null,
            directions: [
                {
                    id: 'Arriving',
                    name: 'Arriving'
                },
                {
                    id: 'Departing',
                    name: 'Departing'
                }
            ]
        }
    }

    createSend = positionAssign => {
        this.toggle()

        let model = {}

        this.props.send(positionAssign, this.state.selectedDirection.id)
    }

    directionChange = id => {
        debugger

        const selectedDirection = id

        this.setState({
            selectedDirection
        })
        debugger
    }

    toggle = () => {
        debugger

        this.props.toggle()
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Fly2Work Select Direction - {this.props.selectedDirection}</ModalHeader>
                    <ModalBody>
                        {/* <Alert color="danger">
                          Are you sure you want to make position vacant? 
                      </Alert> */}

                        <Row>
                            <Col>
                                <Table striped bordered responsive>
                                    <thead>
                                        <tr>
                                            <th colSpan="2">Directions </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan="2">
                                                <Select
                                                    id="id"
                                                    valueKey="id"
                                                    labelKey="name"
                                                    className="form-control"
                                                    options={this.state.directions}
                                                    onChange={this.directionChange}
                                                    value={this.state.selectedDirection}
                                                    placeholder="Select"
                                                    className="form-group form-group-select"
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={() => this.createSend(this.props.positionAssign)}>
                            Send
                        </Button>{' '}
                        <Button color="danger" onClick={this.toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default Fly2Work
