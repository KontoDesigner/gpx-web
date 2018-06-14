import React, { Component } from 'react'
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap'
import DestinationRow from './destinationRow'

class CountryRow extends Component {
  constructor() {
    super()

    this.state = {
      expanded: false
    }
  }

  toggleCollapse = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const icon = this.state.expanded ? (
      <i className="fa fa-chevron-up float-right text-danger" />
    ) : (
        <i className="fa fa-chevron-down float-right text-danger" />
      )

    return (
      <Card key={this.props.headOf} className="card-accordion">
        <CardHeader key={this.props.headOf.headOf} onClick={() => this.toggleCollapse()}>
          {this.props.headOf.headOf} {icon}
        </CardHeader>
        <Collapse isOpen={this.state.expanded}>
          <CardBody className="no-padding-bottom">
            {this.props.headOf.destinations.map((destination, index) => (
              <DestinationRow key={index} index={this.props.index + index} destination={destination} selectedPersons={this.props.selectedPersons} />
            ))}
          </CardBody>
        </Collapse>
      </Card>
    )
  }
}

export default CountryRow