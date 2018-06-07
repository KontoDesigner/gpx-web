import React, { Component } from 'react'
import { Table } from 'reactstrap'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

class PersonTable extends Component {
    handleClick = (e, data) => {
        alert(data.foo);
    }

    render() {
        return (
            <div>
                <ContextMenu id="headOfContextMenu">
                    <MenuItem data={{ foo: 'bar' }} onClick={this.handleClick}>
                        ContextMenu Item 1
                    </MenuItem>
                    <MenuItem data={{ foo: 'bar' }} onClick={this.handleClick}>
                        ContextMenu Item 2
                    </MenuItem>
                    <MenuItem data={{ foo: 'bar' }} onClick={this.handleClick}>
                        ContextMenu Item 3w
                    </MenuItem>
                </ContextMenu>

                <Table responsive bordered striped className="tableContextMenu">
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
                                <ContextMenuTrigger id="headOfContextMenu">
                                    Bojorquez, Carolina
                                </ContextMenuTrigger>
                            </td>
                            <td>
                                <ContextMenuTrigger id="headOfContextMenu">
                                    Bojorquez, Carolina
                                </ContextMenuTrigger>
                            </td>
                            <td>
                                <ContextMenuTrigger id="headOfContextMenu">
                                    Bojorquez, Carolina
                                </ContextMenuTrigger>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <ContextMenuTrigger id="headOfContextMenu">
                                    Bojorquez, Carolina
                                </ContextMenuTrigger>
                            </td>
                            <td>
                                <ContextMenuTrigger id="headOfContextMenu">
                                    Bojorquez, Carolina
                                </ContextMenuTrigger>
                            </td>
                            <td>
                                <ContextMenuTrigger id="headOfContextMenu">
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