import React, { Component } from 'react'
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap'
//import PositionRow from './positionRow'

class StatusRow extends Component {
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
        <CardHeader className="card-header-app" onClick={() => this.toggleCollapse()}>
          {this.props.allApplication.status} {icon}
        </CardHeader>

        <Collapse isOpen={this.state.expanded}>
          <CardBody className="no-padding-bottom">
            {/* {this.props.destination.jobTitles.map((jobTitle, index) => (
              <PositionRow
                key={index}
                index={this.props.index.toString() + index.toString()}
                jobTitle={jobTitle}
                handleSelectedStaff={this.props.handleSelectedStaff}
                selectedStaff={this.props.selectedStaff}
                edit={this.props.edit}
                toogleAbsentStaffModal={this.props.toogleAbsentStaffModal}
                toogleResignStaffModal={this.props.toogleResignStaffModal}
                toogleSendMailModal={this.props.toogleSendMailModal}
              />
            ))} */}
          </CardBody>
        </Collapse>
      </Card>
    )
  }
}

export default StatusRow