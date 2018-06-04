import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TabContent, TabPane, Card, Button, CardTitle, CardText, Row, Col, CardBody, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';
import classnames from 'classnames';

class Staff extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <Row>
                <Col sm="2">
                    <Card>
                        <CardHeader>
                            Staff (Active)
                        </CardHeader>

                        <CardBody className="no-padding">
                            <ListGroup>
                                <ListGroupItem className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>Cras justo odio</ListGroupItem>
                                <ListGroupItem className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>Dapibus ac facilisis in</ListGroupItem>
                            </ListGroup>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="10">
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <h4>Tab 1 Contents</h4>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Staff)
