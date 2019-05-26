import React from 'react'
import { Row, Col, Button } from 'reactstrap'

const Buttons = props => {
    return (
        <Row>
        
            <Col className="col-btn-menu pull-left">
           
            <Button
               //className="pull-right"
                size="sm"
                onClick={() => { 
                    props.toggleAssignRoleModal()
                }}
                color="primary"
                style={{ marginRight: '10px', marginBottom: '10px' }}>
                Assign Applicant To Position
            </Button>




                <Button
                    onClick={() => {
                        window.close()
                    }}
                    color="danger"
                    style={{ marginRight: '10px', marginBottom: '10px' }}>
                    
                    
                    Close
                </Button>
        
                { <Button
 
                    color="success" 
                    onClick={() => {

                        
                        props.save()
                      
                      
                    }}
                    style={{ marginRight: '10px', marginBottom: '10px' }}>
                    
                    Save & Close
                </Button>  }
   
            </Col>
            
        </Row>
    )
}

export default Buttons
