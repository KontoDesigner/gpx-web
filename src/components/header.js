import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const Header = (props) => {
    return (
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
    );
};

export default Header;
