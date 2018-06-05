import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap';
import PositionTable from './positionTable'

class NewEmployees extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    Save Conflicts
                </CardHeader>

                <CardBody>
                    <PositionTable />
                </CardBody>
            </Card>
        )
    }
}

export default NewEmployees;