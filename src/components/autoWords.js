import React from 'react'
import {

   UncontrolledDropdown,DropdownToggle, DropdownMenu, DropdownItem 
 
 } from 'reactstrap'

const autoWords = () => {
    return (
 
<UncontrolledDropdown>
<DropdownToggle caret>
 Insert Auto-Word 
</DropdownToggle>
<DropdownMenu>  

<DropdownItem title="firstName" onClick={() => {this.getSelection('<FIRSTNAME>')}}>
         FirstName  </DropdownItem>
 
         <DropdownItem title="firstName" onClick={() => {this.getSelection('<LASTNAME>')}}>
         LastName  </DropdownItem>
 
         <DropdownItem title="firstName" onClick={() => {this.getSelection('<FORMNAME>')}}>
         FormName  </DropdownItem>

            <DropdownItem title="firstName" onClick={() => {this.getSelection('<NEXTDESTINATION>')}}>
         NextDestination  </DropdownItem>

            <DropdownItem title="firstName" onClick={() => {this.getSelection('<NEXTPOSITION>')}}>
         NextPosition </DropdownItem>

            <DropdownItem title="firstName" onClick={() => {this.getSelection('<PLACEMENTDATE>')}}>
         Placement Date </DropdownItem>

            <DropdownItem title="firstName" onClick={() => {this.getSelection('<LASTWORKDATE>')}}>
         Last Work Date </DropdownItem>

           <DropdownItem title="firstName" onClick={() => {this.getSelection('<CENTRALID>')}}>
         CentralID </DropdownItem>

           <DropdownItem title="firstName" onClick={() => {this.getSelection('<NATIONALITY>')}}>
         Nationality </DropdownItem>

          <DropdownItem title="firstName" onClick={() => {this.getSelection('<CURRENTPOSITION>')}}>
         Current Position</DropdownItem>

           <DropdownItem title="firstName" onClick={() => {this.getSelection('<CURRENTDESTINATION>')}}>
         Current Destination</DropdownItem>

         {/* <DropdownItem title="undo" onClick={() => {this.props.undoSelection('<UNDO>')}}>
         Undo Last Selection</DropdownItem> */}

</DropdownMenu> 

</UncontrolledDropdown>
    );
};

export default autoWords;
