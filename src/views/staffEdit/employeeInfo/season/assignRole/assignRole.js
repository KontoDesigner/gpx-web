import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap'
import DestinationRow from './destinationRow'

const AssignRole = (props) => {
    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle} size='lg'>
                <ModalHeader toggle={props.toggle}>Assign Role</ModalHeader>
                <ModalBody>
                    <Row>
                        {props.availablePositions.map((availablePosition, index) =>
                            <Col key={index} sm="12" md="6" lg="4" xl="3">
                                <DestinationRow
                                    availablePosition={availablePosition}
                                />
                            </Col>
                        )}
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={props.toggle}>Do Something</Button>{' '}
                    <Button color="danger" onClick={props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default AssignRole;