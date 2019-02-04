import React from 'react'
import { Card, CardBody, CardFooter, CardHeader } from 'reactstrap'
import TextInput from '../../../components/textInput'
import Select from 'react-select'
import { colourOptions } from './docs/data'
import Datetime from 'react-datetime'
import { Row, Col, Label, Input, Button } from 'reactstrap'
//import CreatableSelect from 'react-select/lib/Creatable'

const Profiling = props => {
    return (
        <Card>
            <CardHeader>
                Profiling <div class="pull-right">Status = {props.staff.status}</div>{' '}
            </CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row">
                    <Col sm="12" md="12" lg="12" xl="12" className="form-group form-group-select">
                        <label htmlFor="suitable">If applicable to your job role. Indicate what type of guest you are suitable to work with</label>

                        <Select
                            //  multi={true}
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.suitable}
                            multi
                            onChange={v => {
                                props.handleStaffMultiSelect('suitable', v)
                            }}
                            //onChange = { this.props.handleStaffField('suitable',v) }
                            value={props.staff.suitable === '' ? null : props.staff.suitable}
                            placeholder="Select"
                        />
                    </Col>

                    <Col sm="12" md="12" lg="12" xl="12" className="form-group form-group-select">
                        <label htmlFor="childCare">I am interested and happy to work in following international concepts</label>

                        <Select
                            id="international"
                            //  multi={true}
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.international}
                            multi
                            onChange={v => {
                                props.handleStaffMultiSelect('international', v)
                            }}
                            value={props.staff.international === '' ? null : props.staff.international}
                            placeholder="Select"
                        />
                    </Col>

                    <Col sm="12" md="12" lg="12" xl="12" className="form-group form-group-select">
                        <label htmlFor="national">I am interested and happy to work in following national concepts</label>

                        <Select
                            id="national"
                            // multi={true}
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.national}
                            multi
                            onChange={v => {
                                props.handleStaffMultiSelect('nationalConcept', v)
                            }}
                            value={props.staff.nationalConcept === '' ? null : props.staff.nationalConcept}
                            placeholder="Select"
                        />
                    </Col>
                </div>
            </CardBody>
        </Card>
    )
}

export default Profiling
