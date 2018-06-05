import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap';
import NameTable from './nameTable'

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
                    <NameTable />
                </CardBody>
            </Card>
        )
    }
}

export default Name;