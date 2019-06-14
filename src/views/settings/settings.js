import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TabContent, TabPane, Row, Col } from 'reactstrap'
import Tabs from './tabs'
import * as notificationActions from '../../actions/notification/notificationActions'
import * as settingActions from '../../actions/setting/settingActions'
//import * as settingWorkActions from '../../actions/setting/settingWorkActions'
import * as keywordsActions from '../../actions/setting/keywordsActions'
import * as filterActions from '../../actions/setting/filterActions'

import { toastr } from 'react-redux-toastr'
import RestClient from '../../infrastructure/restClient'
import Notification from './notification/cfgNotification'
import Keywords from './keywords/cfgKeywords'
import Setting from './setting/cfgSetting'

import $ from 'jquery'
import RemoveTemplate from './notification/removeTemplate'
//import Buttons from './buttons'

class Settings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            jobFamiliesWork:[],
            acceptDeclineSeason:[],
            acceptDeclineCountry:[],
            jobTitlesWork:[],
            templateName: null,
            
            activeTab: 'settings',
            resetData: this.props.settingActions.handleSetting,
            removeStaffModal: false,

            sourceMarketId: '',

            options: [
                {
                    id: 'No',
                    name: 'No'
                },

                {
                    id: 'Yes',
                    name: 'Yes'
                }
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
                {
                    id: 'S20',
                    name: 'S20'
                }
            ],

            unsavedEdit: false,
            setting: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleChange3 = this.handleChange3.bind(this)
        this.handleChange4 = this.handleChange4.bind(this)
    }

    toogleRemoveStaffModal = val => {
        debugger
        if (val) {
            this.setState({
                removeStaffModal: !this.state.removeStaffModal,
                templateName: val
            })
        } else {
            this.setState({
                removeStaffModal: !this.state.removeStaffModal,
                selectedStaffID: this.props.selectedStaff
            })
        }
    }

    removeTemplate = async model => {
        debugger
        let templateModel = {
            TemplateName: this.state.templateName,
            DateModified: model.dateModified
        }

        const _this = this

        this.props.settingActions.removeTemplate(templateModel).then(function() {
            _this.props.notificationActions.getNotification()
        })

        // this.getActTabAndRequest(this.state.activeTab)
    }

    componentWillMount = async () => {
        document.title = 'Settings'
        const _this = this

        // this.props.notificationActions.getNotification()
        _this.props.settingActions.getSetting().then(function() {
            if (_this.props.setting != null) {
                // document.title = `Settings   ${_this.props.setting.settingId } `

              // const settingWork=state.settingWork.settingWork !== '' ? state.settingWork.settingWork.jobFamiliesWork.split(',') : []
                debugger;



                document.title = `Settings   `
            } else {
                document.title = 'General Settings not found - GPX'
            }

            _this.setState({ loaded: true, setting: _this.props.setting })
            _this.setState({ jobFamiliesWork: _this.props.setting.jobFamiliesWork })
            _this.setState({ acceptDeclineSeason: _this.props.setting.acceptDeclineSeason })
            _this.setState({ acceptDeclineCountry: _this.props.setting.acceptDeclineCountry })
            _this.setState({ jobTitlesWork: _this.props.setting.jobTitlesWork })
        })
    }

    // componentDidMount() {
    //     this.setState({ jobFamiliesWork: this.props.setting.jobFamiliesWork })
    // }

    //on Demand Call start functions*************************
    handleUnsavedEdit = () => {
        if (this.state.unsavedEdit === false) {
            this.setState({
                unsavedEdit: true
            })
        }
    }

    edit = notification => {
        debugger
        const win = window.open(`/notification/${notification.templateName}`, '_this')

        win.focus()
    }

    edit2 = keywords => {
        debugger
        const win = window.open(`/keywords/${keywords.keywordName}`, '_this')

        win.focus()
    }

    save = async model => {
        debugger;
        const jobFamiliesWork = this.state.jobFamiliesWork.map(function(m) {
            return m.id
        })


      

        const acceptDeclineCountry = this.state.acceptDeclineCountry.map(function(m) {
            return m.id
        })

        const acceptDeclineSeason = this.state.acceptDeclineSeason.map(function(m) {
            return m.id
        })

  

        const jobTitlesWork = this.state.jobTitlesWork.map(function(m) {
            return m.id
        })
 
        let cleanModel = {}

        cleanModel.settingid= model.settingid,
        cleanModel.departureDateUpdate= model.departureDateUpdate,
        cleanModel.arrivalDateUpdate= model.arrivalDateUpdate,
        cleanModel.staffApprove= model.staffApprove,
        cleanModel.curSeason= model.curSeason,
        cleanModel.nextSeason=model.nextSeason,
        cleanModel.nextNextSeason=model.nextNextSeason,
        cleanModel.applyOpen= model.applyOpen,
        cleanModel.managerComments= model.managerComments,
        cleanModel.acceptDeclineOpen= model.acceptDeclineOpen,
        cleanModel.jobFamiliesWork=jobFamiliesWork? jobFamiliesWork.join():null,
        cleanModel.jobTitlesWork=jobTitlesWork? jobTitlesWork.join():null,
        cleanModel.acceptDeclineSeason=acceptDeclineSeason? acceptDeclineSeason.join():null,
        cleanModel.acceptDeclineCountry=acceptDeclineCountry? acceptDeclineCountry.join():null

        debugger;
        try {
            const res = await RestClient.Post('setting/updateSetting', cleanModel)

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

    handleMultiSelect = (field, val) => {
        debugger
        if (val) {
            this.props.settingActions.handleSettingField2(field, val)
        } else {
            this.props.settingActions.handleSettingField2(field, null)
        }
    }

    handleYearSelect = val => {
        val = val != null || val != undefined ? val : ''

        this.props.settingActions.handleYearField(val)
    }

    handleApplyOpenSelect = val => {
        let setting = Object.assign({}, this.state.setting) //creating copy of object
        setting.applyOpen = val.name //updating value
        this.setState({ setting })
    }

    handleAcceptDeclineOpenSelect = val => {
        let setting = Object.assign({}, this.state.setting) //creating copy of object
        setting.acceptDeclineOpen = val.name //updating value
        this.setState({ setting })
    }

    handleManagerCommentSelect = val => {
        let setting = Object.assign({}, this.state.setting) //creating copy of object
        setting.managerComments = val.name //updating value
        this.setState({ setting })
    }

    handleStaffApproveSelect = val => {
        let setting = Object.assign({}, this.state.setting) //creating copy of object
        setting.staffApprove = val.name //updating value
        this.setState({ setting })
    }

    
    handleJobFamiliesSelect = val => {
        let setting = Object.assign({}, this.state.setting) //creating copy of object
        setting.jobFamilies = val.name //updating value
        this.setState({ setting })
    }

    handleArrivalDateSelect = val => {
        let setting = Object.assign({}, this.state.setting) //creating copy of object
        setting.arrivalDateUpdate = val.name //updating value
        this.setState({ setting })
    }

    handleCurSeasonSelect = val => {
        let setting = Object.assign({}, this.state.setting) //creating copy of object
        setting.curSeason = val.name //updating value
        this.setState({ setting })
    }

    handleNextSeasonSelect = val => {
        let setting = Object.assign({}, this.state.setting) //creating copy of object
        setting.nextSeason = val.name //updating value
        this.setState({ setting })
    }

    handleNextNextSeasonSelect = val => {
        let setting = Object.assign({}, this.state.setting) //creating copy of object
        setting.nextNextSeason = val.name //updating value
        this.setState({ setting })
    }

    handleDepartureDateSelect = val => {
        let setting = Object.assign({}, this.state.setting) //creating copy of object
        setting.departureDateUpdate = val.name //updating value
        this.setState({ setting })
    }

    handleChange(event,val) {
        debugger;
        this.setState({ jobFamiliesWork: val })
    }

    handleChange2(event,val) {
        debugger;
        this.setState({ acceptDeclineSeason: val })
    }

    handleChange3(event,val) {
        debugger;
        this.setState({ acceptDeclineCountry: val })
    }
    handleChange4(event,val) {
        debugger;
        this.setState({ jobTitlesWork: val })
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
        debugger
        if (this.state.activeTab !== tab) {
            //Reset current tab state
            debugger
            // this.state.resetData([])
            debugger
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
        debugger
        return (
            <Row>
                <Tabs
                    toggle={this.toggle}
                    activeTab={this.state.activeTab}
                    getSetting={this.props.settingActions.getSetting}
                    getKeywords={this.props.keywordsActions.getKeywords}
                    handleKeywords={this.props.keywordsActions.handleKeywords}
                    handleSetting={this.props.settingActions.handleSetting}
                    getNotification={this.props.notificationActions.getNotification}
                    handleNotification={this.props.notificationActions.handleNotification}
                    options={this.state.options}
                    notification={this.props.notification}
                    keywords={this.props.keywords}
                />

                <RemoveTemplate
                    modal={this.state.removeStaffModal}
                    toggle={this.toogleRemoveStaffModal}
                    templateName={this.state.templateName}
                    removeTemplate={this.removeTemplate}
                    //   selectedTitle={this.props.selectedTitle}
                    //   candidate={this.props.candidate}
                    selectedStaffID={this.state.selectedStaffID}
                />

                <Col sm="12" md="9" lg="9" xl="10">
                    <TabContent activeTab={this.state.activeTab}>
                        {this.state.setting && ( //if clause  what for load ready
                            <TabPane tabId="settings">
                                <Setting
                                    handleMultiSelect={this.handleMultiSelect}
                                    setting={this.state.setting}
                                    handleChange = {this.handleChange}
                                    handleChange2 = {this.handleChange2}
                                    handleChange3 = {this.handleChange3}
                                    handleChange4 = {this.handleChange4}
                                    jobFamilies={this.props.jobFamilies}
                                    jobTitles={this.props.jobTitles}
                                    countries={this.props.countries}
                                    //settingWork={this.props.settingWork}
                                    setting2={this.props.setting2}
                                   jobFamiliesWork={this.state.jobFamiliesWork}
                                   jobTitlesWork={this.state.jobTitlesWork}
                                   acceptDeclineSeason={this.state.acceptDeclineSeason}
                                   acceptDeclineCountry={this.state.acceptDeclineCountry}
                                    handleApplyOpenSelect={this.handleApplyOpenSelect}
                                    handleJobFamiliesSelect={this.handleJobFamiliesSelect}
                                    handleManagerCommentSelect={this.handleManagerCommentSelect}
                                    handleStaffApproveSelect={this.handleStaffApproveSelect}
                                    handleArrivalDateSelect={this.handleArrivalDateSelect}
                                    handleDepartureDateSelect={this.handleDepartureDateSelect}
                                    handleCurSeasonSelect={this.handleCurSeasonSelect}
                                    handleNextSeasonSelect={this.handleNextSeasonSelect}
                                    handleNextNextSeasonSelect={this.handleNextNextSeasonSelect}
                                    handleAcceptDeclineOpenSelect={this.handleAcceptDeclineOpenSelect}
                                
                                    getSetting={this.props.settingActions.getSetting}
                                    options={this.state.options}
                                    seasons={this.props.seasons}
                                    save={this.save}
                                    unsavedEdit={this.state.unsavedEdit}
                                />
                            </TabPane>
                        )}
                        <TabPane tabId="notification">
                            <Notification
                                notification={this.props.notification}
                                selectedSetting={this.props.selectedSetting}
                                //  getNotification={this.props.notificationActions.getNotification}
                                handleSelectedSetting={this.props.handleSelectedSetting}
                                handleSelectedNotification={this.props.filterActions.handleSelectedNotification}
                                toogleRemoveStaffModal={this.toogleRemoveStaffModal}
                                save={this.save}
                                edit={this.edit}
                            />
                        </TabPane>
                        <TabPane tabId="keywords">
                            <Keywords
                                keywords={this.props.keywords}
                                selectedSetting={this.props.selectedSetting}
                                //getKeywords={this.props.keywordsActions.getKeywords}
                                handleSelectedSetting={this.props.handleSelectedSetting}
                                handleSelectedKeywords={this.props.filterActions.handleSelectedKeywords}
                                // toogleReResignStaffModal={this.toogleReResignStaffModal}

                                edit2={this.edit2}
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
        selectedKeywords: state.setting.keywords.keywords.selectedKeywords,
        selectedApplyOpen: state.setting.setting.selectedApplyOpen,
        keywords: state.setting.keywords.keywords,
        jobFamilies: state.setting.setting.jobFamilies,
        jobTitles: state.setting.setting.jobTitle,
        seasons: state.geography.seasons,
        countries: state.setting.setting.country
        //settingWork: state.settingWork.settingWork
        
        //  selectedYear:state.report.report.selectedYear,
        //create:state.report.report.create
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //positionInfoActions: bindActionCreators(positionInfoActions, dispatch),
        settingActions: bindActionCreators(settingActions, dispatch),
        //settingWorkActions: bindActionCreators(settingWorkActions, dispatch),
        keywordsActions: bindActionCreators(keywordsActions, dispatch),
        notificationActions: bindActionCreators(notificationActions, dispatch),
        filterActions: bindActionCreators(filterActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings)
