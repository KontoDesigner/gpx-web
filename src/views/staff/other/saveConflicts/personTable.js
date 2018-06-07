import React, { Component } from 'react'
import { Table } from 'reactstrap'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

class PersonTable extends Component {
    handleClick = (e, data) => {
        alert(data.foo);
    }

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
            <div>
                <ContextMenu id="saveConflictsContextMenu">
                    <MenuItem data={{ foo: 'bar' }} onClick={this.handleClick}>
                        ContextMenu Item 1
                    </MenuItem>
                    <MenuItem data={{ foo: 'bar' }} onClick={this.handleClick}>
                        ContextMenu Item 2
                    </MenuItem>
                    <MenuItem divider />
                    <MenuItem data={{ foo: 'bar' }} onClick={this.handleClick}>
                        ContextMenu Item 3w
                    </MenuItem>
                </ContextMenu>

                <Table responsive bordered className="tableContextMenu">
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
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <ContextMenuTrigger id="saveConflictsContextMenu">
                                    Bojorquez, Carolina
                                </ContextMenuTrigger>
                            </td>
                            <td>
                                <ContextMenuTrigger id="saveConflictsContextMenu">
                                    Bojorquez, Carolina
                                </ContextMenuTrigger>
                        </td>
                            <td>
                                <ContextMenuTrigger id="saveConflictsContextMenu">
                                    Bojorquez, Carolina
                                </ContextMenuTrigger>
                        </td>
                            <td>
                                <ContextMenuTrigger id="saveConflictsContextMenu">
                                    Bojorquez, Carolina
                                </ContextMenuTrigger>
                        </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default PersonTable