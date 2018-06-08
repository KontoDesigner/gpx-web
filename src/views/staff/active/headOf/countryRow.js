import React, { Component } from 'react'
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap'
import DestinationRow from './destinationRow'

class CountryRow extends Component {
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

    return this.props.headOf.map(x => (
      <Card key={x.headOfName} className="card-accordion">
        <CardHeader key={x.headOfName} onClick={() => this.toggleCollapse()}>
          {x.headOfName} {icon}
        </CardHeader>
        <Collapse isOpen={this.state.expanded}>
          <CardBody className="no-padding-bottom">
            <DestinationRow destinations={x.destinations} />
          </CardBody>
        </Collapse>
      </Card>
    ))
  }
}

export default CountryRow
