import React, { Component } from 'react'
import DestinationRow from './destinationRow'
import { Card, CardBody, CardHeader, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap'
import Filter from '../../filter';

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

                        <Col sm="9" className="text-align-right">
                            <UncontrolledDropdown direction="left">
                                <DropdownToggle color="primary">
                                    Actions
                            </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Another Action</DropdownItem>
                                    <DropdownItem>Another Action</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Col>
                    </Row>

                    <DestinationRow />
                </CardBody>
            </Card>
        )
    }
}

export default HeadOf;