import React from 'react';
import { Card, CardBody, CardHeader, Col,Button } from 'reactstrap'
import TextInput from '../../components/textInput'
import moment from "moment";

const OverviewInfo = (props) => {
   
    return (

      
 

            <CardBody className="no-padding-bottom">
         
                <div className="form-row">
 
                          <Col sm="12" md="6" lg="1" xl="1" className="form-group">
                      Choice
                    </Col>
                    <Col sm="12" md="6" lg="2" xl="2" className="form-group">
                      Destination
                    </Col>
                    {/* <Col sm="12" md="6" lg="2" xl="2" className="form-group">
                     Resort
                    </Col> */}
                    <Col sm="12" md="6" lg="2" xl="2" className="form-group">
                     JobTitle
                    </Col>
                    <Col sm="12" md="6" lg="2" xl="2" className="form-group">
                  Remarks
                    </Col>
                    </div>
                    <div className="form-row">
                    <Col sm="12" md="6" lg="1" xl="1" className="form-group">
                      
                    </Col>
                           <Col sm="12" md="6" lg="2" xl="2" className="form-group">
                        <TextInput name="firstDest"  placeholder="-Destination-" disabled value={props.application.firstDest}  />
                    </Col>
                    {/* <Col sm="12" md="2" lg="2" xl="2" className="form-group">
                        <TextInput name="lastName"  placeholder="-Resort-" disabled value={props.application.firstDest}  />
                    </Col> */}
                    <Col sm="12" md="6" lg="2" xl="2" className="form-group">
                        <TextInput name="firstJobTitle"  placeholder="-JobTitle-" disabled value={props.application.firstJobTitle}  />
                    </Col>
                    <Col sm="12" md="6" lg="7" xl="7" className="form-group">
                    <TextInput
                       id="remarksChoice1"
                name="remarksChoice1" 
                value={props.application.remarksChoice1}
                onChange={props.handleInputField}
              /> 
                    </Col>
                    </div>
                    <div className="form-row">

                    <Col sm="12" md="6" lg="1" xl="1" className="form-group">
                      
                      </Col>
                             <Col sm="12" md="6" lg="2" xl="2" className="form-group">
                          <TextInput name="lastName"  placeholder="-Destination-" disabled value={props.application.secondDest}  />
                      </Col>
                      {/* <Col sm="12" md="2" lg="2" xl="2" className="form-group">
                          <TextInput name="lastName"  placeholder="-Resort-" disabled value={props.application.firstDest}  />
                      </Col> */}
                      <Col sm="12" md="6" lg="2" xl="2" className="form-group">
                          <TextInput name="lastName"  placeholder="-JobTitle-" disabled value={props.application.secondJobTitle}  />
                      </Col>
                      <Col sm="12" md="6" lg="7" xl="7" className="form-group">
                      <TextInput
                         id="remarksChoice2"
                  name="remarksChoice2" 
                  value={props.application.remarksChoice2}
                  onChange={props.handleInputField}
                /> 
                      </Col>


                    </div>
                  
                    <div className="form-row">

                    <Col sm="12" md="6" lg="1" xl="1" className="form-group">
                      
                      </Col>
                             <Col sm="12" md="6" lg="2" xl="2" className="form-group">
                          <TextInput name="lastName"  placeholder="-Destination-" disabled value={props.application.thirdDest}  />
                      </Col>
                      {/* <Col sm="12" md="2" lg="2" xl="2" className="form-group">
                          <TextInput name="lastName"  placeholder="-Resort-" disabled value={props.application.firstDest}  />
                      </Col> */}
                      <Col sm="12" md="6" lg="2" xl="2" className="form-group">
                          <TextInput name="lastName"  placeholder="-JobTitle-" disabled value={props.application.thirdJobTitle}  />
                      </Col>
                      <Col sm="12" md="6" lg="7" xl="7" className="form-group">
                      <TextInput
                         id="remarksChoice3"
                  name="remarksChoice3" 
                  value={props.application.remarksChoice3}
                  onChange={props.handleInputField}
                /> 
                      </Col>


                    </div>
                  
                    <div className="form-row">

                    <Col sm="12" md="6" lg="1" xl="1" className="form-group">
                      
                      </Col>
                             <Col sm="12" md="6" lg="2" xl="2" className="form-group">
                          <TextInput name="lastName"  placeholder="-Destination-" disabled value={props.application.fourthDest}  />
                      </Col>
                      {/* <Col sm="12" md="2" lg="2" xl="2" className="form-group">
                          <TextInput name="lastName"  placeholder="-Resort-" disabled value={props.application.firstDest}  />
                      </Col> */}
                      <Col sm="12" md="6" lg="2" xl="2" className="form-group">
                          <TextInput name="lastName"  placeholder="-JobTitle-" disabled value={props.application.fourthJobTitle}  />
                      </Col>
                      <Col sm="12" md="6" lg="7" xl="7" className="form-group">
                      <TextInput
                         id="remarksChoice4"
                  name="remarksChoice4" 
                  value={props.application.remarksChoice4}
                  onChange={props.handleInputField}
                /> 
                      </Col>


                    </div>

              
            </CardBody>
    
    );
};

export default OverviewInfo