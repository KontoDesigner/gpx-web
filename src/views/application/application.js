import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { TabContent, TabPane, Row, Col } from 'reactstrap'
import Tabs from './tabs'
import RestClient from '../../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'
import '../../styles/staff.css'
import AllApplication from './allApplication/allApplication'

class Application extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            activeTab: 'allApplication',
          //  resetData: this.props.allRolesActions.handleAllRoles, // send to all role view
        }

        // this.handleChange = this.handleChange.bind(this);
    }

    
    render() {
        return (
            <Row>
                <Tabs
                     toggle={this.toggle}
                    activeTab={this.state.activeTab}
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
                        <TabPane tabId="allRole">
                            <AllApplication
                                 />
</TabPane>
</TabContent>
</Col>

            </Row>
        )
    }
}


export default Application
