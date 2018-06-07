import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap';
import PersonTable from './personTable'

class NewEmployees extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    Save Conflicts
                </CardHeader>

                <CardBody>
                    <PersonTable />
                </CardBody>
            </Card>
        )
    }
}

export default NewEmployees;