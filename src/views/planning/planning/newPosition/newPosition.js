import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col,Button ,Row} from 'reactstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import moment from "moment";
import Datetime from 'react-datetime'
import * as reportActions from '../../../../actions/report/reportActions'

import Select from 'react-select'

class NewPosition extends Component {

//const ResignStaff = props => {
  constructor() {
    super();

    this.state = {
      loaded: false,
      selectedCountry:null,
      countries: [    //not in use  delete
        {
            id: 'Spain',
            name: 'Spain' 
        },
        {
            id: 'Other',
            name: 'Other'
        },
  
    ],

    };
}

createPosition = (val) => {
       debugger;
  //this.toggle();
  var newdatemodified = new Date();
 

  let model = {

      dateModified: moment(newdatemodified).format("YYYY-MM-DD HH:MM:DD")  ,
     // mplid:this.props.selectedTitle[0]

  }
debugger;
 this.props.createPosition(model);
}


toggle = () => {
  //this.setState({
    //selectedResignAppDate:null,

  //})

  this.props.toggle();
}

async componentWillMount() {
  const _this = this
  return Promise.all([
    this.props.reportActions.getReport()
    ]).then(function() {
    _this.setState({ loaded: true })
  })
}

handleCountrySelect = country => {
  debugger;
  const selectedCountry = country != null ? country: null;

  this.setState({
    selectedCountry
  })
}

handleDestinationSelect = (val) => {


  val = val != null || val != undefined ? val : '' 
  
  

 this.props.reportActions.handleDestinationField(val)

 //this.props.handleUnsavedEdit()
} 

  render() {
  return (
    <div>
       <Card>
            <CardHeader>Add New Position(s)</CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row">

  <Col sm="12" md="6" lg="6" xl="4" className="form-group">
            <label htmlFor="startDate">Start Date</label>

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
            <label htmlFor="endDate">End Date</label>

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
 <label htmlFor="Country">Country</label>

        <Select 
          id="country"
          valueKey="id"
          labelKey="name"
          className="form-control"
           options={this.state.countries}
          onChange = { this.handleCountrySelect }
          value={this.state.selectedCountry}
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
         options={this.props.position}
          onChange = { this.handleDestinationSelect }
         value={this.props.selectedDestination}
         placeholder="All Destinations"
        />
             </Col> 

    <Row>
    
    </Row>
    <Col sm="12" md="12" lg="12" xl="12" className="form-group">
           <Button   color="success"  onClick={() => this.createPosition()}>Add Position(s)</Button>
           {/* <input type="file" /> */}
           </Col>
</div>
            </CardBody>
        </Card>
    </div>
  )
}
}

function mapStateToProps(state) {

  return {

      //resigndate: state.report.report.resigndates,
      position: state.report.report.report,
      selectedDestination:state.report.report.selectedDestination,
     // selectedResignDates:state.report.report.selectedResignDates,
      //selectedYear:state.report.report.selectedYear,
      //create:state.report.report.create
  }
}
function mapDispatchToProps(dispatch) {
  return {
      //positionInfoActions: bindActionCreators(positionInfoActions, dispatch),
      reportActions: bindActionCreators(reportActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPosition)
