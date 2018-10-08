import React, { Component } from 'react'

import { Card, CardBody, CardHeader } from 'reactstrap'
import JobTitleTable from './jobTitleTable'

class YesNoRole extends Component {
    toggleCollapse = () => {
        this.setState({ expanded: !this.state.expanded })
    }

    render() {
        const maxTableHeight = 550

        const style = {
            height: `${42 + this.props.replyYesNoRoles.length * 41}px`,
            maxHeight: `${maxTableHeight}px`
        }

        return (
            <Card className="card-accordion card-country">
                <CardHeader>Reply Yes/No</CardHeader>

                {this.props.replyYesNoRoles.length > 0 && (
                    <CardBody style={style} className="card-body-table">
                        <JobTitleTable
                            index={this.props.index}
                            replyYesNoRoles={this.props.replyYesNoRoles}
                            handleSelectedTitle={this.props.handleSelectedTitle}
                            selectedTitle={this.props.selectedTitle}
                            edit={this.props.edit}
                            maxTableHeight={maxTableHeight}
                        />
                    </CardBody>
                )}
            </Card>
        )
    }
}

export default YesNoRole
