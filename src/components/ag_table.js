import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import { LicenseManager } from 'ag-grid-enterprise'

LicenseManager.setLicenseKey('TUI_Nordic__TPP_1Devs6_March_2020__MTU4MzQ1MjgwMDAwMA==76d945771851586658d23f986e58136d')

const isFirstColumn = params => {
    const displayedColumns = params.columnApi.getAllDisplayedColumns()

    const thisIsFirstColumn = displayedColumns[0] === params.column

    return thisIsFirstColumn
}

const uniqueArray = arrArg => {
    return arrArg.filter((elem, pos, arr) => {
        return arr.indexOf(elem) == pos
    })
}

const Table = props => {
    const columnDefs = props.columns.map(c => ({
        headerName: c.label,
        field: c.dataKey,
        resizable: true,
        checkboxSelection: isFirstColumn,
        sortable: true
    }))

    const height = 49 + props.list.length * 28
    const defaultMaxTableHeight = props.maxTableHeight ? props.maxTableHeight : 550
    const tableHeight = height > defaultMaxTableHeight ? defaultMaxTableHeight : height

    const onRowSelected = event => {
        const rowSelected = event.node.selected
        const value = event.data[props.identifier]

        let selected = Object.assign([], props.selected)

        if (rowSelected) {
            selected.push(value)
        } else {
            const index = selected.indexOf(value)

            selected.splice(index, 1)
        }

        const uniqueSelected = uniqueArray(selected)

        props.updateSelectedState(uniqueSelected)
    }

    return (
        <div
            className="ag-theme-balham"
            style={{
                height: `${tableHeight}px`,
                width: '100%',
                maxHeight: '100%'
            }}>
            <AgGridReact
                columnDefs={columnDefs}
                rowData={props.list}
                getContextMenuItems={props.contextMenuItems}
                suppressNoRowsOverlay={true}
                suppressCellSelection={true}
                suppressScrollOnNewData={true}
                onRowSelected={onRowSelected}
                rowSelection={'multiple'}
                // onGridReady={params => props.handleGrid(params)}
            />
        </div>
    )
}

export default Table
