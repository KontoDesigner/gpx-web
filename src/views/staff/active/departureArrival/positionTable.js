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
            <Table responsive bordered>
                <thead>
                    <tr>
                        <th>
                            Name
                         </th>
                        <th>
                            ID
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            Current Dest
                        </th>
                        <th>
                            Departure
                        </th>
                        <th>
                            Arrival
                        </th>
                        <th>
                            Next Dest
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
                            Mexico
                        </td>
                        <td>
                            Blue Star
                        </td>
                        <td>
                            Bojorquez, Carolina
                        </td>
                        <td>
                            AR
                        </td>
                        <td>
                            Mexico
                        </td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default PositionTable