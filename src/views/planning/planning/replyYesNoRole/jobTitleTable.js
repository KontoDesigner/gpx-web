import React from 'react'
import Table from '../../../../components/table.js'

const columns = [
    { label: 'MPLID', dataKey: 'mplID' },
    { label: 'Season', dataKey: 'season' },
    //{ label: 'MPLIDVersion', dataKey: 'mplIDVersion' },

    { label: 'JobTitle', dataKey: 'jobTitle' },
    { label: 'Profile', dataKey: 'profile' },

    { label: 'Source Market', dataKey: 'mplSourceMarket' },
    { label: 'Position Type', dataKey: 'mPLPositionType' },
    //{ label: 'Languages', dataKey: 'languages' },
    { label: 'HighSeason', dataKey: 'highseason' },
    { label: 'Position StartDate', dataKey: 'positionStartDate' ,type: 'datetime', format: 'YYYY-MM-DD' },
    { label: 'Position EndDate', dataKey: 'positionEndDate' ,type: 'datetime', format: 'YYYY-MM-DD' },
    { label: 'Placed', dataKey: 'firstNameLastName' }
    // { label: 'Id', dataKey: 'staffID' }
]

const JobTitleTable = props => {
    const contextMenuItems = params => {
        const data = params.node.data

        return [
            {
                name: 'Remove Position',
                action: function() {
                    props.toogleRemovePositionModal(data.mplID)
                }
            }
        ]
    }

    return (
        <Table
            list={props.replyYesNoRoles}
            contextMenuItems={contextMenuItems}
            columns={columns}
            checkbox={true}
            identifier={'mplid'}
            edit={props.edit}
            updateSelectedState={props.handleSelectedTitle}
            selected={props.selectedTitle}
            // maxTableHeight={props.maxTableHeight}
        />
    )
}

export default JobTitleTable
