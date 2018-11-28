import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Col } from 'reactstrap'

const Action = (props) => {

   
    
    return (



        <Col sm="12" md="4" lg="3" xl="3" className="form-group">
            <UncontrolledDropdown title={props.selected !== undefined && props.selected.length > 0 ? `${props.selected.length} selected` : ''}>
                <DropdownToggle color="primary" className="btn-action" disabled={props.selected === undefined || props.selected.length < 1}>
                    Actions
                </DropdownToggle>

                <DropdownMenu>
    
                <DropdownItem title="dsds" onClick={() => {props.toogleAbsentStaffModal("1")}}>
                Mark As Absent  </DropdownItem>
                
                {/* <AccountSettingModal /> */}

                   <DropdownItem title="dsds" onClick={() => {props.toogleResignStaffModal("2")}}>
                Mark As Resign </DropdownItem>
                
                <DropdownItem title="dsds" onClick={() => {props.toogleResignStaffModal("3")}}>
                Send Mail (Using Template) </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Col>
    );
};



export default Action;