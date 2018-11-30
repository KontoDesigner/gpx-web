import React, { Component } from 'react'
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
    constructor() {
        super();

        this.state = {
             dateModified: null,
             selectedCandidate: null,
            selectedAssignStart:null,
            selectedAssignEnd:null,
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
                  id: 'Placement 1',
                  name: 'Placement 1'
              },
              {
                  id: 'Placement 2',
                  name: 'Placement 2'
              },
              {
                  id: 'Placement 3',
                  name: 'Placement 3'
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
            dateModified: null

        })

        this.props.toggle();
    }




    candidateOnChange = candidate => {
        const selectedCandidate = candidate ;

        //   var currentdate = new Date(); 
        //   var newdatemodified  = currentdate.getFullYear() + "-"
        // + (currentdate.getMonth()+1)  + "-" 
        //  + currentdate.getDate() ; 
      
        this.setState({
          selectedCandidate
            //dateModified:newdatemodified
       
        })
    }

    assignStartChange = assignStart => {
      const selectedAssignStart = assignStart ;
 
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
  const selectedPlacementPeriod = placementPeriods ;

  this.setState({
    selectedPlacementPeriod
 
  })
  debugger;
}

componentDidMount() {
  //this.props.filterActions.handleFilter() //when page loads
  //this.props.allRolesActions.getAllRoles()
  
}

    createAssign = (val) => {
       
        this.toggle();

       // const destination = this.props.availablePositions.filter(ap => ap.destination === this.state.selectedDestination)[0];
       // const position = destination.jobTitles.filter(ap => ap.mplid === mplid)[0];
       
       var currentdate = new Date(); 
       var newdatemodified  = currentdate.getFullYear() + "-"
     + (currentdate.getMonth()+1)  + "-" 
      + currentdate.getDate() ; 

        let model = {
            // staffID: position.mplid,
            dateModified: newdatemodified ,
             candidate: this.state.selectedCandidate.staffID,
            startDate: this.state.selectedAssignStart,
             endDate: this.state.selectedAssignEnd,
             selectedTitle:this.props.selectedTitle[0]
        }
debugger;
       this.props.createAssign(model);
    }
    


    render() {
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
                                       id="candidates"
                                       valueKey="firstNameLastNameStatus"
                                       labelKey="firstNameLastNameStatus" 
                                        className="form-control"
                                        options={this.props.candidate}
                                        onChange={this.candidateOnChange}
                                        value={this.state.selectedCandidate}
                                        placeholder="Select"
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
                    <th colSpan="2">Act on </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2">
                  
                    <Select
                                       id="placementPeriod"
                                       valueKey="id"
                                       labelKey="name" 
                                        className="form-control"
                                        options={this.state.placementPeriods}
                                        onChange={this.placementPeriodChange}
                                        value={this.state.selectedPlacementPeriod}
                                        placeholder="Select"
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
                      id="absentStart"
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
