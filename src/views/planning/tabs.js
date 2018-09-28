import React from 'react';
import { Card, Col, CardBody, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'
import classnames from 'classnames'

const Tabs = (props) => {
    return (
        <Col sm="12" md="3" lg="3" xl="2" className="col-menu">
            <Card>
                <CardHeader>Planning</CardHeader>

                <CardBody className="no-padding">
                    <ListGroup>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'allRoles' })}
                            onClick={() => {
                                props.toggle('allRoles',
                                    props.getAllRoles,
                                    props.handleAllRoles)
                            }}>
                            All Roles
                </ListGroupItem>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'placedRoles' })}
                            onClick={() => {
                                props.toggle('placedRoles',
                                    props.getPlacedRoles,
                                    props.handlePlacedRoles)
                            }}>
                            Placed Roles
                </ListGroupItem>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'vacantRoles' })}
                            onClick={() => {
                                props.toggle('vacantRoles',
                                    props.getVacantRoles,
                                    props.handleVacantRoles)
                            }}>
                            Vacant Roles
                </ListGroupItem>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'replyYesNo' })}
                            onClick={() => {
                                props.toggle('replyYesNo',
                                    props.getReplyYesNoRoles,
                                    props.handleReplyYesNoRoles)
                            }}>
                            Reply (Yes/No)
                </ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>

         

          
        </Col>
    );
};

export default Tabs;