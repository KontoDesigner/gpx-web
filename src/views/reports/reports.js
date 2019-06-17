import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { TabContent, TabPane, Row, Col } from 'reactstrap'
import Tabs from './tabs'
import PlanningReport from './reports/planning/report'
import ResignReport from './reports/resign/report'
import VacantReport from './reports/vacant/report'
import OnBoardReport from './reports/onboard/report'
import PlacementReport from './reports/placement/report'
import * as reportActions from '../../actions/report/reportActions'
import RestClient from '../../infrastructure/restClient'
import * as ajaxStatusActions from '../../actions/ajaxStatusActions'

class Reports extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: 'planningReport',
            validDate: '',
            vacantDisabled: false,
            yearsArr : [],
            valueSingle: '',
            resetData: this.props.reportActions.handleReport,
            sourceMarketId: '',
            details: [
                //not in use  delete
                {
                    id: 'MissingMgrComments',
                    name: 'MissingMgrComments'
                },
                {
                    id: 'MissingApplications',
                    name: 'MissingApplications'
                }
            
            ],
            unsavedEdit: false,
            position: null
        }

        // this.state = {
        //     activeTab: 'planningReport',

        //  resetData: this.props.reportActions.handleReport
        // }

        this.handleChangeSelect = this.handleChangeSelect.bind(this)
    }
    componentDidMount = async () => {
        const years= this.props.keywordslookup.filter(ap => ap.ids === 'Years')[0];
         const yearsArr = years.keywordValues.split(',')

        const yearsObjArr = yearsArr.map(s => ({
            id: s,
            name: s
         }))

         if (years !== undefined) {
        
               
            this.setState({yearsArr: yearsObjArr })
     }


        document.title = 'Reports'
        const _this = this

        this.props.reportActions.getResignDatesLookup()

        this.props.reportActions.getReport().then(function() {
            document.title = 'Reports'

            _this.setState({ loaded: true })
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

    handleChangeSelect(event) {
        debugger;
       if(event==null){
        this.setState({ valueSingle: '' })
        return false;
       }

        debugger
        this.setState({ valueSingle: event.id })
    }


    handleMonthSelect = val => {
        val = val != null || val != undefined ? val : ''

        this.props.reportActions.handleResignDates(val)
    }

    handleDestinationSelect = val => {
        val = val != null || val != undefined ? val : ''

        this.props.reportActions.handleDestinationField(val)

        //this.props.handleUnsavedEdit()
    }

    handleSeasonSelect = val => {
        val = val != null || val != undefined ? val : ''

        this.props.reportActions.handleSeasonField(val)

        //this.props.handleUnsavedEdit()
    }
    create = async destination => {
        var currentdate = new Date()
        var newdatemodified = currentdate.getFullYear() + '-' + (currentdate.getMonth() + 1) + '-' + currentdate.getDate()

        let model = destination
            ? destination.map(x => {
                  return { destination: x.destination }
              })
            : []



       await this.props.reportActions.createReport(model)
    }


    createPlacement = async (season, details) => {
        debugger;
        var currentdate = new Date()
        var newdatemodified = currentdate.getFullYear() + '-' + (currentdate.getMonth() + 1) + '-' + currentdate.getDate()

        let model = season
        ? season.map(x => {
              return { season: x.id, details: details }
          }) 
        : []
        const res = await  this.props.reportActions.createPlacementReport(model)
    }

    createOnboard = async destination => {
        debugger
        var currentdate = new Date()
        var newdatemodified = currentdate.getFullYear() + '-' + (currentdate.getMonth() + 1) + '-' + currentdate.getDate()

        let model = destination
            ? destination.map(x => {
                  return { destination: x.destination }
              })
            : []
debugger;
        // const model= {
        //   //resignDate: newdatemodified,
        //  destination:destination?[destination.destination]:[]

        //   //destination: [destination.destination]

        // }
        debugger;
        const res = await  this.props.reportActions.createOnboardReport(model)
    }

    createVacant = async destination => {
        this.props.ajaxStatusActions.beginAjaxCall()

        let model = destination
            ? destination.map(x => {
                  return { destination: x.destination }
              })
            : []

        // const model= {
        //   //resignDate:requestDate.appDate,
        //  destination:destination?destination.destination:[]

        //   //destination:destination? [destination.destination]

        // }
        await this.props.reportActions.createVacantReport(model)

        this.props.ajaxStatusActions.endAjaxCall()

        this.setState({
            vacantDisabled: true
        })
    }

    createResign = async (requestDate, destination) => {
        // let model = destination? destination.map(x => {
        //     return {destination:x.destination}
        //   }

        //   ):[]

        var check = requestDate ? true : false

        if (!check) {
            this.setState({
                validDate: 'Date´s missing'
            })

            return false
        }
        this.setState({
            validDate: ''
        })

        let model = destination
            ? destination.map(x => {
                  return { destination: x.destination, resignDate: requestDate.appDate }
              })
            : []

        // const model= {
        //   resignDate:requestDate.appDate,
        //  destination:destination?[destination.destination]:[]

        //   //destination: [destination.destination]

        // }
      
        await this.props.reportActions.createResignReport(model)
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
        return (
            <Row>
                <Tabs
                    toggle={this.toggle}
                    activeTab={this.state.activeTab}
                    getReport={this.props.reportActions.getReport}
                    getResignDates={this.props.reportActions.getResignDates}
                    handleReport={this.props.reportActions.handleReport}
                      //years={this.state.years}
                      years={this.state.yearsArr}
                />
                <Col sm="12" md="9" lg="9" xl="10">
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="planningReport">
                            <PlanningReport
                                position={this.props.position}
                                selectedDestination={this.props.selectedDestination}
                                handleDestinationSelect={this.handleDestinationSelect}
                              //years={this.state.years}
                              years={this.state.yearsArr}
                                // selectedYear={this.props.selectedYear}
                                handleMonthSelect={this.handleMonthSelect}
                                create={this.create}
                            />
                        </TabPane> 
                        <TabPane tabId="resignReport">
                            <ResignReport
                                position={this.props.position}
                                resigndate={this.props.resigndate}
                                selectedDestination={this.props.selectedDestination}
                                selectedResignDates={this.props.selectedResignDates}
                                handleDestinationSelect={this.handleDestinationSelect}
                                 //years={this.state.years}
                                 years={this.state.yearsArr}
                                // selectedYear={this.props.selectedYear}
                                handleMonthSelect={this.handleMonthSelect}
                                // getResignDates={this.props.reportActions.getResignDates}
                                createResign={this.createResign}
                                validDate={this.validDate}
                            />
                        </TabPane>
                        <TabPane tabId="vacantReport">
                            <VacantReport
                                position={this.props.position}
                                selectedDestination={this.props.selectedDestination}
                                handleDestinationSelect={this.handleDestinationSelect}
                                 //years={this.state.years}
                                 years={this.state.yearsArr}
                                selectedYear={this.props.selectedYear}
                                handleYearSelect={this.handleYearSelect}
                                create={this.create}
                                createVacant={this.createVacant}
                                vacantDisabled={this.state.vacantDisabled}
                            />
                        </TabPane>
                        <TabPane tabId="onboardReport">
                            <OnBoardReport
                                position={this.props.position}
                                selectedDestination={this.props.selectedDestination}
                                handleDestinationSelect={this.handleDestinationSelect}
                                  //years={this.state.years}
                                  years={this.state.yearsArr}
                                selectedYear={this.props.selectedYear}
                                handleYearSelect={this.handleYearSelect}
                                create={this.create}
                                createOnboard={this.createOnboard}
                            />
                        </TabPane>

                        <TabPane tabId="placementRequestReport">
                            <PlacementReport
                                position={this.props.position}
                                seasons={this.props.seasons} 
                                selectedDestination={this.props.selectedDestination}
                                handleDestinationSelect={this.handleDestinationSelect}
                                selectedSeason={this.props.selectedSeason}
                                handleSeasonSelect={this.handleSeasonSelect}
                                handleChangeSelect={this.handleChangeSelect}
                                //years={this.state.years}
                               years={this.state.yearsArr}
                               details={this.state.details}
                               valueSingle={this.state.valueSingle}
                                selectedYear={this.props.selectedYear}
                                handleYearSelect={this.handleYearSelect}
                                create={this.create}
                                createPlacement={this.createPlacement}
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
        resigndate: state.report.report.resigndates,
        position: state.report.report.report,
        selectedDestination: state.report.report.selectedDestination,
        selectedSeason: state.report.report.selectedSeason,
        selectedResignDates: state.report.report.selectedResignDates,
        //selectedYear:state.report.report.selectedYear,
        create: state.report.report.create,
        seasons: state.geography.seasons,
        keywordslookup: state.setting.keywords.keywordslookup
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //positionInfoActions: bindActionCreators(positionInfoActions, dispatch),
        ajaxStatusActions: bindActionCreators(ajaxStatusActions, dispatch),
        reportActions: bindActionCreators(reportActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reports)
