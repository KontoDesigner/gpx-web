import React, { Component } from 'react'
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap'
import ApplicationTable from './applicationTable'

class seasonRow extends Component {
  constructor() {
    super()

    this.state = {
        expanded: false
    }
}

toggleCollapse = () => {
  debugger;
    this.setState({ expanded: !this.state.expanded })
    debugger;
}

render() {
    const icon = this.state.expanded ? (
        <i className="fa fa-chevron-up float-right text-danger" />
    ) : (
        <i className="fa fa-chevron-down float-right text-danger" />
    )

    const style = {
         height: `${50 + this.props.planToResignApplication.length * 28}px`
    }

    return (
      <Card className="card-accordion card-country">
        <CardHeader className="card-header-work" onClick={() => this.toggleCollapse()}>
        {this.props.planToResignApplication.season} {icon}  
        </CardHeader> 

        <Collapse isOpen={this.state.expanded}>
                    <CardBody style={style} className="card-body-table"> 
          {this.state.expanded && (
                            <ApplicationTable
                                index={this.props.index}
                                planToResignApplication={this.props.planToResignApplication.applications}
                                edit={this.props.edit}
                                // handleSelectedTitle={this.props.handleSelectedTitle}
                                // selectedTitle={this.props.selectedTitle}
                                // edit={this.props.edit}
                                // toogleMakePositionVacantModal={this.props.toogleMakePositionVacantModal}
                                // toogleUnmarkPositionActingModal={this.props.toogleUnmarkPositionActingModal}
                                // toogleResetPositionAcceptModal={this.props.toogleResetPositionAcceptModal}
                                // toogleMarkPositionDeclineModal={this.props.toogleMarkPositionDeclineModal}
                                // toogleMarkPositionActingModal={this.props.toogleMarkPositionActingModal}
                                // toogleMarkPositionAcceptModal={this.props.toogleMarkPositionAcceptModal}
                                // toogleAssignPositionModal={this.props.toogleAssignPositionModal}
                                // toogleUpdatePositionModal={this.props.toogleUpdatePositionModal}
                                // toogleRemovePositionModal={this.props.toogleRemovePositionModal}
                            />
                        )} 
          </CardBody>
        </Collapse>
      </Card>
    )
  }
}

export default seasonRow
