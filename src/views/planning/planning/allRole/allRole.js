import React, { Component } from 'react'
import SeasonRow from './seasonRow'
import { Card, CardBody, CardHeader } from 'reactstrap'
import Filter from '../../filter'
import Action from '../../action'

class AllRole extends Component {
  render() {
    return (
      <Card>
        <CardHeader>All Positions</CardHeader>

        <CardBody className="no-padding-bottom">
          <div className="form-row">
          <Filter 
          getData={this.props.getAllRoles} />
        
            <Action 
            selected={this.props.selectedTitle} 
            toogleMakePositionVacantModal={this.props.toogleMakePositionVacantModal}
                                toogleUnmarkPositionActingModal ={this.props.toogleUnmarkPositionActingModal}
                                toogleResetPositionAcceptModal  ={this.props.toogleResetPositionAcceptModal}
                                toogleMarkPositionDeclineModal ={this.props.toogleMarkPositionDeclineModal}
                                toogleMarkPositionActingModal ={this.props.toogleMarkPositionActingModal}
                                toogleMarkPositionAcceptModal = {this.props.toogleMarkPositionAcceptModal}
                                toogleAssignPositionModal = {this.props.toogleAssignPositionModal}
                                toogleUpdatePositionModal = {this.props.toogleUpdatePositionModal}
                               
            />
          </div>

          {this.props.allRoles.map((allRole, index) =>
            <SeasonRow
              key={index}
              index={index}
              allRole={allRole} 
              handleSelectedTitle={this.props.handleSelectedTitle}
              selectedTitle={this.props.selectedTitle}
              edit={this.props.edit}
            />
          )}
        </CardBody>
      </Card>
    )
  }
}

export default AllRole
