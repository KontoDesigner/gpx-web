import React, { Component } from 'react'
import CountryRow from './countryRow'
import { Card, CardBody, CardHeader, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap'
import Filter from '../../filter';

class HeadOf extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          Head Of
        </CardHeader>

        <CardBody className="no-padding-bottom">
          <Row>
            <Filter getData={this.props.getHeadOf} />

            <Col sm="8" className="text-align-right">
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

          <CountryRow headOf={this.props.headOf} />
        </CardBody>
      </Card>
    )
  }
}

export default HeadOf