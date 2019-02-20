import React from 'react'
import { ContextMenu, MenuItem } from 'react-contextmenu'
import Table from '../../../../components/table.js'
const columns = [
    { label: 'MPLID', dataKey: 'mplID' },
    { label: 'Season', dataKey: 'season' },
    //{ label: 'MPLIDVersion', dataKey: 'mplIDVersion' },
  
    { label: 'JobTitle', dataKey: 'jobTitle' },
    { label: 'Profile', dataKey: 'profile' },
  
    { label: 'Source Market', dataKey: 'mplSourceMarket' },
    { label: 'Position Type', dataKey: 'mplPositionType' },
    //{ label: 'Languages', dataKey: 'languages' },
    { label: 'HighSeason', dataKey: 'highseason' },
    { label: 'Position StartDate', dataKey: 'positionStartDate' },
    { label: 'Position EndDate', dataKey: 'positionEndDate' },
    { label: 'Placed', dataKey: 'firstNameLastName' },
   // { label: 'Id', dataKey: 'staffID' }
  ];

const JobTitleTable = props => {
    function onContextMenuClick(e, data) {
    
        //alert(data.mplID)
      // console.log(data,e,test,hello)
      
        props.toogleAssignPositionModal(data.mplID) 
        
      }
    
    
      function onContextMenuClick2(e, data) {
      debugger;  
           //alert(data.mplID)
         // console.log(data,e,test,hello)
         //props.toogleMakePositionVacantModal(data.mplID)
         props.toogleRemovePositionModal(data.mplID)
         }
    
         function onContextMenuClick3(e, data) {
          
             //alert(data.mplID)
           // console.log(data,e,test,hello)
           props.toogleMarkPositionAcceptModal(data.mplID)
             
           }
    
           function onContextMenuClick4(e, data) {
            
               //alert(data.mplID)
             // console.log(data,e,test,hello)
             props.toogleResetPositionAcceptModal(data.mplID)
               
             }
    
             function onContextMenuClick5(e, data) {
              
                 //alert(data.mplID)
               // console.log(data,e,test,hello)
               props.toogleMarkPositionDeclineModal(data.mplID)
                 
               }
    
               function onContextMenuClick6(e, data) {
                
                   //alert(data.mplID)
                 // console.log(data,e,test,hello)
                 props.toogleMarkPositionActingModal(data.mplID)
                   
                 }
    
                 function onContextMenuClick7(e, data) {
                  
                     //alert(data.mplID)
                   // console.log(data,e,test,hello)
                   props.toogleUnmarkPositionActingModal(data.mplID)
                     
                   }
      
 
         
 
   const contextMenuId = props.index + "-replyYesNoRoleContextMenu";
 
   return (
     <div>
 <ContextMenu id={contextMenuId}>
       {/* <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick}>
         Assign Staff To Position
           </MenuItem> */}
           <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick2}>
         Remove Position
           </MenuItem>
        {/* <MenuItem data={{foo: 'bar'}} onClick={onContextMenuClick2}>
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
           </MenuItem>  */}
       </ContextMenu> 
            <Table
                    list={props.replyYesNoRoles}
                    contextMenuId={contextMenuId}
                    columns={columns}
                    checkbox={true}
                    identifier={'mplid'}
                    edit={props.edit}
                    updateSelectedState={props.handleSelectedTitle}
                    selected={props.selectedTitle}
                   // maxTableHeight={props.maxTableHeight}
            />
        </div>
    )
}

export default JobTitleTable
