import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import AbscenseInformation from './abscenseInformation'
import ResignInformation from './resignInformation'
import * as employeeInfoActions from '../../../actions/staffEdit/employeeInfoActions'
import * as abscenseActions from '../../../actions/staffEdit/abscenseActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Abscense extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
     
    
    
    };

   
      }

    handleStaffDatePicker = (field, date) => {
        let val = ''

        //Picker
        if (date._d) {
            val = date._d
        }

        //Manual
        if (!date._d) {
            val = date
        }

        this.props.employeeInfoActions.handleStaffField(field, val)

        this.props.handleUnsavedEdit()
    }


    handleStaffSelect = (field, val, selector) => {
        const id = val != null ? val[selector] : undefined

        this.props.abscenseActions.handleStaffField(field, id)

        this.props.handleUnsavedEdit()
    }

    handleStaffField = event => {
        const field = event.target.name
        const val = event.target.value

        this.props.abscenseActions.handleStaffField(field, val)

        this.props.handleUnsavedEdit()
    } 

    handleSelectTypes = ( field,val) => {
                       
        this.setState({field:val.id});
    }


    render() {
        return (
            <div>
                 <Row className="row-panel-4">
                    <Col sm="12" md="12" lg="6">
                        <AbscenseInformation 
                        staff={this.props.staff} 
                        handleStaffDatePicker={this.handleStaffDatePicker}
                        handleStaffSelect={this.handleStaffSelect} 
                        handleSelectTypes={this.handleSelectTypes} 
                        resignType={this.props.resignType}
                        
                        />
                    </Col>

                    <Col sm="12" md="12" lg="6">
                        <ResignInformation
                            staff={this.props.staff}
                            handleStaffDatePicker={this.handleStaffDatePicker}
                            handleStaffSelect={this.handleStaffSelect} 
                            handleStaffField={this.handleStaffField}
                            allJobTitles={this.props.allJobTitles}
                            handleChangeMultiple={this.props.handleChangeMultiple} 
                            resignmentReasons={this.props.resignmentReasons}
                          

 


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

function mapDispatchToProps(dispatch) {
    return {
        employeeInfoActions: bindActionCreators(employeeInfoActions, dispatch),
        abscenseActions: bindActionCreators(abscenseActions, dispatch)
        
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Abscense)