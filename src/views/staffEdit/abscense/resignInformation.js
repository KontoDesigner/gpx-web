import React from 'react';
import { Card, CardBody,CardFooter, CardHeader } from 'reactstrap'
import TextInput from '../../../components/textInput'
import Select from 'react-select'
import Datetime from 'react-datetime'
import { Row, Col,  Label, Input,Button } from 'reactstrap'

const resignInformation = (props) => {

    const enableResignBtn = (
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

    const disableResignBtn = (
        <Button
           // disabled={this.props.abscense !== undefined && this.props.abscense !== null}
            size="sm"
            onClick={() => {
               // this.props.handleAbscense('0',props.staffID)
            }}
            color="default"
            // style={{ marginRight: '2px', marginBottom: '2px' }}
            >
           Back again
        </Button>
    )

    return (

        
        <Card>
            <CardHeader>Resignation  </CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row">
                <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <label htmlFor="resignStart">Last Working Date</label>

                        <Datetime
                            value={props.staff.resignStart}
                            onChange={(v) => { props.handleStaffDatePicker('resignStart', v) }}
                            timeFormat={false}
                            dateFormat="YYYY-MM-DD"
                            closeOnSelect
                            utc={true}
                            inputProps={{ placeholder: 'YYYY-MM-DD' }} />
                    </Col>

  

               <Col sm="12" md="6" lg="6" xl="4" className="form-group form-group-select">
                        <label htmlFor="absentReason">Manager Reason</label>



     <select multiple={true} value={props.staff.resignType} className="form-control" onChange={props.handleChangeMultiple}>
            <option value="" selected="selected" ></option>
                <option value="Dismissed">Dismissed</option>
                <option value="Resign">Resign</option>
                <option value="Other">Other</option>
               
              </select>

              
                    </Col>

<Col sm="12" md="6" lg="6" xl="4" className="form-group form-group-select">
                        <label htmlFor="reasonForResignment">Reason for Resignment</label>

                        <Select 

id="reasonForResignment"
valueKey="id"
labelKey="name"
className="form-control"
options={props.resignmentReasons}
onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
value={props.staff.reasonForResignment === '' ? null : props.staff.reasonForResignment}
placeholder="Select"

                            // id="reasonForResignment"
                            
                            // valueKey="id"
                            // labelKey="name"
                            // className="form-control"
                            // options={props.resignmentReasons}
                            // onChange={(v) => { props.handleStaffSelect('reasonForResignment', v, 'id') }}
                            // value={props.staff.resignmentReasons === '' ? null : props.staff.resignmentReasons}
                            // placeholder="ReasonForResignment"
                           
                            
                        />
                    </Col>

                    <Col sm="12" md="6" lg="6" xl="4" className="form-group form-group-select">
                        <label htmlFor="jobTitleWhenResigned">JobTitle When Resigned</label>

                        <Select 
                            id="jobTitleWhenResigned"
                            
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.allJobTitles}
                            onChange={(v) => { props.handleStaffSelect('jobTitleWhenResigned', v, 'id') }}
                            value={props.staff.jobTitleWhenResigned === '' ? null : props.staff.jobTitleWhenResigned}
                            placeholder="JobTitleWhenResigned"
                           
                            
                        />
                    </Col>


                    <Col sm="12" md="6" lg="12" xl="4" className="form-group">
                        {/* <TextInput name="title" label="Title" value={props.staff.title} onChange={props.handleStaffField} /> */}
                        <Label for='comment'>Comments</Label>
                <Input required type='textarea' maxLength='1000' name='comment' id='comment' rows={6}  aria-multiline='true'/>
                    </Col>
                    
                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
             
                        <TextInput name="signature" label="Signature"  value={props.staff.resignmentReasons}/>
                    </Col>
                </div>
            </CardBody>
            <CardFooter style={{ paddingBottom: '4px' , paddingTop: '4px'  }}>
                            <Row>
                             
                                <Col> {enableResignBtn } 
                                {/* {disableResignBtn } */}
                                </Col> 
                            </Row>
                        </CardFooter>
        </Card>
    );
};

export default resignInformation