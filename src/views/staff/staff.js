import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { TabContent, TabPane, Card, Row, Col, CardBody, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'
import classnames from 'classnames'
import Destination from './active/destination/destination'
import HeadOf from './active/headOf/headOf'
import JobTitle from './active/jobTitle/jobTitle'
import Name from './active/name/name'
import RecentlyInactive from './inactive/recentlyInactive/recentlyInactive'
import NewEmployees from './other/newEmployees/newEmployees'
import * as headOfActions from '../../actions/staff/active/headOfActions'
import * as destinationActions from '../../actions/staff/active/destinationActions'
import * as filterActions from '../../actions/staff/filterActions'
import * as jobTitleActions from '../../actions/staff/active/jobTitleActions'
import { withRouter } from 'react-router-dom';
import $ from 'jquery';

class Staff extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 'headOf',
      resetData: this.props.headOfActions.handleHeadOf
    }
  }

  componentDidMount() {
    this.props.headOfActions.getHeadOf()

    this.props.filterActions.getSourceMarkets()
  }

  toggle = (tab, getData, resetData) => {
    if (this.state.activeTab !== tab) {
      //Reset current tab state
      this.state.resetData([])

      //Reset filter
      this.props.filterActions.handleFilter()

      //Get tab data
      getData()

      this.setState({
        activeTab: tab,
        resetData: resetData
      })
    }
  }

  edit = (e, staff) => {
    if (!$(e.target).is(":checkbox")) {
      // this.props.history.push(`/staff/${staff.staffID}`)

      const win = window.open(`/staff/${staff.staffID}`, '_blank');
      win.focus();
    }
  }

  render() {
    return (
      <Row>
        <Col sm="12" md="3" lg="3" xl="2" className="col-menu">
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
              </ListGroup>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>Other</CardHeader>

            <CardBody className="no-padding">
              <ListGroup>
                <ListGroupItem
                  className={classnames({ active: this.state.activeTab === 'newEmployees' })}
                  onClick={() => {
                    this.toggle('newEmployees', this.props.newEmployeesActions.getNewEmployees, this.props.newEmployeesActions.handleNewEmployees)
                  }}>
                  New Employees
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>

        <Col sm="12" md="9" lg="9" xl="10">
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="headOf">
              <HeadOf
                headOf={this.props.headOf}
                getHeadOf={(sourcemarket, criteria) => this.props.headOfActions.getHeadOf(sourcemarket, criteria)}
                edit={this.edit}
              />
            </TabPane>

            <TabPane tabId="destination">
              <Destination
                destination={this.props.destination}
                etDestination={this.props.destinationActions.getDestination}
                edit={this.edit}
              />
            </TabPane>

            <TabPane tabId="name">
              <Name
              //getName={this.props.nameActions.getName}
              />
            </TabPane>

            <TabPane tabId="jobTitle">
              <JobTitle
                jobTitle={this.props.jobTitle}
                getJobTitle={this.props.jobTitleActions.getJobTitle}
                edit={this.edit}
              />
            </TabPane>

            <TabPane tabId="recentlyInactive">
              <RecentlyInactive
              //getRecentlyInactive={this.props.recentlyInactiveActions.getRecentlyInactive}
              />
            </TabPane>

            <TabPane tabId="newEmployees">
              <NewEmployees
              //getNewEmployees={this.props.newEmployeesActions.getNewEmployees}
              />
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    headOf: state.staff.active.headOf,
    destination: state.staff.active.destination,
    jobTitle: state.staff.active.jobTitle,
    tabs: state.staff.tabs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    headOfActions: bindActionCreators(headOfActions, dispatch),
    destinationActions: bindActionCreators(destinationActions, dispatch),
    filterActions: bindActionCreators(filterActions, dispatch),
    jobTitleActions: bindActionCreators(jobTitleActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Staff))
