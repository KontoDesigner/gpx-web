import React, { Component } from 'react'
import { Col } from 'reactstrap'
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

  getDataDebouncer = (sourcemarket, jobfamily, criteria) => {
    this.props.getData(sourcemarket, jobfamily, criteria)
  }


  updateTextState = event => {
  
    const value = event.target.value

    this.props.filterActions.handleText(value)
    debugger;
    this.getData(this.props.filter.sourceMarket, this.props.filter.selectedJobFamily, value)
  }


  updateSourceMarketState = sourceMarket => {
    const sourceMarketId = sourceMarket != null ? sourceMarket.id : undefined
debugger;
    this.props.filterActions.handleSourceMarket(sourceMarketId)
debugger;
    this.props.getData(sourceMarketId, this.props.filter.selectedJobFamily, this.props.filter.text)
  }

  updateJobFamilyState = jobFamily => {
    const jobFamilyId = jobFamily != null ? jobFamily.id : undefined

    this.props.filterActions.handleSelectedJobFamily(jobFamilyId)

    this.props.getData(this.props.filter.sourceMarket, jobFamilyId, this.props.filter.text)
  }

  render() {
    return ([
      <Col key={0} sm="12" md="4" lg="3" xl="3" className="form-group form-group-select">
        <label htmlFor="sourceMarket">Source Market</label>

        <Select
          id="sourceMarket"
          valueKey="id"
          labelKey="name"
          className="form-control"
          options={this.props.sourceMarkets}
          onChange={this.updateSourceMarketState}
          value={this.props.filter.sourceMarket}
          placeholder="Source Market"
        />
      </Col>,

      <Col key={1} sm="12" md="4" lg="3" xl="3" className="form-group form-group-select">
        <label htmlFor="jobFamily">JobFamily</label>

        <Select
          id="jobFamily"
          valueKey="id"
          labelKey="name"
          className="form-control"
          options={this.props.jobFamilies}
          onChange={this.updateJobFamilyState}
          value={this.props.filter.selectedJobFamily}
          placeholder="JobFamily"
        />
      </Col>,





      <Col key={2} sm="12" md="4" lg="3" xl="3" className="form-group">
        <TextInput name="text" label="Free Text" placeholder="e.g. Mallorca" value={this.props.filter.text} onChange={this.updateTextState} />

      </Col>
    ]
    )
  }
}

function mapStateToProps(state) {
  return {
    filter: state.staff.filter,
    sourceMarkets: state.geography.sourceMarkets,
    jobFamilies: state.setting.setting.jobFamilies
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
