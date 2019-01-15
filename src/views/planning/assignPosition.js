import React, { Component } from 'react'
import moment from "moment";
import RestClient from '../../infrastructure/restClient'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
  Row,
  Col,
  Table,
  Label,
  Input
} from 'reactstrap'
import Datetime from 'react-datetime'
import Select from 'react-select'
class AssignPosition extends Component {
    constructor(props) {
        super(props);
        this.options=[],  //temporary class variable

        this.state = {
        
          loaded: false,
          dates:[],
          positionStartDate: null,
          positionEndDate: null,
             dateModified: null,
             selectedCandidate: null,
            selectedAssignStart:null,
            selectedAssignEnd:null,
            placementDynamicPeriods:[],
      count:0,
            selectedPlacementPeriod: null,
            managerReasons: [
              {
                  id: 'Dismissed',
                  name: 'Dismissed'
              },
              {
                  id: 'Resigned',
                  name: 'Resigned'
              },
              {
                  id: ' Other (Please Specify)',
                  name: ' Other (Please Specify)'
              }
          ],

           placementPeriods: [

           {
             id: 'Assign New',
            name: 'Assign New'
           },
             {
                 id: '2018-09-05 - 2019-01-01',
               name: '2018-09-05 - 2019-01-01'
         },
            {
                  id: '2019-01-02- 2019-04-01',
                name: '2019-01-02- 2019-04-01'
              },
              {
                  id: '2019-09-01 - 2019-04-30',
                 name: '2019-09-01 - 2019-04-30'
            }
             
          ],


            
            
        };
        
    }

    toggle = () => {
        this.setState({
          selectedCandidate: null,
          selectedAssignStart:null,
          selectedAssignEnd:null,
          selectedPlacementPeriod:null,
          positionStartDate: null,
          positionEndDate: null,
          dates:[],
         // newArray:[],
            dateModified: null,
            count:0,
       

        })

        this.props.toggle();
    }


    candidateOnChange = async candidate => {
      debugger;
     // const selectedCandidate = candidate ;
     
     
      const selectedCandidate = candidate != null ? candidate: null

  
      
      



debugger;
     // this.options = {value: ''};

      this.setState({
        selectedCandidate,
dates:[],


      })


      let dates=this.props.candidate ? this.props.candidate 

      .filter(x => x.staffID === selectedCandidate.staffID).map(h => (
   {
         startDate: moment(h.startDate).format("YYYY-MM-DD") + ' - ' + moment(h.endDate).format("YYYY-MM-DD"),
        startDate: moment(h.startDate).format("YYYY-MM-DD") + ' - ' + moment(h.endDate).format("YYYY-MM-DD"),
       
      
   }
  
      )
     
      
       )
    
     :[]

     var newArray=  dates.slice();

    newArray.push({
      startDate: "Add New" ,   //Should be role start date
      startDate: "Add New"  
     
 });
// debugger;
     this.setState({
      
      dates:newArray

    })


        debugger;
       
    

    }

    
   positionStartChange = positionStart => {
    debugger;
    const positionStartDate = positionStart ;
 debugger;
    this.setState({
        positionStartDate
   
    })
  
}


positionEndChange = positionEnd => {
debugger;
const positionEndDate = positionEnd ;
debugger;
this.setState({
    positionEndDate

})

}

    assignStartChange = assignStart => {
      const selectedAssignStart = assignStart ;
 debugger;
      this.setState({
        selectedAssignStart
     
      })
      debugger;
  }

  assignEndChange = assignEnd => {
    const selectedAssignEnd = assignEnd ;
 
    this.setState({
      selectedAssignEnd
   
    })
  
}

placementPeriodChange = placementPeriods => {
  debugger;

const selectedPlacementPeriod = placementPeriods.startDate ;
// const selectedAssignStart = selectedPlacementPeriod ? selectedPlacementPeriod.substr(0, 10):''; 
  //const selectedAssignEnd = selectedPlacementPeriod ? selectedPlacementPeriod.substr(-10):''; 
  
debugger;


  this.setState({
    selectedPlacementPeriod,
    //selectedAssignStart,
    //selectedAssignEnd
 
  })
  debugger;
}



    createAssign = (val) => {
       
      debugger;

       // const destination = this.props.availablePositions.filter(ap => ap.destination === this.state.selectedDestination)[0];
       var check= this.state.selectedCandidate ? true: false
       var check2= this.state.selectedPlacementPeriod ? true: false

       if(!check){  
        alert('Please select a Staff to assign');
        return false;
      }

      if(!check2){  
        alert('Please select an assignment period to replace or select Add New');
        return false;
      }
       
       // const position = destination.jobTitles.filter(ap => ap.mplid === mplid)[0];
       
       var currentdate = new Date()

       var newdatemodified=moment(currentdate).format("YYYY-MM-DD HH:mm:ss")

        let model = {
            // staffID: position.mplid,
            dateModified: newdatemodified ,
             candidate: this.state.selectedCandidate.staffID,
            startDate: this.state.selectedAssignStart,
             endDate: this.state.selectedAssignEnd,
             selectedTitle:this.props.selectedTitle[0],
             oldDate: this.state.selectedPlacementPeriod.substr(0, 10)
        }

var assignCompareStart = new Date(this.state.selectedAssignStart);
var assignCompareEnd  = new Date(this.state.selectedAssignEnd);
var positionCompareStart = new Date(this.state.positionStartDate);
var positionCompareEnd  = new Date(this.state.positionEndDate);
debugger;

var checkok= (assignCompareStart.getTime() >= positionCompareStart.getTime() && assignCompareEnd.getTime() <= positionCompareEnd.getTime());
var checkok2= (assignCompareStart.getTime() < assignCompareEnd.getTime());
 debugger;



 if(checkok){   // temporary
     if(checkok2){

   
 this.toggle();
 debugger;
 this.props.createAssign(model);
}
else
{

    alert('Assign startdate must be before Assign End Date') ;
}
 } else
  {
   
   alert('Assign dates does not match the position dates, please try again') ;


}
}
    
 

