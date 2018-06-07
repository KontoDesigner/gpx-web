import React, { Component } from 'react'
import { Card, CardBody, CardHeader, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import NationalityRow from './nationalityRow'

class A1 extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    A1

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

                <CardBody className="no-padding-bottom">
                    <NationalityRow/>
                </CardBody>
            </Card>
        )
    }
}

export default A1;