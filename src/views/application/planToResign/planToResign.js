import React, { Component } from  'react'
import SeasonRow from './seasonRow'
import { Card, CardBody, CardHeader } from  'reactstrap'
import Filter from '../filter'
import Action2 from '../action2'

class PlanToResign extends Component {

  render() {
    return (
      <Card>
        <CardHeader>Plan To Resign</CardHeader>

        <CardBody className="no-padding-bottom">
          <div className="form-row">
          
          <Filter 
          getData={this.props.getPlanToResignApplication}
          />
            {/* <Action2 
              
            //selected={this.props.selectedTitle} 
            //allRoles={this.props.allRoles}
            // toogleMakePositionVacantModal={this.props.toogleMakePositionVacantModal}
            //  toogleUnmarkPositionActingModal ={this.props.toogleUnmarkPositionActingModal}
            // toogleResetPositionAcceptModal  ={this.props.toogleResetPositionAcceptModal}
            // toogleMarkPositionDeclineModal ={this.props.toogleMarkPositionDeclineModal}
            // toogleMarkPositionActingModal ={this.props.toogleMarkPositionActingModal}
            //  toogleMarkPositionAcceptModal = {this.props.toogleMarkPositionAcceptModal}
            // toogleUpdatePositionModal = {this.props.toogleUpdatePositionModal}
            // toogleAssignPositionModal = {this.props.toogleAssignPositionModal}
            // toogleRemovePositionModal = {this.props.toogleRemovePositionModal}
           // toogleRemovePositionSelectModal = {this.props.toogleRemovePositionSelectModal}                  
            />   */}
          </div>

            { this.props.planToResignApplication.map((planToResignApplication, index) =>
            <SeasonRow 
              key={index}
              index={index}
              planToResignApplication={planToResignApplication} 
              edit={this.props.edit}
            
            />
          )}   
        </CardBody>
      </Card>
    )
  }
}

export default PlanToResign
