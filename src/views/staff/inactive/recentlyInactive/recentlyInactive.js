import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap';
import PersonTable from './personTable'

class RecentlyInactive extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    Recently Inactive
                </CardHeader>

                <CardBody>
                    <PersonTable />
                </CardBody>
            </Card>
        )
    }
}

export default RecentlyInactive;