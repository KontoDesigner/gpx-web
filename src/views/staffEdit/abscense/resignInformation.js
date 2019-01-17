import React from 'react'
import { Card, CardBody, CardFooter, CardHeader } from 'reactstrap'
import TextInput from '../../../components/textInput'
import Select from 'react-select'
import Datetime from 'react-datetime'
import { Row, Col, Label, Input, Button } from 'reactstrap'
import moment from "moment";
const resignInformation = props => {

  const enableResignBtn = (

    <Button
      // disabled={this.props.abscense === undefined && this.props.abscense === null}
      size="sm"
      className="pull-right"
      onClick={() => {
        debugger;
        props.handleSaveResign()
      }} 
      color="warning"
      // style={{ marginRight: '2px', marginBottom: '2px' }}
    >
Enable
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
         <CardHeader> Resignation <div className="pull-right">Status = {props.staff.status}</div> </CardHeader>
      {/* <CardHeader>Resignation   -  {enableResignBtn} </CardHeader> */}
      <CardBody className="no-padding-bottom"> 
        <div className="form-row">
          <Col sm="12" md="6" lg="6" xl="4" className="form-group">
            <label htmlFor="appDate">Last Working Date</label>

            <Datetime
                   value={
                    props.resignHistory.appDate && props.resignHistory.appDate !== ''
                      ? moment(props.resignHistory.appDate).format("YYYY-MM-DD")
                      : null
                  }


              onChange={v => {
                props.handleResignDatePicker('appDate', v)
              }}
              timeFormat={false}
              dateFormat="YYYY-MM-DD"
              closeOnSelect
              utc={true}
              inputProps={{ placeholder: 'YYYY-MM-DD' }}
            />
              <b className="card-text text-danger">{props.validLastWorking }</b>
          </Col>

          <Col
            sm="12"
            md="6"
            lg="6"
            xl="4"
            className="form-group form-group-select"
          >
            <label htmlFor="managerReason">Manager Reason</label>
            <Select
              id="managerReason"
              valueKey="id"
              labelKey="name"
              className="form-control"
              options={props.managerReasons}
              onChange={v => {
                props.handleSelectTypes('managerReason', v, 'id')
              }}
              value={
                props.resignHistory.managerReason === ''
                  ? null
                  : props.resignHistory.managerReason
              }
              placeholder="Select"
            />
               <b className="card-text text-danger">{props.validMgrReason }</b>
          </Col>

          <Col
            sm="12"
            md="6"
            lg="6"
            xl="4"
            className="form-group form-group-select"
          >
            <label htmlFor="reasonForResignment">Reason for Resignment</label>

            <Select
              id="reasonForResignment"
              valueKey="id"
              labelKey="name"
              className="form-control"
              options={props.resignmentReasons}
              onChange={v => {
                props.handleSelectTypes('reasonForResignment', v, 'id')
              }}
              value={
                props.resignHistory.reasonForResignment === ''
                  ? null
                  : props.resignHistory.reasonForResignment
              }
              placeholder="Select"
            />
               <b className="card-text text-danger">{props.validReasonFor }</b>
          </Col>

          <Col
            sm="12"
            md="6"
            lg="6"
            xl="4"
            className="form-group form-group-select"
          >
            <label htmlFor="jobTitleWhenResigned">JobTitle When Resigned</label>

            <Select
              id="jobTitleWhenResigned"
              valueKey="id"
              labelKey="name"
              className="form-control"
              options={props.allJobTitles}
              onChange={v => {
                props.handleSelectTypes('jobTitleWhenResigned', v, 'id')
              }}
              value={
                props.resignHistory.jobTitleWhenResigned === ''
                  ? null
                  : props.resignHistory.jobTitleWhenResigned
              }
              placeholder="JobTitleWhenResigned"
            />
               <b className="card-text text-danger">{props.validJobTitleWhen }</b>
          </Col>

          <Col sm="12" md="6" lg="12" xl="4" className="form-group">
            {/* {<TextInput name="title" label="Title" value={props.staff.title} onChange={props.handleStaffField} /> } */}
            <Label for="resignComm">Comments</Label>
            <Input
              required
              type="textarea"
              maxLength="1000"
              name="resignComm"
              id="resignComm"
             value={props.resignHistory.resignComm}
              onChange={props.handleStaffField}
              rows={6}
              aria-multiline="true"
            />
             
          </Col>

          <Col sm="12" md="6" lg="6" xl="4" className="form-group">
            <TextInput
              name="signature" 
              label="Signature"
              value={props.resignHistory.signature}
              onChange={props.handleStaffField}
              onkeydown={props.handleKeyDown}
            />
               <b className="card-text text-danger">{props.validSignature }</b>
          </Col>
        </div>
      </CardBody>
      <CardFooter style={{ paddingBottom: '4px', paddingTop: '4px' }}>
        <Row>
          <Col>
            {' '}
            {enableResignBtn}
            {/* {disableResignBtn } */}
          </Col>
        </Row>
      </CardFooter>
    </Card>
  )
}

export default resignInformation
