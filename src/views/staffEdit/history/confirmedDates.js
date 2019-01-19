import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Card, CardBody, CardHeader ,Col} from 'reactstrap'

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
                    <b>Who</b> 
                    </Col>
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                   <b>Date Modified </b>
                    </Col>

                    </div>
              
        </CardBody>
    </Card>
        )
    }
}

export default ConfirmedDates