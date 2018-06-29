import React, { Component } from 'react'
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap'

class PositionRow extends Component {
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
            <Card className="card-accordion">
                <CardHeader onClick={() => this.toggleCollapse()}>
                    {this.props.jobTitle.jobTitle} {icon}
                </CardHeader>

                <Collapse isOpen={this.state.expanded}>
                    <CardBody className="no-padding-bottom">
                        Table here
                    </CardBody>
                </Collapse>
            </Card>
        )
    }
}

export default PositionRow