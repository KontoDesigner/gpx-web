import React from 'react'
import { Card, CardBody, CardFooter, CardHeader } from 'reactstrap'
import TextInput from '../../../components/textInput'
import Select from 'react-select'
import Datetime from 'react-datetime'
import { Row, Col, Label, Input, Button } from 'reactstrap'
import moment from "moment";
const AbscenseInformation = props => {
  const enableAbscenseBtn = (
    <Button
    disabled={props.abscenseHistory.absentReason != undefined || props.abscenseHistory.absentReason != null}
      // disabled={this.props.abscense === undefined && this.props.abscense === null}
      size="sm"
      className="pull-right"
      onClick={() => {
        
         props.handleSaveAbscense()
      }}
      color="warning"
      // style={{ marginRight: '2px', marginBottom: '2px' }}
    >
     Enable
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
      <CardHeader>Approved Leave Of Absence </CardHeader>

      <CardBody className="no-padding-bottom">
        <div className="form-row">
          <Col sm="12" md="6" lg="6" xl="4" className="form-group">
            <label htmlFor="absentStart">From</label>

            <Datetime
                 value={
                  props.abscenseHistory.absentStart && props.abscenseHistory.absentStart !== ''
                    ? moment(props.abscenseHistory.absentStart).format("YYYY-MM-DD")
                    : null
                }
                onChange={v => {
                  props.handleStaffDatePicker('absentStart', v)
                }}
              timeFormat={false}
              dateFormat="YYYY-MM-DD"
              closeOnSelect
              utc={true}
              inputProps={{ placeholder: 'YYYY-MM-DD' }}
            />
                 <b className="card-text text-danger">{props.validAbsentStart }</b>
          </Col>

          <Col sm="12" md="6" lg="6" xl="4" className="form-group">
            <label htmlFor="absentEnd">To</label>
            
            <Datetime
                  value={
                    props.abscenseHistory.absentEnd && props.abscenseHistory.absentEnd !== ''
                      ? moment(props.abscenseHistory.absentEnd).format("YYYY-MM-DD")
                      : null
                  }
                  onChange={v => {
                    props.handleStaffDatePicker('absentEnd', v)
                  }}
              timeFormat={false}
              dateFormat="YYYY-MM-DD"
              closeOnSelect
              utc={true}
              inputProps={{ placeholder: 'YYYY-MM-DD' }}
              
            />
            <b className="card-text text-danger">{props.validAbsentEnd }</b>
          </Col>

          <Col
            sm="12"
            md="6"
            lg="6"
            xl="4"
            className="form-group form-group-select"
          >
            <label htmlFor="absentReason">Reason</label>

            <Select
              id="absentReason"
              valueKey="id"
              labelKey="name"
              className="form-control"
              options={props.resignTypeArr}
              onChange={v => {
                props.handleStaffSelect('absentReason', v, 'id')
              }}
              value={
                props.abscenseHistory.absentReason === ''
                  ? null
                  : props.abscenseHistory.absentReason
              }
              placeholder="Select"
            />
            <b className="card-text text-danger">{props.validAbsentReason }</b>
          </Col>

          <Col sm="12" md="6" lg="12" xl="12" className="form-group">
            {/* <TextInput name="title" label="Title" value={props.staff.title} onChange={props.handleStaffField} /> */}
            <Label for="absentReason2">Comments</Label>
            <Input
              required
              type="textarea"
              maxLength="1000"
              name="absentReason2"
              id="absentReason2"
              rows={6}
              value={props.abscenseHistory.absentReason2}
              onChange={props.handleStaffFieldAbscense}
              aria-multiline="true"
            />
          </Col>
        </div>
      </CardBody>
      <CardFooter style={{ paddingBottom: '4px', paddingTop: '4px' }}>
        <Row >
        <Col>
            {' '}
            {enableAbscenseBtn}
            {/* {disableResignBtn } */}
          </Col>
          </Row>
      </CardFooter>
    </Card>
  )
}

export default AbscenseInformation
