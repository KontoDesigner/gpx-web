import React from 'react'
import { Row, Col, Button } from 'reactstrap'

const Buttons = props => {
    return (
        <Row>
        
            <Col className="col-btn-menu pull-left">
           
            <Button
              
                size="sm"
                onClick={() => { 
                    props.toggleAssignRoleModal()
                }}
                color="primary" 
                 style={{ marginRight: '5px', marginTop: '5px', marginBottom: '3px' }}
                >
               
                Assign Applicant To Position
            </Button>
          
            {/* <Button
              class="align-top"
                size="sm"
                onClick={() => { 
                    props.toggleAssignRoleModal()
                }}
                color="info"
                style={{ marginRight: '10px',margintop: '1px',  marginBottom: '1px' }}>
                
                Edit Assignment
            </Button> */}
            {/* <Button
             
                size="sm"
                onClick={() => { 
                    props.toggleRemoveRoleModal() 
                }}
                color="danger"
                 style={{ marginRight: '5px', marginTop: '5px',  marginBottom: '3px' }}
                >
                
                Remove Assignment
            </Button> */}

               
   
            </Col>
            
        </Row>
    )
}

export default Buttons
