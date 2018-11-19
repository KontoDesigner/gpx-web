import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'
import * as notificationEditActions from '../../../actions/notificationEdit/notificationEditActions'
import NotificationInfo from './notificationInfo'
//import Buttons from '../buttons';
import $ from 'jquery'
import { toastr } from 'react-redux-toastr'
import RestClient from '../../../infrastructure/restClient'

class NotificationEdit extends Component {

    constructor(props) {
        super()

        const {
            match: { params }
        } = props
        const templatename = params.templatename 
       
        

        this.state = {
           
            templatename: templatename,
           // mplID: mplID,
            notification: null
       
        }
    }

   componentWillMount=async()=>  {
         const _this = this
 
       
        // this.props.employeeInfoActions.getAvailablePositions(this.props.currentSeason.name, this.props.nextSeason.name, this.props.followingSeason.name)
        // this.props.employeeInfoActions.getPositionAssigns(this.state.staffId)

         this.props.notificationEditActions.getNotification(this.state.templatename).then(function () {
     
            if (_this.props.notification != null) { 
               
                document.title = `${_this.props.notification.templatename}  `
           }
            else {
                
               document.title = 'Template not found - GPX'
           }
         })
    }


    save = async(model) => {
        // this.props.settingActions.save()
      
      debugger;
      try {
          const res =  await RestClient.Post('mail/updateTemplate', model)
      debugger;
     
      
          if (res) {
              toastr.success('Success', `Notification Document is updated`)
          } else {
              toastr.error('Error', `Could not update Notification document: ${res ? res.message : 'Error'}`)
          }
      } catch (error) {
     
      
          throw error
      }
      
      }


    handleInputField = event => {

        const field = event.target.name
        const val = event.target.value


        this.props.notificationEditActions.handleInputField(field, val)
 

             
      
    }  

    render() {
     
        if (this.props.notification === null) {
            //Loading
            return ''
        } else if (this.props.notification === undefined) {
            //Not found
            return (

                <Card>
                    <CardHeader>Could not find notification {this.state.templatename}</CardHeader>

                    <CardBody>
                        <p className="card-text">
                           notification with id: <b>{this.state.templatename}</b> was  not found. 
                        </p>
                    </CardBody>

                    <CardFooter>
                        <LinkContainer to="/settings">
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
                           
                               
                                    <NotificationInfo 
                                
                                        notification={this.props.notification}
                                        handleInputField={this.handleInputField}
                                        //handleUnsavedEdit={this.handleUnsavedEdit}
                                        save={this.save}
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

       notification: state.notificationEdit.notification 
        // notification: state.planningEdit.planningInfo.position,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //positionInfoActions: bindActionCreators(positionInfoActions, dispatch),
        notificationEditActions: bindActionCreators(notificationEditActions, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotificationEdit )
