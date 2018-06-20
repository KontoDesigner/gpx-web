import React, { Component } from 'react'
import CountryRow from './countryRow'
import { Card, CardBody, CardHeader, Row } from 'reactstrap'
import Filter from '../../filter'
import Action from '../../action'

class HeadOf extends Component {
  constructor() {
    super()

    this.state = {
      selectedPersons: []
    }
  }

  componentWillReceiveProps() {
    if (this.state.selectedPersons.length !== 0) {
      //Reset selectedPersons if props change
      this.setState({
        selectedPersons: []
      });
    }
  }

  updateSelectedPersonsState = (selectedPersons) => {
    this.setState({ selectedPersons })
  }

  render() {
    return (
      <Card>
        <CardHeader>Head Of</CardHeader>

        <CardBody className="no-padding-bottom">
          <Row>
            <Filter getData={this.props.getHeadOf} />

            <Action selected={this.state.selectedPersons} />
          </Row>

          {this.props.headOf.map((headOf, index) =>
            <CountryRow
              key={index}
              index={index}
              headOf={headOf}
              selectedPersons={this.state.selectedPersons}
              updateSelectedPersonsState={this.updateSelectedPersonsState}
              edit={this.props.edit}
            />
          )}
        </CardBody>
      </Card>
    )
  }
}

export default HeadOf
