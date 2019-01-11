import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col,Button } from 'reactstrap'
import TextInput from '../../../../components/textInput'
import Select from 'react-select'
import Datetime from 'react-datetime'
//import CreatableSelect from 'react-select/lib/Creatable';

class Report extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     val: null,
        //     options: [{
        //       value: 'one',
        //       label: 'One'
        //     }, {
        //       value: 'two',
        //       label: 'Two'
        //     }]
        //   };
        }

        // onChange = (selections) => {
        //     console.log("Change Handler 1 : Selected: ", selections);
        //     debugger;
        //     const newOptions = [].concat(this.state.options);
            
        //     selections.forEach(selection => {
        //       const match = this.state.options.find(
        //         entry => (entry.value == selection.value));
        //       if (!match) {
        //           newOptions.add(match);
        //       }
        //     });
            
        //     this.setState({
        //       val: [].concat(selections),
        //       options: newOptions
        //     });
        //   };
 
    render() {
        
        return (
            
 
        <Card>
            <CardHeader>Reports: Staffing List</CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row">

        <Col key={0} sm="12" md="4" lg="3" xl="3" className="form-group form-group-select">

   { <label htmlFor="destination">Destination</label>}


<div>
<Select 
            multi={true}
            id="destinations"
            valueKey="destination"
            labelKey="destination"
            className="form-group form-group-select"
            value = {this.props.selectedDestination}
            options={[...[{destination: 'All Destinations'}],...this.props.position]}
            onChange = {this.props.handleDestinationSelect}
            placeholder="All Destinations"
            />
    </div>



 {/* <label htmlFor="destination">Destination</label>

        <Select 
          id="destinations"
          valueKey="destination"
          labelKey="destination"
          className="form-control"
          options={this.props.position}
         onChange = {this.props.handleDestinationSelect}
         value={this.props.selectedDestination}
         placeholder="All Destinations"
        /> */}
        <p></p>
           <Button   color="success"  onClick={() => { this.props.create(this.props.selectedDestination) }}>Create Report</Button>
           {/* <input type="file" /> */}
      </Col>
</div>
            </CardBody>
        </Card>
        )
    }
}

export default Report

