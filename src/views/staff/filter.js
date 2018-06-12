import React, { Component } from 'react'
import { Row, Col, InputGroup, InputGroupAddon, Button } from 'reactstrap'
import TextInput from '../../components/textInput';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as filterActions from '../../actions/staff/filterActions'
import debounce from 'lodash/debounce'
import Select from 'react-select';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.getData = debounce(this.getDataDebouncer, 500);
    }

    getDataDebouncer = () => {
        this.props.getData();
    }

    updateFilterState = () => {
        this.props.filterActions.handleFilter()

        this.props.getData()
    }

    updateTextState = (event) => {
        const value = event.target.value;

        this.props.filterActions.handleText(value)

        this.getData();
    }

    updateSourceMarketState = sourceMarket => {
        const sourceMarketId = sourceMarket != null ? sourceMarket.id : null

        this.props.filterActions.handleSourceMarket(sourceMarketId)
    }

    render() {
        return (
            <Col sm="4">
                <Row>
                    <Col sm="6">
                        <Select
                            valueKey='id'
                            labelKey='name'
                            options={this.props.filter.sourceMarkets}
                            onChange={this.props.updateSourceMarketState}
                            value={this.props.filter.sourceMarket}
                            placeholder='Source Market'
                        />
                    </Col>

                    <Col sm="6">
                        <InputGroup>
                            <TextInput
                                name="text"
                                placeholder="Search"
                                value={this.props.filter.text}
                                onChange={this.updateTextState}
                            />

                            <InputGroupAddon addonType="append">
                                <Button onClick={this.updateFilterState} color="danger">
                                    <i className="fa fa-remove" />
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
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