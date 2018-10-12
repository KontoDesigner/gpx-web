import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'
class PlanningEdit extends Component {
    constructor(props) {
        super()

        const {
            match: { params }
        } = props
        const id = params.id

        this.state = {
            id: id,
            position: null
        }
    }

    async componentWillMount() {
        // const _this = this
        // this.props.employeeInfoActions.getAvailablePositions(this.props.currentSeason.name, this.props.nextSeason.name, this.props.followingSeason.name)
        // this.props.employeeInfoActions.getPositionAssigns(this.state.staffId)
        // this.props.employeeInfoActions.getStaff(this.state.staffId).then(function () {
        //     if (_this.props.staff != null) {
        //         document.title = `${_this.props.staff.firstNameLastName} - GPX`
        //     }
        //     else {
        //         document.title = 'Staff not found - GPX'
        //     }
        // })
    }

    save = () => {
        alert('not implemented')
    }

    render() {
        if (this.props.position === null) {
            //Loading
            return ''
        } else if (this.props.position === undefined) {
            //Not found
            return (
                <Card>
                    <CardHeader>Could not find position</CardHeader>

                    <CardBody>
                        <p className="card-text">
                            Staff with id: <b>{this.state.mplid}</b> was not found.
                        </p>
                    </CardBody>

                    <CardFooter>
                        <LinkContainer to="/planning">
                            <Button color="primary">Back</Button>
                        </LinkContainer>
                    </CardFooter>
                </Card>
            )
        } else {
            //Found
            return <div>sdf</div>
        }
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlanningEdit)
