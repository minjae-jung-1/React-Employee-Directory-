import React from 'react';

class EmployeeTable extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { employees, headerNames } = this.props

    return (
      <table>
        <thead>
          <tr>
            {this.props.headerNames.map((header) => {
              return <th key={header}>{header}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {this.props.employees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.location}</td>
                <td>{employee.phoneNumber}</td>
                <td>{employee.position}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default EmployeeTable;
