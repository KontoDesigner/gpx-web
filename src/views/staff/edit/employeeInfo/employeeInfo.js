import React, { Component } from 'react'
import AssignedRoles from './assignedRoles'
import ContactInformation from './contactInformation'
import CurrentSeason from './currentSeason'
import EmployeeInformation from './employeeInformation'
import FollowingSeason from './followingSeason'
import Gap from './gap'
import NextSeason from './nextSeason'
import PhotoFile from './photoFile'
import PlannedMove from './plannedMove'
import WorkExperience from './workExperience'
import { Row, Col } from 'reactstrap'

class EmployeeInfo extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <ContactInformation />
                    </Col>

                    <Col>
                        <EmployeeInformation />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <AssignedRoles />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <CurrentSeason />
                    </Col>

                    <Col>
                        <Gap />
                    </Col>


                    <Col>
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

                <Row>
                    <Col>
                        <PhotoFile />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default EmployeeInfo