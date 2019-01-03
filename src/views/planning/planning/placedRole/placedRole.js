import React, { Component } from 'react'
import SeasonRow from './seasonRow'
import { Card, CardBody, CardHeader } from 'reactstrap'
import Filter from '../../filter'
import Action from '../../action'

class PlacedRole extends Component {
  render() {
    return (
      <Card>
        <CardHeader>Placed Positions</CardHeader>

        <CardBody className="no-padding-bottom">
          <div className="form-row">
          <Filter getData={this.props.getPlacedRoles} />

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

          {this.props.placedRoles.map((placedRole, index) =>
            <SeasonRow
              key={index}
              index={index}
              placedRole={placedRole} 
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

export default PlacedRole
