import React from 'react';
import { Card, CardBody, CardHeader, Col ,Input,Label}  from 'reactstrap'
import TextInput from '../../components/textInput'
import moment from "moment";
import Select from 'react-select'
const OverviewInfo = (props) => {
   
    return (
     
        <Card>


<CardHeader className="card-header-work"> Manager Section (filled in by the manager of the applicant)</CardHeader>
            <CardBody className="no-padding-bottom">
                <div className="form-row">
 
                          <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                        
                          <label htmlFor="planToResign">This employee is planning to resign at the end of season?</label>
            
            <Select
             //  multi={true}
             id="planToResign"
             valueKey="id"
             labelKey="name"
             className="form-control"
              options={props.yesNoOption}
         
             onChange={v => {
                 props.handleSelect('planToResign', v)
              }}
        

             value={props.application.planToResign}
             placeholder="Select"
             className="form-group form-group-select"
         />
                    </Col>
 
                           <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                        
                                 
                           <label htmlFor="jump">Employee is a member of the JUMP program or soon start </label>
            
            <Select
             //  multi={true}
             id="jump"
             valueKey="id"
             labelKey="name"
             className="form-control"
              options={props.yesNoOption}
         
             onChange={v => {
                 props.handleSelect('jump', v)
              }}
        

             value={props.application.jump}
             placeholder="Select"
             className="form-group form-group-select"
         />
                    
                    </Col>

                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                      
                             
                    <label htmlFor="changeJobFamily">Employee requested a change to their jobfamily? </label>
            
            <Select
             //  multi={true}
             id="changeJobFamily"
             valueKey="id"
             labelKey="name"
             className="form-control"
              options={props.yesNoOption}
         
             onChange={v => {
                 props.handleSelect('changeJobFamily', v)
              }}
        

             value={props.application.changeJobFamily}
             placeholder="Select"
             className="form-group form-group-select"
         />
                   
                    </Col>
                    </div>
                    <div className="form-row">
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                    <Label for="supportChange">If yes, why do you support the request to change?</Label>
            <Input
              required
              type="textarea"
              //maxLength="1000"
              name="supportChange"
              id="supportChange"
              rows={10}
              value={props.application.supportChange}
            
              onChange={props.handleInputField}
              aria-multiline="true"
            />
                    </Col>
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                    <Label for="topStrengths">The employee's top 3 strengths:</Label>
            <Input
              required
              type="textarea"
              //maxLength="1000"
              name="topStrengths"
              id="topStrengths"
              rows={10}
              value={props.application.topStrengths}
            
              onChange={props.handleInputField}
              aria-multiline="true"
            />
                    </Col>
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                    <Label for="developmentAreas">Any areas of development?</Label>
            <Input
              required
              type="textarea"
              //maxLength="1000"
              name="developmentAreas"
              id="developmentAreas"
              rows={10}
              value={props.application.developmentAreas}
            
              onChange={props.handleInputField}
              aria-multiline="true"
            />
                    </Col>
                    </div>
                    <div className="form-row">
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                      
                             
                      <label htmlFor="midYearReview">Mid-Year review objective rating: </label>
              
              <Select
               //  multi={true}
               id="midYearReview"
               valueKey="id"
               labelKey="name"
               className="form-control"
                options={props.midYearReviewArr}
           
               onChange={v => {
                   props.handleSelect('midYearReview', v)
                }}
          
  
               value={props.application.midYearReview}
               placeholder="Select"
               className="form-group form-group-select"
           />
                     
                      </Col>
                      <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                      
                             
                      <label htmlFor="midYearRating">Mid-Year TUI values rating </label>
              
              <Select
               //  multi={true}
               id="midYearRating"
               valueKey="id"
               labelKey="name"
               className="form-control"
                options={props.midYearTuiValueArr}
           
               onChange={v => {
                   props.handleSelect('midYearRating', v)
                }}
          
               value={props.application.midYearRating}
               placeholder="Select"
               className="form-group form-group-select"
           />
             </Col>
                      <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                             <TextInput name="overallRating" label="Overall Placements Rating"  placeholder="-Rating-" disabled value={props.application.overallRating}  />
                      </Col>
                      </div>
                      <div className="form-row">
                      <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                        
                        <label htmlFor="earlyPerformanceCheck">New Recruits - Early Performance Check </label>
          
          <Select
           //  multi={true}
           id="earlyPerformanceCheck"
           valueKey="id"
           labelKey="name"
           className="form-control"
            options={props.earlyPerformanceArr}
       
           onChange={v => {
               props.handleSelect('earlyPerformanceCheck', v)
            }}
      

           value={props.application.earlyPerformanceCheck}
           placeholder="Select"
           className="form-group form-group-select"
       />
                  </Col>
                          <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                        
                          <label htmlFor="longService">Long Service, 3rd calendar year or longer in the current job family</label>
            
            <Select
             //  multi={true}
             id="longService"
             valueKey="id"
             labelKey="name"
             className="form-control"
              options={props.yesNoOption}
         
             onChange={v => {
                 props.handleSelect('longService', v)
              }}
        

             value={props.application.longService}
             placeholder="Select"
             className="form-group form-group-select"
         />
                    </Col>
 
                           <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                        
                                 
                           <label htmlFor="disciplinary">Does the employee have a current/valid Disciplinary or Warning? </label>
            
            <Select
             //  multi={true}
             id="disciplinary"
             valueKey="id"
             labelKey="name"
             className="form-control"
              options={props.yesNoOption}
         
             onChange={v => {
                 props.handleSelect('disciplinary', v)
              }}
        

             value={props.application.disciplinary}
             placeholder="Select"
             className="form-group form-group-select"
         />
                    
                    </Col>
                    
                   
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                      
                             
                    <label htmlFor="supportRequest">Do you support the placements request? (if no please specify)</label>
            
            <Select
             //  multi={true}
             id="supportRequest"
             valueKey="id"
             labelKey="name"
             className="form-control"
              options={props.yesNoOption}
         
             onChange={v => {
                 props.handleSelect('supportRequest', v)
              }}
        

             value={props.application.supportRequest}
             placeholder="Select"
             className="form-group form-group-select"
         />
                   
                    </Col>
                    </div>
                      <div className="form-row">
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                    <Label for="supportRequestComment">If you answered no to the above question please provide details</Label>
            <Input
              required
              type="textarea"
              //maxLength="1000"
              name="supportRequestComment"
              id="supportRequestComment"
              rows={4}
              value={props.application.supportRequestComment}
            
              onChange={props.handleInputField}
              aria-multiline="true"
            />
                    </Col>
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                        
                                 
                        <label htmlFor="changesRequest">In agreement with the employee have you made any changes to their application form? </label>
         
         <Select
          //  multi={true}
          id="changesRequest"
          valueKey="id"
          labelKey="name"
          className="form-control"
           options={props.yesNoOption}
      
          onChange={v => {
              props.handleSelect('changesRequest', v)
           }}
     

          value={props.application.changesRequest}
          placeholder="Select"
          className="form-group form-group-select"
      />
                 
                 </Col>

               
                  
                    </div>
       
              

              </CardBody>
              <CardHeader className="card-header-work-assign"> Confirm</CardHeader>
            <CardBody className="no-padding-bottom"> 
            <div className="form-row">
            <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                   
                          
                   <label htmlFor="feedBackRequest">I have informed or will inform the employee of my feedback</label>
           
           <Select
            //  multi={true}
            id="feedBackRequest"
            valueKey="id"
            labelKey="name"
            className="form-control"
             options={props.yesNoOption}
        
            onChange={v => {
                props.handleSelect('feedBackRequest', v)
             }}
       
  
            value={props.application.feedBackRequest}
            placeholder="Select"
            className="form-group form-group-select"
        />
                  
                   </Col>
            <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                      
                      <TextInput
                       id="signatureMgr"
                name="signatureMgr" 
                label="signatureMgr"
                value={props.application.signatureMgr}
                onChange={props.handleInputField}
               
              />
                 
                      </Col>
                      <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                      
                      <TextInput
                       id="placeDateMgr"
                name="placeDateMgr"  
                label="Place & Date"
                value={props.application.placeDateMgr}
                onChange={props.handleInputField}
               
              />
                 
                      </Col>
            </div>


            </CardBody>
        </Card> 
    );
};

export default OverviewInfo