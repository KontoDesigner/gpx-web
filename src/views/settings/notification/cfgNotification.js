import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col,Button } from 'reactstrap'
import TextInput from '../../../components/textInput'
import Select from 'react-select'
import TemplateTable from './templateTable'
import Action from '../action'
import Filter from '../filter'
import Datetime from 'react-datetime'


class Notification extends Component {   // This is the Notification view smart component page
    toggleCollapse = () => {
        this.setState({ expanded: !this.state.expanded })
    }

 

    render() {

         
       const maxTableHeight = 550

        const style = {
            height: `${42 + this.props.notification.length * 41}px`,
            maxHeight: `${maxTableHeight}px`
        }

        return (
            <Card className="card-accordion card-country">
                <CardHeader>Notifications</CardHeader>
                <CardBody className="no-padding-bottom">
                <div className="form-row">
           {<Filter getData={this.props.getNotification} />  }

            { 
            <Action 
            selected={this.props.selectedNotification} 
            /> 
        }
          </div>
                {this.props.notification.length > 0 && (
                    <CardBody style={style} className="card-body-table">
                        <TemplateTable  
                             index={this.props.index}
                             notification={this.props.notification}
                            handleSelectedNotification={this.props.handleSelectedNotification}
                             selectedNotification={this.props.selectedNotification}
                           edit={this.props.edit}
                          
                           modal={this.props.removeStaffModal}
                           toogleRemoveStaffModal={this.props.toogleRemoveStaffModal}
                           templateName={this.props.templateName}
                           selectedSetting={this.props.selectedSetting}
                           handleSelectedSetting={this.props.handleSelectedSetting}
                            maxTableHeight={maxTableHeight}
                        />
                    </CardBody>
                )}
                 </CardBody>
            </Card>
        )
    }
}

export default Notification