import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col,Button ,Row} from 'reactstrap'
import TextInput from '../../components/textInput'
import RemoveRole from './removeRole'
import moment from "moment";

class Assignment extends Component {
    constructor(props) {
        super(props);
   
 
    
      
    }
 

    render() {
     
        if (!this.props.positionAssign)
        {
            return null
        }
     
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
<Col sm="12" md="6" lg="2" xl="2" className="form-group" > 
<Button
           
             size="sm"
             onClick={() => { 
                 this.props.toggleRemoveRoleModal() 
             }}
             color="danger"
              style={{ marginRight: '2px', marginTop: '1px',  marginBottom: '1px' }}
             >
             
             Remove Assignment
         </Button>
</Col>


</div>
        return (

       
            
            <RemoveRole
            modal={this.props.removeRoleModal}
            application={this.props.application}
            toggleRemoveRoleModal={this.props.toggleRemoveRoleModal}
             availablePositions={this.props.nowAvailablePositions}
             removeRole={this.props.removeRole} 
            //positionAssign={this.this.props.positionAssign}
         
           positionAssign={this.props.positionAssign}
         //    positionAssign={this.this.props.nextPositionAssign}
         //    positionAssign={this.this.props.followingPositionAssign}
            // season={this.this.props.season}
         />
        )
    }
}

export default Assignment 