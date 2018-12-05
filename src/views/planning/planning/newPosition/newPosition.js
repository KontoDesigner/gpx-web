import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col,Button ,Row} from 'reactstrap'

import Datetime from 'react-datetime'


import Select from 'react-select'

class NewPosition extends Component {

//const ResignStaff = props => {
  constructor() {
    super();

    // this.state = {
    //   selectedResignAppDate:null
    // };
}

createVacant = (val) => {
       
  this.toggle();

  var currentdate = new Date(); 
  var newdatemodified  = currentdate.getFullYear() + "-"
+ (currentdate.getMonth()+1)  + "-" 
 + currentdate.getDate() ; 

  let model = {

      dateModified: newdatemodified ,
      mplid:this.props.selectedTitle[0]

  }

 this.props.createVacant(model);
}


toggle = () => {
  //this.setState({
    //selectedResignAppDate:null,

  //})

  this.props.toggle();
}


  render() {
  return (
    <div>
       <Card>
            <CardHeader>Add New Position(s)</CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row">

  <Col sm="12" md="6" lg="6" xl="4" className="form-group">
            <label htmlFor="absentEnd">Start Date</label>

            <Datetime
             // value={this.props.staff.absentEnd}
              onChange={v => {
                //this.props.handleStaffDatePicker('absentEnd', v)
              }}
              timeFormat={false}
              dateFormat="YYYY-MM-DD"
              closeOnSelect
              utc={true}
              inputProps={{ placeholder: 'YYYY-MM-DD' }}
            />
          </Col>
          <Col sm="12" md="6" lg="6" xl="4" className="form-group">
            <label htmlFor="absentEnd">End Date</label>

            <Datetime
             // value={this.props.staff.absentEnd}
              onChange={v => {
                //this.props.handleStaffDatePicker('absentEnd', v)
              }}
              timeFormat={false}
              dateFormat="YYYY-MM-DD"
              closeOnSelect
              utc={true}
              inputProps={{ placeholder: 'YYYY-MM-DD' }}
            />
          </Col>
          <Col sm="12" md="6" lg="6" xl="4" className="form-group form-group-select">
 <label htmlFor="destination">Country</label>

        <Select 
          id="destinations"
          valueKey="destination"
          labelKey="destination"
          className="form-control"
        //   options={props.position}
        //  onChange = { props.handleDestinationSelect }
        //  value={props.selectedDestination}
         placeholder="All Countries"
        />
             </Col> 

          <Col sm="12" md="6" lg="6" xl="4" className="form-group form-group-select">
 <label htmlFor="destination">Destination</label>

        <Select 
          id="destinations"
          valueKey="destination"
          labelKey="destination"
          className="form-control"
        //   options={props.position}
        //  onChange = { props.handleDestinationSelect }
        //  value={props.selectedDestination}
         placeholder="All Destinations"
        />
             </Col> 

    <Row>

    </Row>
    <Col sm="12" md="12" lg="12" xl="12" className="form-group">
           <Button   color="success"  onClick={() => { this.props.create() }}>Add Position(s)</Button>
           {/* <input type="file" /> */}
           </Col>
</div>
            </CardBody>
        </Card>
    </div>
  )
}
}


export default NewPosition
