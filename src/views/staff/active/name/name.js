import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Row } from 'reactstrap'
import PersonTable from './personTable'
import Filter from '../../filter';
import Action from '../../action';

class Name extends Component {
    constructor(props) {
        super()

        this.state = {
            expanded: false
        }
    }

    toggleCollapse = () => {
        this.setState({ expanded: !this.state.expanded })
    }

    render() {
        return (
            <Card className="card-accordion">
                <CardHeader>
                    Name
                </CardHeader>

                <CardBody>
                    <Row>
                        <Filter />

                        <Action />
                    </Row>

                    <PersonTable />
                </CardBody>
            </Card>
        )
    }
}

export default Name;