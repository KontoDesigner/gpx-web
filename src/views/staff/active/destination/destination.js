import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap';
import DestinationRow from './destinationRow'

class HeadOf extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    Destination
                </CardHeader>

                <CardBody className="no-padding-bottom">
                    <DestinationRow/>
                </CardBody>
            </Card>
        )
    }
}

export default HeadOf;