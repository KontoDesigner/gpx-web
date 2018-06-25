import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import CurrentTeamIn from './currentTeamIn'

class Team extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <CurrentTeamIn />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Team