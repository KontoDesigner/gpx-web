import React, { Component } from 'react'
import moment from "moment";
import RestClient from '../../infrastructure/restClient'
import TextInput from '../../components/textInput'
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
        //this.options=[],  //temporary class variable
      //  this.options = this.props.allRoles
      //  .filter( x => x != null ).map(x => x.headOfs).reduce((prev, x) => prev.concat(x), [])
      //  .filter( x => x != null ).map(x => x.destinations).reduce((prev, x) => prev.concat(x), [])
      // .filter( x => x !=null ).map(x => x.positions).reduce((prev, x) => prev.concat(x), []).filter(x => x.mplID == this.props.selectedTitle[0])


        this.state = {
        
          validStaff:'',
          validAssign:'',
          validDate:'',
          validDate2:'',
          validAssignLength:'',
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
          validStaff:'',
          validAssign:'',
          validDate:'',
          validDate2:'',
          validAssignLength:'',
          dates:[],
         // newArray:[],
            dateModified: null,
            count:0,
       

        })

        this.props.toggle();
    }


    candidateOnChange = async candidate => {
      
     // const selectedCandidate = candidate ;
     
     
      const selectedCandidate = candidate != null ? candidate: null


     // this.options = {value: ''};

      this.setState({
        selectedCandidate,
        validStaff:'',
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
// 
     this.setState({
      
      dates:newArray

    })


        
       
    

    }

    
   positionStartChange = positionStart => {
    
    const positionStartDate = positionStart ;
 
    this.setState({
        positionStartDate
   
    })
  
}


positionEndChange = positionEnd => {

const positionEndDate = positionEnd ;

this.setState({
    positionEndDate

})

}

    assignStartChange = assignStart => {
      const selectedAssignStart = assignStart ;
 
      this.setState({
        selectedAssignStart,
        validDate:''
     
     
      })
      
  }

  assignEndChange = assignEnd => {
    const selectedAssignEnd = assignEnd ;
 
    this.setState({
      selectedAssignEnd,
      validDate:''
   
    })
  
}

placementPeriodChange = placementPeriods => {
  

const selectedPlacementPeriod = placementPeriods.startDate ;
// const selectedAssignStart = selectedPlacementPeriod ? selectedPlacementPeriod.substr(0, 10):''; 
  //const selectedAssignEnd = selectedPlacementPeriod ? selectedPlacementPeriod.substr(-10):''; 
  



  this.setState({
    selectedPlacementPeriod,
    validAssign:''
 
    //selectedAssignStart,
    //selectedAssignEnd
 
  })
  
}

checkAssignmentLength = () => {
debugger;
    if (this.state.selectedPlacementPeriod=="Add New"){



     if(this.state.dates.length > 3) {


      return false;
     } else

     {


      return true;
     }


    }
    return false;
   }
    
    
    createAssign = (val,val2) => {
       
      

       // const destination = this.props.availablePositions.filter(ap => ap.destination === this.state.selectedDestination)[0];
       var check= this.state.selectedCandidate ? true: false
       var check2= this.state.selectedPlacementPeriod ? true: false
       debugger;
       var check3= this.checkAssignmentLength()

       if(!check){  
        //alert('Please select a Staff to assign');

        this.setState({
          validStaff:'Please select a Staff to assign'
          //selectedAssignStart,
          //selectedAssignEnd
       
        })

        return false;
      }

      if(!check2){  
        //alert('Please select an assignment period to replace or select Add New');

        this.setState({
          validAssign:'Please select an assignment period to replace or select Add New'
          //selectedAssignStart,
          //selectedAssignEnd
       
        })
     
        return false;
      }

      if(!check3){  
 

        this.setState({
          validAssignLength:'By selecting Add New you will exceed the number of assignments for one staff.'
   
       
        })
     
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
             selectedTitle:this.props.selectedMplID,
             oldDate: this.state.selectedPlacementPeriod.substr(0, 10)
        }

var assignCompareStart = new Date(this.state.selectedAssignStart); 
var assignCompareEnd  = new Date(this.state.selectedAssignEnd);
var positionCompareStart = new Date(val);
var positionCompareEnd  = new Date(val2);


var checkok= (assignCompareStart.getTime() >= positionCompareStart.getTime() && assignCompareEnd.getTime() <= positionCompareEnd.getTime());
var checkok2= (assignCompareStart.getTime() < assignCompareEnd.getTime());
 



 if(checkok){   // temporary
     if(checkok2){



   
 //this.toggle();
 debugger;
 this.props.createAssign(model);
}
else
{

  this.setState({
    validDate:'Check Assign Date'
    //selectedAssignStart,
    //selectedAssignEnd
 
  })

  


    //alert('Assign startdate must be before Assign End Date') ;
}
 } else
  {
   
  // alert('Assign dates does not match the position dates, please try again') ;
   this.setState({
    validDate2:'Assign dates does not match the position dates'
    //selectedAssignStart,
    //selectedAssignEnd
 
  })

}
}
    
 

    render() {

       let mplresult = this.props.allRoles
       .filter( x => x != null ).map(x => x.headOfs).reduce((prev, x) => prev.concat(x), [])
       .filter( x => x != null ).map(x => x.destinations).reduce((prev, x) => prev.concat(x), [])
       .filter( x => x !=null ).map(x => x.positions).reduce((prev, x) => prev.concat(x), []).filter(x => x.mplID == this.props.selectedMplID)
        mplresult=mplresult.length > 0 ? mplresult :[{}]

debugger;

  return (
    <div>
      <Modal isOpen={this.props.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>
         Assign Staff To Position - {this.props.selectedMplID}  
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
                                 {/* <div dangerouslySetInnerHTML={{ __html: this.state.validStaff }} /> */}

                                    <b className="card-text text-danger">{this.state.validStaff }</b>

                    </td>
                  </tr>
                  </tbody>
                  
                  <thead>
                  <tr>
                    <th colSpan="2">Assignments  
                      
            
                    {this.state.dates.map(dh => (
                    

                    <b className="card-text text-primary">{" " + dh.startDate.replace('Add New','')+ " "}</b>
                    
               
         
                ))}   
              
                
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
              
                    <td ColSpan="2"> 
                    

                   
                    <Select
                                       id="startDate"
                                       valueKey="startDate"
                                       labelKey="startDate" 
                                        className="form-control"
                                        options={this.state.dates}
                                        onChange={this.placementPeriodChange}
                                        value={this.state.selectedPlacementPeriod}
                                        placeholder="Selected assignment will be replaced"
                                        className="form-group form-group-select"
                                    />
                                     <b className="card-text text-danger">{this.state.validAssign }</b>
                                     <b className="card-text text-danger">{this.state.validAssignLength }</b>
                                 
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
                        defaultValue={mplresult[0].positionStartDate}
                        value={this.state.selectedAssignStart}
                        timeFormat={false}
                        dateFormat="YYYY-MM-DD"
                        closeOnSelect
                        utc={true}
                        inputProps={{ placeholder: 'YYYY-MM-DD' }}
                      />
                  <b className="card-text text-danger">{this.state.validDate }</b>
                    </td>
                  
                    <td>
                
                      <Datetime
                        className={'custom-datepicker'}
                        onChange={this.assignEndChange}
                        defaultValue={mplresult[0].positionEndDate}
                        value={this.state.selectedAssignEnd}
                        timeFormat={false}
                        dateFormat="YYYY-MM-DD"
                        closeOnSelect
                        utc={true}
                        inputProps={{ placeholder: 'YYYY-MM-DD' }}
                      />
                             <b className="card-text text-danger">{this.state.validDate }</b>
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
                                               {mplresult[0].positionStartDate}

    <b className="card-text text-danger">{this.state.validDate2 }</b>
                                                 </td> 
                            
                                          
         
                                                
                                                <td>
                                                {mplresult[0].positionEndDate}
                                             <b className="card-text text-danger">{this.state.validDate2 }</b>      
                                                
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
            onClick={() => this.createAssign(mplresult[0].positionStartDate,mplresult[0].positionEndDate)}
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