    render() {

      const mplresult = this.props.allRoles
      .filter( x => x != null ).map(x => x.headOfs).reduce((prev, x) => prev.concat(x), [])
      .filter( x => x != null ).map(x => x.destinations).reduce((prev, x) => prev.concat(x), [])
      .filter( x => x !=null ).map(x => x.positions).reduce((prev, x) => prev.concat(x), []).filter(x => x.mplID == this.props.selectedTitle[0])

  


  return (
    <div>
      <Modal isOpen={this.props.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>
         Assign Staff To Position - {this.props.selectedTitle}  
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <Table striped bordered responsive>
              
                <thead>
                  <tr>
                    <th colSpan="2">Select Staff</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2">
                  
                    <Select 
                                       id="firstNameLastNameStatus"
                                       valueKey="firstNameLastNameStatus"
                                       labelKey="firstNameLastNameStatus" 
                                        className="form-control"
                                        options={this.props.candidate}
                                        onChange={this.candidateOnChange}
                                        value={this.state.selectedCandidate}
                                        placeholder="Select"
                                        className="form-group form-group-select"
                                    />

                    {/* <select value={this.props.value} onChange={this.props.handleChange}  className="form-control"  >
                    <option value="" disabled selected>Select your option</option>
            <option value="Studies">Studies</option>
            <option value="Parental Leave">Parental Leave</option>
            <option value="Other Please Specify">Other Please Specify</option>
           
          </select> */}
                    </td>
                  </tr>
                  </tbody>
                  <thead>
                  <tr>
                    <th colSpan="2">Assignments <i className="card-text text-danger"> (Selected assignment will be replaced)</i></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2"> 
                  
                    <Select
                                       id="startDate"
                                       valueKey="startDate"
                                       labelKey="startDate" 
                                        className="form-control"
                                        options={this.state.dates}
                                        onChange={this.placementPeriodChange}
                                        value={this.state.selectedPlacementPeriod}
                                        placeholder="Select"
                                        className="form-group form-group-select"
                                    />
                                    </td>
                                    </tr>
                  </tbody>
                  <thead>
                  <tr>
                    <th>Assign StartDate</th> <th>Assign EndDate</th>{' '}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Datetime
                      //id="absentStart"
                        className={'custom-datepicker'}
                        //value={this.props.staff.dateOfBirth}
                        onChange={this.assignStartChange}
                        value={this.state.selectedAssignStart}
                        timeFormat={false}
                        dateFormat="YYYY-MM-DD"
                        closeOnSelect
                        utc={true}
                        inputProps={{ placeholder: 'YYYY-MM-DD' }}
                      />
                    </td>
                    <td>
                
                      <Datetime
                        className={'custom-datepicker'}
                        onChange={this.assignEndChange}
                        value={this.state.selectedAssignEnd}
                        timeFormat={false}
                        dateFormat="YYYY-MM-DD"
                        closeOnSelect
                        utc={true}
                        inputProps={{ placeholder: 'YYYY-MM-DD' }}
                      />
                    </td>
                  </tr>
                </tbody>
                <thead>
                                            <tr>
                                                <th>Position StartDate</th> <th> Position EndDate</th>
                                     
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>

                                               <td>
                                         
                                                <Datetime
                        className={'custom-datepicker'}
                        onChange={this.positionStartChange}
                        value={this.state.positionStartDate}
                        timeFormat={false}
                        dateFormat="YYYY-MM-DD"
                        closeOnSelect
                        utc={true}
                        inputProps={{ placeholder: 'YYYY-MM-DD' }}
                      /> 
                       
                      
                  
                      
                      </td> 
                                                
                                                
                                                
                                                <td>
                                                <Datetime
                        className={'custom-datepicker'}
                        onChange={this.positionEndChange}
                        value={this.state.positionEndDate}
                        timeFormat={false}
                        dateFormat="YYYY-MM-DD"
                        closeOnSelect
                        utc={true}
                        inputProps={{ placeholder: 'YYYY-MM-DD' }}
                      />
                                                
                                                
                                                </td>  
                                           
                                            
                                            </tr>
                                        </tbody>
              </Table>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => this.createAssign()}
          >
            Ok
          </Button>{' '}
          <Button color="danger" onClick={this.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
    
  )
    }
}





export default AssignPosition
