import React from 'react'
import Table from '../../../../components/table.js'

const columns = [
    { label: 'Name', dataKey: 'firstNameLastName' },
    { label: 'SourceMarket', dataKey: 'sourceMarket' },
    { label: 'PositionType', dataKey: 'positionType' },
    { label: 'Driver', dataKey: 'driver' },
    { label: 'Education', dataKey: 'edcuation' }
    // { label: 'Concept Hotel', dataKey: 'concepthotel' }
]

const PersonTable = props => {
    const contextMenuItems = params => {
        const data = params.node.data

        return [
            {
                name: 'Mark As Absent',
                action: function() {
                    props.toogleAbsentStaffModal(data.staffID)
                }
            },
            {
                name: 'Mark As Resign',
                action: function() {
                    props.toogleResignStaffModal(data.staffID)
                }
            },
            {
                name: 'Send Mail Using Template',
                action: function() {
                    props.toogleSendMailModal(data.staffID)
                }
            }
        ]
    }

    return (
        <Table
            list={props.name}
            contextMenuItems={contextMenuItems}
            columns={columns}
            checkbox={true}
            identifier={'staffID'}
            edit={props.edit}
            updateSelectedState={props.handleSelectedStaff}
            selected={props.selectedStaff}
        />
    )
}

export default PersonTable
