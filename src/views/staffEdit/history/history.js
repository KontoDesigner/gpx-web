import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import DestinationHistory from './destinationHistory'
//import ConfirmedDates from './confirmedDates'
//import Revisions from './revisions'

class History extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <DestinationHistory 
                        destinationHistory={this.props.destinationHistory} 
                        status= {this.props.status}
                        />
                    </Col>
                </Row>

                {/* <Row>
                    <Col>
                        <ConfirmedDates />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Revisions />
                    </Col>
                </Row> */}
            </div>
        )
    }
}

export default History