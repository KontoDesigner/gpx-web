import React, { Component } from  'react'
import SeasonRow from './oldseasonRow'
import { Card, CardBody, CardHeader } from  'reactstrap'
import Filter from '../filter'
import Action2 from '../action2'

class MissingManagerComments extends Component {

  render() {
    return (
      <Card>
        <CardHeader>Missing Manager Comments</CardHeader>

        <CardBody className="no-padding-bottom">
          <div className="form-row">
          
          <Filter 
          getData={this.props.getMissingManagerCommentsApplication}
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

            { this.props.missingManagerCommentsApplication.map((missingManagerCommentsApplication, index) =>
            <SeasonRow 
              key={index}
              index={index}
              missingManagerCommentsApplication={missingManagerCommentsApplication} 
              edit={this.props.edit}
            
            />
          )}   
        </CardBody>
      </Card>
    )
  }
}

export default MissingManagerComments
