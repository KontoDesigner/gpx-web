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
              <th scope="col">From</th>
              <th scope="col">Reason For Resignment</th>
              <th scope="col">Job title when Resigned</th>
              <th scope="col">Comments</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {props.applicationHistory
              .filter(x => x.applicationType.trim() === "Resigned")
              .map(h => (
                <tr>
                  <td>{h.applicationType}</td>
                  <td>{moment(h.fromdate).format("YYYY-MM-DD")}</td>
                  <td>{h.reasonForResignment}</td>
                  <td>{h.reason.slice(0, 100)}</td>
                  <td>{h.jobTitleWhenResigned}</td>
                  <td>{h.status}</td>
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
