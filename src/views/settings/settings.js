import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TabContent, TabPane, Row, Col } from 'reactstrap'
import Tabs from './tabs'
import * as notificationActions from '../../actions/notification/notificationActions'
import * as settingActions from '../../actions/setting/settingActions'
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
                }
            ],

            unsavedEdit: false,
            setting: null
        }
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
                document.title = `Settings   `
            } else {
                document.title = 'General Settings not found - GPX'
            }

            _this.setState({ loaded: true, setting: _this.props.setting })
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
       
        const jobFamiliesWork = model.jobFamiliesWork.map(function(m) {
            return m.id
        })
        
        let cleanModel = {}

        cleanModel.settingid= model.settingId,
        cleanModel.departureDateUpdate= model.departureDateUpdate,
        cleanModel.arrivalDateUpdate= model.arrivalDateUpdate,
        cleanModel.staffApprove= model.staffApprove,
        cleanModel.curSeason= model.curSeason,
        cleanModel.nextSeason=model.nextSeason,
        cleanModel.nextNextSeason=model.nextNextSeason,
        cleanModel.applyOpen= model.applyOpen,
        cleanModel.managerComments= model.managerComments,
        cleanModel.jobFamiliesWork= jobFamiliesWork 
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
                                    jobFamilies={this.props.jobFamilies}
                                    jobFamiliesWork={this.props.jobFamiliesWork}
                                    handleApplyOpenSelect={this.handleApplyOpenSelect}
                                    handleJobFamiliesSelect={this.handleJobFamiliesSelect}
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
        jobFamiliesWork: state.setting.setting.jobFamiliesWork,
        //  selectedYear:state.report.report.selectedYear,
        //create:state.report.report.create
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //positionInfoActions: bindActionCreators(positionInfoActions, dispatch),
        settingActions: bindActionCreators(settingActions, dispatch),
        keywordsActions: bindActionCreators(keywordsActions, dispatch),
        notificationActions: bindActionCreators(notificationActions, dispatch),
        filterActions: bindActionCreators(filterActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings)
