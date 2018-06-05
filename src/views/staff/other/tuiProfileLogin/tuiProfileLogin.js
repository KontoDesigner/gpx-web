import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap';
import PositionTable from './positionTable'

class TUIProfileLogin extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    TUI Profile Login
                </CardHeader>

                <CardBody>
                    <PositionTable />
                </CardBody>
            </Card>
        )
    }
}

export default TUIProfileLogin;