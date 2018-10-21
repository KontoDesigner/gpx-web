
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TabContent, TabPane, Row, Col } from 'reactstrap'
import Tabs from './tabs'
import PlanningReport from './reports/planning/report'
import * as reportActions from '../../actions/report/reportActions'

class Reports extends Component {


    constructor(props) {
        super(props)
       
        this.state = {
            sourceMarketId: ''
        }

        this.state = {
            activeTab: 'planningReport',

        //  resetData: this.props.ReportActions.handleReport
        }
        
        position: null
      

    }
    componentWillMount=async()=>  {
        document.title = 'Reports'
        const _this = this
       
       
  
        this.props.reportActions.getReport().then(function () {
        
           if (_this.props.report != null) { 
      
               document.title = `${_this.props.report.mplid} `
          }
           else {
     
              document.title = 'Report not found - GPX'
          }
          
          _this.setState({loaded: true})

        })

   }

   


//    handleFormSubmit(e) {
//     e.preventDefault();
//     let userData = this.state.newUser;

//     fetch('http://example.com',{
//         method: "POST",
//         body: JSON.stringify(userData),
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//       }).then(response => {
//         response.json().then(data =>{
//           console.log("Successful" + data);
//         })
//     })
//   }   

  handleDestinationSelect = (val) => {


     val = val != null || val != undefined ? val : ''  

    this.props.reportActions.handleDestinationField(val)

    //this.props.handleUnsavedEdit()
} 
create = () => {
    this.props.reportActions.createReport()
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
                                position={this.props.position }
                                selectedDestination={this.props.selectedDestination}
                              handleDestinationSelect={this.handleDestinationSelect}
                              create={this.create}
                          
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

function mapStateToProps(state) {

    return {

        position: state.report.report.report,
        selectedDestination:state.report.report.selectedDestination,
        create:state.report.report.create
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //positionInfoActions: bindActionCreators(positionInfoActions, dispatch),
        reportActions: bindActionCreators(reportActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reports)
