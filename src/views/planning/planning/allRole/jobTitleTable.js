import React from 'react'
import { ContextMenu, MenuItem } from 'react-contextmenu'
import Table from '../../../../components/table.js';
import moment from "moment";
const columns = [
  { label: 'MPLID', dataKey: 'mplID' },
  //{ label: 'MPLIDVersion', dataKey: 'mplIDVersion' },

  { label: 'JobTitle', dataKey: 'jobTitle' },
  { label: 'Profile', dataKey: 'profile' },

  { label: 'Source Market', dataKey: 'sourceMarket' },
  { label: 'Position Type', dataKey: 'positionType' },
  //{ label: 'Languages', dataKey: 'languages' },
  { label: 'HighSeason', dataKey: 'highseason' },
  { label: 'Position StartDate', dataKey: 'positionStartDate' },
  { label: 'Position EndDate', dataKey: 'positionEndDate' },
  { label: 'Assign StartDate', dataKey: 'startDate' },
  { label: 'Assign EndDate', dataKey: 'endDate' },
  
  { label: 'Placed', dataKey: 'firstNameLastName' },
 // { label: 'Id', dataKey: 'staffID' }
];
 
const JobTitleTable = (props) => {

  function onContextMenuClick(e, data) {
    debugger;
       //alert(data.mplID)
     // console.log(data,e,test,hello)
     
       props.toogleAssignPositionModal() 
       
     }
   
   
     function onContextMenuClick2(e, data) {
       debugger;
          //alert(data.mplID)
        // console.log(data,e,test,hello)
        props.toogleMakePositionVacantModal()
          
        }
   
        function onContextMenuClick3(e, data) {
         debugger;
            //alert(data.mplID)
          // console.log(data,e,test,hello)
          props.toogleResetPositionAcceptModal()
            
          }
   
          function onContextMenuClick4(e, data) {
           debugger;
              //alert(data.mplID)
            // console.log(data,e,test,hello)
            props.toogleResetPositionAcceptModal()
              
            }
   
            function onContextMenuClick5(e, data) {
             debugger;
                //alert(data.mplID)
              // console.log(data,e,test,hello)
              props.toogleMarkPositionDeclineModal()
                
              }
   
              function onContextMenuClick6(e, data) {
               debugger;
                  //alert(data.mplID)
                // console.log(data,e,test,hello)
                props.toogleMarkPositionActingModal()
                  
                }
   
                function onContextMenuClick7(e, data) {
                 debugger;
                    //alert(data.mplID)
                  // console.log(data,e,test,hello)
                  props.toogleUnmarkPositionActingModal()
                    
                  }
     
       

  const contextMenuId = props.index + "-allRoleContextMenu";

  return (
    <div>
<ContextMenu id={contextMenuId}>
      <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick}>
        Assign Staff To Position
          </MenuItem>
      <MenuItem data={{foo: 'bar'}} onClick={onContextMenuClick2}>
        Make Position Vacant
          </MenuItem>
   
        <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick3}>
        Mark Position Accept
          </MenuItem>

            <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick4}>
        Reset Position Accept
          </MenuItem>

            <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick5}>
        Mark Position Decline
          </MenuItem>

                 <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick6}>
        Mark As Acting
          </MenuItem>

                 <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick7}>
        Unmark As Acting
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