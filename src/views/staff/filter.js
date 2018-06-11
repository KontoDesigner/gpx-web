import React, { Component } from 'react'
import { Col, InputGroup, InputGroupAddon, Button } from 'reactstrap'
import TextInput from '../../components/textInput';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as filterActions from '../../actions/staff/filterActions'

class Filter extends Component {
    updateFilterState = () => {
        this.props.filterActions.handleFilter()
    }

    updateTextState = (event) => {
        const value = event.target.value;

        this.props.filterActions.handleText(value)
    }

    render() {
        return (
            <Col sm="3" className="">
                <InputGroup>
                    <TextInput
                        name="text"
                        placeholder="Search"
                        value={this.props.filter.text}
                        onChange={this.updateTextState}
                    />

                    <InputGroupAddon addonType="append">
                        <Button onClick={this.updateFilterState} color="warning">
                            <i className="fa fa-remove" />
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </Col>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        filter: state.staff.filter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        filterActions: bindActionCreators(filterActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)