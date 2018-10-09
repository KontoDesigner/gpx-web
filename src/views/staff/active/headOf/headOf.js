import React, { Component } from 'react'
import CountryRow from './countryRow'
import { Card, CardBody, CardHeader } from 'reactstrap'
import Filter from '../../filter'
import Action from '../../action'

class HeadOf extends Component {
  render() {
    return (
      <Card>
        <CardHeader>Head Of</CardHeader>

        <CardBody className="no-padding-bottom">
          <div className="form-row">
            <Filter getData={this.props.getHeadOf} />
          
            <Action selected={this.props.selectedStaff} />
          
          </div>

          {this.props.headOf.map((headOf, index) =>
            <CountryRow
              key={index}
              index={index}
              headOf={headOf}
              handleSelectedStaff={this.props.handleSelectedStaff}
              selectedStaff={this.props.selectedStaff}
              edit={this.props.edit}
            />
          )}
        </CardBody>
      </Card>
    )
  }
}

export default HeadOf
