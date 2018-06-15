import React from 'react'
import { ContextMenu, MenuItem } from 'react-contextmenu'
import Table from '../../../../components/table.js';

const columns = [
  { label: 'Name', dataKey: 'firstNameLastName' },
  { label: 'Nationality', dataKey: 'nationality' },
  { label: 'Id', dataKey: 'staffID' }
];

const PersonTable = (props) => {
  const onContextMenuClick = (e, data) => {
    alert(data.foo)
  }

  return (
    <div>
      <ContextMenu id={props.index + "-destinationContextMenu"}>
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
        contextMenuId={props.index + "-destinationContextMenu"}
        columns={columns}
        checkbox={true}
        selected={props.selectedPersons}
        updateSelectedState={props.updateSelectedPersonsState}
      />
    </div>
  )
}

export default PersonTable
