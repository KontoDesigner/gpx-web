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
                                Nationality
                            </th>
                            <th>
                                Id
                            </th>
                            <th>
                                Head Of
                            </th>
                            <th>
                                Concept Hotel
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
                                Örjan
                            </td>
                            <td>
                                Blue Star
                            </td>
                        </tr>
                    </tbody>
                </Table>
        )
    }
}

export default PersonTable