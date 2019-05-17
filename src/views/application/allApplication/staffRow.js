import React, { Component } from 'react'
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap'
import StaffSubRow from './staffsubRow'

class staffRow extends Component {
  constructor() {
    super()
 
    this.state = {
      expanded: false
    }
  }

  toggleCollapse = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const icon = this.state.expanded ? (
      <i className="fa fa-chevron-up float-right text-danger" />
    ) : (
        <i className="fa fa-chevron-down float-right text-danger" />
      )

    return (
      <Card className="card-accordion card-country">
        <CardHeader className="card-header-work" onClick={() => this.toggleCollapse()}>
        {this.props.staffs.staff} {icon} 
        </CardHeader> 

        <Collapse isOpen={this.state.expanded}>
          <CardBody className="no-padding-bottom">
            {this.props.staffs.staffsubs.map((staffsubs, index) => ( 
              <StaffSubRow  
              
              key={index}
              index={index}
                //  index={this.props.index.toString() + index.toString()}
                staffsubs={staffsubs}
                edit={this.props.edit}
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
                // toogleRemovePositionModal={this.props.toogleRemovePositionModal }
              />
            ))}         
          </CardBody>
        </Collapse>
      </Card>
    )
  }
}

export default staffRow
