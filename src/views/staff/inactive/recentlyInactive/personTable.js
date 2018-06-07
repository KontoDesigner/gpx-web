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
                <ContextMenu id="recentlyInactiveContextMenu">
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
                                <ContextMenuTrigger id="recentlyInactiveContextMenu">
                                    <div className="well">Bojorquez, Carolina</div>
                                </ContextMenuTrigger>
                            </td>
                            <td>
                                <ContextMenuTrigger id="recentlyInactiveContextMenu">
                                    <div className="well">Bojorquez, Carolina</div>
                                </ContextMenuTrigger>
                            </td>
                            <td>
                                <ContextMenuTrigger id="recentlyInactiveContextMenu">
                                    <div className="well">Bojorquez, Carolina</div>
                                </ContextMenuTrigger>
                            </td>
                            <td>
                                <ContextMenuTrigger id="recentlyInactiveContextMenu">
                                    <div className="well">Bojorquez, Carolina</div>
                                </ContextMenuTrigger>
                            </td>
                            <td>
                                <ContextMenuTrigger id="recentlyInactiveContextMenu">
                                    <div className="well">Bojorquez, Carolina</div>
                                </ContextMenuTrigger>
                            </td>
                            <td>
                                <ContextMenuTrigger id="recentlyInactiveContextMenu">
                                    <div className="well">Bojorquez, Carolina</div>
                                </ContextMenuTrigger>
                            </td>
                            <td>
                                <ContextMenuTrigger id="recentlyInactiveContextMenu">
                                    <div className="well">Bojorquez, Carolina</div>
                                </ContextMenuTrigger>
                            </td>
                            <td>
                                <ContextMenuTrigger id="recentlyInactiveContextMenu">
                                    <div className="well">Bojorquez, Carolina</div>
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