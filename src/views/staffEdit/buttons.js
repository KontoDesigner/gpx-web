import React from 'react';
import { Row, Col, Button } from 'reactstrap'

const Buttons = (props) => {
    return (
        <Row>
            <Col className="d-none d-xs-block d-sm-block d-md-block d-lg-none" style={{ paddingBottom: '15px' }}>
                <Row>
                    <Col className="col-btn-menu">
                        <Button onClick={() => { window.close() }} color="danger">Close</Button>
                        <Button onClick={() => { window.print() }} color="primary">Print</Button>
                        <Button color="success" onClick={() => { props.save() }}>Save</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Buttons;
