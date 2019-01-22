import React from 'react'
import { ContextMenu, MenuItem } from 'react-contextmenu'
import Table from '../../../../components/table.js'

const columns = [
  { label: 'Name', dataKey: 'firstNameLastName' },
  { label: 'SourceMarket', dataKey: 'sourceMarket' },
  { label: 'PositionType', dataKey: 'positionType' },
   { label: 'Concept Hotel', dataKey: 'conceptHotel' },
  { label: 'Childcare', dataKey: 'Education' }
]

const PersonTable = props => {
  function onContextMenuClick(e, data) {
    debugger;
       //alert(data.mplID)
     // console.log(data,e,test,hello)
     
     props.toogleAbsentStaffModal() 
       
     }
    
     function onContextMenuClick2(e, data) {
      debugger;
         //alert(data.mplID)
       // console.log(data,e,test,hello)
       
       props.toogleResignStaffModal() 
         
       }

       function onContextMenuClick3(e, data) {
        debugger;
           //alert(data.mplID)
         // console.log(data,e,test,hello)
         
         props.toogleSendMailModal() 
           
         }

  const contextMenuId = props.index + '-jobTitleContextMenu'

  return (
    <div>
  <ContextMenu id={contextMenuId}>
      <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick}>
        Mark As Absent
          </MenuItem>
      <MenuItem data={{foo: 'bar'}} onClick={onContextMenuClick2}>
        Mark As Resign
          </MenuItem>
   
        <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick3}>
        Send Mail Using Template
          </MenuItem>

      </ContextMenu>

      <Table
        list={props.persons}
        contextMenuId={contextMenuId}
        columns={columns}
        checkbox={true}
        identifier={'staffID'}
        edit={props.edit}
        updateSelectedState={props.handleSelectedStaff}
        selected={props.selectedStaff}
      />
    </div>
  )
}

export default PersonTable
