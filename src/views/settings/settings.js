import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TabContent, TabPane, Row, Col } from 'reactstrap'
import Tabs from './tabs'
import * as notificationActions from '../../actions/notification/notificationActions'
import * as settingActions from '../../actions/setting/settingActions'
import * as filterActions from '../../actions/setting/filterActions'
import { toastr } from 'react-redux-toastr'
import RestClient from '../../infrastructure/restClient'
import Notification from  './notification/cfgNotification'
import Setting from './setting/cfgSetting'
import $ from 'jquery'
//import Buttons from './buttons'

class Settings extends Component {


    constructor(props) {
        super(props)
   
        this.state = {
           
            activeTab: 'settings',
            resetData: this.props.settingActions.handleSetting,
         
           
       
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

            seasons: [
                {
                    id: 'W1819',
                    name: 'W1819'
                },

                {
                    id: 'S19',
                    name: 'S19'
                },

                {
                    id: 'W1920',
                    name: 'W1920'
                },
         
            ],
         
           
            
            unsavedEdit: false,
            setting: null
        }


    }
 
    componentWillMount=async()=>  {
        document.title = 'Settings'
        const _this = this
  
       // this.props.notificationActions.getNotification()
        _this.props.settingActions.getSetting().then(function () {
            
         
      
            if (_this.props.setting != null) {  
               
               document.title = `${_this.props.setting.settingid} `
          }
           else {
     
              document.title = 'General Settings not found - GPX'
          }
          
          _this.setState({loaded: true, setting:_this.props.setting})
        
        })

   }

  
//on Demand Call start functions*************************
handleUnsavedEdit = () => {
    if (this.state.unsavedEdit === false) {
        this.setState({
            unsavedEdit: true
        })
    }
}

edit = (e, notification) => {
    debugger;
    if (!$(e.target).is(":checkbox")) {
        const win = window.open(`/notification/${notification.templateName}`, '_this');

        win.focus();
    }
}

save = async(model) => {
  // this.props.settingActions.save()
debugger;

try {
    const res =  await RestClient.Post('setting/updateSetting', model)

 

    if (res) {
        toastr.success('Success', `Setting Document is updated`)
    } else {
        toastr.error('Error', `Could not update Setting document: ${res ? res.message : 'Error'}`)
    }
} catch (error) {
   // dispatch(ajaxCallError(error))

    throw error
}

}

handleYearSelect = (val) => {

    val = val != null || val != undefined ? val : ''  

   this.props.settingActions.handleYearField(val)

} 

  handleApplyOpenSelect = (val) => { 
     
    let setting = Object.assign({}, this.state.setting);    //creating copy of object
    setting.applyOpen = val.name;                        //updating value
    this.setState({setting});

} 

handleManagerCommentSelect = (val) => { 
     
    let setting = Object.assign({}, this.state.setting);    //creating copy of object
    setting.managerComments = val.name;                        //updating value
    this.setState({setting});

} 



handleStaffApproveSelect = (val) => { 
     
      let setting = Object.assign({}, this.state.setting);    //creating copy of object
    setting.staffApprove = val.name;                        //updating value
    this.setState({setting});

}

handleArrivalDateSelect = (val) => { 
     
    let setting = Object.assign({}, this.state.setting);    //creating copy of object
    setting.arrivalDateUpdate = val.name;                        //updating value
    this.setState({setting});

}

handleCurSeasonSelect = (val) => { 
  
    let setting = Object.assign({}, this.state.setting);    //creating copy of object
    setting.curSeason = val.name;                        //updating value
    this.setState({setting});
   

}

handleNextSeasonSelect = (val) => { 
   
    let setting = Object.assign({}, this.state.setting);    //creating copy of object
    setting.nextSeason = val.name;                        //updating value
    this.setState({setting});

}

handleNextNextSeasonSelect = (val) => { 
     
    let setting = Object.assign({}, this.state.setting);    //creating copy of object
    setting.nextNextSeason = val.name;                        //updating value
    this.setState({setting});

}




handleDepartureDateSelect = (val) => { 
     
    let setting = Object.assign({}, this.state.setting);    //creating copy of object
    setting.departureDateUpdate = val.name;                        //updating value
    this.setState({setting});

}

handleCurSeasonOld = event => {
    const field = event.target.name
    const val = event.target.value

    this.props.settingActions.handleSettingField(field, val)

    //this.props.handleUnsavedEdit()
} 
//on Demand Call functions end*************************

//toogle logic  this is also sent to underlying component Tabs  below  , Tabs is imported above
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
                    notification={this.props.notification }
                  
                />

                  
             
                <Col sm="12" md="9" lg="9" xl="10">
                    <TabContent activeTab={this.state.activeTab}>
                    {this.state.setting && //if clause  what for load ready
                        <TabPane tabId="settings">
                        
                            <Setting
                       
                            setting={this.state.setting }
                           
                            handleApplyOpenSelect={this.handleApplyOpenSelect}

                            handleManagerCommentSelect={this.handleManagerCommentSelect}
                            
                            handleStaffApproveSelect={this.handleStaffApproveSelect}
                            
                            handleArrivalDateSelect={this.handleArrivalDateSelect}
                           
                            handleDepartureDateSelect={this.handleDepartureDateSelect}
                            
                            handleCurSeasonSelect={this.handleCurSeasonSelect}
                           
                            handleNextSeasonSelect={this.handleNextSeasonSelect}
                            
                            handleNextNextSeasonSelect={this.handleNextNextSeasonSelect}
                           
                            getSetting={this.props.settingActions.getSetting}
 
                            options={this.state.options}
                            seasons={this.state.seasons}
                         
                               save={this.save}
                               unsavedEdit={this.state.unsavedEdit}
                            />
                        </TabPane>
                        } 
                        <TabPane tabId="notification">
                            <Notification
                            
                              notification={this.props.notification }
                              selectedSetting={this.props.selectedSetting}
                             getNotification={this.props.notificationActions.getNotification}
                             handleSelectedSetting={this.props.handleSelectedSetting}
                             handleSelectedNotification={this.props.filterActions.handleSelectedNotification}
                            save={this.save}
                            edit={this.edit}
                            
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
    notification: state.notification.notification,
    selectedNotification: state.notification.notification.selectedNotification,
         selectedApplyOpen:state.setting.setting.selectedApplyOpen,
       //  selectedYear:state.report.report.selectedYear,
         //create:state.report.report.create
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //positionInfoActions: bindActionCreators(positionInfoActions, dispatch),
        settingActions: bindActionCreators(settingActions, dispatch),
        notificationActions: bindActionCreators(notificationActions, dispatch),
        filterActions: bindActionCreators(filterActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
