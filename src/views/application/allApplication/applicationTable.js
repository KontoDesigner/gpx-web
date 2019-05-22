import React from 'react'
import Table from '../../../components/table.js'

const columns = [

     { label: 'FirstName', dataKey: 'firstName' },
     { label: 'LastName', dataKey: 'lastName' },
     { label: 'Season', dataKey: 'season' },
     { label: 'SourceMarket', dataKey: 'sourceMarket' },
     { label: 'Current Destination', dataKey: 'destination' },
     { label: 'Rating', dataKey: 'rating' },
     { label: 'Driving License', dataKey: 'drivingLicense' },
     { label: 'Education', dataKey: 'education' },

    //{ label: 'Manager Comments', dataKey: 'managerComments' },
   // { label: 'Couple Wish', dataKey: 'coupleWish' }

    // { label: 'Email', dataKey: 'email' },
    // { label: 'Source Market', dataKey: 'mplSourceMarket' },
    // { label: 'Position Type', dataKey: 'mplPositionType' },
    // //{ label: 'Languages', dataKey: 'languages' },
    // { label: 'HighSeason', dataKey: 'highseason' },
    // { label: 'Position StartDate', dataKey: 'positionStartDate' ,type: 'datetime', format: 'YYYY-MM-DD' },
    // { label: 'Position EndDate', dataKey: 'positionEndDate',type: 'datetime', format: 'YYYY-MM-DD' } ,
    // { label: 'Assign StartDate', dataKey: 'startDate',type: 'datetime', format: 'YYYY-MM-DD' }, 
    // { label: 'Assign EndDate', dataKey: 'endDate',type: 'datetime', format: 'YYYY-MM-DD' }, 

    // { label: 'Placed', dataKey: 'firstNameLastName' },
    // { label: 'Action Status', dataKey: 'accept' },
    // { label: 'Action Status', dataKey: 'acting' }
    // { label: 'Id', dataKey: 'staffID' }
]

const applicationTable = props => {
    const contextMenuItems = params => {
        const data = params.node.data

         return [
             {
                 name: 'Assign Position To Applicant',
                action: function() {
                    props.toogleAssignPositionModal(data.mplID)
                }
             },
        //      {
        //          name: 'Remove Position',
        //          action: function() {
        //             props.toogleRemovePositionModal(data.mplID)
        //        }
        //    }
         ]
    }

    return (
        <Table
            list={props.applications}
            contextMenuItems={contextMenuItems}
            columns={columns}
            // checkbox={true}
            identifier={'staffID'} 
            edit={props.edit}
            // updateSelectedState={props.handleSelectedTitle}
            // selected={props.selectedTitle}
        />
    )
}

export default applicationTable
