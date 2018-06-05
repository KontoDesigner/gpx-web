import React, { Component } from 'react'
import { Collapse, Card, CardBody, CardHeader, Table } from 'reactstrap'

class PositionTable extends Component {
    constructor(props) {
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
                    (1) Business Support Manager {icon}
                </CardHeader>

                <Collapse isOpen={this.state.expanded}>
                    <CardBody>
                        <Table responsive bordered>
                            <thead>
                                <tr>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Nationality
                                    </th>
                                    <th>
                                        Id
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        Bojorquez, Carolina
                                    </td>
                                    <td>
                                        AR
                                    </td>
                                    <td>
                                        55758
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Collapse >
            </Card >
        )
    }
}

export default PositionTable