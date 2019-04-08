import React from 'react'
import Table from '../../../components/table.js'

const columns = [
    { label: 'Type', dataKey: 'keywordName' },
    { label: 'Values', dataKey: 'keywordValues' },
    { label: 'Comment', dataKey: 'keywordComment' },
    { label: 'DateModified', dataKey: 'dateModified' }
    //   { label: 'Template Type', dataKey: 'templateType' },

    //{ label: 'Id', dataKey: 'staffID' }
]

const KeywordsTable = props => {
    const contextMenuItems = params => {
        const data = params.node.data

        return [
            {
                name: 'Remove Template',
                action: function() {
                    props.toogleReResignStaffModal(data.templateName)
                }
            }
        ]
    }

    return (
        <Table
            list={props.keywords}
            contextMenuItems={contextMenuItems}
            columns={columns}
            checkbox={true}
            identifier={'keywordName'}
            edit={props.edit2}
            status={props.status}
            updateSelectedState={props.handleSelectedKeywords}
            selected={props.selectedKeywords}
            //selected={props.selectedSetting}
            maxTableHeight={props.maxTableHeight}
        />
    )
}

export default KeywordsTable
