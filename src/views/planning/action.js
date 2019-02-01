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
                <DropdownItem title="dsds" onClick={() => {props.toogleUpdatePositionModal()}}>
                Update Position  </DropdownItem>
                    
                    <DropdownItem title="dsds" onClick={() => {props.toogleMakePositionVacantModal()}}>
                Make Position Vacant  </DropdownItem>

                <DropdownItem title="dsds" onClick={() => {props.toogleMarkPositionAcceptModal()}}>
                Mark Position Accept </DropdownItem>

                <DropdownItem title="dsds" onClick={() => {props.toogleResetPositionAcceptModal()}}>
                Reset Position Accept  </DropdownItem>

                <DropdownItem title="hemma" onClick={() => {props.toogleMarkPositionDeclineModal()}}>
                Mark Position Decline  </DropdownItem>

                <DropdownItem title="dsds" onClick={() => {props.toogleMarkPositionActingModal ()}}>
                Mark As Acting </DropdownItem>

                <DropdownItem title="dsds" onClick={() => {props.toogleUnmarkPositionActingModal()}}>
                UnMark As Acting  </DropdownItem>


 
                </DropdownMenu>
            </UncontrolledDropdown>
        </Col>
    );
};

export default Action; 