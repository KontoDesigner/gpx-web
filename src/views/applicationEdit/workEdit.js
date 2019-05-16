import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TabContent, TabPane, Row, Col, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'
import * as applicationInfoActions from '../../actions/applicationEdit/applicationInfoActions'
import WorkInfo from './workInfo'
import OverviewInfo from './overviewInfo'
import ApplicationformInfo from './applicationformInfo'
import ManagersectionInfo from './managersectionInfo'
import AllRole from '../planning/planning/allRole/allRole';
import Buttons from './buttons';
import Tabs from './tabs'

class WorkEdit extends Component {

    constructor(props) {
        super()

        const {
            match: { params }
        } = props
        const id = params.id
        
        

        this.state = {
            staffid: id,
           // mplID: mplID,
            application: null,
            activeTab: 'overviewInfo',
            selectedStartDate: null,
            selectedEndDate: null,
            value:'',
            suitableArr :[ ]

       
        }
    }

//    componentWillMount=async()=>  {
//          const _this = this
 
  
        
//         // this.props.employeeInfoActions.getAvailablePositions(this.props.currentSeason.name, this.props.nextSeason.name, this.props.followingSeason.name)
//         // this.props.employeeInfoActions.getPositionAssigns(this.state.staffId)

//          this.props.applicationInfoActions.getApplication(this.state.staffid).then(function () {
          
//             if (_this.props.application != null) { 
               
//                 document.title = `${_this.props.application.firstName} - ${_this.props.application.lastName} `



//            }
//             else {
                
//                document.title = 'Work Application not found - TTP'
//            }
//          })
//     }

    async componentWillMount() {
        const _this = this
 
  
        
        // this.props.employeeInfoActions.getAvailablePositions(this.props.currentSeason.name, this.props.nextSeason.name, this.props.followingSeason.name)
        // this.props.employeeInfoActions.getPositionAssigns(this.state.staffId)

         this.props.applicationInfoActions.getApplication(this.state.staffid).then(function () {
          
            if (_this.props.application != null) { 
               
                document.title = `${_this.props.application.firstName} - ${_this.props.application.lastName} `
            


           }
            else {
                
               document.title = 'Work Application not found - TTP'
           }
         })



 
         const suitable = this.props.keywordslookup.filter(ap => ap.ids === 'PreferToWork_Winter')[0];
          const suitableArr = suitable.keywordValues.split(',')

        //  this.setState({
        //     value: keywords.keywordValues ? keywords.keywordValues.map(k => ({
        //      id: k,
        //          name: k
        //     })):[]
      
        //  })

         const suitableObjArr = suitableArr.map(s => ({
            id: s,
            name: s
         }))
        
        

if (suitable !== undefined) {
        
               
    this.setState({suitableArr: suitableObjArr })
}


    }

    toggle = activeTab => {
        if (this.state.activeTab !== activeTab) {
            this.setState({
                activeTab
            })
        }
    }


    save = async () => {
debugger;
const preferToWork = this.props.application.preferToWork.map(function(m) {
    return m.id
})

        let model = {
  
            // to the database
            //preferToWork:  this.props.application.preferToWork ? this.props.application.preferToWork.join() : null,
preferToWork:  preferToWork,
          //preferToWork: this.props.preferToWork,
          staffID: this.props.application.staffID
             
          }

       
         await this.props.applicationInfoActions.save(model)
        window.close()
    }

    handleMultiSelect = (field, val) => {
        debugger;
        if (val) {
           

            this.props.applicationInfoActions.handleApplicationField(field, val)
        } else {
            this.props.applicationInfoActions.handleApplicationField(field, null)
        }
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

    assignStartChange = assignStart => {
        
        const selectedStartDate = assignStart ;
     
        this.setState({
            selectedStartDate,
            validDate2:''            
            
        })
      
    }
    assignEndChange = assignEnd => {
      const selectedEndDate = assignEnd ;
   
      this.setState({
        selectedEndDate,
        validDate2:''
      
      })
    
  }

    render() {
        const buttons = (
            <Buttons
                save={this.save}
                unsavedEdit={this.state.unsavedEdit}
                // staff={this.props.staff}
            />
        )
        if (this.props.application=== null) {
            //Loading
            return ''
        } else if (this.props.application === undefined) {
            //Not found
            return (

                <Card>
                    <CardHeader>Could not find application {this.state.staffid}</CardHeader>

                    <CardBody>
                        <p className="card-text">
                           Work application with id: <b>{this.state.staffid}</b> was  not found. 
                        </p>
                    </CardBody>

                    <CardFooter>
                        <LinkContainer to="/planning">
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
                        <Col>
                           
                               
                                    <WorkInfo
                                
                                        application={this.props.application}

                                    />
                                
                                <Tabs
                        toggle={this.toggle}
                        activeTab={this.state.activeTab}
                        save={this.save}
                        unsavedEdit={this.state.unsavedEdit}
                     
                    />
                            
                           
                        </Col>
                    </Row>

                    <Row>
                        <Col>

                    <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="overviewInfo">
                                    <OverviewInfo

                                    application={this.props.application}
                      
                                          /> 
                                             </TabPane>
                          
                            
                                <TabPane tabId="applicationformInfo">
                                    <ApplicationformInfo

                                   application={this.props.application}
                                   assignStartChange={this.assignStartChange}
                                   assignEndChange={this.assignEndChange}
                                   handleChange={this.handleChange}
                                   handleMultiSelect ={this.handleMultiSelect}
                                   value={this.state.value}
                                   suitableArr={this.state.suitableArr}
                                  // preferToWork={this.props.preferToWork}
                   
                                   
                                          /> 
                                             </TabPane>
                         
                            
                                <TabPane tabId="managersectionInfo">
                                    <ManagersectionInfo

                                    application={this.props.application}

                                          /> 
                                             </TabPane>
                                        
                           
   </TabContent>
                    </Col>
                    </Row>
                    {buttons}
                </div>



            )


            
        }
    }
}

function mapStateToProps(state) {
    
    return {
      
        application: state.applicationEdit.applicationInfo.application,
        keywordslookup: state.setting.keywords.keywordslookup,
       //preferToWork: state.applicationEdit.applicationInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //positionInfoActions: bindActionCreators(positionInfoActions, dispatch),
        applicationInfoActions: bindActionCreators(applicationInfoActions, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkEdit)
