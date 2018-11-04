import React, { Component } from 'react'
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap'
import JobTitleTable from './jobTitleTable'

class StatusTable extends Component {
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
      const maxTableHeight = 550
      const style = {
        height: `${42 + this.props.replyYesNoRoles.accepted.length * 41}px`
      }

    return (
      <Card className="card-accordion">
        <CardHeader onClick={() => this.toggleCollapse()}>
        
          ({this.props.replyYesNoRoles.accepted.length}) {this.props.replyYesNoRoles.accept} {icon}
        </CardHeader>

        <Collapse isOpen={this.state.expanded}>
          <CardBody style={style} className="card-body-table">
            <JobTitleTable
                  index={this.props.index}
                  replyYesNoRoles={this.props.replyYesNoRoles.accepted}
                  handleSelectedTitle={this.props.handleSelectedTitle}
                  selectedTitle={this.props.selectedTitle}
                  edit={this.props.edit}
                  
                  maxTableHeight={maxTableHeight}

      

            
            />
          </CardBody>
        </Collapse>
      </Card>
    )
  }
}

export default StatusTable
