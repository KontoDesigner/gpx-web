import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'
import * as applicationInfoActions from '../../actions/applicationEdit/applicationInfoActions'
import WorkInfo from './workInfo'
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
            application: null
       
        }
    }

   componentWillMount=async()=>  {
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
    }

    save = () => {
        alert('not implemented')
    }

    render() {
        const buttons = <Buttons
        save={this.save}
         unsavedEdit={this.state.unsavedEdit}
     />
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
                        
                    </Row>

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
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    
    return {

        application: state.applicationEdit.applicationInfo.application,
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
