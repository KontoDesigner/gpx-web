import React from 'react'
import { Card, Col, CardBody, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'
import classnames from 'classnames'

const Tabs = props => {
    return (
        <Col sm="12" md="3" lg="3" xl="2" className="col-menu">
            <Card>
                <CardHeader>Planning</CardHeader>

                <CardBody className="no-padding">
                    <ListGroup>
                    <ListGroupItem
                            className={classnames({ active: props.activeTab === 'tableaux' })}
                            onClick={() => {
                                 const win = window.open(`https://tableau-web-uat.tuinordic.net/home`, '_blank')
                                 win.focus()
                            }}>
                            Tableaux
                        </ListGroupItem>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'allRole' })}
                            onClick={() => {
                                props.toggle('allRole', props.getAllRoles, props.handleAllRoles)
                            }}>
                            All Roles
                        </ListGroupItem>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'placedRoles' })}
                            onClick={() => {
                                debugger;
                                props.toggle('placedRoles', props.getPlacedRoles, props.handlePlacedRoles)
                            }}>
                            Placed Roles
                        </ListGroupItem>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'vacantRoles' })}
                            onClick={() => {
                                props.toggle('vacantRoles', props.getVacantRoles, props.handleVacantRoles)
                            }}>
                            Vacant Roles
                        </ListGroupItem>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'replyYesNoRoles' })}
                            onClick={() => {
                                props.toggle('replyYesNoRoles', props.getReplyYesNoRoles, props.handleReplyYesNoRoles)
                            }}>
                            Reply (Yes/No)
                        </ListGroupItem>
                        
                    </ListGroup>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>Other</CardHeader>

                <CardBody className="no-padding">
                    <ListGroup>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'filemports' })}
                            onClick={() => {
                               // const win = window.open(`/imports/`, '_this');
                                props.history.push(`imports`)
                                // props.getNewEmployee,
                                // props.handleNewEmployee
                                //this.toggle('imports') 
                                  //  props.getNewEmployee,
                                    //props.handleNewEmployee)
                            }}>

                    
                            Add New Position(s)
                </ListGroupItem>
        
                    </ListGroup>
                    
                </CardBody>
                
            </Card>
        </Col>
    )
}

export default Tabs
