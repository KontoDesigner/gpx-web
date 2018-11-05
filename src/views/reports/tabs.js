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
                            Planning Report
                        </ListGroupItem> 
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'resignReport' })}
                            onClick={() => {
                                props.toggle('resignReport', props.getReport, props.handleReport,props.getResignDates)
                            }}>
                            Resign Report
                        </ListGroupItem>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'placementReport' })}
                            onClick={() => {
                                props.toggle('placementReport', props.getReport, props.handleReport)
                            }}>
                            Placement Request Report
                        </ListGroupItem>
                        
                    </ListGroup>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Tabs
