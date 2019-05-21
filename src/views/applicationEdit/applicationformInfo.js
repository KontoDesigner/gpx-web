import React from 'react';
import { Card, CardBody, CardHeader, Col ,Row,Input,Label} from 'reactstrap'
import TextInput from '../../components/textInput'
import moment from "moment";
import Select from 'react-select'
import Datetime from 'react-datetime'

const ApplicationFormInfo = (props) => {
   
    return (

      
     
        <Card>
        

      
            <CardHeader className="card-header-work"> General</CardHeader>
            <CardBody className="no-padding-bottom">
                <div className="form-row">
                <Col sm="12" md="6" lg="6" xl="6" >
           
                   
                           <label htmlFor="changePosition">I am interested to change my position to:</label>
            
                           <Select
                            //  multi={true}
                            id="changePosition"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.changePositionArr}
                            onChange={v => {
                                props.handleSelect('changePosition', v)
                             }}
                       
               
                            value={props.application.changePosition}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />
                    </Col>

                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                           <label htmlFor="nonDestinationPosition">Would you like a non destination position</label>
            
                           <Select
                            //  multi={true}
                            id="nonDestinationPosition"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.yesNoOption}
                           
                            onChange={v => {
                                props.handleSelect('nonDestinationPosition', v)
                             }}
                       
                       
               
                             value={props.application.nonDestinationPosition}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />
                    </Col>
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                      
                    <TextInput
                     id="coupleName"
              name="coupleName" 
              label="Full name of partner if applying as a couple"
              value={props.application.coupleName}
              onChange={props.handleInputField}
             
            />
               
                    </Col>
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                           <label htmlFor="couplePosition">Current position of partner, if applying as a couple</label>
            
                           <Select
                            //  multi={true}
                            id="couplePosition"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.jobtitles}
                        
                            onChange={v => {
                                props.handleSelect('couplePosition', v)
                             }}
                       
               
                            value={props.application.couplePosition}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />
                    </Col>
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                           <label htmlFor="sourceMarket">The colleague i'm applying with is recruited for the following SM</label>
            
                           <Select
                            //  multi={true}
                            id="sourceMarket"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.sourceMarkets}
                        
                            onChange={v => {
                                props.handleSelect('sourceMarket', v)
                             }}
                       
               
                            value={props.application.sourceMarket}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />
                    </Col>
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                           <label htmlFor="mostImportant">What is most important for you?</label>
            
                           <Select
                            //  multi={true}
                            id="mostImportant"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                             options={props.mostImportantArr}
                        
                            onChange={v => {
                                props.handleSelect('mostImportant', v)
                             }}
                       
               
                            value={props.application.mostImportant}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />
                    </Col>
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                           <label htmlFor="skiPlacement">UK only – I already have a confirmed Ski Placement</label>
            
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
                           <label htmlFor="fairs">BE only: I want to work on fairs (beurzen) contact Valerie.Timperman@tui.be</label>
            
                           <Select
                            //  multi={true}
                            id="fairs"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                             options={props.yesNoOption}
                        
                            onChange={v => {
                                props.handleSelect('fairs', v)
                             }}
                       
               
                            value={props.application.fairs}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />
                    </Col>
                    <Col sm="12" md="6" lg="9" xl="9" className="form-group">
                    <Label for="comments">Any other Comments</Label>
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
                   
                    </div>
              

              </CardBody>
              <CardHeader className="card-header-work"> Confirm</CardHeader>
            <CardBody className="no-padding-bottom">
            <div className="form-row">
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

export default ApplicationFormInfo