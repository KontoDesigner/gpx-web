import React from 'react'
import Table from '../../../../components/table.js'

const columns = [
    { label: 'MPLID', dataKey: 'mplID' },
    { label: 'Season', dataKey: 'season' },
    { label: 'DL-Req.', dataKey: 'mplDlRequired' },

    { label: 'ConceptUnit', dataKey: 'concepthotel' },

    { label: 'JobTitle', dataKey: 'jobTitle' },
    { label: 'Profile', dataKey: 'profile' },

    { label: 'Source Market', dataKey: 'mplSourceMarket' },
    { label: 'Position Type', dataKey: 'mPLPositionType' },
    //{ label: 'Languages', dataKey: 'languages' },
    { label: 'HighSeason', dataKey: 'highseason' },
    { label: 'Position StartDate', dataKey: 'positionStartDate' ,type: 'datetime', format: 'YYYY-MM-DD' },
    { label: 'Position EndDate', dataKey: 'positionEndDate' ,type: 'datetime', format: 'YYYY-MM-DD' },
    //{ label: 'Placed', dataKey: 'firstNameLastName' },
    // { label: 'Id', dataKey: 'staffID' }
]

const JobTitleTable = props => {
    const contextMenuItems = params => {
        const data = params.node.data

        return [
            {
                name: 'Assign Staff To Position',
                action: function() {
                    props.toogleAssignPositionModal(data.mplID)
                }
            },
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
            contextMenuItems={contextMenuItems}
            list={props.positions}
            columns={columns}
            checkbox={true}
            identifier={'mplID'}
            edit={props.edit}
            updateSelectedState={props.handleSelectedTitle}
            selected={props.selectedTitle}
        />
    )
}

export default JobTitleTable
