import React, { Component } from 'react'
import { ContextMenu, MenuItem } from 'react-contextmenu'
import Table from '../../../../components/table.js';

const columns = [
  { label: 'Name', dataKey: 'firstName' },
  { label: 'Nationality', dataKey: 'nationality' },
  { label: 'Id', dataKey: 'staffID' }
];

class PersonTable extends Component {
  onContextMenuClick = (e, data) => {
    alert(data.foo)
  }

  render() {
    return (
      <div>
        <ContextMenu id={this.props.index + "-destinationContextMenu"}>
          <MenuItem data={{ foo: 'bar' }} onClick={this.onContextMenuClick}>
            ContextMenu Item 1
          </MenuItem>
          <MenuItem data={{ foo: 'bar' }} onClick={this.onContextMenuClick}>
            ContextMenu Item 2
          </MenuItem>
          <MenuItem data={{ foo: 'bar' }} onClick={this.onContextMenuClick}>
            ContextMenu Item 3
          </MenuItem>
        </ContextMenu>

        <Table
          list={this.props.persons}
          contextMenuId={this.props.index + "-destinationContextMenu"}
          columns={columns}
          checkbox={true}
        />
      </div>
    )
  }
}

export default PersonTable
