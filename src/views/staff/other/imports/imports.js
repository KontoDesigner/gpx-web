import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Import from 'import'
import Tabs from './tabs'
import RestClient from '../../infrastructure/restClient'
import { toastr } from 'react-redux-toastr'
import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../ajaxStatusActions'
class Imports extends Component {

    constructor(props) {
        super(props)
       // this.downloadBtn = React.createRef()
        this.state = { 
            importType:'',
            fileName:null,
            validFileName:'',
            activeTab: 'fileImport',
            importTypes: [    //not in use  delete
                {
                    id: 'Staff',
                    name: 'Staff'
                },
                {
                    id: 'Position',
                    name: 'Position'
                },
          
            ],

           
           
        }

   


    }

    handleImportType = ( val) => {
                       
        this.setState({importType:val.id});
    }

    handleFile=(fileName) => {
        
   this.setState({fileName})

    }

    toggle = (tab, getData, resetData) => {
  
        if (this.state.activeTab !== tab) {
            //Reset current tab state
            //this.state.resetData([])

            //Reset filter
            //this.props.filterActions.handleFilter()

            //Get tab data
            //getData()

            this.setState({
                activeTab: tab,
                validFileName: '',
                //resetData: resetData
            })
        }
    }
  
    handleImportType = ( val) => {
                       
        this.setState({importType:val.id});
    }

    createImport = async() => {
        // this.props.settingActions.save()
  

      var check = this.state.fileName ? true : false

      if (!check) {
     
  
        this.setState({
            validFileName: 'Please select a File Import Type'
      
        })
  
        return false
      }
       
      dispatch(beginAjaxCall())
      try {
          const res =  await RestClient.Upload('import/UploadFile/'+ this.state.importType,this.state.fileName)
     //dispatch(endAjaxCall())
       this.setState({fileName:'', importType:''})
      
           if (res) {
              toastr.success('Success', `GPX - Import routine finished`)
       } else {
              toastr.error('Error', `GPX - Could not Import: ${res ? res.message : 'Error'}`)
          }
      } catch (error) {
         // dispatch(ajaxCallError(error))
      
          throw error
      }
      
      }
    render() {
        return (
            <div>
                
                <Row>
                  
                    <Tabs
                       toggle={this.toggle}
                       activeTab={this.state.activeTab}
                      
                    />
                            <Col sm="12" md="9" lg="9" xl="10">
                        <Import 
                        fileimportTypes={this.state.fileimportTypes}
                        importTypes={this.state.importTypes}
                        handleFile={this.handleFile}
                        handleImportType={this.handleImportType}
                        importType={this.state.importType}
                        createImport={this.createImport}
                        validFileName={this.state.validFileName}
                        //downloadBtn={this.downloadBtn}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Imports