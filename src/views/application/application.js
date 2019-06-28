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
import * as planToResignApplicationActions from '../../actions/application/planToResignApplication/planToResignApplicationActions'
import * as missingManagerCommentsApplicationActions from '../../actions/application/missingManagerComments/missingManagerCommentsApplicationActions'
import * as missingApplicationActions from '../../actions/application/missingApplication/missingApplicationActions'

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
            const win = window.open(`/application/${application.staffID}/${application.season}`, '_blank')
            win.focus()
        } else {
            const win2 = window.open(`/application/${application.staffID}/${application.season}`, '_blank')
            win2.focus()
        }
    }

    edit2 = application => {
        // alert(position.staffID);
        debugger;
        if (application.staffID != null && (application.staffID != 0 && application.staffID != 'No StaffId defined')) {
            const win = window.open(`/staff/${application.staffID}`, '_blank')
            win.focus()
        } else {
            const win2 = window.open(`/staff/${application.staffID}`, '_blank')
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
                    getPlanToResignApplication={this.props.planToResignApplicationActions.getPlanToResignApplication}
                    handlePlanToResignApplication={this.props.planToResignApplicationActions.handlePlanToResignApplication}
                    getMissingManagerCommentsApplication={this.props.missingManagerCommentsApplicationActions.getMissingManagerCommentsApplication}
                    handleMissingManagerCommentsApplication={this.props.missingManagerCommentsApplicationActions.handleMissingManagerCommentsApplication}
                    getMissingApplication={this.props.missingApplicationActions.getMissingApplication}
                    handleMissingApplication={this.props.missingApplicationActions.handleMissingApplication} 
                    
               
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
                           getMissingApplication={this.props.missingApplicationActions.getMissingApplication}
                           missingApplication={this.props.missingApplication}
                           edit={this.edit2}  
                            
                                                           
                                                           
                            />
</TabPane>
<TabPane tabId="missingManagerComments">
                            <MissingManagerComment
                                    getMissingManagerCommentsApplication={this.props.missingManagerCommentsApplicationActions.getMissingManagerCommentsApplication}
                                    missingManagerCommentsApplication={this.props.missingManagerCommentsApplication}

                                    edit={this.edit}  
                                                           
                            />
</TabPane>
<TabPane tabId="planToResign">
                              <PlanToResign
             getPlanToResignApplication={this.props.planToResignApplicationActions.getPlanToResignApplication}
            planToResignApplication={this.props.planToResignApplication}
            edit={this.edit}  

          
                            />    
</TabPane>
<TabPane tabId="placementRequestReport">
                              <PlanToResign
             getPlanToResignApplication={this.props.planToResignApplicationActions.getPlanToResignApplication}
            planToResignApplication={this.props.planToResignApplication}
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
        // newPosition: state.planning.planning.newPosition,
        allApplication: state.application.allApplication,
        planToResignApplication: state.application.planToResignApplication,
        missingManagerCommentsApplication: state.application.missingManagerCommentsApplication,
        missingApplication: state.application.missingApplication,
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
        planToResignApplicationActions: bindActionCreators(planToResignApplicationActions, dispatch),
        missingManagerCommentsApplicationActions: bindActionCreators(missingManagerCommentsApplicationActions, dispatch),
        missingApplicationActions: bindActionCreators(missingApplicationActions, dispatch),
        
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
