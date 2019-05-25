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
                           All Applications
                         

                        </ListGroupItem> 
                    
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'planToResign' })}
                            onClick={() => {
                               //alert('Yet to be announced');
                                //return false;
                                props.toggle('planToResign', props.getPlanToResignApplication, props.handlePlanToResignApplication)
                             
                            }}>
                          Plan To Resign
                        </ListGroupItem>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'missingApplication' })}
                            onClick={() => {
                              //alert('Yet to be announced');
                                //return false;
                                props.toggle('missingApplication', props.getMissingApplication, props.handleMissingApplication)
                            }}>
                            Missing Applications
                         

                        </ListGroupItem>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'missingManagerComments' })}
                            onClick={() => {
                             //alert('Yet to be announced');
                                //return false;
                                props.toggle('missingManagerComments', props.getMissingManagerCommentsApplication, props.handleMissingManagerCommentsApplication)
                                
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