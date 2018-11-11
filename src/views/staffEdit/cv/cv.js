import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Education from './education'
import Profiling from './profiling'
import CvInformation from './cvInformation'


class Cv extends Component {
    render() {
        return (
            <div>
                 <Row className="row-panel-4">
                    <Col sm="12" md="12" lg="4">
                        <Education
                        staff={this.props.staff} 
                        //handleStaffDatePicker={this.handleStaffDatePicker}
                       // handleStaffSelect={this.handleStaffSelect} 
                       // resignType={this.props.resignType}
                        
                        />
                    </Col>

                     <Col sm="12" md="12" lg="4">
                        <CvInformation
                        staff={this.props.staff} 
                        //handleStaffDatePicker={this.handleStaffDatePicker}
                       // handleStaffSelect={this.handleStaffSelect} 
                       // resignType={this.props.resignType}
                        
                        />
                    </Col>

                    <Col sm="12" md="12" lg="4">
                        <Profiling
                            staff={this.props.staff}
                           // handleStaffDatePicker={this.handleStaffDatePicker}
                            //handleStaffSelect={this.handleStaffSelect} 
                            //allJobTitles={this.props.allJobTitles}
                            //handleChangeMultiple={this.props.handleChangeMultiple} 
                           // resignmentReasons={this.props.resignmentReasons}
                          




                            // title={"Skills"}
                            // name={"skills"}
                            // options={this.props.skillOptions}
                            // selectedOptions={selectedOptions}
                            // handleChange={this.props.handleCheckBox}

                            

                      
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Cv