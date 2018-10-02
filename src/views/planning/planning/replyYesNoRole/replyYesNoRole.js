import React, { Component } from 'react'

import { Card, CardBody, CardHeader } from 'reactstrap'
import JobTitleTable from './jobTitleTable'

class YesNoRole extends Component {
 


  toggleCollapse = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    
    return (
      <Card >
        <CardHeader > {this.props.replyYesNoRoles.length}
         Reply Yes/No
        </CardHeader>

       
        <CardBody>
            <JobTitleTable
              index={this.props.index}
              replyYesNoRoles={this.props.replyYesNoRoles}
              handleSelectedTitle={this.props.handleSelectedTitle}
             selectedTitle={this.props.selectedTitle}
              edit={this.props.edit}
            /> 
          </CardBody>
     
      </Card>
    )
  }

}

export default YesNoRole
