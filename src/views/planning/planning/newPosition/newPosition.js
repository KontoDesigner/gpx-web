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
      selectedStart:null,
      selectedEnd:null,
      destinationArr : [],

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
      selectedJobFamily:null,
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

createPosition = async (val) => {
       
  //this.toggle();
  var newdatemodified = new Date();
  debugger;

  let model = {

    Destination:this.props.selectedDestination.name,
    JobTitle:this.state.selectedJobTitle.name,
    JobFamily:this.state.selectedJobFamily.name,
    StartDate:this.state.selectedStart,
    EndDate:this.state.selectedEnd,
    Country:this.state.selectedCountry.name,
    DateModified: moment(newdatemodified).format("YYYY-MM-DD HH:MM:DD")  ,
    So:"TUI Sweden",
    No:"TUI Norway",
    Dk:"TUI Denmark",
    Fi:"TUI Finland",
    Uk:"TUI UK&I",
    Ne:"TUI Netherlands",
    Fr:"TUI France",
    Ru:"TUI Russia",
    Gas:"TUI Gas",
    Be:"TUI Belgium",
    Po:"TUI Poland",
    Tui:"TUI",
    Ltur:"L'Tur",

    Se01:parseInt(this.state.value),
    No01:parseInt(this.state.value2),
    Dk01:parseInt(this.state.value3),
    Fi01:parseInt(this.state.value4),
    Uk01:parseInt(this.state.value5),
    Ne01:parseInt(this.state.value6),
    Gas01:parseInt(this.state.value7),
    Fr01:parseInt(this.state.value8),
    Be01:parseInt(this.state.value9),
    Po01:parseInt(this.state.value10),
    Ru01:parseInt(this.state.value11),
    Tu01:parseInt(this.state.value12),
    Tur01:parseInt(this.state.value13),
   
    PositionTypeSe01:this.state.selectvalue.name,
    PositionTypeNo01:this.state.selectvalue2.name,
    PositionTypeDk01:this.state.selectvalue3.name,
    PositionTypeFi01:this.state.selectvalue4.name,
    PositionTypeUk01:this.state.selectvalue5.name,
    PositionTypeNe01:this.state.selectvalue6.name,
    PositionTypeGas01:this.state.selectvalue7.name,
    PositionTypeFr01:this.state.selectvalue8.name,
    PositionTypeBe01:this.state.selectvalue9.name,
    PositionTypePo01:this.state.selectvalue10.name,
    PositionTypeRu01:this.state.selectvalue11.name,
    PositionTypeTu01:this.state.selectvalue12.name,
    PositionTypeTur01:this.state.selectvalue13.name,

   }



 //this.props.createPosition(this.state);
 await this.props.createPosition(model);
 
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

async componentDidMount() {
  const destination= this.props.keywordslookup.filter(ap => ap.ids === 'Destinations')[0];
 const destinationArr = destination.keywordValues.split(',')

 const destinationObjArr = destinationArr.map(s => ({
     id: s,
     name: s
 }))

 
 if (destination !== undefined) {
        
               
   this.setState({destinationArr: destinationObjArr })
}
}


startChange = start => {
  
  const selectedStart = start ;

  this.setState({
    selectedStart
 
  })
  
}

endChange = end => {
const selectedEnd = end ;

this.setState({
  selectedEnd

})

}


handleChange(field,event) {
  
  
  switch (field) {
   case 'se01':
   this.setState({value: event.target.value});
   break;
   case 'no01':
   this.setState({value2: event.target.value});
   break;
   case 'dk01':
   this.setState({value3: event.target.value});
   break;
   case 'fi01':
   this.setState({value4: event.target.value});
   break;
   case 'uk01':
   this.setState({value5: event.target.value});
   break;
   case 'ne01':
   this.setState({value6: event.target.value});
   break;
   case 'gas01':
   this.setState({value7: event.target.value});
   break;
   case 'fr01':
   this.setState({value8: event.target.value});
   break;
   case 'be01':
   this.setState({value9: event.target.value});
   break;
   case 'po01':
   this.setState({value10: event.target.value});
   break;
   case 'ru01':
   this.setState({value11: event.target.value});
   break;
   case 'tu01':
   this.setState({value12: event.target.value});
   break;
   case 'tur01':
   this.setState({value13: event.target.value});
 
   
  }


}

handleChangeSelect= (field, event, ) => {
  
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
  
  const selectedCountry = country != null ? country: null;

  this.setState({
    selectedCountry
  })
}


handleJobTitleSelect = jobTitle => {

  
  const selectedJobTitle = jobTitle != null ? jobTitle: null;

  this.setState({
    selectedJobTitle
  })
}

handleJobFamilySelect = jobFamily => {

  
  const selectedJobFamily = jobFamily != null ? jobFamily: null;

  this.setState({
    selectedJobFamily
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
               onChange={this.startChange}
               value={this.state.selectedStart}
            
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
            onChange={this.endChange}
            value={this.state.selectedEnd}
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
          valueKey="id"
          labelKey="name"
          className="form-control"
          options={this.state.destinationArr}
          // destinationObjArr
          // options={[...[{destination: 'Non-Spain Destination TBC'},{destination: 'Spain Destination TBC'},{destination: 'Stand by - Not contracted'}

          // ,{destination: 'Non Spain Destination TBC Full Season'},{destination: 'Non Spain Destination TBC May'},{destination: 'Non Spain Destination TBC June'},{destination: 'Non Spain Destination TBC July'}
          // ,{destination: 'Non Spain Destination TBC August'},{destination: 'Non Spain Destination TBC September'},{destination: 'Non Spain Destination TBC October'},{destination: 'Spain Destination TBC Full Season'}
          // ,{destination: 'Spain Destination TBC May '},{destination: 'Spain Destination TBC June'},
          // ,{destination: 'Spain Destination TBC July'},{destination: 'Spain Destination TBC August'},{destination: 'Spain Destination TBC September'},{destination: 'Spain Destination TBC October'}],...this.props.position]}
       
       
          // options={this.props.position}
          onChange = { this.handleDestinationSelect }
         value={this.props.selectedDestination}
         placeholder="Select Destination"
        />
             </Col> 

               <Col key={1} sm="12" md="6" lg="6" xl="4" className="form-group form-group-select">
        <label htmlFor="jobFamily">JobFamily</label>

        <Select
          id="jobFamily"
          valueKey="id"
          labelKey="name"
          className="form-control"
          options={this.props.jobFamily}
          onChange={this.handleJobFamilySelect }
          value={this.state.selectedJobFamily}
          placeholder="JobFamily"
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
         placeholder="Select JobTitle"
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
          options={this.props.mplpositiontypes}
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
                        <TextInput name="no01" label="# of Positions"  value={this.state.value2} onChange={(v) => {this.handleChange('no01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType2">PositionType</label>

        <Select 
          id="positionType2"
          valueKey="id"
          labelKey="name"
          className="form-control"
          options={this.props.mplpositiontypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType2', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue2}
         placeholder=""
        />
             </Col> 
             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mpldk" label="MPL SM Origin" disabled  value="TUI Denmark"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="dk01" label="# of Positions"  value={this.state.value3} onChange={(v) => {this.handleChange('dk01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType3">PositionType</label>

        <Select 
          id="positionType3"
          valueKey="id"
          labelKey="name"
          className="form-control"
          options={this.props.mplpositiontypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType3', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue3}
         placeholder=""
        />
             </Col> 
             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mplfi" label="MPL SM Origin" disabled  value="TUI Finland"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="fi01" label="# of Positions"  value={this.state.value4} onChange={(v) => {this.handleChange('fi01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType4">PositionType</label>

        <Select 
          id="positionType4"
          valueKey="id"
          labelKey="name"
          className="form-control"
          options={this.props.mplpositiontypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType4', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue4}
         placeholder="" 
        />
             </Col> 
             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mpluk" label="MPL SM Origin" disabled  value="TUI UK&I"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="uk01" label="# of Positions"  value={this.state.value5} onChange={(v) => {this.handleChange('uk01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType5">PositionType</label>

        <Select 
          id="positionType5"
          valueKey="id"
          labelKey="name"
          className="form-control"
          options={this.props.mplpositiontypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType5', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue5}
         placeholder=""
        />
             </Col> 
             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mplne" label="MPL SM Origin" disabled  value="TUI Netherlands"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="ne01" label="# of Positions"  value={this.state.value6} onChange={(v) => {this.handleChange('ne01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType6">PositionType</label>

        <Select 
          id="positionType6"
          valueKey="id"
          labelKey="name"
          className="form-control"
          options={this.props.mplpositiontypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType6', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue6}
         placeholder=""
        />
             </Col> 
             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mplgas" label="MPL SM Origin" disabled  value="TUI GAS"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="gas01" label="# of Positions"  value={this.state.value7} onChange={(v) => {this.handleChange('gas01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType7">PositionType</label>

        <Select 
          id="positionType7"
          valueKey="id"
          labelKey="name"
          className="form-control"
          options={this.props.mplpositiontypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType7', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue7}
         placeholder=""
        />
             </Col> 
             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mplfr" label="MPL SM Origin" disabled  value="TUI France"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="fr01" label="# of Positions"  value={this.state.value8} onChange={(v) => {this.handleChange('fr01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType8">PositionType</label>

        <Select 
          id="positionType8"
          valueKey="id"
          labelKey="name"
          className="form-control"
          options={this.props.mplpositiontypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType8', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue8}
         placeholder=""
        />
             </Col> 
             
             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mplbe" label="MPL SM Origin" disabled  value="TUI Belgium"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="be01" label="# of Positions"  value={this.state.value9} onChange={(v) => {this.handleChange('be01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType9">PositionType</label>

        <Select 
          id="positionType9"
          valueKey="id"
          labelKey="name"
          className="form-control"
          options={this.props.mplpositiontypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType9', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue9}
         placeholder=""
        />
             </Col> 

             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mplpo" label="MPL SM Origin" disabled  value="TUI Poland"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="po01" label="# of Positions"  value={this.state.value10} onChange={(v) => {this.handleChange('po01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType10">PositionType</label>

        <Select 
          id="positionType10"
          valueKey="id"
          labelKey="name"
          className="form-control"
          options={this.props.mplpositiontypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType10', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue10}
         placeholder=""
        />
             </Col> 

             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mplru" label="MPL SM Origin" disabled  value="TUI Russia"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="ru01" label="# of Positions"  value={this.state.value11} onChange={(v) => {this.handleChange('ru01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType11">PositionType</label>

        <Select 
          id="positionType11"
          valueKey="id"
          labelKey="name"
          className="form-control"
          options={this.props.mplpositiontypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType11', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue11}
         placeholder=""
        />
             </Col> 
             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mpltui" label="MPL SM Origin" disabled  value="TUI"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="tu01" label="# of Positions"  value={this.state.value12} onChange={(v) => {this.handleChange('tu01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType12">PositionType</label>

        <Select 
          id="positionType12"
          valueKey="id"
          labelKey="name"
          className="form-control"
          options={this.props.mplpositiontypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType12', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue12}
         placeholder=""
        />
             </Col> 
             <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="mpltur" label="MPL SM Origin" disabled  value="L'Tur"  />
                    </Col>

               <Col sm="12" md="4" lg="4" xl="4" className="form-group">
                        <TextInput name="tur01" label="# of Positions"  value={this.state.value13} onChange={(v) => {this.handleChange('tur01', v) }} />
                    </Col>


 <Col sm="12" md="4" lg="4" xl="4" className="form-group form-group-select">
 <label htmlFor="positionType13">PositionType</label>

        <Select 
          id="positionType13"
          valueKey="id"
          labelKey="name"
          className="form-control"
          options={this.props.mplpositiontypes}
        //onChange = {this.handleChangeSelect}
         onChange={(v) => {this.handleChangeSelect('positionType13', v) }}
         
        // value={this.props.selectedPositionType} 
         value={this.state.selectvalue13}
         placeholder=""
        />
             </Col> 

    <Col sm="12" md="12" lg="12" xl="12" className="form-group">
           <Button   color="success" className="float-right" onClick={() => this.createPosition()}>Add Position(s)</Button>
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
      jobFamily: state.setting.setting.jobFamilies,
      selectedDestination:state.report.report.selectedDestination,
      selectedPositionType:state.report.report.selectedPositionType,
      selectedJobTitle:state.setting.setting.selectedJobTitle,
      keywordslookup: state.setting.keywords.keywordslookup,
      mplpositiontypes: state.planning.candidate.mplpositiontypes
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
