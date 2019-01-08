import React from 'react'
import { ContextMenu, MenuItem } from 'react-contextmenu'
import Table from '../../../../components/table.js';

const columns = [
  { label: 'MPLID', dataKey: 'mplID' },
  //{ label: 'MPLIDVersion', dataKey: 'mplIDVersion' },

  { label: 'JobTitle', dataKey: 'jobTitle' },
  { label: 'Profile', dataKey: 'profile' },

  { label: 'Source Market', dataKey: 'sourceMarket' },
  { label: 'Position Type', dataKey: 'positionType' },
  //{ label: 'Languages', dataKey: 'languages' },
  { label: 'HighSeason', dataKey: 'highseason' },
  { label: 'StartDate', dataKey: 'startDate' },
  { label: 'DepDate', dataKey: 'endDate' },
  { label: 'Placed', dataKey: 'firstNameLastName' },
 // { label: 'Id', dataKey: 'staffID' }
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
         Mark Crawley - 2019-02-02 - 2019-06-04
          </MenuItem>
        <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick}>
        Estephan Right  - 2019-06-12 - 2019-09-06
          </MenuItem>
        <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick}>
        Eskil Thorwaldsson - 2019-09-09 - 2019-12-12
          </MenuItem>
      </ContextMenu>

      <Table
       
        list={props.positions}
        contextMenuId={contextMenuId}
        columns={columns}
        checkbox={true}
        identifier={'mplID'}
        edit={props.edit}
        updateSelectedState={props.handleSelectedTitle}
        selected={props.selectedTitle}


   
      />
    </div>
  )
}

export default JobTitleTable