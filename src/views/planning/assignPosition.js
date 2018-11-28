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
            selectedResignType: null,
            selectedAbsentStart:null,
            selectedAbsentEnd:null
        };
    }

    toggle = () => {
        this.setState({
            selectedResignType: null,
            selectedAbsentStart:null,
            selectedAbsentEnd:null,
            dateModified: null

        })

        this.props.toggle();
    }




    resignTypeOnChange = resignType => {
        const selectedResignType = resignType ;

        //   var currentdate = new Date(); 
        //   var newdatemodified  = currentdate.getFullYear() + "-"
        // + (currentdate.getMonth()+1)  + "-" 
        //  + currentdate.getDate() ; 
      
        this.setState({
            selectedResignType,
            //dateModified:newdatemodified
       
        })
    }

    absentStartChange = absentStart => {
      const selectedAbsentStart = absentStart ;
   debugger;
      this.setState({
        selectedAbsentStart
     
      })
    
  }

  absentEndChange = absentEnd => {
    const selectedAbsentEnd = absentEnd ;
 
    this.setState({
      selectedAbsentEnd
   
    })
  
}
componentDidMount() {
  //this.props.filterActions.handleFilter() //when page loads
  //this.props.allRolesActions.getAllRoles()
  
}

    createAbscense = (val) => {
       
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
             absentReason: this.state.selectedResignType.id,
            startDate: this.state.selectedAbsentStart,
             endDate: this.state.selectedAbsentEnd
        }

       this.props.createAbscense(model);
    }
    


    render() {
  return (
    <div>
      <Modal isOpen={this.props.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>
         Assign Staff To Position{' '}
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
                                        onChange={this.resignTypeOnChange}
                                        value={this.state.selectedResignType}
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
                        onChange={this.absentStartChange}
                        value={this.state.selectedAbsentStart}
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
                        onChange={this.absentEndChange}
                        value={this.state.selectedAbsentEnd}
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
            onClick={() => this.createAbscense()}
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
