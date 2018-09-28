import React, { Component } from 'react'
import SeasonRow from './seasonRow'
import { Card, CardBody, CardHeader } from 'reactstrap'
import Filter from '../../filter'
import Action from '../../action'

class AllRole extends Component {
  render() {
    return (
      <Card>
        <CardHeader>All Roles</CardHeader>

        <CardBody className="no-padding-bottom">
          <div className="form-row">
          <Filter getData={this.props.getAllRole} />

            <Action selected={this.props.selectedRole} />
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