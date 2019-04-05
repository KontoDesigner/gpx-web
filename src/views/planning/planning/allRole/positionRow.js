import React, { Component } from 'react'
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap'
import PersonTable from './personTable'

class PositionTable extends Component {
    constructor() {
        super()

        this.state = {
            expanded: false
        }
    }

    toggleCollapse = () => {
        this.setState({ expanded: !this.state.expanded })
    }

    render() {
        const icon = this.state.expanded ? (
            <i className="fa fa-chevron-up float-right text-danger" />
        ) : (
            <i className="fa fa-chevron-down float-right text-danger" />
        )

        const style = {
            height: `${50 + this.props.position.positions.length * 28}px`
        }

        return (
            <Card className="card-accordion">
                {/* <CardHeader onClick={() => this.toggleCollapse()}>
          ({this.props.position.positions.length}) {this.props.position.jobTitle} {icon}
        </CardHeader>

        { <Collapse isOpen={this.state.expanded}>
          <CardBody style={style} className="card-body-table">
            <PersonTable
              index={this.props.index}
              persons={this.props.position.positions}
              handleSelectedTitle={this.props.handleSelectedTitle}
              selectedTitle={this.props.selectedTitle}
              edit={this.props.edit}
            />
          </CardBody>
        </Collapse>} */}
            </Card>
        )
    }
}

export default PositionTable
