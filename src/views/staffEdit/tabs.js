import React from 'react';
import { Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import classnames from 'classnames'

const Tabs = (props) => {
    return (
        <Row style={{ borderBottom: '1px solid #ddd', marginBottom: '15px' }}>
            <Col sm="12" md="12" lg="9" xl="6" className="no-padding-left no-padding-right">
                <Nav className="nav-tab nav-tab-edit" style={{ backgroundColor: '#fff', paddingTop: '0px' }}>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: props.activeTab === 'employeeInfo' })}
                            onClick={() => {
                                props.toggle('employeeInfo')
                            }}>
                            Employee Info
                                </NavLink>
                    </NavItem>

                      <NavItem>
                        <NavLink
                            className={classnames({ active: props.activeTab === 'abscense' })}
                            onClick={() => {
                                props.toggle('abscense')
                            }}>
                           Absence / Resign
                                </NavLink>
                    </NavItem>


                    <NavItem>
                        <NavLink
                            className={classnames({ active: props.activeTab === 'cv' })}
                            onClick={() => {
                                props.toggle('cv')
                            }}>
                           CV
                                </NavLink>
                    </NavItem>
                 
                    <NavItem>
                        <NavLink
                            className={classnames({ active: props.activeTab === 'applications' })}
                            onClick={() => {
                                props.toggle('applications')
                            }}>
                            Applications
                                </NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink
                            className={classnames({ active: props.activeTab === 'team' })}
                            onClick={() => {
                                props.toggle('team')
                            }}>
                            Team
                                </NavLink>
                    </NavItem> */}
                    <NavItem>
                        <NavLink
                            className={classnames({ active: props.activeTab === 'history' })}
                            onClick={() => {
                                props.toggle('history')
                            }}>
                            History
                                </NavLink>
                    </NavItem>
                </Nav>
            </Col>

            <Col lg="3" xl="6" className="d-none d-lg-block">
                {props.buttons}
            </Col>
        </Row>
    );
};

export default Tabs;
