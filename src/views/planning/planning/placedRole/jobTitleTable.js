import React from 'react'
import Table from '../../../../components/table.js'

const columns = [
    { label: 'MPLID', dataKey: 'mplID' },
    { label: 'Season', dataKey: 'season' },
    { label: 'DL-Req.', dataKey: 'mplDlRequired' },
    { label: 'Education', dataKey: 'education' },
    { label: 'ConceptUnit', dataKey: 'concepthotel' },
    { label: 'JobTitle', dataKey: 'jobTitle' },
    { label: 'Profile', dataKey: 'profile' },

    { label: 'Source Market', dataKey: 'mplSourceMarket' },
    { label: 'Position Type', dataKey: 'mPLPositionType' },
    //{ label: 'Languages', dataKey: 'languages' },
    { label: 'HighSeason', dataKey: 'highseason' },
    { label: 'Position StartDate', dataKey: 'positionStartDate',type: 'datetime', format: 'YYYY-MM-DD' }, 
    { label: 'Position EndDate', dataKey: 'positionEndDate' ,type: 'datetime', format: 'YYYY-MM-DD' },
    { label: 'Assign StartDate', dataKey: 'startDate' ,type: 'datetime', format: 'YYYY-MM-DD' },
    { label: 'Assign EndDate', dataKey: 'endDate' ,type: 'datetime', format: 'YYYY-MM-DD' },
    { label: 'Placed', dataKey: 'firstNameLastName' },
    {  label: '',
    dataKey: 'accept',
     type: 'icon',
     
    icon: function(val) {
        if (val === 'Pending') {
            return 'fa fa-clock-o'
        }
        if (val === 'Accepted') {
            return 'fa fa-thumbs-o-up'
        }
        if (val === 'Declined') {
            return 'fa fa-thumbs-o-down'
        }
    
    }
},
{  label: '',
dataKey: 'acting',
 type: 'icon',
 
icon: function(val) {
    if (val === 'Yes') {
        return 'fa fa-star'
    }


}
},
    // { label: '', dataKey: 'acting',iconClass:'fa fa-thumbs-up',iconValue:'Y' }
    //  { label: 'Acting', dataKey: 'acting' }
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
                name: 'Make Position Vacant',
                action: function() {
                    props.toogleMakePositionVacantModal(data.positionAssignId)
                }
            },
            {
                name: 'Mark Position Accept',
                action: function() {
                    props.toogleMarkPositionAcceptModal(data.positionAssignId)
                }
            },
            {
                name: 'Reset Position Accept',
                action: function() {
                    props.toogleResetPositionAcceptModal(data.positionAssignId)
                }
            },
            {
                name: 'Mark Position Decline',
                action: function() {
                    props.toogleMarkPositionDeclineModal(data.positionAssignId)
                }
            },
            {
                name: 'Mark As Acting',
                action: function() {
                    props.toogleMarkPositionActingModal(data.positionAssignId)
                }
            },
            {
                name: 'Unmark As Acting',
                action: function() {
                    props.toogleUnmarkPositionActingModal(data.positionAssignId)
                }
            }
        ]
    }

    return (
        <Table
            list={props.positions}
            contextMenuItems={contextMenuItems}
            columns={columns}
            checkbox={true}
            identifier={'positionAssignId'}
            edit={props.edit}
            updateSelectedState={props.handleSelectedTitle}
            selected={props.selectedTitle}
        />
    )
}

export default JobTitleTable
