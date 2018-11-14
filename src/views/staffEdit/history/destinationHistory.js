import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Card, CardBody, CardHeader } from 'reactstrap'



const DestinationHistory = (props) => {
    return (
        <Card>
            <CardHeader>DestinationHistory {props.destinationHistory.length}</CardHeader>

            <CardBody>
                <ListGroup>
                    {props.destinationHistory.map(h => (
                        <ListGroupItem>{h.destination} {h.jobTitle}</ListGroupItem>
                    ))
                    }

                </ListGroup>

                
            </CardBody>
        </Card>
    );
};



export default DestinationHistory