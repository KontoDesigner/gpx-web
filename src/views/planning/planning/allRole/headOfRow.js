import React, { Component } from 'react'
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap'
import DestinationRow from './destinationRow'

class HeadOfRow extends Component {
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
      <Card className="card-accordion card-country">
        <CardHeader onClick={() => this.toggleCollapse()}>
          {this.props.headOf.headOf} {icon}
        </CardHeader>

        <Collapse isOpen={this.state.expanded}>
          <CardBody className="no-padding-bottom">
            {this.props.headOf.destinations.map((destination, index) => (
              <DestinationRow
                key={index}
                index={this.props.index.toString() + index.toString()}
                destination={destination}
                handleSelectedTitle={this.props.handleSelectedTitle}
                selectedTitle={this.props.selectedTitle}
                edit={this.props.edit}
              />
            ))}
          </CardBody>
        </Collapse>
      </Card>
    )
  }
}

export default HeadOfRow