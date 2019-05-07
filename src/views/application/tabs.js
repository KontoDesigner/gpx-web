import React from 'react'
import { Card, Col, CardBody, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'
import classnames from 'classnames'

const Tabs = props => {
    return (
        <Col sm="12" md="3" lg="3" xl="2" className="col-menu">
            <Card>
                <CardHeader>Application For Work</CardHeader>

                <CardBody className="no-padding"> 
                    <ListGroup>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'allApplication' })}
                            onClick={() => {
                                //alert('Yet to be announced');
                                //return false;
                                props.toggle('allApplication', props.getAllApplication, props.handleAllApplication)
                                //props.toggle('settings', props.getSetting, props.handleSetting)
                                
                            }}>
                           Applications
                         

                        </ListGroupItem> 
                    
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'planToResign' })}
                            onClick={() => {
                               //alert('Yet to be announced');
                                //return false;
                                props.toggle('planToResign', props.getAllApplication, props.handleAllApplication)
                             
                            }}>
                          Plan To Resign
                        </ListGroupItem>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'missingApplication' })}
                            onClick={() => {
                              //alert('Yet to be announced');
                                //return false;
                                props.toggle('missingApplication', props.getAllApplication, props.handleAllApplication)
                                
                            }}>
                            Missing Applications
                         

                        </ListGroupItem>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'missingManagerComment' })}
                            onClick={() => {
                             //alert('Yet to be announced');
                                //return false;
                                props.toggle('missingManagerComment', props.getAllApplication, props.handleAllApplication)
                                
                            }}>
                            Missing Manager Comments
                         

                        </ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Tabs