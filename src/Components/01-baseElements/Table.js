import React, {Component} from 'react';

class Table extends Component {
  render() {
    // Data
    var dataColumns = this.props.data.columns;
    var dataRows = this.props.data.rows;

    var tableHeaders = (<thead>
          <tr>
            {dataColumns.map(function(column, i) {
              return <th key={i}>{column}</th>; })}
          </tr>
      </thead>);

    var tableBody = dataRows.map(function(row) {
      return (
        <tr>
          {dataColumns.map(function(column, i) {
            return <td key={i}>{row[column]}</td>; })}
        </tr>); });

    // Decorate with Bootstrap CSS
    return (<table className="table table-bordered table-hover" width="100%">
        {tableHeaders}
        {tableBody}
      </table>)
  }
}

export default Table;
