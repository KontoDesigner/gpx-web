import React, { Component } from 'react'
import { Card, CardBody, CardHeader, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap'
import PersonTable from './personTable'
import Filter from '../../filter';

class RecentlyInactive extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    Recently Inactive
                </CardHeader>

                <CardBody>
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

                    <PersonTable />
                </CardBody>
            </Card>
        )
    }
}

export default RecentlyInactive;