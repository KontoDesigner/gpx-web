import React from 'react';
import  { Component } from 'react'
import { Card, CardBody, CardHeader, Col,Button } from 'reactstrap'
import TextInput from '../../components/textInput'
import EditPosition from './editPosition'
import moment from "moment";

class Assignment extends Component {
    constructor() {
        super()

        this.state = {
        
            editPositionModal:false,
            mplid:null,
            staffStartDate:null
        }
    }

    toggleEditPositionModal = (positionAssignId,startDate) => {
        
        this.setState({
            mplid: positionAssignId,
            staffStartDate:startDate,
            editPositionModal: !this.state.editPositionModal,
        
        })
        debugger;
    }


    render() {

//const Assignment = () => {
    if (!this.props.positionAssign)
    {
        return null
    }
   

    return (

//         <Card>

//   <CardHeader className="card-header-work-assign"> Current Assignments     
// </CardHeader>
//             <CardBody className="no-padding-bottom">
<div className="form-row">
{/* <Col sm="12" md="6" lg="1" xl="1" className="form-group">

</Col> */}
 <Col sm="12" md="6" lg="2" xl="2" className="form-group">
{this.props.positionAssign.Region} {this.props.positionAssign.HeadOf}
</Col>

{/* <Col sm="12" md="6" lg="2" xl="2" className="form-group">
Resort
</Col> */}
<Col sm="12" md="6" lg="2" xl="2" className="form-group">
{this.props.positionAssign.Destination} {this.props.positionAssign.JobFamily}
</Col>
<Col sm="12" md="6" lg="2" xl="2" className="form-group">
{this.props.positionAssign.JobTitle} {this.props.positionAssign.MPLID}
</Col>
<Col sm="12" md="6" lg="2" xl="2" className="form-group">

{this.props.positionAssign.StaffStartDate? moment(this.props.positionAssign.StaffStartDate).format("YYYY-MM-DD"):""}
</Col>
<Col sm="12" md="6" lg="1" xl="1" className="form-group">
{this.props.positionAssign.StaffEndDate? moment(this.props.positionAssign.StaffEndDate).format("YYYY-MM-DD"):""}
</Col>

<Col sm="12" md="6" lg="1" xl="1" className="form-group">
{this.props.positionAssign.Accept}
</Col>

{/* 
<Col sm="12" md="6" lg="1" xl="1" className="form-group">
{props.positionAssign.AcceptDeclineReason}
</Col>
<Col sm="12" md="6" lg="1" xl="1" className="form-group">
{props.positionAssign.AcceptDeclineComment}
</Col> */}

<EditPosition
        modal={this.state.editPositionModal}
        application={this.props.application}
        toggle={this.toggleEditPositionModal}
        availablePositions={this.props.nowAvailablePositions}
         editPosition={this.props.editPosition}
        //  staffStartDate={this.state.staffStartDate}
        //  mplid={this.state.mplid}
      

      positionAssign={this.props.positionAssign}
 
    />  



<Col sm="12" md="6" lg="1" xl="1" className="form-group" > 
<Button
           
             size="sm"
             onClick={() => { 
                this.props.toggleRemoveRoleModal(this.props.positionAssign.MPLID,this.props.positionAssign.StaffStartDate) 
             }}
             color="danger"
              style={{ marginRight: '2px', marginTop: '1px',  marginBottom: '1px' }}
             >
             
             Remove Assign.
         </Button>
</Col>
 <Col sm="12" md="6" lg="1" xl="1" className="form-group" > 
<Button
           
             size="sm"
             onClick={() => { 
                 this.toggleEditPositionModal(this.props.positionAssign.MPLID,this.props.positionAssign.StaffStartDate) 
             }}
             color="info"
              style={{ marginRight: '2px', marginTop: '1px',  marginBottom: '1px' }}
             >
             
             Edit Assign.
         </Button>
</Col> 

</div>
// </CardBody>      
// </Card>   
         
)
       // }
    }
}
export default Assignment