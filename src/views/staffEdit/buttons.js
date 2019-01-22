import React from 'react'
import { Row, Col, Button } from 'reactstrap'

const Buttons = props => {
    return (
        <Row>
        
            <Col className="col-btn-menu pull-left">
           
                <Button
                    onClick={() => {
                        window.close()
                    }}
                    color="danger">
                    Close
                </Button>
                {/* <Button
                    onClick={() => {
                        window.print()
                    }}
                    color="primary">
                    Print
                </Button> */}
                <Button
                   // disabled={props.unsavedEdit === false}
                   // disabled={props.unsavedEdit === false}
                    color="success" 
                    onClick={() => {
                        props.save()
                      
                      
                    }}>
                    Save
                </Button> 
                <Button
                   // disabled={props.unsavedEdit === false}
                   // disabled={props.unsavedEdit === false}
                    color="success" 
                    onClick={() => {
                        props.save()
                        window.close()
                      
                    }}>
                    Save & Close
                </Button> 
                {/* <label>Status = {props.staff.status}</label> */}
            </Col>
            
        </Row>
    )
}

export default Buttons
