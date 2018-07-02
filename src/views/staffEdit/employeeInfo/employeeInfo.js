import React from 'react'
import ContactInformation from './contactInformation'
import Season from './season/season'
import EmployeeInformation from './employeeInformation'
import Gap from './gap'
import PlannedMove from './plannedMove'
import WorkExperience from './workExperience'
import { Row, Col } from 'reactstrap'

const EmployeeInfo = (props) => {
    return (
        <div>
            <Row>
                <Col sm="12" md="12" lg="6">
                    <ContactInformation
                        staff={props.staff}
                        updateStaffFieldState={props.updateStaffFieldState}
                    />
                </Col>

                <Col sm="12" md="12" lg="6">
                    <EmployeeInformation
                        staff={props.staff}
                        sourceMarkets={props.sourceMarkets}
                        updateStaffFieldState={props.updateStaffFieldState}
                        updateStaffSelectState={props.updateStaffSelectState}
                        updateStaffDatePickerState={props.updateStaffDatePickerState}
                    />
                </Col>
            </Row>

            <Row>
                <Col sm="12" md="12" lg="4" xl="4">
                    <Season
                        title={"Current Season"}
                        season={props.currentSeason}
                        availablePositions={props.availablePositions}
                        assignNewRole={props.assignNewRole}
                    />
                </Col>

                <Col sm="12" md="12" lg="4" xl="4">
                    <Gap />
                </Col>

                <Col sm="12" md="12" lg="4" xl="4">
                    <Season
                        title={"Next Season"}
                        season={props.nextSeason}
                    />

                    <PlannedMove />

                    <Season
                        title={"Following Season"}
                        season={props.followingSeason}
                    />
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

export default EmployeeInfo