import React, { Component } from 'react'
import ContactInformation from './contactInformation'
import Season from './season/season'
import EmployeeInformation from './employeeInformation'
import Gap from './gap'
import PlannedMove from './plannedMove'
import WorkExperience from './workExperience'
import { Row, Col } from 'reactstrap'
import * as employeeInfoActions from '../../../actions/staffEdit/employeeInfoActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class EmployeeInfo extends Component {
    
    async componentWillMount() {

    }


   handleStaffField = event => {
       
        const field = event.target.name
        const val = event.target.value

        this.props.employeeInfoActions.handleStaffField(field, val)

        this.props.handleUnsavedEdit()
    } 

    handleUnsavedEdit = () => {
        if (this.state.unsavedEdit === false) {
            this.setState({
                unsavedEdit: true
            })
        }
    }

    handleStaffDatePicker = (field, date) => {
        let val = ''

        //Picker
        if (date._d) {
            val = date._d
        }

        //Manual
        if (!date._d) {
            val = date
        }

        this.props.employeeInfoActions.handleStaffField(field, val)

        this.props.handleUnsavedEdit()
    }

    handleStaffSelect = (field, val, selector) => {
        const id = val != null ? val[selector] : undefined

        this.props.employeeInfoActions.handleStaffField(field, id)

        this.props.handleUnsavedEdit()
    }




    assignRole = role => {
     
        const positionAssign = {
            MPLID: role.mplid,
            StaffID: this.props.staff.staffID,
            FirstName: this.props.staff.firstName,
            LastName: this.props.staff.lastName,
            Season: role.season,
            FullName: this.props.staff.fullName,
            StartDate: role.startDate,
            EndDate: role.endDate,
            DateModified:role.dateModified
        }

        const _this = this

        _this.props.employeeInfoActions.insertPositionAssign(positionAssign).then(function() 
        {
            _this.props.getAvailablePositionNew
            // _this.props.employeeInfoActions.getAvailablePositions(
            //     _this.props.currentSeason.name,
            //     _this.props.nextSeason.name,
            //     _this.props.followingSeason.name
            // )
             _this.props.employeeInfoActions.getPositionAssigns(_this.props.staff.staffID)
        })
    }

    editPosition = role => {
     
        const positionAssign = {
            MPLID: role.mplid,
            StaffID: this.props.staff.staffID,
            FirstName: this.props.staff.firstName,
            LastName: this.props.staff.lastName,
            Season: role.season,
            FullName: this.props.staff.fullName,
            StartDate: role.startDate,
            EndDate: role.endDate,
            DateModified:role.dateModified
        }

        const _this = this

        _this.props.employeeInfoActions.updatePositionAssign(role).then(function() 
        {
            _this.props.getAvailablePositionNew
            // _this.props.employeeInfoActions.getAvailablePositions(
            //     _this.props.currentSeason.name,
            //     _this.props.nextSeason.name,
            //     _this.props.followingSeason.name
            // )
             _this.props.employeeInfoActions.getPositionAssigns(_this.props.staff.staffID)
        })




       

       
     
    }




    removeRole = (positionAssignId, startDate) => {
    
        


        const _this = this

        this.props.employeeInfoActions.deletePositionAssign(positionAssignId,startDate,_this.props.staff.staffID).then(function() {

        _this.props.getAvailablePositionNew
   

            // _this.props.employeeInfoActions.getAvailablePositions(
            //     _this.props.currentSeason.name,
            //     _this.props.nextSeason.name,
            //     _this.props.followingSeason.name
            // )
            _this.props.employeeInfoActions.getPositionAssigns(_this.props.staff.staffID)
        })
    }

    moveRole = (oldPositionAssignId, newMPLID) => {
        const _this = this

        this.props.employeeInfoActions.movePositionAssign(oldPositionAssignId, newMPLID).then(function() {
            _this.props.employeeInfoActions.getAvailablePositions(
                _this.props.currentSeason.name,
                _this.props.nextSeason.name,
                _this.props.followingSeason.name
            )
            _this.props.employeeInfoActions.getPositionAssigns(_this.props.staff.staffID)
        })
    }

    render() {
        return (
            <div>
                <Row className="row-panel-4">
                    <Col sm="12" md="12" lg="6">
                        <ContactInformation staff={this.props.staff} handleStaffField={this.handleStaffField} />
                    </Col>

                    <Col sm="12" md="12" lg="6">
                        <EmployeeInformation
                            staff={this.props.staff}
                            sourceMarkets={this.props.sourceMarkets}
                            handleStaffField={this.handleStaffField}
                            handleStaffDatePicker={this.handleStaffDatePicker}
                            handleStaffSelect={this.handleStaffSelect}
                            positionTypes={this.props.positionTypes}
                            spainRegistred={this.props.spainRegistred}
                            
                        />
                    </Col>
                </Row>

                 <Row className="row-panel-4"> 
                    <Col sm="12" md="12" lg="12">
                        <Season
                            title={'Assignment 1'}
                            positionAssign={this.props.currentPositionAssign}
                            nowAvailablePositions={this.props.nowAvailablePositions}
                            assignRole={this.assignRole}
                            editPosition={this.editPosition}
                            removeRole={this.removeRole}
                            moveRole={this.moveRole}
                            season={this.props.currentSeason}
                            handleUnsavedEdit={this.props.handleUnsavedEdit}
                            handlePositionAssignField={(field, val) => this.props.employeeInfoActions.handleCurrentPositionAssignField(field, val)}
                            send={this.props.send}
                        />
                    </Col>
                    {/* </Row> */}
                    {/* <Col sm="12" md="12" lg="4">
                        <Gap />
                    </Col> */}

                    <Col sm="12" md="12" lg="12">
                        <Season
                            title={'Assignment 2'}
                            positionAssign={this.props.nextPositionAssign}
                            nowAvailablePositions={this.props.nowAvailablePositions}
                            assignRole={this.assignRole}
                            editPosition={this.editPosition}
                            removeRole={this.removeRole}
                            moveRole={this.moveRole}
                            season={this.props.nextSeason}
                            handleUnsavedEdit={this.props.handleUnsavedEdit}
                            handlePositionAssignField={(field, val) => this.props.employeeInfoActions.handleNextPositionAssignField(field, val)}
                            send={this.props.send}
                        />
                        </Col>

                         <Col sm="12" md="12" lg="12">
                        <Season
                            title={'Assignment 3'}
                            positionAssign={this.props.followingPositionAssign}
                            nowAvailablePositions={this.props.nowAvailablePositions}
                            assignRole={this.assignRole}
                            editPosition={this.editPosition}
                            removeRole={this.removeRole}
                            moveRole={this.moveRole}
                            season={this.props.nextSeason}
                            handleUnsavedEdit={this.props.handleUnsavedEdit}
                            handlePositionAssignField={(field, val) => this.props.employeeInfoActions.handleNextPositionAssignField(field, val)}
                            send={this.props.send}
                        />
                        </Col>
                  
                    {/* <Col sm="6" md="6" lg="6"> 
                        <PlannedMove />
                        </Col>
                        <Col sm="6" md="6" lg="6"> 
                        <Season
                            title={'Following Season'}
                            positionAssign={this.props.followingPositionAssign}
                            availablePositions={this.props.followingAvailablePositions}
                            assignRole={this.assignRole}
                            removeRole={this.removeRole}
                            moveRole={this.moveRole} 
                            season={this.props.followingSeason}
                            handleUnsavedEdit={this.props.handleUnsavedEdit}
                            handlePositionAssignField={(field, val) => this.props.employeeInfoActions.handleFollowingPositionAssignField(field, val)}
                            send={null}
                        />
                    </Col> */}
                    
                </Row> 

                <Row>
                    <Col>
                        <WorkExperience />
                    </Col>
                </Row>
            </div>
        )
    }
} 

function mapDispatchToProps(dispatch) {
    return {
        employeeInfoActions: bindActionCreators(employeeInfoActions, dispatch)
    }
}

export default connect(
    null,
    mapDispatchToProps
)(EmployeeInfo)
