import React, { Component } from 'react'
import AssignedRoles from './assignedRoles'
import ContactInformation from './contactInformation'
import CurrentSeason from './currentSeason'
import EmployeeInformation from './employeeInformation'
import FollowingSeason from './followingSeason'
import Gap from './gap'
import NextSeason from './nextSeason'
import PlannedMove from './plannedMove'
import WorkExperience from './workExperience'
import { Row, Col } from 'reactstrap'

class EmployeeInfo extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col sm="12" md="12" lg="6">
                        <ContactInformation
                            staff={this.props.staff}
                            updateStaffFieldState={this.props.updateStaffFieldState}
                        />
                    </Col>

                    <Col sm="12" md="12" lg="6">
                        <EmployeeInformation
                            staff={this.props.staff}
                            updateStaffFieldState={this.props.updateStaffFieldState}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <AssignedRoles />
                    </Col>
                </Row>

                <Row>
                    <Col sm="12" md="12" lg="4" xl="4">
                        <CurrentSeason />
                    </Col>

                    <Col sm="12" md="12" lg="4" xl="4">
                        <Gap />
                    </Col>

                    <Col sm="12" md="12" lg="4" xl="4">
                        <NextSeason />

                        <PlannedMove />

                        <FollowingSeason />
                    </Col>
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

export default EmployeeInfo