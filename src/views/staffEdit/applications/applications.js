import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import SubmittedApplicationForms from './submittedApplicationForms'

class Applications extends Component {

    constructor(props) {
        super(props);
        this.state = {
      count:0,
    }

}

// lengthOfHistory(val) {
//     return val;              // The function returns the product of p1 and p2
// }

lengthOfHistory = (val ) => {
          
    return val;     
   //return this.applicationHistory.length
 
 }


incrementCounter = ( ) => {
                       
    this.setState({ count: this.state.count + 1 })
}

    render() {
        return (
            <div>
                <Row>
                    <Col>
                    <SubmittedApplicationForms
                     edit={this.props.edit}
                    applicationHistory={this.props.applicationHistory} 
                    incrementCounter={this.incrementCounter} 
                    lengthOfHistory={this.lengthOfHistory} 
                    abscenseHistory={this.props.abscenseHistory} 
                    status= {this.props.status}
                    />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Applications