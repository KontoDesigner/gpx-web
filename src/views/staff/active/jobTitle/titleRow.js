import React, { Component } from 'react'
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap'

import DestinationRow from '../jobTitle/destinationRow'

class TitleRow extends Component {
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
      <Card className="card-accordion">
        <CardHeader onClick={() => this.toggleCollapse()}>
          {this.props.jobTitle.jobTitle} {icon}
        </CardHeader>

        <Collapse isOpen={this.state.expanded}>
          <CardBody>
            {this.props.jobTitle.destinations.map((destination, index) => (
              <DestinationRow
                key={index}
                index={this.props.index.toString() + index.toString()}
                destination={destination}
                handleSelectedStaff={this.props.handleSelectedStaff}
                selectedStaff={this.props.selectedStaff}
                edit={this.props.edit}
              />
            ))}
          </CardBody>
        </Collapse>
      </Card>
    )
  }
}

export default TitleRow
