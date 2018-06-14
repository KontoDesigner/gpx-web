import React, { Component } from 'react'
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu'
import Table from '../../../../components/table.js';

class PersonTable extends Component {
  constructor(props) {
    super(props)
  }

  onRowClick = () => {
    console.log(1)
  }

  onContextMenuClick = (e, data) => {
    alert(data.foo)
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

  render() {
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

        <Table
          list={this.props.persons}
          contextMenuId={this.props.index + "-destinationContextMenu"}
        />
      </div>
    )
  }
}

export default PersonTable
