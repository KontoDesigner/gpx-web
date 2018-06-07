import React, { Component } from 'react'
import PersonTable from './personTable'
import { Card, CardBody, CardHeader, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class DepartureArrival extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    Departure & Arrival

                    <UncontrolledDropdown direction="left">
                        <DropdownToggle color="primary" size="sm">
                            Actions
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </CardHeader>

                <CardBody>
                    <PersonTable />
                </CardBody>
            </Card>
        )
    }
}

export default DepartureArrival;