import React, { Component } from 'react'
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap'
import JobTitleTable from './jobTitleTable'

class DestinationRow extends Component {
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

      const style = {
        height: `${42 + (this.props.destination.positions.length * 41)}px`
      }

    return (
      <Card className="card-accordion card-country">
        <CardHeader onClick={() => this.toggleCollapse()}>
          {this.props.destination.destination} {icon}
        </CardHeader>

        <Collapse isOpen={this.state.expanded}>
        <CardBody style={style} className="card-body-table">
            <JobTitleTable
              index={this.props.index}
              positions={this.props.destination.positions}
              handleSelectedTitle={this.props.handleSelectedTitle}
             selectedTitle={this.props.selectedTitle}
              edit={this.props.edit}
            />
          </CardBody>
        </Collapse>
      </Card>
    )
  }
}

export default DestinationRow

