import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import PersonTable from './personTable'
import Filter from '../../filter'
import Action from '../../action'

class Name extends Component {
    render() {
        const maxTableHeight = 550

        const style = {
            height: `${50 + this.props.name.length * 28}px`,
            maxHeight: `${maxTableHeight}px`
        }

        return (
            <Card className="card-accordion card-country">
                <CardHeader>Name</CardHeader>
                <CardBody className="no-padding-bottom">
                    <div className="form-row">
                        <Filter getData={this.props.getName} />

                        <Action
                            selected={this.props.selectedStaff}
                            toogleAbsentStaffModal={this.props.toogleAbsentStaffModal}
                            toogleResignStaffModal={this.props.toogleResignStaffModal}
                            toogleSendMailModal={this.props.toogleSendMailModal}
                            //AbsentStaffModal={this.props.AbsentStaffModal}
                        />
                    </div>
                    {this.props.name.length > 0 && (
                        <CardBody style={style} className="card-body-table">
                            <PersonTable
                                index={this.props.index}
                                name={this.props.name}
                                handleSelectedStaff={this.props.handleSelectedStaff}
                                selectedStaff={this.props.selectedStaff}
                                edit={this.props.edit}
                                maxTableHeight={maxTableHeight}
                                toogleAbsentStaffModal={this.props.toogleAbsentStaffModal}
                                toogleResignStaffModal={this.props.toogleResignStaffModal}
                                toogleSendMailModal={this.props.toogleSendMailModal}
                                toogleRemoveStaffModal={this.props.toogleRemoveStaffModal}
                            />
                        </CardBody>
                    )}
                </CardBody>
            </Card>
        )
    }
}

export default Name
