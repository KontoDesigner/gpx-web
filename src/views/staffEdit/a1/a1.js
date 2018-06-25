import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import CurrentA1 from './currentA1'
import PreviousA1 from './previousA1'

class A1 extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <CurrentA1 />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <PreviousA1 />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default A1