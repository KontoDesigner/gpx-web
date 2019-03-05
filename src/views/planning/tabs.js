import React from 'react'
import { Card, Col, CardBody, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'
import classnames from 'classnames'

const hostName = window.location.hostname
let tableau = ''

if (hostName === 'localhost' || hostName === 'gpx-web-uat.tuinordic.net' || hostName === 'gpx-web.uat.tuinordic.net') {
    tableau = 'https://gpx-tableau-uat.tuinordic.net'
} else if (hostName === 'gpx-web.tuinordic.net') {
    tableau = 'https://gpx-tableau.tuinordic.net'
}

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
                                const win = window.open(tableau, '_blank')
                                win.focus()
                            }}>
                            Tableaux
                        </ListGroupItem>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'allRole' })}
                            onClick={() => {
                                props.toggle('allRole', props.getAllRoles, props.handleAllRoles)
                            }}>
                            All Positions
                        </ListGroupItem>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'placedRoles' })}
                            onClick={() => {
                                props.toggle('placedRoles', props.getPlacedRoles, props.handlePlacedRoles)
                            }}>
                            Placed Positions
                        </ListGroupItem>
                        <ListGroupItem
                            className={classnames({ active: props.activeTab === 'vacantRoles' })}
                            onClick={() => {
                                props.toggle('vacantRoles', props.getVacantRoles, props.handleVacantRoles)
                            }}>
                            Vacant Positions
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
                            className={classnames({ active: props.activeTab === 'newPosition' })}
                            onClick={() => {
                                props.toggle('newPosition', props.getNewPosition, props.handleNewPosition)
                            }}>
                            Add New Position
                        </ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Tabs
