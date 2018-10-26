import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TabContent, TabPane, Row, Col } from 'reactstrap'
import Tabs from './tabs'
import * as notificationActions from '../../actions/notification/notificationActions'
import * as settingActions from '../../actions/setting/settingActions'

import Notification from  '../notification/template/cfgNotification'
import Setting from './setting/cfgSetting'
class Settings extends Component {


    constructor(props) {
        super(props)
       
        this.state = {
            activeTab: 'settings',
          
          //  resetData: this.props.settingActions.handleSetting,
            sourceMarketId: '',
            options: [
                {
                    id: 'No',
                    name: 'No'
                },

                {
                    id: 'Yes',
                    name: 'Yes'
                },
         
            ],
         
            unsavedEdit: false,
            setting: null
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

//on Demand Call start functions*************************
handleYearSelect = (val) => {

    val = val != null || val != undefined ? val : ''  

   this.props.settingActions.handleYearField(val)

} 


save = () => {
   // this.props.settingActions.save()
}

  handleApplyOpenSelect = (val) => {


     val = val != null || val != undefined ? val : ''  

    this.props.settingActions.handleApplyOpen(val)

    //this.props.handleUnsavedEdit()
} 
//on Demand Call functions end*************************

//toogle logic  this is also sent to underlying component Tabs  below  , Tabs is imported above
    toggle = (tab, getData, resetData) => {
        debugger;
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
      
        return (
            <Row>
                <Tabs
                    toggle={this.toggle}
                    activeTab={this.state.activeTab}
                    getSetting={this.props.settingActions.getSetting}
                     handleSetting={this.props.settingActions.handleSetting}
                    getNotification={this.props.notificationActions.getNotification}
                    handleNotification={this.props.notificationActions.handleNotification}
                    options={this.state.options}
                  
                />
                <Col sm="12" md="9" lg="9" xl="10">
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="settings">
                            <Setting
                            
                            setting={this.props.setting }
                            selectedApplyOpen={this.props.selectedApplyOpen}
                            handleApplyOpenSelect={this.handleApplyOpenSelect}
                            options={this.state.options}
                            //   selectedYear={this.props.selectedYear}
                            //   handleYearSelect={this.handleYearSelect}
                               save={this.save}
                            
                            />
                        </TabPane>
                        <TabPane tabId="Notifications">
                            <Notification
                             notification={this.props.notification }
                            //     selectedDestination={this.props.selectedDestination}
                            //   handleDestinationSelect={this.handleDestinationSelect}
                            //   years={this.state.years}
                            //   selectedYear={this.props.selectedYear}
                            //   handleYearSelect={this.handleYearSelect}
                            save={this.save}

                            />
                        </TabPane>
                   
                    </TabContent>
                </Col>

            </Row>
        )
    }
}

function mapStateToProps(state) {

    return {
        setting: state.setting.setting.setting,
       //notification: state.setting.setting.setting,
         selectedApplyOpen:state.setting.setting.selectedApplyOpen,
       //  selectedYear:state.report.report.selectedYear,
         //create:state.report.report.create
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //positionInfoActions: bindActionCreators(positionInfoActions, dispatch),
        settingActions: bindActionCreators(settingActions, dispatch),
        notificationActions: bindActionCreators(notificationActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
