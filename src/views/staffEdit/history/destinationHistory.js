import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Card, CardBody, CardHeader } from 'reactstrap'



const DestinationHistory = (props) => {
    return (
        <Card>
            <CardHeader>DestinationHistory {props.destinationHistory.length}<div class="pull-right">Status = {props.status}</div></CardHeader>

            <CardBody>
            <table className="table">
          <thead> 
            <tr>
              <th scope="col">Destination</th>
              <th scope="col">JobTitle</th>
             
            </tr>
          </thead>
          <tbody>
          {props.destinationHistory.map(dh => (
                <tr>
                  <td>{dh.destination}</td>
             
                  <td>{dh.jobTitle}</td>
                </tr>
              ))}
          </tbody>
           </table>
        </CardBody>
    </Card>

       
    );
};



export default DestinationHistory