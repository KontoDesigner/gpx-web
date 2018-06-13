import React, { Component } from 'react'
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap'
import PersonTable from './personTable'

class PositionTable extends Component {
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

    const style = {
      height: `${42 + (this.props.jobTitle.staffs.length * 41)}px`
    }

    return (
      <Card key={this.props.jobTitle.jobTitle} className="card-accordion">
        <CardHeader onClick={() => this.toggleCollapse()}>
          {this.props.jobTitle.jobTitle} {icon}
        </CardHeader>

        <Collapse isOpen={this.state.expanded}>
          <CardBody style={style} className="card-body-table">
            <PersonTable index={this.props.index} persons={this.props.jobTitle.staffs} />
          </CardBody>
        </Collapse>
      </Card >
    )
  }
}

export default PositionTable
