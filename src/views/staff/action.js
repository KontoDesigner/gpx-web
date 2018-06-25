import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Col } from 'reactstrap'

const Action = (props) => {
    return (
        <Col sm="12" md="4" lg="6" xl="8" className="col-action">
            <UncontrolledDropdown title={props.selected !== undefined && props.selected.length > 0 ? `${props.selected.length} selected` : ''}>
                <DropdownToggle color="primary" disabled={props.selected === undefined || props.selected.length < 1}>
                    Actions
                </DropdownToggle>

                <DropdownMenu>
                    <DropdownItem title=" ">Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Col>
    );
};

export default Action;
