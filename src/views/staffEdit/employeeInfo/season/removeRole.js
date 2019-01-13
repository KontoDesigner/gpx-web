import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';

const RemoveRole = (props) => {
debugger;
    function removeRole(positionAssignId,startDate) {
        props.removeRole(positionAssignId,startDate);

        props.toggle();
    }

    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>Remove Position</ModalHeader>
                <ModalBody>
                    <Alert color="danger">
                        Are you sure you want to remove position? 
                    </Alert>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => removeRole(props.positionAssign.MPLID,props.positionAssign.StaffStartDate)}>Remove</Button>{' '}
                    <Button color="danger" onClick={props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default RemoveRole;