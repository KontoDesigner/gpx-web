import React, { Component } from 'react'
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap'
import PositionRow from './positionRow'

class DestinationRow extends Component {
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
    const icon = this.state.expanded ? (
      <i className="fa fa-chevron-up float-right text-danger" />
    ) : (
        <i className="fa fa-chevron-down float-right text-danger" />
      )

    return (
      <Card key={this.props.destination.destination} className="card-accordion">
        <CardHeader onClick={() => this.toggleCollapse()}>
          {this.props.destination.destination} {icon}
        </CardHeader>

        <Collapse isOpen={this.state.expanded}>
          <CardBody className="no-padding-bottom">
            {this.props.destination.jobTitles.map((jobTitle, index) => (
              <PositionRow key={index} jobTitle={jobTitle} />
            ))}
          </CardBody>
        </Collapse>
      </Card>
    )
  }
}

export default DestinationRow
