import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import SubmittedApplicationForms from './submittedApplicationForms'

class Applications extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <SubmittedApplicationForms />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Applications