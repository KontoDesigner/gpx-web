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
 
                <div className="form-row"> 
           <Filter getData={this.props.getNewEmployee} /> 

            <Action selected={this.props.selectedStaff} /> 
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
            </Card>
        )
    }
}

export default NewEmployee
