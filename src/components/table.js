import React, { Component } from 'react'
import { ContextMenuTrigger } from 'react-contextmenu'
import { AutoSizer, Table as ReactVirtualizedTable, Column } from 'react-virtualized'

function arrayUnique(array) {
  var a = array.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j])
        a.splice(j--, 1);
    }
  }

  return a;
}

class Table extends Component {
  constructor(props) {
    super()

    this.state = {
      sortBy: '',
      sortDirection: 'ASC',
      list: Object.assign([], props.list),
      selected: []
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps)
  //   console.log(nextState)
  //   return true;
  //   // return !equals(nextProps, this.props); // equals() is your implementation
  // }

  rowRenderer = ({ columns, index, className, style, ...props }) => {
    const rowClassName =
      (this.state.list.length < 8 ? ' hidden-scroll ' : '') +
      className + (index % 2 === 0 ? ' even' : ' odd') +
      (this.state.selected.includes(props.rowData[this.props.identifier]) ? ' selected' : '') +
      ' cursor-pointer'

    return (
      <div key={index} style={style}>
        <ContextMenuTrigger id={this.props.contextMenuId}>
          <div onClick={(e) => this.props.edit(e, props.rowData)} className={rowClassName} role="row">
            {columns}
          </div>
        </ContextMenuTrigger>
      </div>
    )
  }

  sort = ({ sortBy, sortDirection }) => {
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

  selectAll = event => {
    const target = event.target
    const value = target.checked

    let selected = []

    if (value) {
      //Add all local to minor state
      selected = this.state.list.map(l => l[this.props.identifier])
    }

    //Update minor state
    this.setState({ selected })

    //Update major state
    if (value) {
      //Add all local to major state
      const all = arrayUnique(selected.concat(this.props.selected));

      this.props.updateSelectedState(all)
    }
    else {
      //Remove all local from major state
      let all = Object.assign([], this.props.selected)

      for (var val of this.state.selected) {
        const index = all.indexOf(val);

        if (index !== -1) {
          all.splice(index, 1);
        }
      }

      this.props.updateSelectedState(all)
    }
  }

  selectRow = (event, row) => {
    const target = event.target
    const value = target.checked

    let selected = Object.assign([], this.state.selected);

    const id = row.rowData[this.props.identifier]

    if (value) {
      selected.push(id)
    } else {
      const index = selected.indexOf(id)

      if (index !== -1) {
        selected.splice(index, 1)
      }
    }

    //Update minor state
    this.setState({ selected })

    //Update major state
    if (value) {
      const all = arrayUnique(selected.concat(this.props.selected));

      this.props.updateSelectedState(all)
    }
    else {
      let all = Object.assign([], this.props.selected)

      const index = all.indexOf(id);

      if (index !== -1) {
        all.splice(index, 1);
      }

      this.props.updateSelectedState(all)
    }
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
            sort={this.sort}
            sortBy={sortBy}
            className={this.props.checkbox === true ? 'table-checkbox' : ''}
            sortDirection={sortDirection}>
            {this.props.checkbox === true ? (
              <Column
                label=""
                dataKey=""
                width={95}
                headerRenderer={() => (
                  <input
                    type="checkbox"
                    checked={this.state.list.length > 0 && this.state.selected.length === this.state.list.length}
                    onChange={event => {
                      this.selectAll(event)
                    }}
                  />
                )}
                cellRenderer={row => (
                  <input
                    type="checkbox"
                    checked={this.state.selected.includes(row.rowData[this.props.identifier])}
                    onChange={event => {
                      this.selectRow(event, row)
                    }}
                  />
                )}
              />
            ) : (
                ''
              )}
            {this.props.columns.map((column, index) => <Column key={index} label={column.label} dataKey={column.dataKey} width={width} />)}
          </ReactVirtualizedTable>
        )}
      </AutoSizer>
    )
  }
}

export default Table