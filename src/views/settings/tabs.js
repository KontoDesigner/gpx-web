import React from 'react'
import { Card, Col, CardBody, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'
import classnames from 'classnames'

const Tabs = props => {
    return (
        <Col sm="12" md="3" lg="3" xl="2" className="col-menu">
            <Card>
                <CardHeader>Settings</CardHeader>

                <CardBody className="no-padding">
                    <ListGroup>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'settings' })}
                            onClick={() => {
                      
                                props.toggle('settings', props.getSetting, props.handleSetting)
                                
                            }}>
                            Settings
                         

                        </ListGroupItem> 
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'notification' })}
                            onClick={() => {
                               
                                props.toggle('notification', props.getNotification, props.handleNotification)
                             
                            }}>
                          Notifications
                        </ListGroupItem>
                        {/* <ListGroupItem
                            className={classnames({ active: props.activeTab === 'profiling' })}
                            onClick={() => {
                               
                                props.toggle('profiling', props.getNotification, props.handleNotification)
                             
                            }}>
                         Profilings
                        </ListGroupItem> */}
                        
                    </ListGroup>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Tabs