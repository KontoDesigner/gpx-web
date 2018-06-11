import React, { Component } from 'react'
import { Card, CardBody, CardHeader, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap'
import PersonTable from './personTable'
import Filter from '../../filter';

class Name extends Component {
    constructor(props) {
        super()

        this.state = {
            expanded: false
        }
    }

    toggleCollapse = () => {
        this.setState({ expanded: !this.state.expanded })
    }

    render() {
        return (
            <Card className="card-accordion">
                <CardHeader>
                    Name
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

export default Name;