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
                            Employee Id
                        </th>
                        <th>
                            Absent Between/Last Working Date
                        </th>
                        <th>
                            Reason/Comments
                        </th>
                        <th>
                            Dest
                        </th>
                        <th>
                            Source Market
                        </th>
                        <th>
                            Position Type
                        </th>
                        <th>
                            Job Title
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