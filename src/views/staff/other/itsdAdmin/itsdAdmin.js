import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap';
import PersonTable from './personTable'

class ITSDAdmin extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    ITSD Admin
                </CardHeader>

                <CardBody>
                    <PersonTable />
                </CardBody>
            </Card>
        )
    }
}

export default ITSDAdmin;