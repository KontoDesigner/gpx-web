import React, { Component } from 'react'
import StatusRow from './statusRow'
import { Card, CardBody, CardHeader } from 'reactstrap'
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
          getData={this.props.getAllApplication}
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

          {/* { this.props.allApplication.map((allApplication, index) =>
            <StatusRow 
              key={index}
              index={index}
              allApplication={allApplication} 
              // handleSelectedTitle={this.props.handleSelectedTitle}
              // selectedTitle={this.props.selectedTitle}
              // edit={this.props.edit}
              // toogleMakePositionVacantModal={this.props.toogleMakePositionVacantModal}
              // toogleUnmarkPositionActingModal ={this.props.toogleUnmarkPositionActingModal}
              // toogleResetPositionAcceptModal  ={this.props.toogleResetPositionAcceptModal}
              // toogleMarkPositionDeclineModal ={this.props.toogleMarkPositionDeclineModal}
              // toogleMarkPositionActingModal ={this.props.toogleMarkPositionActingModal}
              // toogleMarkPositionAcceptModal = {this.props.toogleMarkPositionAcceptModal}
              // toogleAssignPositionModal = {this.props.toogleAssignPositionModal}
              // toogleUpdatePositionModal = {this.props.toogleUpdatePositionModal}
              // toogleRemovePositionModal={this.props.toogleRemovePositionModal  }
            
            
            />
          )}  */}
        </CardBody>
      </Card>
    )
  }
}

export default PlanToResign
