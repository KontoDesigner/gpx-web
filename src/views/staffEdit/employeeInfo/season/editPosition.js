import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Table } from 'reactstrap'
import Select from 'react-select'
import Datetime from 'react-datetime'
import moment from "moment";

class EditPosition extends Component {
    constructor() {
        super();




        this.state = {
        
            jobTitles: [],
            selectedDestination: null,
            selectedJobTitle: null,
            selectedStartDate: null,
            selectedEndDate: null,
            selectedConfirmedDate: null,
            selectedConfirmedDepDate: null,
            positionStartDate: null,
            positionEndDate: null,
            confirmStart:false,
            confirmEnd:false,
            validDate:'',
            validDate2:'',
            validDate3:''
         
           //errorMessage:''
        };
    }
  
    
       componentDidMount=async()=>  {

    
     this.setState({
        selectedDestination:this.props.positionAssign.Destination, 
        selectedJobTitle: { jobTitle: this.props.positionAssign.JobTitle, jobTitle: this.props.positionAssign.JobTitle }
        
    })
    
 
          }



    destinationOnChange = destination => {
        
        const selectedDestination = destination != null ? destination.destination : null

        const dest = this.props.availablePositions.filter(ap => ap.destination === selectedDestination)[0];

        let jobTitles = [];

        if (dest !== undefined) {
          
            jobTitles = dest.jobTitles ;
            
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
        
    }

    jobTitleOnChange = jobTitle => {
        
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
            selectedConfirmedDate: null,
            selectedConfirmedDepDate: null,
            positionStartDate: null,
            positionEndDate: null,
            validDate2:'',
            validDate:'',
            validDate3:'',
            confirmStart:false,
            confirmEnd:false
            //errorMessage:''

        })

