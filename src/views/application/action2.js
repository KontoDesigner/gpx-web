import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Col } from 'reactstrap'
import * as planningActions from '../../actions/planning/planningActions'
const Action = (props) => {
    return (
        <Col sm="12" md="4" lg="3" xl="3" className="form-group">
            <UncontrolledDropdown title={props.selected !== undefined && props.selected.length > 0 ? `${props.selected.length} selected` : ''}>
                <DropdownToggle color="primary" className="btn-action" disabled={props.selected === undefined || props.selected.length < 1}>
                    Actions
                </DropdownToggle>

                <DropdownMenu>
                {/* <DropdownItem title="dsds" onClick={() => {props.toogleAssignPositionModal()}}>
                Assign Staff To Position  </DropdownItem> */}
         
             
         <DropdownItem title="dsds" onClick={() => {props.toogleRemovePositionSelectModal()}}>
                Remove Position  </DropdownItem>

 
                </DropdownMenu> 
            </UncontrolledDropdown>
        </Col>
    );
};

export default Action; 