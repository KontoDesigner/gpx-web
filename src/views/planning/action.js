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
                    <DropdownItem title=" ">Assign Employee to Position</DropdownItem>
                    <DropdownItem title=" ">Update New Position</DropdownItem>
                    <DropdownItem title=" ">Make Position Vacant</DropdownItem>
                    <DropdownItem title=" ">Mark Position Accept</DropdownItem>
                    <DropdownItem title=" ">Reset Position Accept</DropdownItem>
                    <DropdownItem title=" ">Mark As Green Light</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Col>
    );
};

export default Action; 