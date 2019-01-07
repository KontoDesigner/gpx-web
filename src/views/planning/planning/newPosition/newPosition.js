import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col,Button ,Row} from 'reactstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import moment from "moment";
import Datetime from 'react-datetime'
import * as reportActions from '../../../../actions/report/reportActions'
//import * as planningActions from '../../../../actions/planning/planningActions'
import TextInput from '../../../../components/textInput'
import Select from 'react-select'

class NewPosition extends Component {

//const ResignStaff = props => {
  constructor() {
    super();

    this.state = {
      value: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: '',
      value11: '',
      value12: '',
      value13: '',
      value14: '',
      selectvalue: '',
      selectvalue2: '',
      selectvalue3: '',
      selectvalue4: '',
      selectvalue5: '',
      selectvalue6: '',
      selectvalue7: '',
      selectvalue8: '',
      selectvalue9: '',
      selectvalue10: '',
      selectvalue11: '',
      selectvalue12: '',
      selectvalue13: '',
      selectvalue14: '',
      loaded: false,
      selectedCountry:null,
      selectedJobTitle:null,
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

    positionTypes: [    //not in use  delete
      {
        id: 'Local',
        name: 'Local' 
    },
    {
        id: 'Local Agency/Hotel Paid Rep',
        name: 'Local Agency/Hotel Paid Rep'
    },

    {
      id: 'Local Freelance',
      name: 'Local Freelance'
  },

  {
    id: 'Posted',
    name: 'Posted'
},

{
  id: 'Posted Local Contract ',
  name: 'Posted Local Contract '
},

{
id: 'Local Agency/Hotel Paid Rep',
name: 'Local Agency/Hotel Paid Rep'
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

handleChange(field,event) {
  debugger;
  
  switch (field) {
   case 'se01':
   this.setState({value: event.target.value});
   break;
   case 'se02':
   this.setState({value2: event.target.value});
   break;
   case 'se03':
   this.setState({value3: event.target.value});
   break;
   case 'se04':
   this.setState({value4: event.target.value});
   break;
   case 'se05':
   this.setState({value5: event.target.value});
   break;
   case 'se06':
   this.setState({value6: event.target.value});
   break;
   case 'se07':
   this.setState({value7: event.target.value});
   break;
   case 'se08':
   this.setState({value8: event.target.value});
   break;
   case 'se09':
   this.setState({value9: event.target.value});
   break;
   case 'se10':
   this.setState({value10: event.target.value});
   break;
   case 'se11':
   this.setState({value11: event.target.value});
   break;
   case 'se12':
   this.setState({value12: event.target.value});
   break;
   case 'se13':
   this.setState({value13: event.target.value});
   case 'se14':
   this.setState({value14: event.target.value});
   
  }


}

handleChangeSelect= (field, event, ) => {
  debugger;
   switch (field) {
    case 'positionType':
    this.setState({selectvalue: event});
    break;
    case 'positionType2':
    this.setState({selectvalue2: event});
    break;
    case 'positionType3':
    this.setState({selectvalue3: event});
    break;
    case 'positionType4':
    this.setState({selectvalue4: event});
    break;
    case 'positionType5':
    this.setState({selectvalue5: event});
    break;
    case 'positionType6':
    this.setState({selectvalue6: event});
    break;
    case 'positionType7':
    this.setState({selectvalue7: event});
    break;
    case 'positionType8':
    this.setState({selectvalue8: event});
    break;
    case 'positionType9':
    this.setState({selectvalue9: event});
    break;
    case 'positionType10':
    this.setState({selectvalue10: event});
    break;
    case 'positionType11':
    this.setState({selectvalue11: event});
    break;
    case 'positionType12':
    this.setState({selectvalue12: event});
    break;
    case 'positionType13':
    this.setState({selectvalue13: event});
    break;
    case 'positionType14':
    this.setState({selectvalue14: event});
  
  }
  
  
  
 }

// handleChangeSelect = (field, val, selector) => {
//   const id = val != null ? val[selector] : undefined

//   this.props.reportActions.handleChangeField(field, id)


// }

handleCountrySelect = country => {
  debugger;
  const selectedCountry = country != null ? country: null;

  this.setState({
    selectedCountry
  })
}


handleJobTitleSelect = jobTitle => {

  debugger;
  const selectedJobTitle = jobTitle != null ? jobTitle: null;

  this.setState({
    selectedJobTitle
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

            <CardBody className="no-padding-bottom" background-color="black">
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


<Col sm="12" md="6" lg="6" xl="4" className="form-group form-group-select">
 <label htmlFor="jobTitle">JobTitle</label>

        <Select 
          id="jobTitle"
          valueKey="id"
          labelKey="name"
          className="form-control"
         options={this.props.jobTitle}
         onChange = { this.handleJobTitleSelect }
         value={this.state.selectedJobTitle}
         placeholder="All Destinations"
        />
             </Col> 

          <Col sm="12" md="12" lg="12" xl="12"><hr></hr></Col>
          
         

           <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mplse" label="MPL SM Origin" disabled  value="TUI Sweden"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="se01" label="# of Positions"  value={this.state.value} onChange={(v) => {this.handleChange('se01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType">PositionType</label>

        <Select 
          id="positionType"
          valueKey="id"
          labelKey="name"
          className="form-control"
         options={this.state.positionTypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue}
         placeholder=""
        />
             </Col> 
             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mplno" label="MPL SM Origin" disabled  value="TUI Norway"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="se01" label="# of Positions"  value={this.state.value} onChange={(v) => {this.handleChange('se01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType">PositionType</label>

        <Select 
          id="positionType"
          valueKey="id"
          labelKey="name"
          className="form-control"
         options={this.state.positionTypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue}
         placeholder=""
        />
             </Col> 
             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mpldk" label="MPL SM Origin" disabled  value="TUI Denmark"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="se01" label="# of Positions"  value={this.state.value} onChange={(v) => {this.handleChange('se01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType">PositionType</label>

        <Select 
          id="positionType"
          valueKey="id"
          labelKey="name"
          className="form-control"
         options={this.state.positionTypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue}
         placeholder=""
        />
             </Col> 
             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mplfi" label="MPL SM Origin" disabled  value="TUI Finland"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="se01" label="# of Positions"  value={this.state.value} onChange={(v) => {this.handleChange('se01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType">PositionType</label>

        <Select 
          id="positionType"
          valueKey="id"
          labelKey="name"
          className="form-control"
         options={this.state.positionTypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue}
         placeholder="" 
        />
             </Col> 
             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mpluk" label="MPL SM Origin" disabled  value="TUI UK&I"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="se01" label="# of Positions"  value={this.state.value} onChange={(v) => {this.handleChange('se01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType">PositionType</label>

        <Select 
          id="positionType"
          valueKey="id"
          labelKey="name"
          className="form-control"
         options={this.state.positionTypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue}
         placeholder=""
        />
             </Col> 
             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mplne" label="MPL SM Origin" disabled  value="TUI Netherlands"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="se01" label="# of Positions"  value={this.state.value} onChange={(v) => {this.handleChange('se01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType">PositionType</label>

        <Select 
          id="positionType"
          valueKey="id"
          labelKey="name"
          className="form-control"
         options={this.state.positionTypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue}
         placeholder=""
        />
             </Col> 
             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mplgas" label="MPL SM Origin" disabled  value="TUI GAS"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="se01" label="# of Positions"  value={this.state.value} onChange={(v) => {this.handleChange('se01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType">PositionType</label>

        <Select 
          id="positionType"
          valueKey="id"
          labelKey="name"
          className="form-control"
         options={this.state.positionTypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue}
         placeholder=""
        />
             </Col> 
             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mplfr" label="MPL SM Origin" disabled  value="TUI France"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="se01" label="# of Positions"  value={this.state.value} onChange={(v) => {this.handleChange('se01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType">PositionType</label>

        <Select 
          id="positionType"
          valueKey="id"
          labelKey="name"
          className="form-control"
         options={this.state.positionTypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue}
         placeholder=""
        />
             </Col> 
             
             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mplfr" label="MPL SM Origin" disabled  value="TUI Belgium"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="se01" label="# of Positions"  value={this.state.value} onChange={(v) => {this.handleChange('se01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType">PositionType</label>

        <Select 
          id="positionType"
          valueKey="id"
          labelKey="name"
          className="form-control"
         options={this.state.positionTypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue}
         placeholder=""
        />
             </Col> 

             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mplfr" label="MPL SM Origin" disabled  value="TUI Poland"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="se01" label="# of Positions"  value={this.state.value} onChange={(v) => {this.handleChange('se01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType">PositionType</label>

        <Select 
          id="positionType"
          valueKey="id"
          labelKey="name"
          className="form-control"
         options={this.state.positionTypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue}
         placeholder=""
        />
             </Col> 

             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mplfr" label="MPL SM Origin" disabled  value="TUI Russia"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="se01" label="# of Positions"  value={this.state.value} onChange={(v) => {this.handleChange('se01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType">PositionType</label>

        <Select 
          id="positionType"
          valueKey="id"
          labelKey="name"
          className="form-control"
         options={this.state.positionTypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue}
         placeholder=""
        />
             </Col> 
             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mplfr" label="MPL SM Origin" disabled  value="TUI"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="se01" label="# of Positions"  value={this.state.value} onChange={(v) => {this.handleChange('se01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType">PositionType</label>

        <Select 
          id="positionType"
          valueKey="id"
          labelKey="name"
          className="form-control"
         options={this.state.positionTypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue}
         placeholder=""
        />
             </Col> 
             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mplfr" label="MPL SM Origin" disabled  value="L'Tur"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="se01" label="# of Positions"  value={this.state.value} onChange={(v) => {this.handleChange('se01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType">PositionType</label>

        <Select 
          id="positionType"
          valueKey="id"
          labelKey="name"
          className="form-control"
         options={this.state.positionTypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue}
         placeholder=""
        />
             </Col> 

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
      jobTitle: state.setting.setting.jobTitle,
      selectedDestination:state.report.report.selectedDestination,
      selectedPositionType:state.report.report.selectedPositionType,
      selectedJobTitle:state.setting.setting.selectedJobTitle,
     // staff: state.staffEdit.employeeInfo.staff
     // selectedResignDates:state.report.report.selectedResignDates,,
      //selectedYear:state.report.report.selectedYear,
      //create:state.report.report.create
  }
}
function mapDispatchToProps(dispatch) {
  return {
      //planningActions: bindActionCreators(planningActions, dispatch),
      reportActions: bindActionCreators(reportActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPosition)
