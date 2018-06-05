import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TabContent, TabPane, Card, Row, Col, CardBody, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';
import classnames from 'classnames';
import A1 from './active/a1/a1';
import DepartureArrival from './active/departureArrival/departureArrival';
import Destination from './active/destination/destination';
import HeadOf from './active/headOf/headOf';
import JobTitle from './active/jobTitle/jobTitle';
import Name from './active/name/name';
import Archive from './inactive/archive/archive';
import RecentlyInactive from './inactive/recentlyInactive/recentlyInactive';
import ITSDAdmin from './other/itsdAdmin/itsdAdmin';
import NewEmployees from './other/newEmployees/newEmployees';
import SaveConflicts from './other/saveConflicts/saveConflicts';
import TUIProfileLogin from './other/tuiProfileLogin/tuiProfileLogin';

class Staff extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 'headOf'
        };
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <Row>
                <Col sm="2">
                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    Active
                                </CardHeader>

                                <CardBody className="no-padding">
                                    <ListGroup>
                                        <ListGroupItem className={classnames({ active: this.state.activeTab === 'headOf' })} onClick={() => { this.toggle('headOf'); }}>Head Of</ListGroupItem>
                                        <ListGroupItem className={classnames({ active: this.state.activeTab === 'destination' })} onClick={() => { this.toggle('destination'); }}>Destination</ListGroupItem>
                                        <ListGroupItem className={classnames({ active: this.state.activeTab === 'name' })} onClick={() => { this.toggle('name'); }}>Name</ListGroupItem>
                                        <ListGroupItem className={classnames({ active: this.state.activeTab === 'jobTitle' })} onClick={() => { this.toggle('jobTitle'); }}>Job Title</ListGroupItem>
                                        <ListGroupItem className={classnames({ active: this.state.activeTab === 'departureArrival' })} onClick={() => { this.toggle('departureArrival'); }}>Departure & Arrival</ListGroupItem>
                                        <ListGroupItem className={classnames({ active: this.state.activeTab === 'a1' })} onClick={() => { this.toggle('a1'); }}>A1</ListGroupItem>
                                    </ListGroup>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardHeader>
                                    Inactive
                                </CardHeader>

                                <CardBody className="no-padding">
                                    <ListGroup>
                                        <ListGroupItem className={classnames({ active: this.state.activeTab === 'recentlyInactive' })} onClick={() => { this.toggle('recentlyInactive'); }}>Recently Inactive</ListGroupItem>
                                        <ListGroupItem className={classnames({ active: this.state.activeTab === 'archive' })} onClick={() => { this.toggle('archive'); }}>Archive (2016-10)</ListGroupItem>
                                    </ListGroup>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardHeader>
                                    Other
                                </CardHeader>

                                <CardBody className="no-padding">
                                    <ListGroup>
                                        <ListGroupItem className={classnames({ active: this.state.activeTab === 'itsdAdmin' })} onClick={() => { this.toggle('itsdAdmin'); }}>ITSD Admin</ListGroupItem>
                                        <ListGroupItem className={classnames({ active: this.state.activeTab === 'saveConflicts' })} onClick={() => { this.toggle('saveConflicts'); }}>Save Conflicts</ListGroupItem>
                                        <ListGroupItem className={classnames({ active: this.state.activeTab === 'newEmployees' })} onClick={() => { this.toggle('newEmployees'); }}>New Employees</ListGroupItem>
                                        <ListGroupItem className={classnames({ active: this.state.activeTab === 'tuiProfileLogin' })} onClick={() => { this.toggle('tuiProfileLogin'); }}>TUI Profile Login</ListGroupItem>
                                    </ListGroup>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>

                <Col sm="10">
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="headOf">
                            <HeadOf />
                        </TabPane>

                        <TabPane tabId="destination">
                            <Destination />
                        </TabPane>

                        <TabPane tabId="name">
                            <Name />
                        </TabPane>

                        <TabPane tabId="jobTitle">
                            <JobTitle />
                        </TabPane>

                        <TabPane tabId="departureArrival">
                            <DepartureArrival />
                        </TabPane>

                        <TabPane tabId="a1">
                            <A1 />
                        </TabPane>

                        <TabPane tabId="recentlyInactive">
                            <RecentlyInactive />
                        </TabPane>

                        <TabPane tabId="archive">
                            <Archive />
                        </TabPane>

                        <TabPane tabId="itsdAdmin">
                            <ITSDAdmin />
                        </TabPane>

                        <TabPane tabId="saveConflicts">
                            <SaveConflicts />
                        </TabPane>

                        <TabPane tabId="newEmployees">
                            <NewEmployees />
                        </TabPane>

                        <TabPane tabId="tuiProfileLogin">
                            <TUIProfileLogin />
                        </TabPane>
                        {/*<TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>*/}
                    </TabContent>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Staff)
