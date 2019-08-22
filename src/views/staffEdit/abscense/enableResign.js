import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';

const DisableResign = (props) => {

    function enableResign(staffID) {
        debugger;
        props.toggle();
        props.handleSaveResign(staffID);

     
    }

    return (
        <div> 
            <Modal isOpen={props.modal} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>Enable Resign</ModalHeader>
                <ModalBody>
                    <Alert color="danger">
                        Are you sure you want to enable resign?  
                    </Alert>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => enableResign(props.staffID)}>Enable</Button>{' '}
                    <Button color="danger" onClick={props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DisableResign;