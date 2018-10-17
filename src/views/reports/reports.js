import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TabContent, TabPane, Row, Col } from 'reactstrap'
import Tabs from './tabs'
import PlanningReport from './reports/planning/report'
import * as planningInfoActions from '../../actions/planningEdit/planningInfoActions'

class Reports extends Component {


    constructor(props) {
        super(props)

        this.state = {
            activeTab: 'planningReport',
          //  resetData: this.props.planningReportActions.handlePlaningReport
        }
    }
    componentWillMount=async()=>  {
        document.title = 'Reports'
        const _this = this
       
       
       
        this.props.planningInfoActions.getPosition('38236').then(function () {
        
           if (_this.props.position != null) { 
            
               document.title = `${_this.props.position.destination} `
          }
           else {
       
              document.title = 'Position not found - GPX'
          }
        })
   }



    toggle = (tab, getData, resetData) => {
        if (this.state.activeTab !== tab) {
            //Reset current tab state
            this.state.resetData([])

            //Reset filter
           // this.props.filterActions.handleFilter()

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
                    // getPlanningReport={this.props.planningReport.Actions.getPlanningReport}
                    // handlePlanningReport={this.props.planningReportActions.handlePlanningReport}
                    // getPlacedRoles={this.props.placedRolesActions.getPlacedRoles}
                    // handlePlacedRoles={this.props.placedRolesActions.handlePlacedRoles}
                    // getVacantRoles={this.props.vacantRolesActions.getVacantRoles}
                    // handleVacantRoles={this.props.vacantRolesActions.handleVacantRoles}
                    // getReplyYesNoRoles={this.props.replyYesNoRolesActions.getReplyYesNoRoles}
                    // handleReplyYesNoRoles={this.props.replyYesNoRolesActions.handleReplyYesNoRoles}
                />
                <Col sm="12" md="9" lg="9" xl="10">
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="planningReport">
                            <PlanningReport
                                destination={this.props.planningReport}
                          
                                // getAllRoles={(sourcemarket, criteria) => this.props.allRolesActions.getAllRoles(sourcemarket, criteria)}
                                // handleSelectedTitle={this.props.filterActions.handleSelectedTitle}
                                // selectedTitle={this.props.selectedTitle}
                                // edit={this.edit}
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

        destination: state.planningEdit.planningInfo.position,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //positionInfoActions: bindActionCreators(positionInfoActions, dispatch),
        planningInfoActions: bindActionCreators(planningInfoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reports)
