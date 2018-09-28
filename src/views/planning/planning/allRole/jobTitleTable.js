import React from 'react'
import { ContextMenu, MenuItem } from 'react-contextmenu'
import Table from '../../../../components/table.js';

const columns = [
  { label: 'MPLID', dataKey: 'mplID' },
  { label: 'MPLIDVersion', dataKey: 'mplIDVersion' },

  { label: 'Concept Hotel', dataKey: 'concepthotel' },
  { label: 'Profile', dataKey: 'profile' },
  { label: 'MPLDL Required', dataKey: 'plDlRequir.' },
  { label: 'Source Market', dataKey: 'sourceMarket' },
  { label: 'Position Type', dataKey: 'positionType' },
  { label: 'Languages', dataKey: 'languages' },
  { label: 'HighSeason', dataKey: 'highseason' },
  { label: 'StartDate', dataKey: 'startDate' },
  { label: 'DepDate', dataKey: 'endDate' },
  { label: 'Placed', dataKey: 'firstNameLastName' },
  { label: 'Id', dataKey: 'staffID' }
];

const JobTitleTable = (props) => {
  function onContextMenuClick(e, data) {
    alert(data.foo)
  }

  const contextMenuId = props.index + "-allRoleContextMenu";

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
       
        list={props.positions}
        contextMenuId={contextMenuId}
        columns={columns}
        checkbox={true}
        identifier={'staffID'}
        edit={props.edit}
        updateSelectedState={props.handleSelectedTitle}
        selected={props.selectedTitle}
      />
    </div>
  )
}

export default JobTitleTable