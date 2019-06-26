import React from 'react'
import { Card, Col, CardBody, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'
import classnames from 'classnames'

const Tabs = props => {
    return (
        <Col sm="12" md="3" lg="3" xl="2" className="col-menu">
            <Card>
                <CardHeader>Reports</CardHeader>

                <CardBody className="no-padding">
                    <ListGroup>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'planningReport' })}
                            onClick={() => {
                                props.toggle('planningReport', props.getReport, props.handleReport)
                            }}>
                            Staffing List
                        </ListGroupItem> 
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'resignReport' })}
                            onClick={() => {
                                props.toggle('resignReport', props.getReport, props.handleReport,props.getResignDates)
                            }}>
                            Resign Report
                        </ListGroupItem>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'onboardReport' })}
                            onClick={() => {
                                props.toggle('onboardReport', props.getReport, props.handleReport)
                            }}>
                            Onboard Report
                        </ListGroupItem>  
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'vacantReport' })}
                            onClick={() => {
                                props.toggle('vacantReport', props.getReport, props.handleReport)
                            }}>
                           Vacant Report
                        </ListGroupItem>

                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'placementRequestReport' })}
                            onClick={() => {
                                props.toggle('placementRequestReport', props.getReport, props.handleReport)
                            }}>
                           Placement Reports
                        </ListGroupItem>
                        
                    </ListGroup>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Tabs
