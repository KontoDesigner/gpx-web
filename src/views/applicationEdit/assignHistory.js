import React from 'react'
import Table from '../../components/table.js'
import TextInput from '../../components/textInput'
import moment from "moment";

const columns = [
    // { label: 'Job Title', dataKey: 'jobTitle' },
    // {
    //     label: 'Job Title',
    //     dataKey: 'jobTitle',
    //     type: 'icon',
    //     icon: function(val) {
    //         if (val === 'Airport Service Team Leader') {
    //             return 'fa fa-share'
    //         }
    //     }
    // },
    { label: 'History Date', dataKey: 'historyDate' , type: 'datetime', format: 'YYYY-MM-DD' },
    { label: 'Action', dataKey: 'historyAction' },
    { label: 'Season', dataKey: 'season' },
    { label: 'JobTitle', dataKey: 'jobTitle' },
    { label: 'Comments', dataKey: 'historyContent' },
    { label: 'Remarks', dataKey: 'historyContent2' },
    //{ label: 'Date Modified', dataKey: 'dateModified', type: 'datetime', format: 'YYYY-MM-DD' },
   // { label: '', dataKey: ''},
     //{ label: '', dataKey: '' },
    
]
 
const AssignHistory = props => {
    return (
        <Table
            list={props.workHistory}
            columns={columns}
            contextMenuItems={[]}
            checkbox={false}
            identifier={'Id'}
            edit={props.edit}
            updateSelectedState={props.handleSelectedStaff}
            selected={props.selectedStaff}
        />
    );
};

export default AssignHistory







// import React from 'react';
// import { Card, CardBody, CardHeader, Col,Button } from 'reactstrap'
// import TextInput from '../../components/textInput'
// import moment from "moment";

// const AssignHistory = (props) => {
   
//     return (


//             <CardBody className="no-padding-bottom">
         
//                 <div className="form-row">
 
//                           {/* <Col sm="12" md="6" lg="1" xl="1" className="form-group">
//                       Choice
//                     </Col> */}
//                     <Col sm="12" md="6" lg="2" xl="2" className="form-group">
//                       Hist.Date
//                     </Col>
//                     {/* <Col sm="12" md="6" lg="2" xl="2" className="form-group">
//                      Resort
//                     </Col> */}
//                     <Col sm="12" md="6" lg="2" xl="2" className="form-group">
//                      Hist.Who
//                     </Col>
//                      <Col sm="12" md="6" lg="6" xl="6" className="form-group">
//                   Hist.Content
//                     </Col> 
//                     <Col sm="12" md="3" lg="2" xl="2" className="form-group">
//                    <b>Date Modified </b>
//                     </Col>
//                     </div>

//                     {props.workHistory.map(dh => (
//                     <div className="form-row">
//                     {/* <Col sm="12" md="6" lg="1" xl="1" className="form-group">
                      
//                     </Col> */}
//                            <Col sm="12" md="6" lg="2" xl="2" className="form-group">
//                            {dh.historyContent}   

//                     </Col>
//                     {/* <Col sm="12" md="2" lg="2" xl="2" className="form-group">
//                         <TextInput name="lastName"  placeholder="-Resort-" disabled value={props.application.firstDest}  />
//                     </Col> */}
//                     <Col sm="12" md="6" lg="2" xl="2" className="form-group">
//                      {dh.historyContent}   
//                     </Col>
//                     {/* <Col sm="12" md="6" lg="7" xl="7" className="form-group">
//                     <TextInput
//                        id="remarksChoice1"
//                 name="remarksChoice1" 
//                 value={props.application.remarksChoice1}
//                 onChange={props.handleInputField}
//               /> 
//                     </Col> */}
//                     </div>
//                     ))}  



              
//             </CardBody>
    
//     );
// };

// export default AssignHistory