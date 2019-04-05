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
    { label: 'Position StartDate', dataKey: 'positionStartDate' },
    { label: 'Position EndDate', dataKey: 'positionEndDate' },
    { label: 'Assign StartDate', dataKey: 'startDate' },
    { label: 'Assign EndDate', dataKey: 'endDate' },
    { label: 'Placed', dataKey: 'firstNameLastName' },
    { label: 'Accept', dataKey: 'accept' },
    { label: 'Acting', dataKey: 'acting' }
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
