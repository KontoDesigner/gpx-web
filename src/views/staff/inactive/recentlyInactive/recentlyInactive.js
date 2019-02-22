import React, { Component } from 'react'
import StatusRow from './statusRow'
import { Card, CardBody, CardHeader } from 'reactstrap'
import Filter from '../../filter'
import Action from '../../action'

class RecentlyInactive extends Component {
  render() {
    return (
      <Card>
        <CardHeader>RecentlyInactive</CardHeader>

        <CardBody className="no-padding-bottom">
          <div className="form-row">
            <Filter getData={this.props.getRecentlyInactive} />
          
            <Action 
            selected={this.props.selectedStaff} 
            toogleAbsentStaffModal={this.props.toogleAbsentStaffModal}
            toogleResignStaffModal={this.props.toogleResignStaffModal}
            toogleSendMailModal={this.props.toogleSendMailModal}
            toogleRemoveStaffModal={this.props.toogleRemoveStaffModal}
            toogleReResignStaffModal={this.props.toogleReResignStaffModal}
            //AbsentStaffModal={this.props.AbsentStaffModal}
            />
          
          </div>

          {this.props.recentlyInactive.map((recentlyInactive, index) =>
        
            <StatusRow
              key={index}
              index={index}
              recentlyInactive={recentlyInactive}
              handleSelectedStaff={this.props.handleSelectedStaff}
              selectedStaff={this.props.selectedStaff}
              toogleAbsentStaffModal={this.props.toogleAbsentStaffModal}
              toogleResignStaffModal={this.props.toogleResignStaffModal}
              toogleSendMailModal={this.props.toogleSendMailModal}
              toogleRemoveStaffModal={this.props.toogleRemoveStaffModal}
              toogleReResignStaffModal={this.props.toogleReResignStaffModal}
              edit={this.props.edit}
            />
          )}
        </CardBody>
      </Card>
    )
  }
}

export default RecentlyInactive