       this.props.toggle();
    }

    confirmedStartChange = confirmStart => {
        
        const selectedConfirmedDate = confirmStart?confirmStart:null ;
     
        this.setState({
            selectedConfirmedDate,
            confirmStart:true,
            validDate3:''
           
            
        })
      
    }

    confirmedEndChange = confirmEnd => {
  
    

        const selectedConfirmedDepDate = confirmEnd?confirmEnd:null ;
  

        this.setState({
            selectedConfirmedDepDate,
            confirmEnd:true,
            validDate3:''
           
            
        })
    
    }
    assignStartChange = assignStart => {
        
        const selectedStartDate = assignStart ;
     
        this.setState({
            selectedStartDate,
            validDate2:''            
            
        })
      
    }
    assignEndChange = assignEnd => {
      const selectedEndDate = assignEnd ;
   
      this.setState({
        selectedEndDate,
        validDate2:''
      
      })
    
  }


 
    editPosition = (mplid,val,val2,val3,val4) => {
   

       // const destination = this.props.availablePositions.filter(ap => ap.destination === this.state.selectedDestination)[0];
        
        const position = this.props.positionAssign.MPLID
        const positionAssignId = this.props.positionAssign.PositionAssignId

       

        if(this.state.confirmStart) {
            
            var editconfirmDate=this.state.selectedConfirmedDate
        } else{

          var editconfirmDate=val3
        }
     
       
        if(this.state.confirmEnd) {
            
            var editconfirmDepDate=this.state.selectedConfirmedDepDate
        } else{

          var  editconfirmDepDate=val4
        }
        
       
        var currentdate = new Date()

        var newdatemodified=moment(currentdate).format("YYYY-MM-DD HH:mm:ss")

        const model = {
            mplid: mplid,
            positionAssignId: positionAssignId,
            season: this.props.season.name,
            dateModified: newdatemodified ,
            startDate: this.state.selectedStartDate
            ? this.state.selectedStartDate
            : val,
          endDate: this.state.selectedEndDate
            ? this.state.selectedEndDate
            : val2,
            confirmedDate: editconfirmDate,
            confirmedDepDate: editconfirmDepDate
        
        }

        var assignCompareStart = new Date(model.startDate).setHours(0, 0, 0, 0);
        var assignCompareEnd  = new Date(model.endDate).setHours(0, 0, 0, 0);
        var positionCompareStart = new Date(this.props.positionAssign.PositionStartDate)
        var positionCompareEnd = new Date(this.props.positionAssign.PositionEndDate)
        var confirmedCompareStart = new Date(model.confirmedDate).setHours(0, 0, 0, 0);
        var confirmedCompareEnd = new Date(model.confirmedDateDep).setHours(0, 0, 0, 0);
        
        var checkok= (assignCompareStart >= positionCompareStart.getTime() && assignCompareEnd <= positionCompareEnd.getTime());
        var checkok2= (assignCompareStart < assignCompareEnd);
      //  var checkok3=(confirmedCompareStart >= confirmedCompareEnd);
        
        if(!checkok2){
            this.setState({
                validDate2:'Check assign dates',
                validDate:''

              })
              return false;

        } else 
        
        {
            if(!checkok){
                
                this.setState({
                    validDate:'Assign dates does not match position dates',
                    validDate2:''
    
                  })
                  
                  return false;
    
            }
            //if(!checkok3){
                
               // this.setState({
                 //   validDate3:'Confirm dates does not match',
              
    
                //  })
                  
                  //return false;
    
            //}
        }
       
      


        this.toggle();
        
        this.props.editPosition(model);
 
         

   
        
     }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>Edit Assignment  {this.props.selectedJobTitle}</ModalHeader>

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
                                  
                                        placeholder="Position"
                                    />
                                </div>
                            </Col>
                        </Row> 
                      
                         {/* {this.state.selectedJobTitle !== null ?  */}
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
                           defaultValue={moment(this.props.positionAssign.StaffStartDate).format('YYYY-MM-DD')}
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
                                              defaultValue={   moment(this.props.positionAssign.StaffEndDate).format('YYYY-MM-DD')}
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
                                                <th>Confirmed Staff Arrival</th> <th> Confirmed Staff Departure</th>
                                     
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                         
                                            <td>
                                            <Datetime  className={'custom-datepicker'}
                                        id="confirmStart"
                           onChange={this.confirmedStartChange}
                           defaultValue=  {this.props.positionAssign.ConfirmedDate ? moment(this.props.positionAssign.ConfirmedDate).format('YYYY-MM-DD'):''}
                           value={this.state.selectedConfirmedDate}
                            timeFormat={false}
                            dateFormat="YYYY-MM-DD"
                            closeOnSelect
                            utc={true}
                            inputProps={{ placeholder: 'YYYY-MM-DD' }} />
  <b className="card-text text-danger">{this.state.validDate3 }</b>
                                             </td> 
                                             <td>
                                             <Datetime  className={'custom-datepicker'}
                                              id="confirmEnd"
                                              onChange={this.confirmedEndChange}
                                            defaultValue= {this.props.positionAssign.ConfirmedDepDate ? moment(this.props.positionAssign.ConfirmedDepDate).format('YYYY-MM-DD'):''}
                                              value={this.state.selectedConfirmedDepDate}
                            timeFormat={false}
                            dateFormat="YYYY-MM-DD"
                            closeOnSelect
                            utc={true}
                            inputProps={{ placeholder: 'YYYY-MM-DD' }} />  
                  <b className="card-text text-danger">{this.state.validDate3 }</b>
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
                                            <td>    {moment(this.props.positionAssign.PositionStartDate).format('YYYY-MM-DD') }
                                            <b className="card-text text-danger">{this.state.validDate }</b>
                                             </td> 
                                       
                                             <td>    {moment(this.props.positionAssign.PositionEndDate).format('YYYY-MM-DD') }
                                             <b className="card-text text-danger">{this.state.validDate }</b>
                                                </td>
                                        
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            {/* : ''}  */}

    
    {/* {this.state.errormessage !== '' ?  
                
                
       'djdjdjdjdjdjjd'
                
                : 
                ''} */}

                    </ModalBody>

                    <ModalFooter>
                        <Button disabled={this.props.positionAssign.StaffStartDate === null} onClick={() => this.editPosition(this.props.positionAssign.MPLID , moment(this.props.positionAssign.StaffStartDate).format('YYYY-MM-DD'),
                  moment(this.props.positionAssign.StaffEndDate).format('YYYY-MM-DD'), this.props.positionAssign.ConfirmedDate, this.props.positionAssign.ConfirmedDepDate, this.state.selectedJobTitle)} color="success">Assign</Button>{' '}
                        <Button color="danger" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default EditPosition;