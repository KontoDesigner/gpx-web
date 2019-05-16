import React, { Component } from 'react'
import { Col } from 'reactstrap'
import TextInput from '../../components/textInput'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as filterActions from '../../actions/application/filterActions'

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
            selectedJobTitle: this.props.filter.selectedJobTitle,
        }

        this.state = {
            selectedJump: this.props.filter.selectedJump,
        }
        this.state = {
            jump: [    //not in use  delete
                {
                    id: 'Yes',
                    name: 'Yes' 
                },
                {
                    id: 'No',
                    name: 'No' 
                }
          
            ],
        }

        
        

        
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ text: nextProps.filter.text })
    }

    getDataDebouncer = (sourcemarket, jobfamily, jobtitle, criteria) => {
        debugger;
        this.props.filterActions.handleText(this.state.text)

        this.props.getData(sourcemarket, jobfamily, jobtitle,criteria)
    }

    updateTextState = event => {
        const value = event.target.value

        this.setState({
            text: value
        })
debugger;
        this.getData(this.props.filter.sourceMarket, this.props.filter.selectedJobFamily,this.props.filter.selectedJobTitle, value)
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
        this.props.getData(vals, this.props.filter.selectedJobFamily, this.props.filter.selectedJobTitle, this.props.filter.selectedJump,this.props.filter.text)
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
        this.props.getData(this.props.filter.sourceMarket, vals,this.props.filter.selectedJobTitle,this.props.filter.selectedJump,this.props.filter.text)
    }
    updateJumpState = jump => {
        debugger;
        const jumpId = jump != null ? jump.id : undefined

        

        let vals = jump.length !=0 ? jump.map(function(m) {
            return m.id
        }):undefined

        this.props.filterActions.handleSelectedJump(vals)
    
    
        this.setState({ 
            selectedJump: vals 
        })
     
        debugger;
        //this.props.getData(this.props.filter.sourceMarket, jobFamilyId, this.props.filter.text)
        this.props.getData(this.props.filter.sourceMarket, this.props.filter.selectedJobFamily,this.props.filter.selectedJobTitle,vals, this.props.filter.text)
    }
    updateJobTitleState = jobTitle => {
        debugger;
        const jobTitleId = jobTitle != null ? jobTitle.id : undefined

        

        let vals = jobTitle.length !=0 ? jobTitle.map(function(m) {
            return m.id
        }):undefined

        this.props.filterActions.handleSelectedJobTitle(vals)
    
 
        this.setState({ 
            selectedJobTitle: vals 
        })
     
        debugger;
        //this.props.getData(this.props.filter.sourceMarket, jobFamilyId, this.props.filter.text)
        this.props.getData(this.props.filter.sourceMarket, this.props.filter.selectedJobFamily,vals, this.props.filter.selectedJump,this.props.filter.text)
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
                   <Col key={2} sm="12" md="4" lg="3" xl="3" className="form-group form-group-select">
                   <label htmlFor="jobTitle">Job Title</label>
   
                   <Select
                       multi={true}
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
     <Col key={2} sm="12" md="4" lg="2" xl="2" className="form-group form-group-select">
     <label htmlFor="jump">Jump </label>

     <Select
         multi={true}
         id="jump"
         valueKey="id"
         labelKey="name"
         className="form-control" 
         options={this.state.jump}
         onChange={this.updateJumpState}
        value={this.props.filter.selectedJump}
         placeholder="Jump"
     />
 </Col>,
            <Col key={3} sm="12" md="4" lg="1" xl="1" className="form-group">
                <TextInput name="text" label="Free Text" placeholder="e.g. Mallorca" value={this.state.text} onChange={this.updateTextState} />
            </Col>
        ]
    }
}

function mapStateToProps(state) {
    return {
        filter: state.application.filter,
        sourceMarkets: state.geography.sourceMarkets,
        jobFamilies: state.setting.setting.jobFamilies,
        jobTitles: state.setting.setting.jobTitle ,
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
