import React from 'react';
import { Card, Col, CardBody, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'
import classnames from 'classnames'

const Tabs = (props) => {
    return (
        <Col sm="12" md="3" lg="3" xl="2" className="col-menu">
            <Card>
                <CardHeader>Active</CardHeader>

                <CardBody className="no-padding">
                    <ListGroup>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'headOf' })}
                            onClick={() => {
                                props.toggle('headOf',
                                    props.getHeadOf,
                                    props.handleHeadOf)
                            }}>
                            Head Of
                </ListGroupItem>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'destination' })}
                            onClick={() => {
                                debugger;
                                props.toggle('destination',
                                
                                    props.getDestination,
                                    props.handleDestination)
                            }}>
                            Destination
                </ListGroupItem>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'name' })}
                            onClick={() => {
                                props.toggle('name',
                                    props.getName,
                                    props.handleName)
                            }}>
                            Name
                </ListGroupItem>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'jobTitle' })}
                            onClick={() => {
                                props.toggle('jobTitle',
                                    props.getJobTitle,
                                    props.handleJobTitle)
                            }}>
                            Job Title
                </ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>

            <Card>
                <CardHeader>Inactive</CardHeader>

                <CardBody className="no-padding">
                    <ListGroup>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'recentlyInactive' })}
                            onClick={() => {
                                props.toggle(
                                    'recentlyInactive',
                                    props.getRecentlyInactive,
                                    props.handleRecentlyInactive
                                )
                            }}>
                            Recently Inactive
                </ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>

            <Card>
                <CardHeader>Draft</CardHeader>

                <CardBody className="no-padding">
                    <ListGroup>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'newEmployee' })}
                            onClick={() => {
                                props.toggle('newEmployee',
                                    props.getNewEmployee,
                                    props.handleNewEmployee)
                            }}>
                            New Employees
                </ListGroupItem>
        
                    </ListGroup>
                    
                </CardBody>
                
            </Card>
            <Card>
                <CardHeader>Other</CardHeader>

                <CardBody className="no-padding">
                    <ListGroup>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'fileImport' })}
                            onClick={() => {
                         
                                props.history.push(`imports`)
                                props.toggle('fileImport') 
                   
                            }}>
                            File Imports
                </ListGroupItem>
        
                    </ListGroup>
                    
                </CardBody>
                
            </Card>
        </Col>
    );
};

export default Tabs;
