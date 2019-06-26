import React from 'react';
import { Card, CardBody, CardHeader, Col,Button } from 'reactstrap'
import TextInput from '../../components/textInput'
//import RemoveRole from './removeRole'
import moment from "moment";

const Assignment = (props) => {
    if (!props.positionAssign)
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
{props.positionAssign.Region} {props.positionAssign.HeadOf}
</Col>

{/* <Col sm="12" md="6" lg="2" xl="2" className="form-group">
Resort
</Col> */}
<Col sm="12" md="6" lg="2" xl="2" className="form-group">
{props.positionAssign.Destination} {props.positionAssign.JobFamily}
</Col>
<Col sm="12" md="6" lg="2" xl="2" className="form-group">
{props.positionAssign.JobTitle} {props.positionAssign.MPLID}
</Col>
<Col sm="12" md="6" lg="2" xl="2" className="form-group">

{props.positionAssign.StaffStartDate? moment(props.positionAssign.StaffStartDate).format("YYYY-MM-DD"):""}
</Col>
<Col sm="12" md="6" lg="1" xl="1" className="form-group">
{props.positionAssign.StaffEndDate? moment(props.positionAssign.StaffEndDate).format("YYYY-MM-DD"):""}
</Col>

<Col sm="12" md="6" lg="1" xl="1" className="form-group">
{props.positionAssign.Accept}
</Col>
<Col sm="12" md="6" lg="2" xl="2" className="form-group" > 
<Button
           
             size="sm"
             onClick={() => { 
                 props.toggleRemoveRoleModal(props.positionAssign.MPLID,props.positionAssign.StaffStartDate) 
             }}
             color="danger"
              style={{ marginRight: '2px', marginTop: '1px',  marginBottom: '1px' }}
             >
             
             Remove Assignment
         </Button>
</Col>


</div>
// </CardBody>      
// </Card>   
         
    );
};

export default Assignment