import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import TextInput from '../../components/textInput'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as filterActions from '../../actions/staff/filterActions'
import debounce from 'lodash/debounce'
import Select from 'react-select'

class Filter extends Component {
  constructor(props) {
    super(props)

    this.getData = debounce(this.getDataDebouncer, 500)
  }

  getDataDebouncer = (sourcemarket, criteria) => {
    this.props.getData(sourcemarket, criteria)
  }

  updateTextState = event => {
    const value = event.target.value

    this.props.filterActions.handleText(value)

    this.getData(this.props.filter.sourceMarket, value)
  }

  updateSourceMarketState = sourceMarket => {
    const sourceMarketId = sourceMarket != null ? sourceMarket.id : undefined

    this.props.filterActions.handleSourceMarket(sourceMarketId)
    this.props.getData(sourceMarketId, this.props.filter.text)
  }

  render() {
    return (
      <Col sm="12" md="8" lg="6" xl="4">
        <Row>
          <Col sm="12" md="6" lg="6" xl="6" className="col-filter">
            <div className="form-group form-group-select">
              <label htmlFor="sourceMarket">Source Market</label>

              <Select
                id="sourceMarket"
                valueKey="id"
                labelKey="name"
                className="form-control"
                options={this.props.filter.sourceMarkets}
                onChange={this.updateSourceMarketState}
                value={this.props.filter.sourceMarket}
                placeholder="Source Market"
              />
            </div>
          </Col>

          <Col sm="12" md="6" lg="6" xl="6" className="col-filter">
            <TextInput name="text" label="Free Text" placeholder="e.g. Mallorca" value={this.props.filter.text} onChange={this.updateTextState} />
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
