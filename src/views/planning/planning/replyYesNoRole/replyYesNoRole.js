import React, { Component } from 'react'
import SeasonRow from './seasonRow'
import { Card, CardBody, CardHeader } from 'reactstrap'
import Filter from '../../filter'
import Action from '../../action'

class YesNoRole extends Component {
  render() {
    return (
      <Card>
        <CardHeader>Yes/No</CardHeader>

        <CardBody className="no-padding-bottom">
          <div className="form-row">
            <Filter getData={this.props.getPlacedRole} />

            <Action selected={this.props.selectedRole} />
          </div>

          {this.props.replyYesNoRoles.map((replyYesNoRole, index) =>
            <SeasonRow
              key={index}
              index={index}
              replyYesNoRole={replyYesNoRole} 
              handleSelectedRole={this.props.handleSelectedRole}
              selectedRole={this.props.selectedRole}
              edit={this.props.edit}
            />
          )}
        </CardBody>
      </Card>
    )
  }
}

export default YesNoRole
