import React from 'react';
import { Card, CardBody,CardFooter, CardHeader } from 'reactstrap'
import TextInput from '../../../components/textInput'
import Select from 'react-select'
import Datetime from 'react-datetime'
import { Row, Col,  Label, Input,Button } from 'reactstrap'

const AbscenseInformation = (props) => {

    const enableAbscenseBtn = (
        <Button
           // disabled={this.props.abscense === undefined && this.props.abscense === null}
            size="sm"
            onClick={() => {
               // this.props.handleAbscense('1',props.staffID)
            }}
            color="default"
            // style={{ marginRight: '2px', marginBottom: '2px' }}
            >
            Execute
        </Button>
    )

    const disableAbscenseBtn = (
        <Button
           // disabled={this.props.abscense !== undefined && this.props.abscense !== null}
            size="sm"
            onClick={() => {
               // this.props.handleAbscense('0',props.staffID)
            }}
            color="default"
            // style={{ marginRight: '2px', marginBottom: '2px' }}
            >
           Back from Leave
        </Button>
    )

    return (

        
        <Card>
            <CardHeader>Approved Leave Of Abscense  </CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row">
                <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <label htmlFor="absentStart">From</label>

                        <Datetime
                            value={props.staff.absentStart}
                            onChange={(v) => { props.handleStaffDatePicker('absentStart', v) }}
                            timeFormat={false}
                            dateFormat="YYYY-MM-DD"
                            closeOnSelect
                            utc={true}
                            inputProps={{ placeholder: 'YYYY-MM-DD' }} />
                    </Col>

           <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <label htmlFor="absentEnd">To</label>

                        <Datetime
                            value={props.staff.absentEnd}
                            onChange={(v) => { props.handleStaffDatePicker('absentEnd', v) }}
                            timeFormat={false}
                            dateFormat="YYYY-MM-DD"
                            closeOnSelect
                            utc={true}
                            inputProps={{ placeholder: 'YYYY-MM-DD' }} />
                    </Col>

               <Col sm="12" md="6" lg="6" xl="4" className="form-group form-group-select">
                        <label htmlFor="absentReason">Reason</label>

                        <Select 
    id="absentReason"
    valueKey="id"
    labelKey="name"
    className="form-control"
    options={props.resignType}
    onChange={(v) => { props.handleStaffSelect('absentReason', v, 'id') }}
    value={props.staff.absentReason === '' ? null : props.staff.absentReason}
    placeholder="Select"


                            
                        />
                    </Col>

                    <Col sm="12" md="6" lg="12" xl="12" className="form-group">
                        {/* <TextInput name="title" label="Title" value={props.staff.title} onChange={props.handleStaffField} /> */}
                        <Label for='comment'>Comments</Label>
                <Input required type='textarea' maxLength='1000' name='comment' id='comment' rows={6} onChange={props.handleStaffField} aria-multiline='true'/>
                    </Col>
                    
            
                </div>


              
            </CardBody>
            <CardFooter style={{ paddingBottom: '4px' , paddingTop: '4px'  }}>
                            <Row>
                             
                                <Col> {enableAbscenseBtn } 
                                {/* {disableAbscenseBtn } */}
                                </Col> 
                            </Row>
                        </CardFooter>
        </Card>
    );
};

export default AbscenseInformation