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

class NotificationEdit extends Component {   //Notification smart component

    constructor(props) {
        super(props)

        const {
            match: { params }
        } = props
        const templatename = params.templatename 
       
        

        this.state = {
            languages:"English",
            templatename: templatename,
           // mplID: mplID,
            notification: null,
            selectedNotification:null,
           // resetContent:document.getElementById("content")       
       
 

            // autoWords: [
            //     {
            //         id: 'FirstName',
            //         name: 'FirstName'
            //     },

            //     {
            //         id: 'LastName',
            //         name: 'LastName'
            //     },

            
            //     {
            //         id: 'FormName',
            //         name: 'FormName'
            //     },

            //     {
            //         id: 'NextDestination',
            //         name: 'NextDestination'
            //     },
            //     {
            //         id: 'NextResort',
            //         name: 'NextResort'
            //     },
            //     {
            //         id: 'NextPosition',
            //         name: 'NextPosition'
            //     },
            //     {
            //         id: 'Placement Effective Date',
            //         name: 'Placement Effective Date'
            //     },
            //     {
            //         id: 'Last Work Date',
            //         name: 'Last Work Date'
            //     },

            //     {
            //         id: 'CentralID',
            //         name: 'CentralID'
            //     },

            //     {
            //         id: 'Nationality',
            //         name: 'Nationality'
            //     },

            //     {
            //         id: 'Current Position',
            //         name: 'Current Position'
            //     },

            //     {
            //         id: 'Current Destination',
            //         name: 'Current Destination'
            //     },
         
            // ]

         
       
        }

    
    }

    undoSelection=()=>{
        debugger;
        
        
            var txtarea = document.getElementById("content");
        
            var start = txtarea.selectionStart;
        
            var finish = txtarea.selectionEnd;
        
            var allText = txtarea.value;
        
            var sel = allText.substring(start, finish);
        
            var newText=allText.substring(0, start)+this.state.resetContent+allText.substring(finish, allText.length);
        
            console.log(newText);
        
            txtarea.value=newText;
        }

    getSelection=(val)=>{



    var txtarea = document.getElementById("content");


     debugger;
    var start = txtarea.selectionStart;

    var finish = txtarea.selectionEnd;

    var allText = txtarea.value;

    var sel = allText.substring(start, finish);

    var newText=allText.substring(0, start)+val+allText.substring(finish, allText.length);


    txtarea.value=newText;
}





   componentWillMount=async()=>  {
         const _this = this

       
        // this.props.employeeInfoActions.getAvailablePositions(this.props.currentSeason.name, this.props.nextSeason.name, this.props.followingSeason.name)
        // this.props.employeeInfoActions.getPositionAssigns(this.state.staffId)

         this.props.notificationEditActions.getNotification(this.state.templatename).then(function () {
     
            if (_this.props.notification != null) { 
               
                document.title = `${_this.props.notification.templateName}  `
           }
            else {
                
               document.title = 'Template not found - GPX'
           }
         })
    }


    save = async(model) => {
        // this.props.settingActions.save()
      
      
      try {
          const res =  await RestClient.Post('mail/updateTemplate', model)
      
          window.close()
      
          if (res) {
              toastr.success('Success', `Notification Document is updated`)
          } else {
              toastr.error('Error', `Could not update Notification document: ${res ? res.message : 'Error'}`)
          }
      } catch (error) {
     
      
          throw error
      }
      
      }

    //   handleChange(event) {

    //     this.setState({value: event.target.value});
    //   }



    handleInputField = event => {

        const field = event.target.name
        const val = event.target.value


        this.props.notificationEditActions.handleInputField(field, val)
 

             
      
    } 

    
    actionChange = id => {
        debugger;

        // this.setState({
        //     validKeywordName: 'Please select a Keyword Type'
      
        // })

        const selectedNotification = id ? id.name:null

        this.setState({
            selectedNotification ,
            // validKeywordName: '',
            // validKeywordValues: ''
        })
        debugger
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
                                      
                                        languages={this.state.languages}
                                        notification={this.props.notification}
                                        handleInputField={this.handleInputField}
                                        actionChange={this.actionChange}
                                        getSelection={this.getSelection}
                                        undoSelection={this.undoSelection}
                                     
                                        styles={this.styles}
                                      
                                        selectedNotification={this.state.selectedNotification}
                                        
                                        //handleChange={this.handleChange}
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
