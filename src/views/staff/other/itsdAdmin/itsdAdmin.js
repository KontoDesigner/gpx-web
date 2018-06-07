import React, { Component } from 'react'
import { Card, CardBody, CardHeader, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PersonTable from './personTable'

class ITSDAdmin extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    ITSD Admin

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

export default ITSDAdmin;