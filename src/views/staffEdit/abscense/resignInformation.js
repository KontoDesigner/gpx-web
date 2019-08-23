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
      //disabled={props.resignHistory.staffID == undefined || props.resignHistory.staffID == null || props.resignHistory.staffID == ''}
      disabled={props.resignHistory.staffID != undefined }
      size="sm"
      className="pull-right" 
      onClick={() => {
        
        //props.handleSaveResign() 
        props.toggleEnableResignModal(props.staffID)
      }} 
      color="success"
     style={{ marginRight: '2px', marginBottom: '2px' }}
    >
Enable
    </Button>
  )

  const disableResignBtn = (
    <Button
    disabled={props.resignHistory.staffID === undefined }
    //disabled={props.resignHistory.managerReason === undefined || props.resignHistory.managerReason === null}
      size="sm"
      className="pull-right"
      onClick={() => {
        
        props.toggleDisableResignModal(props.staffID)
    }} 
      // onClick={() => {
      //    props.handleDisableResign('0',props.staffID)
      // }}
      color="primary"
      style={{ marginRight: '2px', marginBottom: '2px' }}
    >
      Disable
    </Button>
  )

  return (
    <Card>
         <CardHeader> Resignation <div className="pull-right">Status = {props.staff.status=='Active' ? 'Experienced':props.staff.status}</div> </CardHeader>
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
              options={props.managerReasonArr}
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
              options={props.reasonForResignmentArr}
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

    <Col
            sm="12"
            md="6"
            lg="6"
            xl="4"
            className="form-group form-group-select"
          >
            <label htmlFor="recommend">Do you recommend for re-employment?</label>

            <Select
              id="recommend"
              valueKey="id"
              labelKey="name"
              className="form-control"
              options={props.recommend}
              onChange={v => {
                props.handleSelectTypes('recommend', v, 'id')
              }}
              value={
                props.resignHistory.recommend === ''
                  ? null
                  : props.resignHistory.recommend
              }
              placeholder="Select"
            />
                {<b className="card-text text-danger">{props.validRecommend}</b> } 
          </Col>


               <Col sm="12" md="6" lg="6" xl="4" className="form-group">
    
            <TextInput
              name="signature" 
              label="Signature"
              value={props.resignHistory.signature}
              onChange={props.handleStaffField}
             
            />
               <b className="card-text text-danger">{props.validSignature }</b>
          </Col>

      

          <Col sm="12" md="12" lg="12" xl="12" className="form-group">
            {/* {<TextInput name="title" label="Title" value={props.staff.title} onChange={props.handleStaffField} /> } */}
            {props.resignHistory.staffID}
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
                     <b className="card-text text-danger">{props.validComment }</b>
          </Col>

     
        </div>
      </CardBody>
      <CardFooter style={{ paddingBottom: '4px', paddingTop: '4px' }}>
        <Row>
          <Col>
            {' '}
            {enableResignBtn}
            {disableResignBtn } 
          </Col>
        </Row>
      </CardFooter>
    </Card>
  )
}

export default resignInformation
