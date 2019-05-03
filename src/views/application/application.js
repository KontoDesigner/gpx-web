import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { TabContent, TabPane, Row, Col } from 'reactstrap'
import Tabs from './tabs'
import RestClient from '../../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'
import '../../styles/staff.css'
import AllApplication from './allApplication/allApplication'
import MissingApplication from './missingApplication/missingApplication'
import MissingManagerComment from './missingManagerComment/missingManagerComment'
import PlanToResign from './planToResign/planToResign'
import * as filterActions from '../../actions/planning/filterActions'
import * as allRolesActions from '../../actions/planning/planning/allRolesActions'
class Application extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            activeTab: 'allApplication',
           resetData: this.props.allRolesActions.handleAllRoles, // send to all role view
        }

        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.filterActions.handleFilter() //when page loads
        debugger
        this.props.allRolesActions.getAllRoles(this.props.filter.sourceMarket, this.props.filter.selectedJobFamily, this.props.filter.selectedPositionType,this.props.filter.text)

       // this.props.planningActions.getStaffCandidate()
        //this.getAvailablePositionNew()
    }
    toggle = (tab, getData, resetData) => {
        debugger;
        if (this.state.activeTab !== tab) {
            //Reset current tab state
            this.state.resetData([])

            //Reset filter
            //this.props.filterActions.handleFilter()
debugger;
            //Get tab data
            getData(this.props.filter.sourceMarket, this.props.filter.selectedJobFamily,this.props.filter.selectedPositionType, this.props.filter.text)

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
                    getAllRoles={this.props.allRolesActions.getAllRoles}
                    handleAllRoles={this.props.allRolesActions.handleAllRoles}
                    // getAllRoles={this.props.allRolesActions.getAllRoles}
                    // handleAllRoles={this.props.allRolesActions.handleAllRoles}
                    // getPlacedRoles={this.props.placedRolesActions.getPlacedRoles}
                    // handlePlacedRoles={this.props.placedRolesActions.handlePlacedRoles}
                    // getVacantRoles={this.props.vacantRolesActions.getVacantRoles}
                    // handleVacantRoles={this.props.vacantRolesActions.handleVacantRoles}
                    // getReplyYesNoRoles={this.props.replyYesNoRolesActions.getReplyYesNoRoles}
                    // handleReplyYesNoRoles={this.props.replyYesNoRolesActions.handleReplyYesNoRoles}
                    // getNewPosition={this.props.newPositionActions.getNewPosition}
                    // handleNewPosition={this.props.newPositionActions.handleNewPosition}
                />

<Col sm="12" md="9" lg="9" xl="10">
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="allApplication">
                            <AllApplication
                            getAllRoles={this.props.allRolesActions.getAllRoles}

                                                           
                                                           
                            />
</TabPane>
<TabPane tabId="missingApplication">
                            <MissingApplication
                            getAllRoles={this.props.allRolesActions.getAllRoles}

                                                           
                                                           
                            />
</TabPane>
<TabPane tabId="missingManagerComment">
                            <MissingManagerComment
                            getAllRoles={this.props.allRolesActions.getAllRoles}

                                                           
                                                           
                            />
</TabPane>
<TabPane tabId="planToResign">
                            <PlanToResign
                            getAllRoles={this.props.allRolesActions.getAllRoles}

                                                           
                                                           
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
        newPosition: state.planning.planning.newPosition,
        allRoles: state.planning.planning.allRoles,
        placedRoles: state.planning.planning.placedRoles,
        vacantRoles: state.planning.planning.vacantRoles,
        replyYesNoRoles: state.planning.planning.replyYesNoRoles,
        selectedTitle: state.planning.filter.selectedTitle,
        candidate: state.planning.candidate.candidate,
        filter: state.planning.filter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // planningActions: bindActionCreators(planningActions, dispatch),
        allRolesActions: bindActionCreators(allRolesActions, dispatch),
        // placedRolesActions: bindActionCreators(placedRolesActions, dispatch),
        // vacantRolesActions: bindActionCreators(vacantRolesActions, dispatch),
        // newPositionActions: bindActionCreators(newPositionActions, dispatch),
        // replyYesNoRolesActions: bindActionCreators(replyYesNoRolesActions, dispatch)
        filterActions: bindActionCreators(filterActions, dispatch),
      
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Application)
