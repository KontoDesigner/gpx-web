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
          <div className={rowClassName} role="row" onClick={this.onRowClick}>
            {columns}
          </div>
        </ContextMenuTrigger>
      </div>
    )
  }

  onRowClick = () => {
    console.log(1)
  }

  onHeaderClick = data => {
    // let sortByDirection = 0;
    // if (this.state.sortBy === data.dataKey && this.state.sortByDirection === 0) {
    //   sortByDirection = 1;
    // }
    // const list = [].concat(this.state.list)
    //   .sort((a, b) => a[data.dataKey] > b[data.dataKey]);
    // let unsorted = Object.assign({}, this.state.list);
    // console.log(unsorted);
    // console.log('sorting by', data.dataKey)
    // const sortByKey = key => (a, b) => a[key] > b[key]
    // const list = this.slice().sort(sortByKey(data.dataKey))
    // console.log(list)
    // var list = this.state.list.sort((a,b) => a.firstName > b.firstName);
    // this.setState({
    //   list: list,
    //   sortBy: data.dataKey,
    //   sortByDirection: sortByDirection
    // });
  }

  _sort = ({ sortBy, sortDirection }) => {
    const { sortDirection: prevSortDirection } = this.state

    // If list was sorted DESC by this column
    // Rather than switch to ASC, return to "natural" order
    if (prevSortDirection === sortDirection.DESC) {
      sortBy = null
      sortDirection = null
    }

    const list = this.state.list.sort(function(a, b) {
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
            <Column label="Name" dataKey="firstName" width={width / 3} />
            <Column label="Nationality" dataKey="nationality" width={width / 3} />
            <Column width={width / 3} label="Id" dataKey="staffID" />
          </ReactVirtualizedTable>
        )}
      </AutoSizer>
    )
  }
}

export default Table
