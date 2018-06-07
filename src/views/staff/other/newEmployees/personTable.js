import React, { Component } from 'react'
import { Table } from 'reactstrap'

class PersonTable extends Component {
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
                            Employee Id
                         </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Nat
                        </th>
                        <th>
                            E-Mail
                        </th>
                        <th>
                            Phone Home
                        </th>
                        <th>
                            Mobile Phone
                        </th>
                        <th>
                            Street Address
                        </th>
                        <th>
                            Zip Code
                        </th>
                        <th>
                            City
                        </th>
                        <th>
                            Country
                        </th>
                        <th>
                            Created
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
                            Blue Star
                        </td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default PersonTable