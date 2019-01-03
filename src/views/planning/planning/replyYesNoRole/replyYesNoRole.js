import React, { Component } from 'react'
import StatusRow from './statusRow'
import { Card, CardBody, CardHeader } from 'reactstrap'
import Filter from '../../filter'
import Action from '../../action'

class YesNoRole extends Component {
  render() {
    return (
      <Card>
         <CardHeader>Reply Yes/No</CardHeader>

        <CardBody className="no-padding-bottom">
          <div className="form-row">
            <Filter getData={this.props.getReplyYesNoRoles} />
          
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

          {this.props.replyYesNoRoles.map((replyYesNoRoles, index) =>
        
            <StatusRow
            key={index}
            index={index}
            replyYesNoRoles={replyYesNoRoles}
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

export default YesNoRole

