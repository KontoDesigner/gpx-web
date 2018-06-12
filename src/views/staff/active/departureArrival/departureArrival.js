import React, { Component } from 'react'
import PersonTable from './personTable'
import { Card, CardBody, CardHeader, Row } from 'reactstrap'
import Filter from '../../filter';
import Action from '../../action';

class DepartureArrival extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    Departure & Arrival
                </CardHeader>

                <CardBody>
                    <Row>
                        <Filter />

                        <Action />
                    </Row>

                    <PersonTable />
                </CardBody>
            </Card>
        )
    }
}

export default DepartureArrival;