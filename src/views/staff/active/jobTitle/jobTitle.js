import React, { Component } from 'react'
import TitleRow from './titleRow'
import { Card, CardBody, CardHeader, Row } from 'reactstrap'
import Filter from '../../filter'
import Action from '../../action'

class JobTitle extends Component {
  constructor() {
    super()

    this.state = {
      selectedPersons: []
    }
  }

  render() {
    return (
      <Card>
        <CardHeader>Job Title</CardHeader>

        <CardBody className="no-padding-bottom">
          <Row>
            <Filter />

            <Action />
          </Row>
          {this.props.jobTitle.map((jobTitle, index) => (
            <TitleRow
              key={index}
              index={index}
              jobTitle={jobTitle}
              handleSelectedStaff={this.props.handleSelectedStaff}
              selectedStaff={this.props.selectedStaff}
              edit={this.props.edit}
            />
          ))}
        </CardBody>
      </Card>
    )
  }
}

export default JobTitle
