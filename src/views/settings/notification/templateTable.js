import React from 'react'
import { ContextMenu, MenuItem } from 'react-contextmenu'
import Table from '../../../components/table.js'
const columns = [
   

    { label: 'Subject', dataKey: 'subject' },
    { label: 'Mail Text', dataKey: 'content' },
    { label: 'Template Name', dataKey: 'templateName' },
    { label: 'Description', dataKey: 'description' }
 //   { label: 'Template Type', dataKey: 'templateType' },

  
    //{ label: 'Id', dataKey: 'staffID' }
]

const TemplateTable = props => {
    function onContextMenuClick(e, data) {
        alert(data.foo)
    }

    const contextMenuId = props.index + '-replyYesNoRoleContextMenu'

    return (
        <div>
            {/* <ContextMenu id={contextMenuId}>
                <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick}>
                    ContextMenu Item 1
                </MenuItem>
                <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick}>
                    ContextMenu Item 2
                </MenuItem>
                <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick}>
                    ContextMenu Item 3
                </MenuItem>
            </ContextMenu> */}
            <Table
                list={props.notification}
                contextMenuId={contextMenuId}
                columns={columns}
                checkbox={true}
                identifier={'templateName'}
                edit={props.edit}
                status={props.status }
               updateSelectedState={props.handleSelectedNotification} 
                selected={props.selectedNotification}
                //selected={props.selectedSetting}
                maxTableHeight={props.maxTableHeight}
            />
        </div>
    )
}

export default TemplateTable
