import React, { Component } from 'react'
import DestinationRow from './destinationRow'
import { Card, CardBody, CardHeader, Row } from 'reactstrap'
import Filter from '../../filter';
import Action from '../../action';

class HeadOf extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    Job Title
                </CardHeader>

                <CardBody className="no-padding-bottom">
                    <Row>
                        <Filter />

                        <Action />
                    </Row>

                    <DestinationRow />
                </CardBody>
            </Card>
        )
    }
}

export default HeadOf;