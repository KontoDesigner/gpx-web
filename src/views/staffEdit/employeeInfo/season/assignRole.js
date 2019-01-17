import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Table } from 'reactstrap'
import Select from 'react-select'
import Datetime from 'react-datetime'
import moment from "moment";

class AssignRole extends Component {
    constructor() {
        super();

        this.state = {
        
            jobTitles: [],
            selectedDestination: null,
            selectedJobTitle: null,
            selectedStartDate: null,
            selectedEndDate: null,
            positionStartDate: null,
            positionEndDate: null,
       
            validDate:'',
            validDate2:''
           //errorMessage:''
        };
    }

    destinationOnChange = destination => {
        debugger;
        const selectedDestination = destination != null ? destination.destination : null

        const dest = this.props.availablePositions.filter(ap => ap.destination === selectedDestination)[0];
debugger;
        let jobTitles = [];

        if (dest !== undefined) {
          
            jobTitles = dest.jobTitles ;
            debugger;
        }

        this.setState({
            selectedDestination,
            selectedJobTitle: null,
            // selectedStartDate: null,
            // selectedEndDate: null,
            positionStartDate: null,
            positionEndDate: null,
            jobTitles
        })
        debugger;
    }

    jobTitleOnChange = jobTitle => {
        debugger;
        const selectedJobTitle = jobTitle != null ? jobTitle.mplid : null;
        const positionStartDate = jobTitle != null ? jobTitle.positionStartDate: null;
        const positionEndDate = jobTitle != null ? jobTitle.positionEndDate: null
        this.setState({
            selectedJobTitle,
            positionStartDate ,
            positionEndDate
        })
    }

    toggle = () => {
        this.setState({
            selectedDestination: null,
            selectedJobTitle: null,
            selectedStartDate: null,
            selectedEndDate: null,
            positionStartDate: null,
            positionEndDate: null,
            validDate2:'',
            validDate:''
            //errorMessage:''

        })

        this.props.toggle();
    }



    assignStartChange = assignStart => {
        debugger;
        const selectedStartDate = assignStart ;
     debugger;
        this.setState({
            selectedStartDate
       
        })
      
    }
  
    assignEndChange = assignEnd => {
      const selectedEndDate = assignEnd ;
   
      this.setState({
        selectedEndDate
     
      })
    
  }


 
    assignRole = (mplid) => {
   

        const destination = this.props.availablePositions.filter(ap => ap.destination === this.state.selectedDestination)[0];
        
        const position = destination.jobTitles.filter(ap => ap.mplid === mplid)[0];
       
        var currentdate = new Date()

        var newdatemodified=moment(currentdate).format("YYYY-MM-DD HH:mm:ss")

        const model = {
            mplid: position.mplid,
            season: this.props.season.name,
            dateModified: newdatemodified ,
            // startDate: this.props.season.start,
            // endDate: this.props.season.end,
            startDate: this.state.selectedStartDate,
            endDate: this.state.selectedEndDate
        }
    
        var assignCompareStart = new Date(this.state.selectedStartDate);
        var assignCompareEnd  = new Date(this.state.selectedEndDate);
        var positionCompareStart = new Date(this.state.positionStartDate);
        var positionCompareEnd  = new Date(this.state.positionEndDate);

        var checkok= (assignCompareStart.getTime() >= positionCompareStart.getTime() && assignCompareEnd.getTime() <= positionCompareEnd.getTime());
        var checkok2= (assignCompareStart.getTime() < assignCompareEnd.getTime());
        
        if(!checkok2){
            this.setState({
                validDate2:'Check assign dates',
                validDate:''

              })
              return false;

        } else 
        
        {
            if(!checkok){
                debugger;
                this.setState({
                    validDate:'Assign dates does not match position dates',
                    validDate2:''
    
                  })
                  debugger;
                  return false;
    
            }
            
        }
       
      


        this.toggle();
        debugger;
        this.props.assignRole(model);

         

   
        
     }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>Assign Position  {this.state.selectedJobTitle}</ModalHeader>

                    <ModalBody className="no-padding-bottom">
                        <Row>
                            <Col sm="12" md="6" lg="6" xl="6">
                                <div className="form-group form-group-select">
                                    <label htmlFor="destination">Destination</label>

                                    <Select
                                        id="destination"
                                        valueKey="destination"
                                        labelKey="destination"
                                        className="form-control"
                                        options={this.props.availablePositions}
                                        onChange={this.destinationOnChange}
                                        value={this.state.selectedDestination}
                                        placeholder="Destination"
                                    />
                                </div>
                            </Col>

                            <Col sm="12" md="6" lg="6" xl="6">
                                <div className="form-group form-group-select">
                                    <label htmlFor="jobTitle">Position (MPLID - MPLSourceMarket - MPL_DL_Required)</label>

                                    <Select
                                        id="jobTitle"
                                        valueKey="mplid"
                                        labelKey="jobTitle"
                                        className="form-control"
                                        options={this.state.jobTitles}
                                        onChange={this.jobTitleOnChange}
                                        value={this.state.selectedJobTitle}
                                        disabled={this.state.selectedDestination === null}
                                        placeholder="Position"
                                    />
                                </div>
                            </Col>
                        </Row>
                      
                        {this.state.selectedJobTitle !== null ?
                            <Row>
                                <Col>
                                    <Table striped bordered responsive>
                                        <thead>
                                            <tr>
                                                <th>Assign StartDate</th> <th> Assign EndDate</th>
                                      
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>

                                            <td>
                                            <Datetime  className={'custom-datepicker'}
                                        id="assignStart"
                           onChange={this.assignStartChange}
                           value={this.state.selectedStartDate}
                            timeFormat={false}
                            dateFormat="YYYY-MM-DD"
                            closeOnSelect
                            utc={true}
                            inputProps={{ placeholder: 'YYYY-MM-DD' }} />
  <b className="card-text text-danger">{this.state.validDate2 }</b>
                                             </td> 
                                             <td>
                                             <Datetime  className={'custom-datepicker'}
                                           
                                              onChange={this.assignEndChange}
                                              value={this.state.selectedEndDate}
                            timeFormat={false}
                            dateFormat="YYYY-MM-DD"
                            closeOnSelect
                            utc={true}
                            inputProps={{ placeholder: 'YYYY-MM-DD' }} />  
                              <b className="card-text text-danger">{this.state.validDate2 }</b>
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
                                            <td>{this.state.positionStartDate }
                                            <b className="card-text text-danger">{this.state.validDate }</b>
                                             </td> 
                                       
                                             <td>{this.state.positionEndDate}
                                             <b className="card-text text-danger">{this.state.validDate }</b>
                                                </td>
                                        
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            : ''}

    
    {/* {this.state.errormessage !== '' ?  
                
                
       'djdjdjdjdjdjjd'
                
                : 
                ''} */}

                    </ModalBody>

                    <ModalFooter>
                        <Button disabled={this.state.selectedJobTitle === null} onClick={() => this.assignRole(this.state.selectedJobTitle)} color="success">Assign</Button>{' '}
                        <Button color="danger" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default AssignRole;