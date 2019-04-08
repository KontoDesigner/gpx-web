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
    const contextMenuItems = params => {
        const data = params.node.data

        return [
            {
                name: 'Remove Template',
                action: function() {
                    props.toogleRemoveStaffModal(data.templateName)
                }
            }
        ]
    }

    return (
        <Table
            list={props.notification}
            contextMenuItems={contextMenuItems}
            columns={columns}
            checkbox={true}
            identifier={'templateName'}
            edit={props.edit}
            status={props.status}
            updateSelectedState={props.handleSelectedNotification}
            selected={props.selectedNotification}
            //selected={props.selectedSetting}
            maxTableHeight={props.maxTableHeight}
        />
    )
}

export default TemplateTable
