import React, { Component } from 'react'
import { Table } from 'reactstrap'

class PersonTable extends Component {
    render() {
        return (
            <Table responsive bordered>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            ?
                        </th>
                        <th>
                            Id
                        </th>
                        <th>
                            Season
                        </th>
                        <th>
                            Dest
                        </th>
                        <th>
                            Concept Hotel
                        </th>
                        <th>
                            Job Title
                        </th>
                        <th>
                            E-Mail 1
                        </th>
                        <th>
                            E-Mail 2
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
                        <td>
                            S18
                        </td>
                        <td>
                            Cancur
                        </td>
                        <td>
                            Business Support Manager
                        </td>
                        <td>
                            filip.danielsson@tui.se
                        </td>
                        <td>
                            filip.danielsson@tui.se
                        </td>
                        <td>
                            55758
                        </td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default PersonTable;