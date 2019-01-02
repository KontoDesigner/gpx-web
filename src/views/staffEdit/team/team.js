import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import TeamInformation from './teamInformation'

class Team extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <TeamInformation 
                          status= {this.props.status}
                        />
                    </Col>
                </Row>
            </div>
        )
    }

}

export default Team