import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Row, Col, Table } from 'reactstrap'
import Select from 'react-select'

class Accept extends Component {
    //const ResignStaff = props => {
    constructor(props) {
        super(props)
        this.dates = []
        debugger
        this.state = {
            selectedAction: null,
            actions: [
                {
                    id: 'Accepted',
                    name: 'Accepted'
                },
                {
                    id: 'Declined',
                    name: 'Declined'
                },

                {
                    id: 'Reset',
                    name: 'Reset'
                }
            ]
        }
    }

    createAcceptStaff = positionAssign => {
        this.toggle()

        let model = {}
debugger;
        this.props.createAcceptStaff(positionAssign, this.state.selectedAction.id)
    }

    actionChange = id => {
        debugger

        const selectedAction = id

        this.setState({
            selectedAction
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
                <Modal isOpen={this.props.modal} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>Accept/Decline/Reset </ModalHeader>
                    <ModalBody > 
     

                        <Row>
                            <Col>
                                <Table striped bordered responsive>
                                    <thead>
                                        <tr>
                                            <th colSpan="2">Select Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan="2" height="150">
                                                { <Select
 
                                                    id="id"
                                                    valueKey="id"
                                                    labelKey="name"
                                                    className="form-control"
                                                    options={this.state.actions}
                                                    onChange={this.actionChange}
                                                    value={this.state.selectedAction}
                                                    placeholder="Select"
                                                    className="form-group form-group-select"
                                                    
                                                /> }


                                        
                                            </td>
                                        
                                                
                                            
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={() => this.createAcceptStaff(this.props.positionAssign)}>
                            OK
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

export default Accept
