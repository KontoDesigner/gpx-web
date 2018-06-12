import React, { Component } from 'react'
import CountryRow from './countryRow'
import { Card, CardBody, CardHeader, Row } from 'reactstrap'
import Filter from '../../filter';
import Action from '../../action';

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

            <Action />
          </Row>

          <CountryRow headOf={this.props.headOf} />
        </CardBody>
      </Card>
    )
  }
}

export default HeadOf