import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col,Button } from 'reactstrap'
import TextInput from '../../../components/textInput'
import Select from 'react-select'
import KeywordsTable from './keywordsTable'
import Action from '../action'
import Filter from '../filter'
import Datetime from 'react-datetime'


class Keywords extends Component {   // This is the Keywords view smart component page
    toggleCollapse = () => {
        this.setState({ expanded: !this.state.expanded })
    }

 

    render() {

         
       const maxTableHeight = 550

        const style = {
            height: `${42 + this.props.keywords.length * 41}px`,
            maxHeight: `${maxTableHeight}px`
        }

        return (
            <Card className="card-accordion card-country">
                <CardHeader>Keywords</CardHeader>
                <CardBody className="no-padding-bottom">
                <div className="form-row">
           {<Filter getData={this.props.getKeywords} />  }

            { 
            <Action 
            selected={this.props.selectedKeywords} 
            /> 
        }
          </div>
      
                {this.props.keywords.length > 0 && (
                 
                    <CardBody style={style} className="card-body-table">
                        <KeywordsTable 
                             index={this.props.index}
                             keywords={this.props.keywords}
                        //     handleSelectedNotification={this.props.handleSelectedNotification}
                        //      selectedNotification={this.props.selectedNotification}
                            edit={this.props.edit}
                          
                        //    modal={this.props.reResignStaffModal}
                        //    toogleReResignStaffModal={this.props.toogleReResignStaffModal}
                        //    templateName={this.props.templateName}
                        //    selectedSetting={this.props.selectedSetting}
                        //    handleSelectedSetting={this.props.handleSelectedSetting}
                            maxTableHeight={maxTableHeight}
                        />
                    </CardBody>
                )}
                 </CardBody>
            </Card>
        )
    }
}

export default Keywords