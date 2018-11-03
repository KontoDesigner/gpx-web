import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col,Button } from 'reactstrap'
import TextInput from '../../../components/textInput'
import Select from 'react-select'
import TemplateTable from './templateTable'
import Action from '../action'

import Datetime from 'react-datetime'


class Notification extends Component {
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
 
                <div className="form-row">
           {/* <Filter getData={this.props.getNotification} />  */}

            {/* <Action selected={this.props.selectedNotification} /> */}
          </div>
                {this.props.notification.length > 0 && (
                    <CardBody style={style} className="card-body-table">
                        <TemplateTable  
                             index={this.props.index}
                             notification={this.props.notification}
                            handleNotification={this.props.handleSelectedNotification}
                             selectedNotification={this.props.selectedNotification}
                           edit={this.props.edit}
                            maxTableHeight={maxTableHeight}
                        />
                    </CardBody>
                )}
            </Card>
        )
    }
}

export default Notification