import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RestClient from '../../../infrastructure/restClient'
import { beginAjaxCall, endAjaxCall, ajaxCallError } from '../../../actions/ajaxStatusActions'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap'
import EmployeeInfo from './employeeInfo/employeeInfo'
import FullYearReview from './fullYearReview/fullYearReview'
import Applications from './applications/applications'
import A1 from './a1/a1'
import Team from './team/team'
import History from './history/history'
import classnames from 'classnames'
import { LinkContainer } from 'react-router-bootstrap';

class Edit extends Component {
    constructor() {
        super()

        this.state = {
            staff: null,
            activeTab: 'employeeInfo',
            staffId: ''
        }
    }

    async componentDidMount() {
        const { match: { params } } = this.props;

        this.props.beginAjaxCall();

        try {
            const staffId = params.id;

            const staff = await RestClient.Get(`staff/${staffId}`)

            if (staff !== undefined) {
                document.title = `${staff.firstNameLastName} - GPX`;
            }

            this.setState({ staff, staffId });

            this.props.endAjaxCall();
        } catch (error) {
            this.props.ajaxCallError(error);

            throw error
        }
    }

    updateStaffFieldState = (event) => {
        const field = event.target.name;

        let staff = Object.assign({}, this.state.staff);

        staff[field] = event.target.value;

        return this.setState({ staff });
    }

    toggle = (activeTab) => {
        if (this.state.activeTab !== activeTab) {
            this.setState({
                activeTab
            })
        }
    }

    render() {
        if (this.state.staff === undefined) {
            return (
                <Card>
                    <CardHeader>
                        Could not find staff
                    </CardHeader>

                    <CardBody>
                        <p className="card-text">Staff with id: <b>{this.state.staffId}</b> was not found.</p>
                    </CardBody>

                    <CardFooter>
                        <LinkContainer to="/staff">
                            <Button color="primary">Back</Button>
                        </LinkContainer>
                    </CardFooter>
                </Card>
            )
        }
        if (this.state.staff === null) {
            return (
                ''
            )
        }
        else {
            return (
                <div>
                    <Row style={{ borderBottom: '1px solid #ddd', marginBottom: '15px' }}>
                        <Col className="no-padding-left no-padding-right">
                            <Nav className="nav-tab nav-tab-edit" style={{ backgroundColor: '#fff', paddingTop: '0px' }}>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === 'employeeInfo' })}
                                        onClick={() => {
                                            this.toggle('employeeInfo')
                                        }}>
                                        Employee Info
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === 'fullYearReview' })}
                                        onClick={() => {
                                            this.toggle('fullYearReview')
                                        }}>
                                        Full Year Review
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === 'applications' })}
                                        onClick={() => {
                                            this.toggle('applications')
                                        }}>
                                        Applications
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === 'a1' })}
                                        onClick={() => {
                                            this.toggle('a1')
                                        }}>
                                        A1
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === 'team' })}
                                        onClick={() => {
                                            this.toggle('team')
                                        }}>
                                        Team
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === 'history' })}
                                        onClick={() => {
                                            this.toggle('history')
                                        }}>
                                        History
                                </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="employeeInfo">
                                    <EmployeeInfo
                                        staff={this.state.staff}
                                        updateStaffFieldState={this.updateStaffFieldState}
                                    />
                                </TabPane>

                                <TabPane tabId="fullYearReview">
                                    <FullYearReview />
                                </TabPane>

                                <TabPane tabId="applications">
                                    <Applications />
                                </TabPane>

                                <TabPane tabId="a1">
                                    <A1 />
                                </TabPane>

                                <TabPane tabId="team">
                                    <Team />
                                </TabPane>

                                <TabPane tabId="history">
                                    <History />
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        beginAjaxCall: bindActionCreators(beginAjaxCall, dispatch),
        endAjaxCall: bindActionCreators(endAjaxCall, dispatch),
        ajaxCallError: bindActionCreators(ajaxCallError, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit)