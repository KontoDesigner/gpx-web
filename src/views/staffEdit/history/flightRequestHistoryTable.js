import React from 'react'
import Table from '../../../components/table.js'

const columns = [
    { label: 'Job Title', dataKey: 'jobTitle' },
    // {
    //     label: 'Job Title',
    //     dataKey: 'jobTitle',
    //     type: 'icon',
    //     icon: function(val) {
    //         if (val === 'Airport Service Team Leader') {
    //             return 'fa fa-share'
    //         }
    //     }
    // },
    { label: 'Type Of Flight', dataKey: 'typeOfFlight' },
    { label: 'Direction', dataKey: 'direction' },
    { label: 'Destination', dataKey: 'destination' },
    { label: 'StartDate', dataKey: 'startDate', type: 'datetime', format: 'YYYY-MM-DD' },
    { label: 'EndDate', dataKey: 'endDate', type: 'datetime', format: 'YYYY-MM-DD' },
    { label: 'MPL Position Type', dataKey: 'mplPositionType' },
    { label: 'Created', dataKey: 'created', type: 'datetime', format: 'YYYY-MM-DD hh:mm' }
]

const FlightRequestHistoryTable = props => {
    return (
        <Table
            list={props.flightRequestHistory}
            columns={columns}
            contextMenuItems={[]}
            checkbox={false}
            identifier={'Id'}
            edit={props.edit}
            updateSelectedState={props.handleSelectedStaff}
            selected={props.selectedStaff}
        />
    )
}

export default FlightRequestHistoryTable
