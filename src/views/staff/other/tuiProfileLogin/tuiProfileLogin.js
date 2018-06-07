import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap';
import PersonTable from './personTable'

class TUIProfileLogin extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    TUI Profile Login
                </CardHeader>

                <CardBody>
                    <PersonTable />
                </CardBody>
            </Card>
        )
    }
}

export default TUIProfileLogin;