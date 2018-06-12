import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Row } from 'reactstrap'
import PersonTable from './personTable'
import Filter from '../../filter';
import Action from '../../action';

class ITSDAdmin extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    ITSD Admin
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

export default ITSDAdmin;