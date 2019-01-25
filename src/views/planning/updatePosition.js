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


class UpdatePosition extends Component {
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
  
}

componentDidMount() {
  //this.props.filterActions.handleFilter() //when page loads
  //this.props.allRolesActions.getAllRoles()
  
}

    createUpdate = (val) => {
       
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
            //  candidate: this.state.selectedCandidate.staffID,
            startDate: this.state.selectedAssignStart,
             endDate: this.state.selectedAssignEnd,
             selectedTitle:this.props.selectedTitle[0]
        }

       this.props.createUpdate(model);
    }
    


    render() {
  return (
    <div>
      <Modal isOpen={this.props.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>
         Update Position - {this.props.selectedTitle}
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <Table striped bordered responsive>
                  <thead>
                  <tr>
                    <th>StartDate</th> <th>EndDate</th>{' '}
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
                <thead>
                  <tr>
                    <th>JobTitle</th><th>Shared Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                  
                    <Select 
                                       id="candidates"
                                       valueKey="firstNameLastNameStatus"
                                       labelKey="firstNameLastNameStatus" 
                                        className="form-control"
                                        options={this.props.candidate}
                                        onChange={this.candidateOnChange}
                                        value={this.state.selectedCandidate}
                                        placeholder="Select"
                                        className="form-group form-group-select"
                                    />

      
                    </td>
                 
                 
                    <td>
                  
                    <Select
                                       id="placementPeriod"
                                       valueKey="id"
                                       labelKey="name" 
                                        className="form-control"
                                        options={this.state.placementPeriods}
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
                    <th>MPL SM Origin</th><th>MPL Position Type</th>
                  </tr>
                </thead>
                <tbody>
                                    <tr>
                    <td>
                  
                    <Select 
                                       id="candidates"
                                       valueKey="firstNameLastNameStatus"
                                       labelKey="firstNameLastNameStatus" 
                                        className="form-control"
                                        options={this.props.candidate}
                                        onChange={this.candidateOnChange}
                                        value={this.state.selectedCandidate}
                                        placeholder="Select"
                                        className="form-group form-group-select"
                                    />

      
                    </td>
                 
                 
                    <td>
                  
                    <Select
                                       id="placementPeriod"
                                       valueKey="id"
                                       labelKey="name" 
                                        className="form-control"
                                        options={this.state.placementPeriods}
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
                  <th>Staff SM Origin</th><th>Staff Position Type</th>
                    
                  </tr>
                </thead>
                <tbody>
                                    <tr>
                    <td>
                  
                    <Select 
                                       id="candidates"
                                       valueKey="firstNameLastNameStatus"
                                       labelKey="firstNameLastNameStatus" 
                                        className="form-control"
                                        options={this.props.candidate}
                                        onChange={this.candidateOnChange}
                                        value={this.state.selectedCandidate}
                                        placeholder="Select"
                                        className="form-group form-group-select"
                                    />

      
                    </td>
                 
                 
                    <td>
                  
                    <Select
                                       id="placementPeriod"
                                       valueKey="id"
                                       labelKey="name" 
                                        className="form-control"
                                        options={this.state.placementPeriods}
                                        onChange={this.placementPeriodChange}
                                        value={this.state.selectedPlacementPeriod}
                                        placeholder="Select"
                                        className="form-group form-group-select"
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
            onClick={() => this.createUpdate()}
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

export default UpdatePosition
