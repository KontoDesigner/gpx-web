import React, { Component } from 'react'
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu'
import Table from '../../../../components/table.js';

class PersonTable extends Component {
  constructor(props) {
    super(props)
  }

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
            ContextMenu Item 3w
          </MenuItem>
        </ContextMenu>

        <Table
          list={this.props.persons}
          contextMenuId={this.props.index + "-destinationContextMenu"}
        />
      </div>
    )
  }
}

export default PersonTable
