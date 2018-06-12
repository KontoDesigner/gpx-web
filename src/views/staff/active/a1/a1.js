import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Row } from 'reactstrap'
import NationalityRow from './nationalityRow'
import Filter from '../../filter';
import Action from '../../action';

class A1 extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    A1
                </CardHeader>

                <CardBody className="no-padding-bottom">
                    <Row>
                        <Filter />

                        <Action />
                    </Row>

                    <NationalityRow />
                </CardBody>
            </Card>
        )
    }
}

export default A1;