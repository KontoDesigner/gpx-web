import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Education from './education'
import LanguageSkills from './languageSkills'
import Profiling from './profiling'

class Cv extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Education />
                    </Col>

                    <Col>
                        <LanguageSkills />
                    </Col>

                    <Col>
                        <Profiling />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Cv