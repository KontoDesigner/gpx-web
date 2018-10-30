import React from 'react';
import { Row, Col, Button } from 'reactstrap'

const Buttons = (props) => {
    return (
        <Row>
            <Col className="col-btn-menu">
                <Button onClick={() => { window.close() }} color="danger">Close</Button>
                <Button onClick={() => { window.print() }} color="primary">Print</Button>
                <Button disabled={props.unsavedEdit === false} color="success" onClick={() => { props.save() }}>Save</Button>
            
            </Col>
        </Row>
    );
};

export default Buttons;
