import React, { Component } from 'react'
import SeasonRow from './seasonRow'
import { Card, CardBody, CardHeader } from 'reactstrap'
import Filter from '../../filter'
import Action from '../../action2'

class VacantRole extends Component {
  render() {
    return (
      <Card>
        <CardHeader>Vacant Positions</CardHeader>

        <CardBody className="no-padding-bottom">
          <div className="form-row">
          <Filter getData={this.props.getVacantRoles} />
       
          {/* <Action 
            selected={this.props.selectedTitle} 
  
            toogleAssignPositionModal = {this.props.toogleAssignPositionModal}
           
                             
            /> */}
          </div>

          {this.props.vacantRoles.map((vacantRole, index) =>
            <SeasonRow
              key={index}
              index={index}
              vacantRole={vacantRole} 
              handleSelectedTitle={this.props.handleSelectedTitle}
              selectedTitle={this.props.selectedTitle}
              edit={this.props.edit}
              toogleAssignPositionModal = {this.props.toogleAssignPositionModal}
              toogleRemovePositionModal={this.props.toogleRemovePositionModal  }
            />
          )}
        </CardBody>
      </Card>
    )
  }
}

export default VacantRole
