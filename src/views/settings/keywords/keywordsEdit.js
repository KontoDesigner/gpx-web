import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'
import * as keywordsEditActions from '../../../actions/keywordsEdit/keywordsEditActions'
import KeywordsInfo from './keywordsInfo'

//import Buttons from '../buttons';
import $ from 'jquery'
import { toastr } from 'react-redux-toastr'
import RestClient from '../../../infrastructure/restClient'

class KeywordsEdit extends Component {   //Notification smart component

    constructor(props) {
        super(props)

        const {
            match: { params }
        } = props

         const keywordname = {id:params.keywordname,name:params.keywordname}
         //const keywordvalues = props.keywordsEdit.keywordValues? props.keywordsEdit.keywordValues:null

        this.state = {
            languages:"English",
            keywordname: keywordname.name,
            validKeywordName:'',
            validKeywordValues:'',
            value:'',
       
           // mplID: mplID,
            keywords: null,
            selectedKeyName: keywordname.name,
            keywordTypes: [
                {
                    id: 'ManagerReasons',
                    name: 'ManagerReasons'
                },

                {
                    id: 'SenderEmail',
                    name: 'SenderEmail'
                },

                {
                    id: 'PositionTypes',
                    name: 'PositionTypes'
                },

                {
                    id: 'ReasonForResignment',
                    name: 'ReasonForResignment'
                },

                {
                    id: 'Seasons',
                    name: 'Seasons'
                },
                {
                    id: 'SuitableToWork',
                    name: 'SuitableToWork'
                },
                {
                    id: 'InternationConcepts',
                    name: 'InternationConcepts'
                },
                {
                    id: 'NationalConcepts',
                    name: 'NationalConcepts'
                },
                {
                    id: 'ChildCareLevels',
                    name: 'ChildCareLevels'
                },

                {
                    id: 'LanguageSkills',
                    name: 'LanguageSkills'
                },

                {
                    id: 'Destinations',
                    name: 'Destinations'
                },
         
            ]

       
        }

       //this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (value) => {
        debugger;
        if (value) {
            let vals = value.map(function(m) {
                return m.id
            })
            debugger;
       // const keywordname = {id:params.keywordname,name:params.keywordname}
        this.setState({value});
      }}

    handleKeyValuesMultiSelect = (field, val) => {
        debugger;
        if (val) {
            let vals = val.map(function(m) {
                return m.id
            })

            this.props.keywordsEditActions.handleKeyValueField(field, vals)
        } else {
            this.props.keywordsEditActions.handleKeyValueField(field, null)
        }
    }

    actionChange = id => {
        debugger;

        this.setState({
            validKeywordName: 'Please select a Keyword Type'
      
        })

        const selectedKeyName = id ? id.name:null

        this.setState({
            selectedKeyName,
            validKeywordName: '',
            validKeywordValues: ''
        })
        debugger
    }


    save = async(model) => {
        // this.props.settingActions.save()
        if (model.KeywordValues) {
        var vals = model.KeywordValues.map(function(m) {
            return m.id
        })
    } else {
       var vals = null
    }

        debugger;

    
      try {

          debugger;
            const modelclean = {
                Id: model.id,
                KeywordName: this.state.selectedKeyName,
                KeywordValues: vals? vals.join():null,
                KeywordComment: model.KeywordComment,
       }
       debugger;
       var check=modelclean.KeywordName ? true : false
       var check2=modelclean.KeywordValues? true : false

       if (!check) {
        //alert('Please select a Staff to assign');
  
        this.setState({
            validKeywordName: 'Please select a Keyword Type'
      
        })
  
        return false
      }
      if (!check2) {
        //alert('Please select a Staff to assign');
  
        this.setState({
            validKeywordValues: 'Please select a Keyword Value'
      
        })
  
        return false
      }
debugger;
          const res =  await RestClient.Post('setting/updateKeyword', modelclean)
    
          window.close()


      
          if (res) {
              toastr.success('Success', `Keyword Document is updated`)
          } else {
              toastr.error('Error', `Could not update Keyword document: ${res ? res.message : 'Error'}`)
          }
      } catch (error) {
         // dispatch(ajaxCallError(error))
      
          throw error
      }
      
      }  


   componentWillMount=async()=>  {



         const _this = this

     
        // this.props.employeeInfoActions.getAvailablePositions(this.props.currentSeason.name, this.props.nextSeason.name, this.props.followingSeason.name)
        // this.props.employeeInfoActions.getPositionAssigns(this.state.staffId)
        
        try {

        const keywords = await RestClient.Get(`setting/${this.state.keywordname}`)

            
             if (keywords) {
                  keywords.keywordValues = keywords.keywordValues  ?  keywords.keywordValues.split(',') : []
           
              }
debugger;
             this.setState({
                value: keywords.keywordValues ? keywords.keywordValues.map(k => ({
                    id: k,
                    name: k
                })):[]
          
            })

        } catch (error) {
         

            throw error
        }
            // const keywordname 
        //  this.props.keywordsEditActions.getKeywordName(this.state.keywordname).then(function () {
     
        //     if (_this.props.keywords != null) { 
               
        //         document.title = `${_this.props.keywords.keywordName}  `
        //    }
        //     else {
                
        //        document.title = 'Keyword not found - GPX'
        //    }
        //  })
    }






    handleInputField = event => {
debugger;
        const field = event.target.name
        const val = event.target.value


        this.props.keywordsEditActions.handleInputField(field, val)
 

             
      
    }  

    render() {
     
        if (this.props.keywords === null) {
            //Loading
            return ''
        } else if (this.props.keywords === undefined) {
            //Not found
            return (

                <Card>
                    <CardHeader>Could not find keyword {this.state.keywordname}</CardHeader>

                    <CardBody>
                        <p className="card-text">
                           keyword with id: <b>{this.state.keywordname}</b> was  not found. 
                        </p>
                    </CardBody>

                    <CardFooter>
                        <LinkContainer to="/settings">
                            <Button color="primary">Back</Button>
                        </LinkContainer>
                    </CardFooter>
                </Card>
            )
        } else {
            //Found
            return (
             
                <div>
              

                    <Row>
                  
                    </Row>

                    <Row>
                        <Col>
                           
         
                                    <KeywordsInfo 
                                        languages={this.state.languages}
                                        keywords={this.props.keywords}
                                        handleInputField={this.handleInputField}
                                        handleKeyValuesMultiSelect ={this.handleKeyValuesMultiSelect}
                                        //handleChange={this.handleChange}
                                        //handleUnsavedEdit={this.handleUnsavedEdit}
                                        save={this.save}
                                        keywordTypes={this.state.keywordTypes}
                                        selectedKeyType={this.props.selectedKeyType}
                                        actionChange={this.actionChange}
                                        handleChange={this.handleChange}
                                        value={this.state.value}
                                        selectedKeyName={this.state.selectedKeyName}
                                       keywordName={this.state.keywordName}
                                   
                                       validKeywordValues={this.state.validKeywordValues}
                                       validKeywordName={this.state.validKeywordName}
                                    />
                                

                            
                           
                        </Col>
                    </Row>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {

    
    
    return {

       keywords: state.setting.keywordsEdit.keywords 
        // notification: state.planningEdit.planningInfo.position,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //positionInfoActions: bindActionCreators(positionInfoActions, dispatch),
        keywordsEditActions: bindActionCreators(keywordsEditActions, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(KeywordsEdit )
