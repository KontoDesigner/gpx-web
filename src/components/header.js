import React from 'react';
import { Nav, NavItem, NavLink, Col } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div style={{backgroundColor: '#fafbfc', borderBottom: '1px solid #ddd'}}>
            <Col sm="10" className="offset-2 no-padding-left no-padding-right">
                <Nav className="nav-tab">
                    <NavItem>
                        <NavLink tag={RRNavLink} to="/staff">Staff</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RRNavLink} to="/planning">Planning</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RRNavLink} to="/reports">Reports</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RRNavLink} to="/settings">Settings</NavLink>
                    </NavItem>
                </Nav>
            </Col>
        </div>
    );
};

export default Header;
