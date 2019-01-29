import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Card, CardBody, CardHeader ,Col} from 'reactstrap'
import moment from "moment";
class ConfirmedDates extends Component {
    

    render() {

        return (
            <Card>
            {<CardHeader>Confirmed Dates <div class="pull-right"></div></CardHeader> }

            <CardBody>
            <div className="form-row">
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                   <b>Confirmed Date</b>  
                    </Col>
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                   <b> Destination </b>
                    </Col>
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                    <b>Direction</b> 
                    </Col>
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                   <b>Date Modified </b>
                    </Col>

                    </div>

                              {this.props.confirmedDate.map(dh => (

<div className="form-row">
<Col sm="12" md="3" lg="3" xl="3" className="form-group">
{dh.confirmedDate?moment(dh.confirmedDate).format("YYYY-MM-DD"):""}

</Col>
<Col sm="12" md="3" lg="3" xl="3" className="form-group">
{dh.destination?dh.destination:""}
</Col>   

<Col sm="12" md="3" lg="3" xl="3" className="form-group">
{dh.direction?dh.direction:""}
</Col>   
             
<Col sm="12" md="3" lg="3" xl="3" className="form-group">
           {dh.dateModified? moment(dh.dateModified).format("YYYY-MM-DD HH:mm:ss"):""}
      
                    </Col>     
                    </div>       
                
              ))}
              
        </CardBody>
    </Card>
        )
    }
}


export default ConfirmedDates