import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Card, CardBody, CardHeader ,Col} from 'reactstrap'
import moment from "moment";


const DestinationHistory = (props) => {

  if (props.destinationHistory) {

    return (
        <Card>
            <CardHeader>DestinationHistory {props.destinationHistory.length}<div class="pull-right">Status = {props.status}</div></CardHeader>

            <CardBody>
            <div className="form-row">
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                   <b>Destination</b>  
                    </Col>
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                   <b> Job Title </b>
                    </Col>
                
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                   <b>Date Modified </b>
                    </Col>
</div>
     
          {props.destinationHistory.map(dh => (

<div className="form-row">
<Col sm="12" md="3" lg="3" xl="3" className="form-group">
{dh.destination}
</Col>
<Col sm="12" md="3" lg="3" xl="3" className="form-group">
{dh.jobTitle}
</Col>   
             
<Col sm="12" md="3" lg="3" xl="3" className="form-group">
                    {moment(dh.DateModified).format("YYYY-MM-DD HH:mm:ss")}
                    </Col>     
                    </div>       
                
              ))}
         
        </CardBody>
    </Card>

       
    );
          }
};



export default DestinationHistory