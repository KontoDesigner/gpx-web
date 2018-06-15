import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Col } from 'reactstrap'

const Action = (props) => {
    return (
        <Col sm="8" className="text-align-right">
            <label></label>

            <UncontrolledDropdown direction="left">
                <DropdownToggle color="primary" disabled={props.selected === undefined || props.selected.length < 1}>
                    Actions
                </DropdownToggle>

                <DropdownMenu>
                    {props.selected !== undefined ? <div>({props.selected.length}) Selected</div> : ''}
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Col>
    );
};

export default Action;
