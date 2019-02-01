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
import moment from 'moment'
class MakePositionVacant extends Component {
  //const ResignStaff = props => {
  constructor(props) {
    super(props)
this.dates=[]
    debugger
    this.state = {
      //dates:[],
      selectedCandidate: null,
      placementDynamicPeriods: [],
    
    }
  }

  createVacant = val => {
    this.toggle()

    var currentdate = new Date()

   var newdatemodified=moment(currentdate).format("YYYY-MM-DD HH:mm:ss")


    let model = {
      dateModified: newdatemodified,
      mplid: this.props.selectedMplID,
    
      oldDate: newdatemodified
    }

    this.props.createVacant(model)
 
  }



  placementPeriodChange = placementPeriods => {
    debugger

    const selectedPlacementPeriod = placementPeriods.startDate

    debugger

    this.setState({
      selectedPlacementPeriod
      //selectedAssignStart,
      //selectedAssignEnd
    })
    debugger
  }

  candidateOnChange = async candidate => {
    debugger
    // const selectedCandidate = candidate ;

    const selectedCandidate = candidate != null ? candidate : null

    // this.options = {value: ''};

    this.setState({
      selectedCandidate,
      dates: []
    })

    let dates = this.props.candidate
      ? this.props.candidate

          .filter(x => x.staffID === selectedCandidate.staffID)
          .map(h => ({
            startDate:
              moment(h.startDate).format('YYYY-MM-DD') +
              ' - ' +
              moment(h.endDate).format('YYYY-MM-DD'),
            startDate:
              moment(h.startDate).format('YYYY-MM-DD') +
              ' - ' +
              moment(h.endDate).format('YYYY-MM-DD')
          }))
      : []

    // 
    this.setState({
      dates
    })

    debugger
  }

  toggle = () => {
    //this.setState({
    //selectedResignAppDate:null,

    //})

    this.props.toggle()
  }

  render() {
   
    const mplid = this.props.selectedMplID  ? this.props.selectedMplID.toString() : []
    

    const options = this.props.candidate 
      .filter(x => x.mplid === mplid)
       .map(h => ({
         startDate:
           moment(h.startDate).format('YYYY-MM-DD') +
           ' - ' +
           moment(h.endDate).format('YYYY-MM-DD'),
         startDate:
           moment(h.startDate).format('YYYY-MM-DD') +
         ' - ' +
           moment(h.endDate).format('YYYY-MM-DD')
       }))
      
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Make Position Vacant -  {this.props.selectedMplID}  
          </ModalHeader>
          <ModalBody>
            { <Alert color="danger">
                        Are you sure you want to make position vacant? 
                    </Alert> }

            {/* <Row>
              <Col>
                <Table striped bordered responsive> */}
                  {/* <thead>
                  <tr>
                    <th colSpan="2">Select Staff Assignments</th>
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
                  {/* </td>
                  </tr>
                  </tbody>  */}
                  {/* <thead>
                    <tr>
                      <th colSpan="2">
                        Assignments dates{' '}
                        <i className="card-text text-danger">
                          {' '}
                          (Selected assignment be will made vacant)
                        </i>
                      </th>
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
                          options={options}
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
            </Row> */}
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={() => this.createVacant()}>
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

export default MakePositionVacant
