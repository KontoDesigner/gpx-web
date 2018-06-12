import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
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
                        <div className="form-group form-group-select">
                            <label htmlFor="sourceMarket">Source Market</label>

                            <Select
                                id="sourceMarket"
                                valueKey='id'
                                labelKey='name'
                                className="form-control"
                                options={this.props.filter.sourceMarkets}
                                onChange={this.props.updateSourceMarketState}
                                value={this.props.filter.sourceMarket}
                                placeholder='Source Market'
                            />
                        </div>
                    </Col>

                    <Col sm="6">
                        <TextInput
                            name="text"
                            label="Search"
                            placeholder="Search"
                            value={this.props.filter.text}
                            onChange={this.updateTextState}
                        />
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