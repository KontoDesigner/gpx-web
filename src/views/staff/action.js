import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Col } from 'reactstrap'

const Action = (props) => {
    return (
        <Col sm="8" className="text-align-right">
            <UncontrolledDropdown direction="left">
                <DropdownToggle color="primary">
                    Actions
                </DropdownToggle>

                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Col>
    );
};

export default Action;
