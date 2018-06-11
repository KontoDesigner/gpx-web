import React, { Component } from 'react'
import { Card, CardBody, CardHeader, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import DestinationRow from './destinationRow'

class Destination extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          Destination
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
          <DestinationRow destination={this.props.destination} />
        </CardBody>
      </Card>
    )
  }
}

export default Destination
