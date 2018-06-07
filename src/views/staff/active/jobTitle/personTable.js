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
                            Name
                         </th>
                        <th>
                            Nationality
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