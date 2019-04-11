import React, { Component } from 'react'
import { Col } from 'reactstrap'
import TextInput from '../../components/textInput'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as filterActions from '../../actions/planning/filterActions'

import debounce from 'lodash/debounce'
import Select from 'react-select'

class Filter extends Component {
    constructor(props) {
        super(props)

        this.getData = debounce(this.getDataDebouncer, 500)

        this.state = {
            text: this.props.filter.text
        }

        this.state = {
            sourceMarket: this.props.filter.sourceMarket
        }

        this.state = {
            selectedJobFamily: this.props.filter.selectedJobFamily
        } 

        this.state = {
            selectedPositionType: this.props.filter.selectedPositionType
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ text: nextProps.filter.text })
    }

    getDataDebouncer = (sourcemarket, jobfamily, positiontype, criteria) => {
        this.props.filterActions.handleText(this.state.text)

        this.props.getData(sourcemarket, jobfamily, positiontype,criteria)
    }

    updateTextState = event => {
        const value = event.target.value

        this.setState({
            text: value
        })
debugger;
        this.getData(this.props.filter.sourceMarket, this.props.filter.selectedJobFamily,this.props.filter.selectedPositionType, value)
    }
                    
    
        updateSourceMarketState = sourceMarket => {
      debugger;
        const sourceMarketId = sourceMarket != null ? sourceMarket.id : undefined
      
      

       const vals = sourceMarket.length !=0 ? sourceMarket.map(function(m) {
        return m.id
    }):undefined

    this.props.filterActions.handleSourceMarket(vals)

    this.setState({
        sourceMarket: vals
    })
    debugger;

       // this.props.getData(sourceMarketId, this.props.filter.selectedJobFamily, this.props.filter.text)
        this.props.getData(vals, this.props.filter.selectedJobFamily, this.props.filter.selectedPositionType,this.props.filter.text)
    }

    updateJobFamilyState = jobFamily => {
        debugger;
        const jobFamilyId = jobFamily != null ? jobFamily.id : undefined

        

        let vals = jobFamily.length !=0 ? jobFamily.map(function(m) {
            return m.id
        }):undefined
        this.props.filterActions.handleSelectedJobFamily(vals)

 
        this.setState({
            selectedJobFamily: vals
        })
        debugger;
        //this.props.getData(this.props.filter.sourceMarket, jobFamilyId, this.props.filter.text)
        this.props.getData(this.props.filter.sourceMarket, vals,this.props.filter.selectedPositionType, this.props.filter.text)
    }

    updateMplPositionTypeState = mplPositionType => {
        debugger;
        const mplPositionTypeId = mplPositionType != null ? mplPositionType.id : undefined

        

        let vals = mplPositionType.length !=0 ? mplPositionType.map(function(m) {
            return m.id
        }):undefined

        this.props.filterActions.handleSelectedPositionTypes(vals)
    
 
        this.setState({ 
            selectedPositionType: vals 
        })
     
        debugger;
        //this.props.getData(this.props.filter.sourceMarket, jobFamilyId, this.props.filter.text)
        this.props.getData(this.props.filter.sourceMarket, this.props.filter.selectedJobFamily,vals, this.props.filter.text)
    }

    render() {
        return [ 
            <Col key={0} sm="12" md="4" lg="2" xl="2" className="form-group form-group-select">
                <label htmlFor="sourceMarket">Source Market</label>

                <Select
                     multi={true}
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

                {this.props.filter.selectedJobFamily}

                <Select
                    multi={true}
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
                   <Col key={2} sm="12" md="4" lg="2" xl="2" className="form-group form-group-select">
                   <label htmlFor="mplPositionType">Position Type</label>
   
                   <Select
                       multi={true}
                       id="mplPositionType"
                       valueKey="id"
                       labelKey="name"
                       className="form-control" 
                       options={this.props.mplpositiontypes}
                       onChange={this.updateMplPositionTypeState}
                      value={this.props.filter.selectedPositionType}
                       placeholder="PositionType"
                   />
               </Col>,

            <Col key={3} sm="12" md="4" lg="2" xl="2" className="form-group">
                <TextInput name="text" label="Free Text" placeholder="e.g. Mallorca" value={this.state.text} onChange={this.updateTextState} />
            </Col>
        ]
    }
}

function mapStateToProps(state) {
    return {
        filter: state.planning.filter,
        sourceMarkets: state.geography.sourceMarkets,
        jobFamilies: state.setting.setting.jobFamilies,
        mplpositiontypes: state.planning.candidate.mplpositiontypes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        filterActions: bindActionCreators(filterActions, dispatch),
   
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)
