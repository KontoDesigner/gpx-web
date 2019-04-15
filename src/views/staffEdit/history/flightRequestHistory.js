import React from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import FlightRequestHistoryTable from './flightRequestHistoryTable'

const FlightRequestHistory = props => {
    return (
        <Card>
            <CardHeader>Flight Request History</CardHeader>

            <CardBody>
                <FlightRequestHistoryTable flightRequestHistory={props.flightRequestHistory} />
            </CardBody>
        </Card>
    )
}

export default FlightRequestHistory
