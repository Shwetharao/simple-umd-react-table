import React from 'react';

/************** Import dummy data to render inside Table ************/
import { tableData } from "./tableData.js";

/************** CSS ************/
import './table-react.css';

function ReactTable() {
  return (
    <div className="react-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>E-mail</th>
            <th>Gender</th>
            <th>IP Address</th>
          </tr>
        </thead>
        <tbody>
          {
            tableData.map((data, dataId) => {
              return (
                <tr key={dataId}>
                  <td>{data.id}</td>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>{data.email}</td>
                  <td>{data.gender}</td>
                  <td>{data.ip_address}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}
export default ReactTable;
