import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap';
import PositionTable from './positionTable'

class ITSDAdmin extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    ITSD Admin
                </CardHeader>

                <CardBody>
                    <PositionTable />
                </CardBody>
            </Card>
        )
    }
}

export default ITSDAdmin;