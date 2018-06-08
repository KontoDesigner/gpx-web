import React, { Component } from 'react'
import CountryRow from './countryRow'
import { Card, CardBody, CardHeader, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

class HeadOf extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Card>
        <CardHeader>
          Head Of
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
          <CountryRow headOf={this.props.headOf} />
        </CardBody>
      </Card>
    )
  }
}

export default HeadOf
