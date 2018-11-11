import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import TeamInformation from './teamInformation'

class Team extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <TeamInformation />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Team