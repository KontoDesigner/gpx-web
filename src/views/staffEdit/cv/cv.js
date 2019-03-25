import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Education from './education'
import Profiling from './profiling'
import CvInformation from './cvInformation'
import * as cvActions from '../../../actions/staffEdit/cvActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Cv extends Component {
    constructor(props) {
        super(props)
        this.state = {
            childCareLevels: [
                //not in use  delete
                {
                    id: 'Level 3 or above',
                    name: 'Level 3 or above'
                },
                {
                    id: 'Level 2 or equivalent',
                    name: 'Level 2 or equivalent'
                },
                {
                    id: 'Other',
                    name: 'Other'
                },
                {
                    id: 'None',
                    name: 'None'
                }
            ],

            languages: [
                //not in use  delete
                {
                    id: 'Not at all',
                    name: 'Not at all'
                },
                {
                    id: 'Conversational',
                    name: 'Conversational'
                },
                {
                    id: 'Fluent',
                    name: 'Fluent'
                }
            ],

            suitable: [
                //not in use  delete
                {
                    id: 'Adults/Couples',
                    name: 'Adults/Couples'
                },
                {
                    id: 'Families',
                    name: 'Families'
                },
                {
                    id: 'Scene 18-25 years old',
                    name: 'Scene 18-25 years old'
                },
                {
                    id: '5*hotels',
                    name: '5*hotels'
                },
                {
                    id: '2-3*hotels',
                    name: '2-3*hotels'
                },
                {
                    id: 'Prefer to work in a team',
                    name: 'Prefer to work in a team'
                },
                {
                    id: 'Prefer to not work in a team',
                    name: 'Prefer to not work in a team'
                },
                {
                    id: 'Willing to work in a resort on your own',
                    name: 'Willing to work in a resort on your own'
                }
            ],

            international: [
                //not in use  delete
                {
                    id: 'Family life',
                    name: 'Family life'
                },
                {
                    id: 'Scene',
                    name: 'Scene'
                },
                {
                    id: 'Sensatori',
                    name: 'Sensatori'
                },
                {
                    id: 'Sensimar',
                    name: 'Sensimar'
                },
                {
                    id: 'Suneo club',
                    name: 'Suneo club'
                }
            ],

            national: [
                //not in use  delete
                {
                    id: '1-2 Fun club (Germany)',
                    name: '1-2 Fun club (Germany)'
                },
                {
                    id: 'Best Family (Germany)',
                    name: 'Best Family (Germany)'
                },
                {
                    id: 'Blue Star (Nordic)',
                    name: 'Blue Star (Nordic)'
                },
                {
                    id: 'Holiday Village (UK)',
                    name: 'Holiday Village (UK)'
                },
                {
                    id: 'Thomson Gold (UK)',
                    name: 'Thomson Gold (UK)'
                },
                {
                    id: 'Time To Smile (Netherlands)',
                    name: 'Time To Smile (Netherlands)'
                }
            ]
        }
    }

    handleStaffSelect = (field, val) => {
        val = val != null || val != undefined ? val.id : ''

        this.props.cvActions.handleStaffField(field, val)
        //this.props.reportActions.handleDestinationField(val)

        //this.props.handleUnsavedEdit()
    }

    handleStaffMultiSelect = (field, val) => {
        debugger;
        if (val) {
            let vals = val.map(function(m) {
                return m.id
            })

            this.props.cvActions.handleStaffField(field, vals)
        } else {
            this.props.cvActions.handleStaffField(field, null)
        }
    }

    //   handleStaffSelect = (field, val, selector) => {
    //     const id = val != null ? val[selector] : undefined

    //     this.props.cvActions.handleStaffField(field, id)

    //     this.props.handleUnsavedEdit()
    // }

    handleStaffField = event => {
        const field = event.target.name
        const val = event.target.value

        this.props.cvActions.handleStaffField(field, val)

        this.props.handleUnsavedEdit()
    }

    render() {
        return (
            <div>
                <Row className="row-panel-4">
                    <Col sm="12" md="12" lg="4">
                        <Education
                            staff={this.props.staff}
                            childCareLevels={this.state.childCareLevels}
                            //handleStaffDatePicker={this.handleStaffDatePicker}
                            handleStaffSelect={this.handleStaffSelect}
                            handleStaffField={this.handleStaffField}
                            // resignType={this.props.resignType}
                        />
                    </Col>

                    <Col sm="12" md="12" lg="4">
                        <CvInformation
                            staff={this.props.staff}
                            languages={this.state.languages}
                            handleStaffSelect={this.handleStaffSelect}

                            //handleStaffDatePicker={this.handleStaffDatePicker}
                            // handleStaffSelect={this.handleStaffSelect}
                            // resignType={this.props.resignType}
                        />
                    </Col>

                    <Col sm="12" md="12" lg="4">
                        <Profiling
                            staff={this.props.staff}
                            // handleStaffDatePicker={this.handleStaffDatePicker}
                            handleStaffMultiSelect={this.handleStaffMultiSelect}
                            //allJobTitles={this.props.allJobTitles}
                            //handleChangeMultiple={this.props.handleChangeMultiple}
                            // resignmentReasons={this.props.resignmentReasons}
                            suitable={this.state.suitable}
                            national={this.state.national}
                            international={this.state.international}

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
        cvActions: bindActionCreators(cvActions, dispatch)
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Cv)
