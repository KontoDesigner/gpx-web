import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'


const TeamInformation = (props) => {
    return (
        <Card>
            <CardHeader>TeamInformation   <div className="pull-right">Status = {props.status}</div> </CardHeader>

            <CardBody>
            TeamInformation
            </CardBody>
        </Card>
    );
};

export default TeamInformation