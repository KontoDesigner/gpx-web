import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Row } from 'reactstrap'
import DestinationRow from './destinationRow'
import Filter from '../../filter';
import Action from '../../action';

class Destination extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    Destination
                </CardHeader>

                <CardBody className="no-padding-bottom">
                    <Row>
                        <Filter />

                        <Action />
                    </Row>

                    <DestinationRow destination={this.props.destination} />
                </CardBody>
            </Card>
        )
    }
}

export default Destination
