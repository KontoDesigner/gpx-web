import React, { Component } from 'react'
import DestinationRow from './destinationRow'
import { Card, CardBody, CardHeader } from 'reactstrap';

class HeadOf extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    Job Title
                </CardHeader>

                <CardBody className="no-padding-bottom">
                    <DestinationRow />
                </CardBody>
            </Card>
        )
    }
}

export default HeadOf;