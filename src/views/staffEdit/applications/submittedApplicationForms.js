import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  CardHeader
} from "reactstrap";
import moment from "moment";

const SubmittedApplicationForms = props => {
 // alert(props.abscenseHistory.length);
  return (
    
    <Card>
      {/* <CardHeader>SubmittedApplicationForms {props.applicationHistory.length}</CardHeader> */}
      <CardHeader>
        SubmittedApplicationForms{" "}
        {/* {props.lengthOfHistory(props.applicationHistory.length)} */}
        {/* {props.lengthOfHistory(props.applicationHistory.length)} */}
      </CardHeader>

      <CardBody>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ApplicationType</th>
              <th scope="col">StartDate</th> 
               <th scope="col">Modified</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {props.abscenseHistory.map(h => (
                <tr>
                  <td>{h.applicationType?h.applicationType:"LeaveOfAbscense"}</td>
                  <td>{h.absentStart?moment(h.absentStart).format("YYYY-MM-DD"):"Abscense Start Date missing"}</td>
                   <td>{moment(h.dateModified).format("YYYY-MM-DD")}</td>

              <td>{h.status?h.status:"Received"}</td>
                </tr>
              ))}
                 {props.applicationHistory.map(ap => (
                <tr>
                  <td>{ap.applicationType?ap.applicationType:"Resigned"}</td>
                  <td>{ap.appDate?moment(ap.appDate).format("YYYY-MM-DD"):"Resign Start Date missing"}</td>
                   <td>{moment(ap.dateModified).format("YYYY-MM-DD")}</td>
                 
        
                  <td>{ap.status?ap.status:"Received"}</td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* <ListGroup>
                    
                    {props.applicationHistory.map(h => (
                        <ListGroupItem>{h.applicationType}{'From:'+h.fromDate}{'ManagerReason:'+h.managerReason} {'Received:' + h.status}</ListGroupItem>
                    ))
                    }

                </ListGroup> */}
      </CardBody>
    </Card>
  );
};
export default SubmittedApplicationForms;
