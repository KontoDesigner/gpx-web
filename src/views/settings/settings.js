import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TabContent, TabPane, Row, Col } from 'reactstrap'
import Tabs from './tabs'
import * as notificationActions from '../../actions/notification/notificationActions'
import * as settingActions from '../../actions/setting/settingActions'
import { toastr } from 'react-redux-toastr'
import RestClient from '../../infrastructure/restClient'
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
handleUnsavedEdit = () => {
    if (this.state.unsavedEdit === false) {
        this.setState({
            unsavedEdit: true
        })
    }
}



handleYearSelect = (val) => {

    val = val != null || val != undefined ? val : ''  

   this.props.settingActions.handleYearField(val)

} 


save = async() => {
  // this.props.settingActions.save()
debugger;
  const model = {
   // id: this.props.setting.Id,
    settingid: this.props.setting.settingId,
    departureDateUpdate: this.state.departureDateSelect,
    arrivalDateUpdate: this.state.arrivalDateSelect,
    staffApprove: this.state.staffApprove,
    curSeason: this.state.curSeason,
    nextSeason: this.state.nextSeason,
    nextnextSeason: this.state.nextnextSeason,
    applyOpen: this.state.applyOpen,
    managerComments: this.state.mgrComment
}


try {
    const res =  await RestClient.Post('setting/updateSetting', model)
debugger;
   // dispatch(endAjaxCall())

    if (res) {
        toastr.success('Success', `Setting Document is updated`)
    } else {
        toastr.error('Error', `Could not update Setting document: ${res ? res.message : 'Error'}`)
    }
} catch (error) {
   // dispatch(ajaxCallError(error))

    throw error
}




   // await RestClient.Post('positionassign/deletepositionassign')

}

  handleApplyOpenSelect = (val) => { 
     
    this.setState({applyOpen:val.name})

} 

handleManagerCommentSelect = (val) => { 
     
    this.setState({mgrComment:val.name})

} 



handleStaffApproveSelect = (val) => { 
     
    this.setState({staffApprove:val.name})

}

handleArrivalDateSelect = (val) => { 
     
    this.setState({arrivalDateSelect:val.name})

}

handleCurSeasonSelect = (val) => { 
   
    this.setState({curSeason:val.name})

}

handleNextSeasonSelect = (val) => { 
     alert(val.name);
    this.setState({nextSeason:val.name})

}

handleNextNextSeasonSelect = (val) => { 
     
    this.setState({nextnextSeason:val.name})

}




handleDepartureDateSelect = (val) => { 
     
    this.setState({departureDateSelect:val.name})

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
       // const applyOpenGet = {id: this.props.setting.yesNoThanksOpen, labelKey: this.props.setting.yesNoThanksOpen}
          
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
                             atrin=  {<b>jwjwjw</b>}
                            setting={this.props.setting }
                            applyOpen={this.state.applyOpen}
                            handleApplyOpenSelect={this.handleApplyOpenSelect}
                            handleManagerCommentSelect={this.handleManagerCommentSelect}
                            mgrComment={this.state.mgrComment}
                            handleStaffApproveSelect={this.handleStaffApproveSelect}
                            staffApprove={this.state.staffApprove}
                            handleArrivalDateSelect={this.handleArrivalDateSelect}
                            arrivalDateSelect={this.state.arrivalDateSelect}
                            handleDepartureDateSelect={this.handleDepartureDateSelect}
                            departureDateSelect={this.state.departureDateSelect}
                            handleCurSeasonSelect={this.handleCurSeasonSelect}
                            curSeason={this.state.curSeason}
                            handleNextSeasonSelect={this.handleNextSeasonSelect}
                            nextSeason={this.state.nextSeason}
                            handleNextNextSeasonSelect={this.handleNextNextSeasonSelect}
                            nextnextSeason={this.state.nextnextSeason}
                            // handleNextNextSeason={this.handleNextNextSeason}
                            //applyOpenGet={applyOpenGet}
 
                            options={this.state.options}
                            seasons={this.state.seasons}
                            //   selectedYear={this.props.selectedYear}
                            //   handleYearSelect={this.handleYearSelect}
                               save={this.save}
                               unsavedEdit={this.state.unsavedEdit}
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
