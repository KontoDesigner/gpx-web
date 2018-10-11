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

  getDataDebouncer = (sourcemarket,jobtitle, criteria) => {
    this.props.getData(sourcemarket, jobtitle,criteria)
  }



  updateTextState = event => {
    const value = event.target.value

    this.props.filterActions.handleText(value)

    this.getData(this.props.filter.sourceMarket,this.props.filter.selectedJobTitle,  value)
  }


  updateSourceMarketState = sourceMarket => {
    const sourceMarketId = sourceMarket != null ? sourceMarket.id : undefined

    this.props.filterActions.handleSourceMarket(sourceMarketId)

    this.props.getData(sourceMarketId, this.props.filter.selectedJobTitle, this.props.filter.text)
  }

  updateJobTitleState = jobTitle => {
    const jobTitleId = jobTitle != null ? jobTitle.id : undefined

    this.props.filterActions.handleSelectedJobTitle(jobTitleId)

    this.props.getData(this.props.filter.sourceMarket,jobTitleId, this.props.filter.text)
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
        <label htmlFor="jobTitle">JobTitle</label>

        <Select
          id="jobTitle"
          valueKey="id"
          labelKey="name"
          className="form-control"
          options={this.props.jobTitles}
          onChange={this.updateJobTitleState}
          value={this.props.filter.selectedJobTitle}
          placeholder="JobTitle"
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
    jobTitles: state.setting.jobTitles
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
