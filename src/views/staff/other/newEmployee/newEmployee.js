import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import PersonTable from './personTable'
import Filter from '../../filter'
import Action from '../../action'

class NewEmployee extends Component {


    render() {
        const maxTableHeight = 550

        const style = {
            height: `${42 + this.props.newEmployee.length * 41}px`,
            maxHeight: `${maxTableHeight}px`
        }

        return (
            <Card className="card-accordion card-country">
                <CardHeader>New Employee</CardHeader>
                <CardBody className="no-padding-bottom">
             
                <div className="form-row"> 
           <Filter getData={this.props.getNewEmployee} /> 

            <Action 
            selected={this.props.selectedStaff} 
            toogleAbsentStaffModal={this.props.toogleAbsentStaffModal}
            toogleResignStaffModal={this.props.toogleResignStaffModal}
            toogleSendMailModal={this.props.toogleSendMailModal}
            /> 
          </div>
                {this.props.newEmployee.length > 0 && (
                    <CardBody style={style} className="card-body-table">
                        <PersonTable
                            index={this.props.index}
                            newEmployee={this.props.newEmployee}
                            handleSelectedStaff={this.props.handleSelectedStaff}
                            selectedStaff={this.props.selectedStaff}
                            edit={this.props.edit}
                            maxTableHeight={maxTableHeight}
                        />
                    </CardBody>
                )} 
          </CardBody>
            </Card>
        )
    }
}

export default NewEmployee
