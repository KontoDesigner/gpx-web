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
import * as filterActions from '../../actions/application/filterActions'
import * as allApplicationActions from '../../actions/application/allApplication/allApplicationActions'

class Application extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            activeTab: 'allApplication',
           resetData: this.props.allApplicationActions.handleAllApplication, // send to all application view
        }

        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.filterActions.handleFilter() //when page loads
       
        debugger
        this.props.allApplicationActions.getAllApplication(this.props.filter.sourceMarket, this.props.filter.selectedJobFamily, this.props.filter.selectedJobTitle,this.props.filter.selectedJump,this.props.filter.text)

       // this.props.planningActions.getStaffCandidate()
        //this.getAvailablePositionNew()
    }

    edit = application => {
        // alert(position.staffID);
        debugger;
        if (application.staffID != null && (application.staffID != 0 && application.staffID != 'No StaffId defined')) {
            const win = window.open(`/application/${application.staffID}`, '_blank')
            win.focus()
        } else {
            const win2 = window.open(`/application/${application.staffID}`, '_blank')
            win2.focus()
        }
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
            getData(this.props.filter.sourceMarket, this.props.filter.selectedJobFamily,this.props.filter.selectedJobTitle,this.props.filter.selectedJump, this.props.filter.text)

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
                    getAllApplication={this.props.allApplicationActions.getAllApplication}
                    handleAllApplication={this.props.allApplicationActions.handleAllApplication}
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
                            getAllApplication={this.props.allApplicationActions.getAllApplication}
                            allApplication={this.props.allApplication}
                    edit={this.edit}                         
                                                           
                            />
</TabPane>
<TabPane tabId="missingApplication">
                            <MissingApplication
                           getAllApplication={this.props.allApplicationActions.getAllApplication}
                           allApplication={this.props.allApplication}

                                                           
                                                           
                            />
</TabPane>
<TabPane tabId="missingManagerComment">
                            <MissingManagerComment
                         getAllApplication={this.props.allApplicationActions.getAllApplication}
                         allApplication={this.props.allApplication}

                                                           
                                                           
                            />
</TabPane>
<TabPane tabId="planToResign">
                            <PlanToResign
            getAllApplication={this.props.allApplicationActions.getAllApplication}
            allApplication={this.props.allApplication}

          
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
        // newPosition: state.planning.planning.newPosition,
        allApplication: state.application.application.allApplication,
        // placedRoles: state.planning.planning.placedRoles,
        // vacantRoles: state.planning.planning.vacantRoles,
        // replyYesNoRoles: state.planning.planning.replyYesNoRoles,
        // selectedTitle: state.planning.filter.selectedTitle,
        // candidate: state.planning.candidate.candidate,
       filter: state.application.filter
    }
} 

function mapDispatchToProps(dispatch) {
    return {
        // planningActions: bindActionCreators(planningActions, dispatch),
        allApplicationActions: bindActionCreators(allApplicationActions, dispatch),
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
