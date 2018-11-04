import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'
import * as notificationInfoActions from '../../actions/notification/notificationInfoActions'
import NotificationInfo from './notificationInfo/noticationInfo'
//import Buttons from './buttons';


class NotificationEdit extends Component {

    constructor(props) {
        super()

        const {
            match: { params }
        } = props
        const mplid = params.mplid 
       
        

        this.state = {
            mplid: mplid,
           // mplID: mplID,
            position: null
       
        }
    }

   componentWillMount=async()=>  {
         const _this = this
         debugger;
        
        // this.props.employeeInfoActions.getAvailablePositions(this.props.currentSeason.name, this.props.nextSeason.name, this.props.followingSeason.name)
        // this.props.employeeInfoActions.getPositionAssigns(this.state.staffId)

         this.props.notificationInfoActions.getNotification(this.state.templateName).then(function () {
          
            if (_this.props.position != null) { 
               
                document.title = `${_this.props.notification.templateName}  `
           }
            else {
                
               document.title = 'Template not found - GPX'
           }
         })
    }

    save = () => {
        alert('not implemented')
    }

    render() {
    //     const buttons = <Buttons
    //     save={this.save}
    //     unsavedEdit={this.state.unsavedEdit}
    // />
        if (this.props.notification === null) {
            //Loading
            return ''
        } else if (this.props.notification === undefined) {
            //Not found
            return (

                <Card>
                    <CardHeader>Could not find notification {this.state.templateName}</CardHeader>

                    <CardBody>
                        <p className="card-text">
                           Position with id: <b>{this.state.templateName}</b> was  not found. 
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

        position: state.notificationEdit.notificationInfo.notification,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //positionInfoActions: bindActionCreators(positionInfoActions, dispatch),
        notificationInfoActions: bindActionCreators(notificationInfoActions, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotificationEdit )
