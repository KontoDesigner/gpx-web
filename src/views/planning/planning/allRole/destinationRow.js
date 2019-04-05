import React, { Component } from 'react'
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap'
import JobTitleTable from './jobTitleTable'

class DestinationRow extends Component {
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

        const style = {
            height: `${50 + this.props.destination.positions.length * 28}px`
        }

        return (
            <Card className="card-accordion card-country">
                <CardHeader onClick={() => this.toggleCollapse()}>
                    {this.props.destination.destination} {icon}
                </CardHeader>

                <Collapse isOpen={this.state.expanded}>
                    <CardBody style={style} className="card-body-table">
                        {this.state.expanded && (
                            <JobTitleTable
                                index={this.props.index}
                                positions={this.props.destination.positions}
                                handleSelectedTitle={this.props.handleSelectedTitle}
                                selectedTitle={this.props.selectedTitle}
                                edit={this.props.edit}
                                toogleMakePositionVacantModal={this.props.toogleMakePositionVacantModal}
                                toogleUnmarkPositionActingModal={this.props.toogleUnmarkPositionActingModal}
                                toogleResetPositionAcceptModal={this.props.toogleResetPositionAcceptModal}
                                toogleMarkPositionDeclineModal={this.props.toogleMarkPositionDeclineModal}
                                toogleMarkPositionActingModal={this.props.toogleMarkPositionActingModal}
                                toogleMarkPositionAcceptModal={this.props.toogleMarkPositionAcceptModal}
                                toogleAssignPositionModal={this.props.toogleAssignPositionModal}
                                toogleUpdatePositionModal={this.props.toogleUpdatePositionModal}
                                toogleRemovePositionModal={this.props.toogleRemovePositionModal}
                            />
                        )}
                    </CardBody>
                </Collapse>
            </Card>
        )
    }
}

export default DestinationRow
