import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TabContent, TabPane, Row, Col } from 'reactstrap'
import Tabs from './tabs'
import * as settingActions from '../../actions/setting/settingActions'
import Notification from  './template/cfgNotification'
import Setting from './setting/cfgSetting'
class Settings extends Component {


    constructor(props) {
        super(props)
       
        this.state = {
            activeTab: 'settings',
          
          //  resetData: this.props.settingActions.handleSetting,
            sourceMarketId: '',
         
            unsavedEdit: false,
            position: null
        }


    }
    componentDidMount=async()=>  {
        document.title = 'Settings'
        const _this = this
  
       
  
        this.props.settingActions.getSetting().then(function () {
           
        
           if (_this.props.setting != null) {  
      
               document.title = `${_this.props.setting.settingid} `
          }
           else {
     
              document.title = 'General Settings not found - GPX'
          }
          
          _this.setState({loaded: true})

        })

   }

   


//    handleFormSubmit(e) {
//     e.preventDefault();
//     let userData = this.state.newUser;

//     fetch('http://example.com',{
//         method: "POST",
//         body: JSON.stringify(userData),
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//       }).then(response => {
//         response.json().then(data =>{
//           console.log("Successful" + data);
//         })
//     })
//   }   

handleYearSelect = (val) => {

    val = val != null || val != undefined ? val : ''  

   this.props.settingActions.handleYearField(val)

} 


save = () => {
   // this.props.settingActions.save()
}

  handleDestinationSelect = (val) => {


     val = val != null || val != undefined ? val : ''  

    this.props.reportActions.handleDestinationField(val)

    //this.props.handleUnsavedEdit()
} 


    toggle = (tab, getData, resetData) => {
      
        if (this.state.activeTab !== tab) {
            //Reset current tab state
            this.state.resetData([])

            //Reset filter
           // this.props.filterActions.handleFilter()

            //Get tab data
            getData()

            this.setState({
                activeTab: tab,
                resetData: resetData
            })
        }
    }

    render() {
        debugger;
        return (
            <Row>
                <Tabs
                    toggle={this.toggle}
                    activeTab={this.state.activeTab}
                    getSetting={this.props.settingActions.getSetting}
                     handleSetting={this.props.settingActions.handleSetting}
                    // years={this.state.years}
                  
                />
                <Col sm="12" md="9" lg="9" xl="10">
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="settings">
                            <Setting
                            
                            setting={this.props.setting }
                            //     selectedDestination={this.props.selectedDestination}
                            //   handleDestinationSelect={this.handleDestinationSelect}
                            //   years={this.state.years}
                            //   selectedYear={this.props.selectedYear}
                            //   handleYearSelect={this.handleYearSelect}
                               save={this.save}
                            
                            />
                        </TabPane>
                        {/* <TabPane tabId="notifications">
                            <Notification
                            //     position={this.props.position }
                            //     selectedDestination={this.props.selectedDestination}
                            //   handleDestinationSelect={this.handleDestinationSelect}
                            //   years={this.state.years}
                            //   selectedYear={this.props.selectedYear}
                            //   handleYearSelect={this.handleYearSelect}
                            save={this.save}

                            />
                        </TabPane> */}
                   
                    </TabContent>
                </Col>

            </Row>
        )
    }
}

function mapStateToProps(state) {

    return {
        setting: state.setting.setting.setting,
 
        // selectedDestination:state.report.report.selectedDestination,
        // selectedYear:state.report.report.selectedYear,
        // create:state.report.report.create
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //positionInfoActions: bindActionCreators(positionInfoActions, dispatch),
        settingActions: bindActionCreators(settingActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
