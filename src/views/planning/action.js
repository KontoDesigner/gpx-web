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
                <DropdownItem title="dsds" onClick={() => {props.toogleAssignPositionModal("1")}}>
                Assign Staff To Position  </DropdownItem>
                <DropdownItem title="dsds" onClick={() => {props.toogleUpdatePositionModal("1")}}>
                Update Position  </DropdownItem>
                    
                    <DropdownItem title="dsds" onClick={() => {props.toogleMakePositionVacantModal("1")}}>
                Make Position Vacant  </DropdownItem>

                <DropdownItem title="dsds" onClick={() => {props.toogleMarkPositionAcceptModal("1")}}>
                Mark Position Accept </DropdownItem>

                <DropdownItem title="dsds" onClick={() => {props.toogleResetPositionAcceptModal("1")}}>
                Reset Position Accept  </DropdownItem>

                <DropdownItem title="hemma" onClick={() => {props.toogleMarkPositionDeclineModal("1")}}>
                Mark Position Decline  </DropdownItem>

                <DropdownItem title="dsds" onClick={() => {props.toogleMarkPositionActingModal ("1")}}>
                Mark As Acting </DropdownItem>

                <DropdownItem title="dsds" onClick={() => {props.toogleUnmarkPositionActingModal("1")}}>
                UnMark As Acting  </DropdownItem>


 
                </DropdownMenu>
            </UncontrolledDropdown>
        </Col>
    );
};

export default Action; 