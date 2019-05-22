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
                        
                          <label htmlFor="skiPlacement">This employee is planning to resign at the end of season?</label>
            
            <Select
             //  multi={true}
             id="skiPlacement"
             valueKey="id"
             labelKey="name"
             className="form-control"
              options={props.yesNoOption}
         
             onChange={v => {
                 props.handleSelect('skiPlacement', v)
              }}
        

             value={props.application.skiPlacement}
             placeholder="Select"
             className="form-group form-group-select"
         />
                    </Col>
 
                           <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                        
                                 
                           <label htmlFor="skiPlacement">Employee is a member of the JUMP program or soon start </label>
            
            <Select
             //  multi={true}
             id="skiPlacement"
             valueKey="id"
             labelKey="name"
             className="form-control"
              options={props.yesNoOption}
         
             onChange={v => {
                 props.handleSelect('skiPlacement', v)
              }}
        

             value={props.application.skiPlacement}
             placeholder="Select"
             className="form-group form-group-select"
         />
                    
                    </Col>

                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                      
                             
                    <label htmlFor="skiPlacement">Employee requested a change to their jobfamily? </label>
            
            <Select
             //  multi={true}
             id="skiPlacement"
             valueKey="id"
             labelKey="name"
             className="form-control"
              options={props.yesNoOption}
         
             onChange={v => {
                 props.handleSelect('skiPlacement', v)
              }}
        

             value={props.application.skiPlacement}
             placeholder="Select"
             className="form-group form-group-select"
         />
                   
                    </Col>
                    </div>
                    <div className="form-row">
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                    <Label for="comments">If yes, why do you support the request to change?</Label>
            <Input
              required
              type="textarea"
              //maxLength="1000"
              name="comments"
              id="comments"
              rows={10}
              value={props.application.comments}
            
              onChange={props.handleInputField}
              aria-multiline="true"
            />
                    </Col>
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                    <Label for="comments">The employee's top 3 strengths:</Label>
            <Input
              required
              type="textarea"
              //maxLength="1000"
              name="comments"
              id="comments"
              rows={10}
              value={props.application.comments}
            
              onChange={props.handleInputField}
              aria-multiline="true"
            />
                    </Col>
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                    <Label for="comments">Any areas of development?</Label>
            <Input
              required
              type="textarea"
              //maxLength="1000"
              name="comments"
              id="comments"
              rows={10}
              value={props.application.comments}
            
              onChange={props.handleInputField}
              aria-multiline="true"
            />
                    </Col>
                    </div>
                    <div className="form-row">
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                      
                             
                      <label htmlFor="skiPlacement">Mid-Year review objective rating: </label>
              
              <Select
               //  multi={true}
               id="skiPlacement"
               valueKey="id"
               labelKey="name"
               className="form-control"
                options={props.yesNoOption}
           
               onChange={v => {
                   props.handleSelect('skiPlacement', v)
                }}
          
  
               value={props.application.skiPlacement}
               placeholder="Select"
               className="form-group form-group-select"
           />
                     
                      </Col>
                      <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                      
                             
                      <label htmlFor="skiPlacement">Mid-Year TUI values rating </label>
              
              <Select
               //  multi={true}
               id="skiPlacement"
               valueKey="id"
               labelKey="name"
               className="form-control"
                options={props.yesNoOption}
           
               onChange={v => {
                   props.handleSelect('skiPlacement', v)
                }}
          
  
               value={props.application.skiPlacement}
               placeholder="Select"
               className="form-group form-group-select"
           />
             </Col>
                      <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                             <TextInput name="lastName" label="Overall Placements Rating"  placeholder="-Destination-" disabled value={props.application.thirdDest}  />
                      </Col>
                      </div>
                      <div className="form-row">
 
                          <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                        
                          <label htmlFor="skiPlacement">Long Service, 3rd calendar year or longer in the current job family</label>
            
            <Select
             //  multi={true}
             id="skiPlacement"
             valueKey="id"
             labelKey="name"
             className="form-control"
              options={props.yesNoOption}
         
             onChange={v => {
                 props.handleSelect('skiPlacement', v)
              }}
        

             value={props.application.skiPlacement}
             placeholder="Select"
             className="form-group form-group-select"
         />
                    </Col>
 
                           <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                        
                                 
                           <label htmlFor="skiPlacement">Does the employee have a current/valid Disciplinary or Warning? </label>
            
            <Select
             //  multi={true}
             id="skiPlacement"
             valueKey="id"
             labelKey="name"
             className="form-control"
              options={props.yesNoOption}
         
             onChange={v => {
                 props.handleSelect('skiPlacement', v)
              }}
        

             value={props.application.skiPlacement}
             placeholder="Select"
             className="form-group form-group-select"
         />
                    
                    </Col>

                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                      
                             
                    <label htmlFor="skiPlacement">Do you support the placements request? (if no please specify)</label>
            
            <Select
             //  multi={true}
             id="skiPlacement"
             valueKey="id"
             labelKey="name"
             className="form-control"
              options={props.yesNoOption}
         
             onChange={v => {
                 props.handleSelect('skiPlacement', v)
              }}
        

             value={props.application.skiPlacement}
             placeholder="Select"
             className="form-group form-group-select"
         />
                   
                    </Col>
                    </div>
                      <div className="form-row">
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                    <Label for="comments">If you answered no to the above question please provide details</Label>
            <Input
              required
              type="textarea"
              //maxLength="1000"
              name="comments"
              id="comments"
              rows={4}
              value={props.application.comments}
            
              onChange={props.handleInputField}
              aria-multiline="true"
            />
                    </Col>
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                        
                                 
                        <label htmlFor="skiPlacement">In agreement with the employee have you made any changes to their application form? </label>
         
         <Select
          //  multi={true}
          id="skiPlacement"
          valueKey="id"
          labelKey="name"
          className="form-control"
           options={props.yesNoOption}
      
          onChange={v => {
              props.handleSelect('skiPlacement', v)
           }}
     

          value={props.application.skiPlacement}
          placeholder="Select"
          className="form-group form-group-select"
      />
                 
                 </Col>

               
                    </div>

       
              

              </CardBody>
              <CardHeader className="card-header-work"> Confirm</CardHeader>
            <CardBody className="no-padding-bottom">
            <div className="form-row">
            <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                   
                          
                   <label htmlFor="skiPlacement">I have informed or will inform the employee of my feedback</label>
           
           <Select
            //  multi={true}
            id="skiPlacement"
            valueKey="id"
            labelKey="name"
            className="form-control"
             options={props.yesNoOption}
        
            onChange={v => {
                props.handleSelect('skiPlacement', v)
             }}
       
  
            value={props.application.skiPlacement}
            placeholder="Select"
            className="form-group form-group-select"
        />
                  
                   </Col>
            <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                      
                      <TextInput
                       id="signature"
                name="signature" 
                label="Signature"
                value={props.application.signature}
                onChange={props.handleInputField}
               
              />
                 
                      </Col>
                      <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                      
                      <TextInput
                       id="placeDate"
                name="placeDate" 
                label="Place & Date"
                value={props.application.placeDate}
                onChange={props.handleInputField}
               
              />
                 
                      </Col>
            </div>











            </CardBody>
        </Card> 
    );
};

export default OverviewInfo