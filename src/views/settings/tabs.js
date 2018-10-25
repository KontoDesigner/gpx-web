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
                            className={classnames({ active: props.activeTab === 'setting' })}
                            onClick={() => {
                            
                                props.toggle('settings', props.getSetting, props.handleSetting)
                            }}>
                            Settings
                        </ListGroupItem> 
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'notification' })}
                            onClick={() => {
                               // props.toggle('resignReport', props.getReport, props.handleReport)
                            }}>
                          Notifications
                        </ListGroupItem>
                     
                        
                    </ListGroup>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Tabs