import React from 'react'
import { ContextMenu, MenuItem } from 'react-contextmenu'
import Table from '../../../../components/table.js';

const columns = [
  { label: 'Name', dataKey: 'firstNameLastName' },
  { label: 'Nationality', dataKey: 'nationality' },
  { label: 'Id', dataKey: 'staffID' }
];

const PersonTable = (props) => {
  function onContextMenuClick(e, data) {
    alert(data.foo)
  }

  const contextMenuId = props.index + "-destinationContextMenu";

  return (
    <div>
      <ContextMenu id={contextMenuId}>
        <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick}>
          ContextMenu Item 1
          </MenuItem>
        <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick}>
          ContextMenu Item 2
          </MenuItem>
        <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick}>
          ContextMenu Item 3
          </MenuItem>
      </ContextMenu>

      <Table
        list={props.persons}
        contextMenuId={contextMenuId}
        columns={columns}
        checkbox={true}
        identifier={'id'}
        edit={props.edit}
        updateSelectedState={props.handleSelectedStaff}
        selected={props.selectedStaff}
      />
    </div>
  )
}

export default PersonTable