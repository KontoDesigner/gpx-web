import React, { Component } from 'react'
import { ContextMenuTrigger } from 'react-contextmenu'
import { AutoSizer, Table as ReactVirtualizedTable, Column } from 'react-virtualized'

class Table extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sortBy: 'firstName',
            sortDirection: 'ASC',
            list: props.list
        }
    }

    rowRenderer = ({ columns, index, className, style, ...props }) => {
        const rowClassName =
            (this.state.list.length < 8 ? ' hidden-scroll ' : '') + className + (index % 2 === 0 ? ' even' : ' odd') + (1 === 1 ? ' selected' : '')

        return (
            <div key={props.key} style={style}>
                <ContextMenuTrigger id={this.props.contextMenuId}>
                    <div className={rowClassName} role="row">
                        {columns}
                    </div>
                </ContextMenuTrigger>
            </div>
        )
    }

    _sort = ({ sortBy, sortDirection }) => {
        const { sortDirection: prevSortDirection } = this.state

        if (sortBy === '') return
        if (prevSortDirection === sortDirection.DESC) {
            sortBy = null
            sortDirection = null
        }

        const list = this.state.list.sort(function (a, b) {
            if (sortDirection === 'ASC') {
                if (a[sortBy] > b[sortBy]) {
                    return 1
                }
                if (a[sortBy] < b[sortBy]) {
                    return -1
                }
            } else {
                if (a[sortBy] > b[sortBy]) {
                    return -1
                }
                if (a[sortBy] < b[sortBy]) {
                    return 1
                }
            }

            return 0
        })

        this.setState({ sortBy, sortDirection, list })
    }

    render() {
        const height = 41 + this.state.list.length * 41
        const tableHeight = height > 350 ? 350 : height

        const { sortBy, sortDirection } = this.state

        return (
            <AutoSizer>
                {({ height, width }) => (
                    <ReactVirtualizedTable
                        width={width}
                        height={tableHeight}
                        headerHeight={41}
                        rowHeight={41}
                        rowCount={this.state.list.length}
                        rowGetter={({ index }) => this.state.list[index]}
                        rowRenderer={this.rowRenderer}
                        sort={this._sort}
                        sortBy={sortBy}
                        sortDirection={sortDirection}>
                        {this.props.checkbox === true ? <Column label="" dataKey="" width={66} headerRenderer={() => <input type="checkbox" />} cellRenderer={() => <input type="checkbox" />} /> : ''}
                        {this.props.columns.map((column, index) => <Column key={index} label={column.label} dataKey={column.dataKey} width={width} />)}
                    </ReactVirtualizedTable>
                )}
            </AutoSizer>
        )
    }
}

export default Table
