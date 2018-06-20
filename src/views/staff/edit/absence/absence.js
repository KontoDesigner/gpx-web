import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import ApprovedLeaveOfAbsence from './approvedLeaveOfAbsence'
import Resignation from './resignation'
import Contract from './contract'
import Remarks from './remarks'
import Warnings from './warnings'

class Absence extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <ApprovedLeaveOfAbsence />
                    </Col>

                    <Col>
                        <Resignation />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Contract />
                    </Col>

                    <Col>
                        <Remarks />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Warnings />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Absence