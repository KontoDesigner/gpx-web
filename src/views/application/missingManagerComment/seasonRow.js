import React, { Component } from 'react'
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap'
import StatusRow from './statusRow'

class SeasonRow extends Component {
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
                    {this.props.season.season} {icon}
                </CardHeader>

                <Collapse isOpen={this.state.expanded}>
                    <CardBody className="no-padding-bottom">
                        {this.props.season.statuses.map((status, index) => (
                            <StatusRow key={index} index={index} allApplication={status} edit={this.props.edit} />
                        ))}
                    </CardBody>
                </Collapse>
            </Card>
        )
    }
}

export default SeasonRow
