
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

class Reports extends Component {


    constructor(props) {
        super(props)
       
       
        this.state = {
            activeTab: 'planningReport',
            validDate:'',
         
            resetData: this.props.reportActions.handleReport,
            sourceMarketId: '',
            years: [    //not in use  delete
                {
                    id: '2018',
                    name: '2018'
                },
                {
                    id: '2019',
                    name: '2019'
                },
                {
                    id: '2020',
                    name: '2020'
                },
                {
                    id: '2021',
                    name: '2021'
                }
            ],
            unsavedEdit: false,
            position: null
        }

        // this.state = {
        //     activeTab: 'planningReport',
         
        //  resetData: this.props.reportActions.handleReport
        // }


    }
    componentDidMount=async()=>  {
        
        document.title = 'Reports'
        const _this = this
    
       
      this.props.reportActions.getResignDatesLookup();
      
  
        this.props.reportActions.getReport().then(function () {
           
    
           if (_this.props.report != null) {  
      
               document.title = 'Planning Report'
          }
           else {
     
              document.title = 'Report not found - GPX'
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




handleMonthSelect = (val) => {


   val = val != null || val != undefined ? val : ''  


  
  
  this.props.reportActions.handleResignDates(val) 

} 


  handleDestinationSelect = (val) => {


     val = val != null || val != undefined ? val : '' 
     
     

    this.props.reportActions.handleDestinationField(val)

    //this.props.handleUnsavedEdit()
} 
create = (destination) => {

    var currentdate = new Date()
    var newdatemodified =
      currentdate.getFullYear() +
      '-' +
      (currentdate.getMonth() + 1) +
      '-' +
      currentdate.getDate()


let model = destination? destination.map(x => {
    return {destination:x.destination}
  }

  ):[]

      //var model = [];
    // const model= {
    //    // resignDate:newdatemodified,
    //    destination:destination?[destination.destination]:[]
  
    //     //destination: [destination.destination]

    // }

    this.props.reportActions.createReport(model)
}

createOnboard = (destination) => {
    
    var currentdate = new Date()
    var newdatemodified =
      currentdate.getFullYear() +
      '-' +
      (currentdate.getMonth() + 1) +
      '-' +
      currentdate.getDate()

      let model = destination? destination.map(x => {
        return {destination:x.destination}
      }

      ):[]


    // const model= {
    //   //resignDate: newdatemodified,
    //  destination:destination?[destination.destination]:[]

    //   //destination: [destination.destination]

    // }
    this.props.reportActions.createOnboardReport(model)
}

createVacant = (destination) => {
    



    let model = destination? destination.map(x => {
        return {destination:x.destination}
      }

      ):[]

    // const model= {
    //   //resignDate:requestDate.appDate,
    //  destination:destination?destination.destination:[]

    //   //destination:destination? [destination.destination]

    // }
    this.props.reportActions.createVacantReport(model)
}

createResign = (requestDate,destination) => {
    
    
    // let model = destination? destination.map(x => {
    //     return {destination:x.destination}
    //   }

    //   ):[]

    var check= requestDate ? true: false


    if(!check){  
      this.setState({
        validDate:'Date´s missing'
      })
      
      return false;
    }
    this.setState({
      validDate:''
    })


    let model =destination? destination.map(x => {
        return {destination:x.destination, resignDate: requestDate.appDate}
      }

      ):[]

    // const model= {
    //   resignDate:requestDate.appDate,
    //  destination:destination?[destination.destination]:[]

    //   //destination: [destination.destination]

    // }
    this.props.reportActions.createResignReport(model)
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
                    years={this.state.years}
                  
                />
                <Col sm="12" md="9" lg="9" xl="10">
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="planningReport">
                            <PlanningReport
                                position={this.props.position }
                              selectedDestination={this.props.selectedDestination}
                              handleDestinationSelect={this.handleDestinationSelect}
                              years={this.state.years}
                             // selectedYear={this.props.selectedYear}
                              handleMonthSelect={this.handleMonthSelect}
                              create={this.create}
                            
                            /> 
                        </TabPane>
                        <TabPane tabId="resignReport">
                            <ResignReport
                            position={this.props.position }
                                resigndate={this.props.resigndate }
                              selectedDestination={this.props.selectedDestination}
                      
                                selectedResignDates={this.props.selectedResignDates}
                              handleDestinationSelect={this.handleDestinationSelect}
                              years={this.state.years}
                             // selectedYear={this.props.selectedYear}
                              handleMonthSelect={this.handleMonthSelect}
                             // getResignDates={this.props.reportActions.getResignDates}
                              createResign={this.createResign}
                              validDate={this.validDate}

                            />
                        </TabPane>
                        <TabPane tabId="vacantReport">
                            <VacantReport
                                position={this.props.position }
                                selectedDestination={this.props.selectedDestination}
                              handleDestinationSelect={this.handleDestinationSelect}
                              years={this.state.years}
                              selectedYear={this.props.selectedYear}
                              handleYearSelect={this.handleYearSelect}
                              create={this.create}
                              createVacant={this.createVacant}

                            />
                        </TabPane>
                        <TabPane tabId="onboardReport">
                            <OnBoardReport
                                position={this.props.position }
                                selectedDestination={this.props.selectedDestination}
                              handleDestinationSelect={this.handleDestinationSelect}
                              years={this.state.years}
                              selectedYear={this.props.selectedYear}
                              handleYearSelect={this.handleYearSelect}
                              create={this.create}
                              createOnboard={this.createOnboard}

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
        selectedDestination:state.report.report.selectedDestination,
        selectedResignDates:state.report.report.selectedResignDates,
        //selectedYear:state.report.report.selectedYear,
        create:state.report.report.create
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //positionInfoActions: bindActionCreators(positionInfoActions, dispatch),
        reportActions: bindActionCreators(reportActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reports)
