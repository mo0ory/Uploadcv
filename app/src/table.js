import React from 'react';
import { Table } from 'reactstrap';

export default class TableExample extends React.Component {
  render() {
    return (
      <div>
      <h3> Preview the uploaded CV's</h3>,
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>First name </th>
            <th>Last name</th>
            <th>University</th>
            <th>Major</th>
            <th>CV</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>download</td>
            
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>download</td>
            
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>download</td>
            
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}
