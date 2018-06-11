import React, { Component } from 'react'
import { Table } from 'reactstrap'
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu'

class PersonTable extends Component {
  handleClick = (e, data) => {
    alert(data.foo)
  }

  render() {
    return (
      <div>
        <ContextMenu id="destinationContextMenu">
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

        <Table responsive bordered className="tableContextMenu">
          <thead>
            <tr>
              <th>Name</th>
              <th>Nationality</th>
              <th>Id</th>
              <th>Head Of</th>
              <th>Concept Hotel</th>
            </tr>
          </thead>

          <tbody>
            {this.props.persons.map((x, index) => (
              <tr key={index}>
                <td>
                  <ContextMenuTrigger id="headOfContextMenu">
                    {x.lastName}, {x.firstName}
                  </ContextMenuTrigger>
                </td>
                <td>
                  <ContextMenuTrigger id="headOfContextMenu">{x.nationality}</ContextMenuTrigger>
                </td>
                <td>
                  <ContextMenuTrigger id="headOfContextMenu">{x.staffID}</ContextMenuTrigger>
                </td>
                <td>
                  <ContextMenuTrigger id="headOfContextMenu">{x.headOf}</ContextMenuTrigger>
                </td>
                <td>
                  <ContextMenuTrigger id="headOfContextMenu">{x.staffID}</ContextMenuTrigger>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default PersonTable
