import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap';
import PositionTable from './positionTable'

class RecentlyInactive extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    Recently Inactive
                </CardHeader>

                <CardBody>
                    <PositionTable />
                </CardBody>
            </Card>
        )
    }
}

export default RecentlyInactive;