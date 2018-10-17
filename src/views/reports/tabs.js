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
                                props.toggle('planningReport', props.getPlanning, props.handleAllRoles)
                            }}>
                            Planning Report
                        </ListGroupItem> 
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'placedRoles' })}
                            onClick={() => {
                                props.toggle('placedRoles', this.props.history.push(`/planning`))
                            }}>
                            Resign Report
                        </ListGroupItem>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'vacantRoles' })}
                            onClick={() => {
                                props.toggle('vacantRoles', props.getVacantRoles, props.handleVacantRoles)
                            }}>
                            Placement Report
                        </ListGroupItem>
                        
                    </ListGroup>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Tabs
