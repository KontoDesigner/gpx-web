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
        )
    }
}

export default PersonTable