import React, { Component } from 'react'
import { Card, CardBody, CardHeader, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap'
import NationalityRow from './nationalityRow'
import Filter from '../../filter';

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

                    <NationalityRow />
                </CardBody>
            </Card>
        )
    }
}

export default A1;