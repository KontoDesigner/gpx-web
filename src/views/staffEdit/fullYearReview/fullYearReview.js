import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import SubmitFullYearReviews from './submitFullYearReviews'

class FullYearReview extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <SubmitFullYearReviews />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default FullYearReview