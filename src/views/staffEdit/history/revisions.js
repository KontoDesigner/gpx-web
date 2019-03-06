import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Card, CardBody, CardHeader,Col } from 'reactstrap'
import moment from "moment";
const Revisions = (props) => {
    
    return (
        <Card>
            {<CardHeader>Revisions <div class="pull-right"></div></CardHeader> }

            <CardBody>
            <div className="form-row">
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                   <b>Hist.Date</b>  
                    </Col>
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                   <b> Hist.Who </b>
                    </Col>
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                    <b>Hist.Action</b> 
                    </Col>
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                   <b>Date Modified </b>
                    </Col>

                    </div>
              
                    {props.history.map(dh => (
                    <div className="form-row">
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                    {moment(dh.historyDate).format("YYYY-MM-DD")}
                    </Col>
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                    {dh.historyWho}
                    </Col>
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                    {dh.historyAction} {dh.destination}  {dh.jobTitleWhenResigned?dh.jobTitleWhenResigned:null}  {dh.jobTitle?dh.jobTitle:null} {dh.mplid?dh.mplid:null}  {dh.startDate?moment(dh.startDate).format("YYYY-MM-DD"):null} {dh.endDate?moment(dh.endDate).format("YYYY-MM-DD"):null}
                    </Col>
                
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                    {moment(dh.dateModified).format("YYYY-MM-DD HH:mm:ss")}
                    </Col>

                    </div>
       
              ))}  
          
          
        </CardBody>
    </Card>


    );

            
};



export default Revisions

