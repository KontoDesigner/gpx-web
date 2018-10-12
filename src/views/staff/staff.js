import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { TabContent, TabPane, Row, Col } from 'reactstrap'
import Destination from './active/destination/destination'
import HeadOf from './active/headOf/headOf'
import JobTitle from './active/jobTitle/jobTitle'
import Name from './active/name/name'
import RecentlyInactive from './inactive/recentlyInactive/recentlyInactive'
import NewEmployee from './other/newEmployee/newEmployee'
import * as headOfActions from '../../actions/staff/active/headOfActions'
import * as destinationActions from '../../actions/staff/active/destinationActions'
import * as filterActions from '../../actions/staff/filterActions'
import * as jobTitleActions from '../../actions/staff/active/jobTitleActions'
import * as recentlyInactiveActions from '../../actions/staff/inactive/recentlyInactiveActions'
import * as nameActions from '../../actions/staff/active/nameActions'
import * as newEmployeeActions from '../../actions/staff/other/newEmployeeActions'

import $ from 'jquery'
import Tabs from './tabs'
import '../../styles/staff.css';

class Staff extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: 'headOf',
            resetData: this.props.headOfActions.handleHeadOf
        }
    }

    edit = (e, staff) => {
        if (!$(e.target).is(":checkbox")) {
            const win = window.open(`/staff/${staff.staffID}`, '_blank');

            win.focus();
        }
    }

    componentWillMount() {
        document.title = 'Staff - GPX'
    }

    componentDidMount() {
        this.props.filterActions.handleFilter()   //when page loads
 
        this.props.headOfActions.getHeadOf()
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

    render() {
        return (
            <Row>
                <Tabs
                    toggle={this.toggle}
                    activeTab={this.state.activeTab}
                    getHeadOf={this.props.headOfActions.getHeadOf}
                    handleHeadOf={this.props.headOfActions.handleHeadOf}
                    getDestination={this.props.destinationActions.getDestination}
                    handleDestination={this.props.destinationActions.handleDestination}
                    getName={this.props.nameActions.getName}
                   handleName={this.props.nameActions.handleName} 
                    getJobTitle={this.props.jobTitleActions.getJobTitle}
                    handleJobTitle={this.props.jobTitleActions.handleJobTitle}
                 getRecentlyInactive={this.props.recentlyInactiveActions.getRecentlyInactive}
                 handleRecentlyInactive={this.props.recentlyInactiveActions.handleRecentlyInactive}
                getNewEmployee={this.props.newEmployeeActions.getNewEmployee}
                 handleNewEmployee={this.props.newEmployeeActions.handleNewEmployee}
                />

                <Col sm="12" md="9" lg="9" xl="10">
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="headOf">
                            <HeadOf
                                headOf={this.props.headOf}
                                getHeadOf={this.props.headOfActions.getHeadOf}
                                handleSelectedStaff={this.props.filterActions.handleSelectedStaff}
                                selectedStaff={this.props.selectedStaff}
                                edit={this.edit}
                            />
                        </TabPane>

                        <TabPane tabId="destination">
                            <Destination
                                destination={this.props.destination}
                                getDestination={this.props.destinationActions.getDestination}
                                handleSelectedStaff={this.props.filterActions.handleSelectedStaff}
                                selectedStaff={this.props.selectedStaff}
                                edit={this.edit}
                            />
                        </TabPane>

                        <TabPane tabId="name">
                            <Name
                                name={this.props.name}
                              getName={this.props.nameActions.getName}
                            handleSelectedStaff={this.props.filterActions.handleSelectedStaff}
                                selectedStaff={this.props.selectedStaff}
                                edit={this.edit}
                            />
                        </TabPane>

                        <TabPane tabId="jobTitle">
                            <JobTitle
                                jobTitle={this.props.jobTitle}
                                getJobTitle={this.props.jobTitleActions.getJobTitle}
                                handleSelectedStaff={this.props.filterActions.handleSelectedStaff}
                                selectedStaff={this.props.selectedStaff}
                                edit={this.edit}
                            />
                        </TabPane>

                        <TabPane tabId="recentlyInactive">
                            <RecentlyInactive
                             recentlyInactive={this.props.recentlyInactive}
                             getRecentlyInactive={this.props.recentlyInactiveActions.getRecentlyInactive}
                             handleSelectedStaff={this.props.filterActions.handleSelectedStaff}
                             selectedStaff={this.props.selectedStaff}
                             edit={this.edit}
                            />
                        </TabPane>

                        <TabPane tabId="newEmployee">
                       
                            <NewEmployee
                            newEmployee={this.props.newEmployee}
                            


                            getNewEmployee={this.props.getNewEmployee}
                          
                            handleSelectedStaff={this.props.filterActions.handleSelectedStaff}
                            selectedStaff={this.props.selectedStaff}
                            edit={this.edit}
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
        name: state.staff.active.name,
        destination: state.staff.active.destination,
        jobTitle: state.staff.active.jobTitle,
        selectedStaff: state.staff.filter.selectedStaff,
       recentlyInactive: state.staff.inactive.recentlyInactive,
       newEmployee: state.staff.other.newEmployee
    }
}

function mapDispatchToProps(dispatch) {
    return {
        headOfActions: bindActionCreators(headOfActions, dispatch),
        destinationActions: bindActionCreators(destinationActions, dispatch),
        filterActions: bindActionCreators(filterActions, dispatch),
        jobTitleActions: bindActionCreators(jobTitleActions, dispatch),
       recentlyInactiveActions: bindActionCreators(recentlyInactiveActions, dispatch),
        nameActions: bindActionCreators(nameActions, dispatch),
        newEmployeeActions: bindActionCreators(newEmployeeActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Staff)
