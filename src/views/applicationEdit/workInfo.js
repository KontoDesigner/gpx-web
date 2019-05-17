import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import TextInput from '../../components/textInput'
import moment from "moment";

const WorkInfo = (props) => {
   
    return (
     
        <Card>
               <CardHeader className="card-header-work"> {props.application.firstName} {props.application.lastName}</CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row" >

                          <Col sm="12" md="6" lg="2" xl="2" className="form-group">
                        <TextInput name="firstName" label="First Name" disabled  value={props.application.firstName}  />
                    </Col>

                           <Col sm="12" md="2" lg="2" xl="2" className="form-group">
                        <TextInput name="lastName" label="Last Name" disabled value={props.application.lastName}  />
                    </Col>

                    <Col sm="12" md="6" lg="2" xl="2" className="form-group">
                        <TextInput name="nat" label="Nationality" disabled  value={props.application.nat}  />
                    </Col>
                    <Col sm="12" md="6" lg="2" xl="2" className="form-group">
                        <TextInput name="sourceMarket" label="SourceMarket" disabled  value={props.application.sourceMarket}  />
                    </Col>
                    <Col sm="12" md="6" lg="2" xl="2" className="form-group">
                        <TextInput name="centralID" label="CentralID" disabled   value={props.application.centralID}  />
                    </Col>
                    <Col sm="12" md="6" lg="2" xl="2" className="form-group">
                        <TextInput name="destination" label="Current Destination" disabled   value={props.application.destination}  />
                    </Col>
                    <Col sm="12" md="6" lg="2" xl="2" className="form-group">
                        <TextInput name="jobfamily" label="Current JobFamily" disabled   value={props.application.jobFamily}  />
                    </Col>     
                    <Col sm="12" md="6" lg="2" xl="2" className="form-group">
                        <TextInput name="jobtitle" label="Current JobTitle" disabled   value={props.application.jobTitle}  />
                    </Col>     
                    



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
                </div>
            </CardBody>
        </Card> 
    );
};

export default WorkInfo