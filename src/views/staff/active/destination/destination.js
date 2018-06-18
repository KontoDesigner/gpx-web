import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Row } from 'reactstrap'
import DestinationRow from './destinationRow'
import Filter from '../../filter';
import Action from '../../action';

class Destination extends Component {
    constructor() {
        super()

        this.state = {
            selectedPersons: []
        }
    }

    componentWillReceiveProps() {
        if (this.state.selectedPersons.length !== 0) {
            //Reset selectedPersons if props change
            this.setState({
                selectedPersons: []
            });
        }
    }

    updateSelectedPersonsState = (selectedPersons) => {
        this.setState({ selectedPersons })
    }

    render() {
        return (
            <Card>
                <CardHeader>
                    Destination
                </CardHeader>

                <CardBody className="no-padding-bottom">
                    <Row>
                        <Filter getData={this.props.getDestination} />

                        <Action selected={this.state.selectedPersons} />
                    </Row>

                    {this.props.destination.map((destination, index) =>
                        <DestinationRow
                            key={index}
                            index={index}
                            destination={destination}
                            selectedPersons={this.state.selectedPersons}
                            updateSelectedPersonsState={this.updateSelectedPersonsState}
                        />
                    )}
                </CardBody>
            </Card>
        )
    }
}

export default Destination
