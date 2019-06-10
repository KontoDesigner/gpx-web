import React from 'react';
import { Card, CardBody, CardHeader, Col,Button } from 'reactstrap'
import TextInput from '../../components/textInput'
import moment from "moment";

const AssignmentHeader = (props) => {
   
    return (
//         <Card>

//   <CardHeader className="card-header-work-assign"> Current Assignments     
// </CardHeader>
//             <CardBody className="no-padding-bottom">
<div className="form-row">
 
<Col sm="12" md="6" lg="1" xl="1" className="form-group">
Assigned To
</Col>
<Col sm="12" md="6" lg="2" xl="2" className="form-group">
Region/Head Of 
</Col>

<Col sm="12" md="6" lg="2" xl="2" className="form-group">
Destination/Job Family
</Col>
<Col sm="12" md="6" lg="2" xl="2" className="form-group">
Job Title/MPLID
</Col>
<Col sm="12" md="6" lg="2" xl="2" className="form-group">
Planned Staff Arrival
</Col>
<Col sm="12" md="6" lg="2" xl="2" className="form-group">
Planned Staff Departure
</Col>
</div>
// </CardBody>      
// </Card>   
         
    );
};

export default AssignmentHeader