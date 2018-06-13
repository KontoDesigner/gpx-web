import React, { Component } from 'react'
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu'
import { AutoSizer, Table, Column } from 'react-virtualized';

class PersonTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: this.props.persons,
      sortBy: 'firstName',
      sortByDirection: 0
    }
  }

  rowRenderer = ({ columns, index, className, style, ...props }) => {
    const rowClassName = className + (index % 2 === 0 ? ' even' : ' odd') + (1 === 1 ? ' selected' : '');

    return (
      <div
        key={props.key}
        style={style}
      >
        <ContextMenuTrigger id={this.props.index + "-destinationContextMenu"}>
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

  onContextMenuClick = (e, data) => {
    alert(data.foo)
  }

  onHeaderClick = data => {
    let sortByDirection = 0;

    if (this.state.sortBy === data.dataKey && this.state.sortByDirection === 0) {
      sortByDirection = 1;
    }

    const list = [].concat(this.state.list)
      .sort((a, b) => a[data.dataKey] > b[data.dataKey]);

    this.setState({
      list: list,
      sortBy: data.dataKey,
      sortByDirection: sortByDirection
    });
  }

  render() {
    const height = 41 + (this.state.list.length * 41);
    const tableHeight = height > 350 ? 350 : height;

    return (
      <div>
        <ContextMenu id={this.props.index + "-destinationContextMenu"}>
          <MenuItem data={{ foo: 'bar' }} onClick={this.onContextMenuClick}>
            ContextMenu Item 1
          </MenuItem>
          <MenuItem data={{ foo: 'bar' }} onClick={this.onContextMenuClick}>
            ContextMenu Item 2
          </MenuItem>
          <MenuItem data={{ foo: 'bar' }} onClick={this.onContextMenuClick}>
            ContextMenu Item 3w
          </MenuItem>
        </ContextMenu>

        <AutoSizer>
          {({ height, width }) => (
            <Table
              width={width}
              height={tableHeight}
              headerHeight={41}
              rowHeight={41}
              rowCount={this.state.list.length}
              rowGetter={({ index }) => this.state.list[index]}
              rowRenderer={this.rowRenderer}
              onHeaderClick={this.onHeaderClick}
            >
              <Column
                label='Name'
                dataKey='firstName'
                width={width / 3}
              />
              <Column
                label='Nationality'
                dataKey='nationality'
                width={width / 3}
              />
              <Column
                width={width / 3}
                label='Id'
                dataKey='staffID'
              />
            </Table>
          )}
        </AutoSizer>
      </div>
    )
  }
}

export default PersonTable
