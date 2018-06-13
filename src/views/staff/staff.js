import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { TabContent, TabPane, Card, Row, Col, CardBody, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'
import classnames from 'classnames'
import A1 from './active/a1/a1'
import DepartureArrival from './active/departureArrival/departureArrival'
import Destination from './active/destination/destination'
import HeadOf from './active/headOf/headOf'
import JobTitle from './active/jobTitle/jobTitle'
import Name from './active/name/name'
import Archive from './inactive/archive/archive'
import RecentlyInactive from './inactive/recentlyInactive/recentlyInactive'
import ITSDAdmin from './other/itsdAdmin/itsdAdmin'
import NewEmployees from './other/newEmployees/newEmployees'
import SaveConflicts from './other/saveConflicts/saveConflicts'
import TUIProfileLogin from './other/tuiProfileLogin/tuiProfileLogin'
import * as headOfActions from '../../actions/staff/active/headOfActions'
import * as destinationActions from '../../actions/staff/active/destinationActions'
import * as filterActions from '../../actions/staff/filterActions'

class Staff extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 'headOf',
      resetData: this.props.headOfActions.handleHeadOf
    }
  }

  componentWillMount() {
    this.props.headOfActions.getHeadOf()

    this.props.filterActions.getSourceMarkets()
  }

  resetData = () => {}

  toggle = (tab, getData, resetData) => {
    if (this.state.activeTab !== tab) {
      //Reset current tab state
      this.state.resetData([])

      //Reset filter
      this.props.filterActions.handleFilter()

      //Set staff sub state
      getData()

      this.setState({
        activeTab: tab,
        resetData: resetData
      })
    }
  }

  render() {
    return (
      <Row>
        <Col sm="2">
          <Row>
            <Col sm="12">
              <Card>
                <CardHeader>Active</CardHeader>

                <CardBody className="no-padding">
                  <ListGroup>
                    <ListGroupItem
                      className={classnames({ active: this.state.activeTab === 'headOf' })}
                      onClick={() => {
                        this.toggle('headOf', this.props.headOfActions.getHeadOf, this.props.headOfActions.handleHeadOf)
                      }}>
                      Head Of
                    </ListGroupItem>
                    <ListGroupItem
                      className={classnames({ active: this.state.activeTab === 'destination' })}
                      onClick={() => {
                        this.toggle('destination', this.props.destinationActions.getDestination, this.props.destinationActions.handleDestination)
                      }}>
                      Destination
                    </ListGroupItem>
                    <ListGroupItem
                      className={classnames({ active: this.state.activeTab === 'name' })}
                      onClick={() => {
                        this.toggle('name', this.props.nameActions.getName, this.props.nameActions.handleName)
                      }}>
                      Name
                    </ListGroupItem>
                    <ListGroupItem
                      className={classnames({ active: this.state.activeTab === 'jobTitle' })}
                      onClick={() => {
                        this.toggle('jobTitle', this.props.jobTitleActions.getJobTitle, this.props.jobTitleActions.handleJobTitle)
                      }}>
                      Job Title
                    </ListGroupItem>
                    <ListGroupItem
                      className={classnames({ active: this.state.activeTab === 'departureArrival' })}
                      onClick={() => {
                        this.toggle(
                          'departureArrival',
                          this.props.departureArrivalActions.getDepartureArrival,
                          this.props.departureArrivalActions.handleDepartureArrival
                        )
                      }}>
                      Departure & Arrival
                    </ListGroupItem>
                    <ListGroupItem
                      className={classnames({ active: this.state.activeTab === 'a1' })}
                      onClick={() => {
                        this.toggle('a1', this.props.a1Actions.getA1, this.props.a1Actions.handleA1)
                      }}>
                      A1
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>Inactive</CardHeader>

                <CardBody className="no-padding">
                  <ListGroup>
                    <ListGroupItem
                      className={classnames({ active: this.state.activeTab === 'recentlyInactive' })}
                      onClick={() => {
                        this.toggle(
                          'recentlyInactive',
                          this.props.recentlyInactiveActions.getRecentlyInactive,
                          this.props.recentlyInactiveActions.handleGetRecentlyInactive
                        )
                      }}>
                      Recently Inactive
                    </ListGroupItem>
                    <ListGroupItem
                      className={classnames({ active: this.state.activeTab === 'archive' })}
                      onClick={() => {
                        this.toggle('archive', this.props.archiveActions.getArchive, this.props.archiveActions.handleArchive)
                      }}>
                      Archive (2016-10)
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>Other</CardHeader>

                <CardBody className="no-padding">
                  <ListGroup>
                    <ListGroupItem
                      className={classnames({ active: this.state.activeTab === 'itsdAdmin' })}
                      onClick={() => {
                        this.toggle('itsdAdmin', this.props.itsdAdminActions.getItsdAdmin, this.props.itsdAdminActions.handleItsdAdmin)
                      }}>
                      ITSD Admin
                    </ListGroupItem>
                    <ListGroupItem
                      className={classnames({ active: this.state.activeTab === 'saveConflicts' })}
                      onClick={() => {
                        this.toggle(
                          'saveConflicts',
                          this.props.saveConflictsActions.getSaveConflicts,
                          this.props.saveConflictsActions.handleSaveConflicts
                        )
                      }}>
                      Save Conflicts
                    </ListGroupItem>
                    <ListGroupItem
                      className={classnames({ active: this.state.activeTab === 'newEmployees' })}
                      onClick={() => {
                        this.toggle('newEmployees', this.props.newEmployeesActions.getNewEmployees, this.props.newEmployeesActions.handleNewEmployees)
                      }}>
                      New Employees
                    </ListGroupItem>
                    <ListGroupItem
                      className={classnames({ active: this.state.activeTab === 'tuiProfileLogin' })}
                      onClick={() => {
                        this.toggle(
                          'tuiProfileLogin',
                          this.props.tuiProfileLoginActions.getTuiProfileLogin,
                          this.props.tuiProfileLoginActions.handleTuiProfileLogin
                        )
                      }}>
                      TUI Profile Login
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col sm="10">
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="headOf">
              <HeadOf headOf={this.props.headOf} getHeadOf={this.props.headOfActions.getHeadOf} />
            </TabPane>

            <TabPane tabId="destination">
              <Destination destination={this.props.destination} getDestination={this.props.destinationActions.getDestination} />
            </TabPane>

            <TabPane tabId="name">
              <Name
              //getName={this.props.nameActions.getName}
              />
            </TabPane>

            <TabPane tabId="jobTitle">
              <JobTitle
              //getJobTitle={this.props.jobTitleActions.getJobTitle}
              />
            </TabPane>

            <TabPane tabId="departureArrival">
              <DepartureArrival
              //getDepartureArrival={this.props.departureArrivalActions.getDepartureArrival}
              />
            </TabPane>

            <TabPane tabId="a1">
              <A1
              //getA1={this.props.a1Actions.getA1}
              />
            </TabPane>

            <TabPane tabId="recentlyInactive">
              <RecentlyInactive
              //getRecentlyInactive={this.props.recentlyInactiveActions.getRecentlyInactive}
              />
            </TabPane>

            <TabPane tabId="archive">
              <Archive
              //getArchive={this.props.archiveActions.getArchive}
              />
            </TabPane>

            <TabPane tabId="itsdAdmin">
              <ITSDAdmin
              //getItsdAdmin={this.props.itsdAdminActions.getItsdAdmin}
              />
            </TabPane>

            <TabPane tabId="saveConflicts">
              <SaveConflicts
              //getSaveConflicts={this.props.saveConflictsActions.getSaveConflicts}
              />
            </TabPane>

            <TabPane tabId="newEmployees">
              <NewEmployees
              //getNewEmployees={this.props.newEmployeesActions.getNewEmployees}
              />
            </TabPane>

            <TabPane tabId="tuiProfileLogin">
              <TUIProfileLogin
              //getTuiProfileLogin={this.props.tuiProfileLoginActions.getTuiProfileLogin}
              />
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    headOf: state.staff.active.headOf,
    destination: state.staff.active.destination
  }
}

function mapDispatchToProps(dispatch) {
  return {
    headOfActions: bindActionCreators(headOfActions, dispatch),
    destinationActions: bindActionCreators(destinationActions, dispatch),
    filterActions: bindActionCreators(filterActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Staff)
