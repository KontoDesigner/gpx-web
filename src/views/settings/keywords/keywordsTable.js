import React from 'react'
import { ContextMenu, MenuItem } from 'react-contextmenu'
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
    function onContextMenuClick(e, data) {
        props.toogleReResignStaffModal(data.templateName) 
    }

    const contextMenuId = props.index + '-keywordsContextMenu'

    return (
        <div> 
            { <ContextMenu id={contextMenuId}>
                <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick}>
                   Remove Template
                </MenuItem>
                {/* <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick}>
                    ContextMenu Item 2
                </MenuItem>
                <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick}>
                    ContextMenu Item 3
                </MenuItem> */}
            </ContextMenu> }
            <Table
           
                list={props.keywords}
                contextMenuId={contextMenuId}
                columns={columns}
                checkbox={true}
                identifier={'keywordName'}
                 edit={props.edit2} 
                 status={props.status }
               updateSelectedState={props.handleSelectedKeywords} 
             selected={props.selectedKeywords}
                //selected={props.selectedSetting}
                maxTableHeight={props.maxTableHeight}
            />
        </div>
    )
}

export default KeywordsTable
