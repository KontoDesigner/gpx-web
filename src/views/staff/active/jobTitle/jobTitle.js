import React, { Component } from 'react'
import TitleRow from './titleRow'
import { Card, CardBody, CardHeader } from 'reactstrap'
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
          <div className="form-row">
          <Filter getData={this.props.getJobTitle} />

            <Action 
            selected={this.props.selectedStaff} 
            toogleAbsentStaffModal={this.props.toogleAbsentStaffModal}
            toogleResignStaffModal={this.props.toogleResignStaffModal}
            toogleSendMailModal={this.props.toogleSendMailModal}
            toogleRemoveStaffModal={this.props.toogleRemoveStaffModal}
            //AbsentStaffModal={this.props.AbsentStaffModal}
            />
          </div>
          {this.props.jobTitle.map((jobTitle, index) => (
            <TitleRow
              key={index}
              index={index}
              jobTitle={jobTitle}
              handleSelectedStaff={this.props.handleSelectedStaff}
              selectedStaff={this.props.selectedStaff}
              edit={this.props.edit}
              toogleAbsentStaffModal={this.props.toogleAbsentStaffModal}
              toogleResignStaffModal={this.props.toogleResignStaffModal}
              toogleSendMailModal={this.props.toogleSendMailModal}
              toogleRemoveStaffModal={this.props.toogleRemoveStaffModal}
            />
          ))}
        </CardBody>
      </Card>
    )
  }
}

export default JobTitle
