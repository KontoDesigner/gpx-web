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

export default PersonTable