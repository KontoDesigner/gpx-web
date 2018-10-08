import React from 'react'
import { ContextMenu, MenuItem } from 'react-contextmenu'
import Table from '../../../../components/table.js'
const columns = [
    { label: 'MPLID', dataKey: 'mplid' },
    { label: 'MPLIDVersion', dataKey: 'mplidVersion' },

    { label: 'Title', dataKey: 'jobTitle' },
    { label: 'Profile', dataKey: 'profile' },
    { label: 'Destination', dataKey: 'destination' },
    { label: 'Source Market', dataKey: 'mplSourceMarket' },
    { label: 'Position Type', dataKey: 'mplPositionType' },
    { label: 'Languages', dataKey: 'languages' },
    { label: 'JobFamily', dataKey: 'jobFamily' },
    { label: 'StartDate', dataKey: 'startDate' },
    { label: 'DepDate', dataKey: 'endDate' },
    { label: 'Accept', dataKey: 'firstNameLastName' }
    //{ label: 'Id', dataKey: 'staffID' }
]

const JobTitleTable = props => {
    function onContextMenuClick(e, data) {
        alert(data.foo)
    }

    const contextMenuId = props.index + '-replyYesNoRoleContextMenu'

    return (
        <div>
            <ContextMenu id={contextMenuId}>
                <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick}>
                    ContextMenu Item 1
                </MenuItem>
                <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick}>
                    ContextMenu Item 2
                </MenuItem>
                <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick}>
                    ContextMenu Item 3
                </MenuItem>
            </ContextMenu>
            <Table
                list={props.replyYesNoRoles}
                contextMenuId={contextMenuId}
                columns={columns}
                checkbox={true}
                identifier={'mplid'}
                edit={props.edit}
                updateSelectedState={props.handleSelectedTitle}
                selected={props.selectedTitle}
                maxTableHeight={props.maxTableHeight}
            />
        </div>
    )
}

export default JobTitleTable
