import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';

const DisableResign = (props) => {

    function disableResign(staffID) {
        debugger;
        props.toggle();
        props.handleDisableResign('0',staffID);

      
    }

    return (
        <div> 
            <Modal isOpen={props.modal} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>Disable Resign</ModalHeader>
                <ModalBody>
                    <Alert color="danger">
                        Are you sure you want to disable resign?  
                    </Alert>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => disableResign(props.staffID)}>Disable</Button>{' '}
                    <Button color="danger" onClick={props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DisableResign;