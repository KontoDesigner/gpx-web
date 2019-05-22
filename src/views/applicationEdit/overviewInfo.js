import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import TextInput from '../../components/textInput'
import moment from "moment";

const OverviewInfo = (props) => {
   
    return (
     
        <Card>
  
  <CardHeader className="card-header-work"> Placement {props.application.season}</CardHeader>
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

{/* 
                              <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="mplidVersion" label="MPLID Version (for local adds)"  value={props.position.mplidVersion}  />
                    </Col>

            


                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="region" label="Region"  value={props.position.region}  />
                    </Col>

                                           <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="country" label="Country"  value={props.position.country}  />
                    </Col>

                       <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="headOf" label="HeadOf"  value={props.position.headOf}/>
                    </Col>

                         <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="sdD_DM" label="SDD/DM"  value={props.position.sdD_DM}/>
                    </Col>

                         <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="destination" label="Destination"  value={props.position.destination}/>
                    </Col>

               

                         <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="conceptHotel" label="Concept/Hotel"  value={props.position.conceptHotel}/>
                    </Col>

   

                         <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="profile" label="Profile"  value={props.position.profile}/>
                    </Col>

                            <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="iataCode" label="IATA code"  value={props.position.iataCode}/>
                    </Col>

                         <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="jobFamily" label="Jobfamily"  value={props.position.jobFamily}/>
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="jobTitle" label="jobTitle"  value={props.position.jobTitle}/>
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="mplDlRequired" label="DL-Req."  value={props.position.mpL_DL_Required}/>
                    </Col>

                     <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="languages" label="Languages"  value={props.position.languages}/>
                    </Col>

                     <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="highSeason" label="Highseason"  value={props.position.highSeason}/>
                    </Col>

                     <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="workTime" label="Worktime"  value={props.position.workTime}/>
                    </Col>

                     <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="sourceMarket" label="MPL SourceMarket"  value={props.position.mplSourceMarket}/>
                    </Col>
                    
                    {/* <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="jobTitle" label="Occupied by"  value={props.position.jobTitle}/>
                    </Col> */}

                     {/* <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="positionType" label="MPL Position Type"  value={props.position.mplPositionType}/>
                    </Col>

                     <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="FTE" label="Annualised FTE"  value={props.position.FTE}/>
                    </Col>

                     <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="concept" label="Concept/DS"  value={props.position.concept}/>
                    </Col>

                      <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="startDate" label="Start Date"  value={props.position.positionStartDate?moment(props.position.positionStartDate).format("YYYY-MM-DD"):null}/>
                    </Col>
                
                     <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="endDate" label="End Date"  value={props.position.positionEndDate?moment(props.position.positionEndDate).format("YYYY-MM-DD"):null}/>
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="4" className="form-group">
                        <TextInput name="dateModified" label="Position DateModified"  value={props.position.mplDateModified}/>
                    </Col>   */}
              
            </CardBody>
        </Card> 
    );
};

export default OverviewInfo