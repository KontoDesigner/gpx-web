import React, { Component } from 'react'
import CountryRow from './countryRow'
import { Card, CardBody, CardHeader } from 'reactstrap';

class HeadOf extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    Head Of
                </CardHeader>

                <CardBody className="no-padding-bottom">
                    <CountryRow />
                </CardBody>
            </Card>
        )
    }
}

export default HeadOf;