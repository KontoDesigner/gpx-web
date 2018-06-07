import React, { Component } from 'react'
import PersonTable from './personTable'
import { Card, CardBody, CardHeader } from 'reactstrap';

class DepartureArrival extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    Departure & Arrival
                </CardHeader>

                <CardBody>
                    <PersonTable />
                </CardBody>
            </Card>
        )
    }
}

export default DepartureArrival;