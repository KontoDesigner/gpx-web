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
                            className={classnames({ active: props.activeTab === 'settings' })}
                            onClick={() => {
                                alert('Yet to be announced');
                                return false;
                      
                                props.toggle('settings', props.getSetting, props.handleSetting)
                                
                            }}>
                           Applications
                         

                        </ListGroupItem> 
                    
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'notification' })}
                            onClick={() => {
                                alert('Yet to be announced');
                                return false;
                                props.toggle('notification', props.getNotification, props.handleNotification)
                             
                            }}>
                          Plan To Resign
                        </ListGroupItem>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'keywords' })}
                            onClick={() => {
                                alert('Yet to be announced');
                                return false;
                                props.toggle('keywords', props.getKeywords, props.handleKeywords)
                                
                            }}>
                            Missing Applications
                         

                        </ListGroupItem>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'keywords' })}
                            onClick={() => {
                                alert('Yet to be announced');
                                return false;
                                props.toggle('keywords', props.getKeywords, props.handleKeywords)
                                
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