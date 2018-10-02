import React from 'react'
import { ContextMenu, MenuItem } from 'react-contextmenu'
import Table from '../../../../components/table.js'

const columns = [{ label: 'MPLID', dataKey: 'mplid' }]

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
            />
        </div>
    )
}

export default JobTitleTable
