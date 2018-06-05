import React, { Component } from 'react'
import { Table } from 'reactstrap'

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
        return (
            <Table responsive bordered>
                <thead>
                    <tr>
                        <th>
                            Name
                         </th>
                        <th>
                            Dest
                        </th>
                        <th>
                            Position
                        </th>
                        <th>
                            NAB Full Name
                        </th>
                        <th>
                            E-Mail (TUI Nordic Personal)
                        </th>
                        <th>
                            Next Season
                        </th>
                        <th>
                            My TUI Profile
                        </th>
                        <th>
                            Email Sent
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