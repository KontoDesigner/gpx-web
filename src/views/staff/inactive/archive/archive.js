import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Row } from 'reactstrap'
import PersonTable from './personTable'
import Filter from '../../filter';
import Action from '../../action';

class Archive extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    Recently Inactive
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

export default Archive;