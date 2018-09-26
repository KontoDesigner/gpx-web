import React, { Component } from 'react'
import { TabContent, TabPane, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import Tabs from './tabs'
import AllRole from './planning/allRole/allRole' 
import { bindActionCreators } from 'redux'
import * as allRolesActions from '../../actions/planning/planning/allRolesActions'
import * as placedRolesActions from '../../actions/planning/planning/placedRolesActions'
import * as vacantRolesActions from '../../actions/planning/planning/vacantRolesActions'
import * as replyYesNoRolesActions from '../../actions/planning/planning/replyYesNoRolesActions'
import $ from 'jquery'

import '../../styles/staff.css';

class Planning extends Component { 
    componentWillMount() {
        document.title = 'Planning - GPX'
    } 
 constructor(props) { 
        super(props)

        this.state = {
            activeTab: 'allRole',
            resetData: this.props.allRolesActions.handleAllRoles
        }
    }
    edit = (e, position) => {
        if (!$(e.target).is(":checkbox")) {
            const win = window.open(`/planning/${position.staffID}`, '_blank');

            win.focus();
        }
    }

    componentDidMount() {
        this.props.allRolesActions.getAllRoles()
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
                    getAllRoles={this.props.allRolesActions.getAllRoles}
                    handleAllRoles={this.props.allRolesActions.handleAllRoles}
                    getPlacedRoles={this.props.placedRolesActions.getPlacedRoles}
                    handlePlacedRoles={this.props.placedRolesActions.handlePlacedRoles}
                    getVacantRoles={this.props.vacantRolesActions.getVacantRoles}
                    handleVacantRoles={this.props.vacantRolesActions.handleVacantRoles}
                    getReplyYesNoRoles={this.props.replyYesNoRolesActions.getReplyYesNoRoles}
                    handleReplyYesNoRoles={this.props.replyYesNoRolesActions.ReplyYesNoRoles}
                 
                />
               <Col sm="12" md="9" lg="9" xl="10">
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="allRole">
                            <AllRole
                               allRoles={this.props.allRoles}
                               getAllRoles={(sourcemarket, criteria) => this.props.allRolesActions.getAllRoles(sourcemarket, criteria)}
                                //handleSelectedTitle={this.props.filterActions.handleSelectedTitle}
                                //selectedTitle={this.props.selectedTitle}
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
        allRoles: state.planning.planning.allRoles,
        placedRoles: state.planning.planning.placedRoles,
        vacantRoles: state.planning.planning.vacantRoles,
        replyYesNoRoles: state.planning.planning.replyYesNoRoles
    }
}

function mapDispatchToProps(dispatch) { 
    return {
        allRolesActions: bindActionCreators( allRolesActions, dispatch),
        placedRolesActions: bindActionCreators(placedRolesActions, dispatch),
        vacantRolesActions: bindActionCreators( vacantRolesActions, dispatch),
        replyYesNoRolesActions: bindActionCreators(replyYesNoRolesActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Planning)