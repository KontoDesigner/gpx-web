import React, { Component } from 'react'
import PositionTable from './positionTable'
import { Card, CardBody, CardHeader } from 'reactstrap';

class DepartureArrival extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    Departure & Arrival
                </CardHeader>

                <CardBody>
                    <PositionTable />
                </CardBody>
            </Card>
        )
    }
}

export default DepartureArrival;