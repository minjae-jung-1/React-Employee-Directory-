import React from 'react';

class EmployeeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
    this.headerNames = [
      "Employee ID",
      'Employee Name',
      'Employee Location',
      'Employee Phone Number'
    ];
  }

  componentDidMount(){
    const employeesFromAPI = [
      {
        id: 1,
        name: 'Bobby Balls',
        location: 'Somewhere,Someway',
        phoneNumber: '2224445555'
      },
      {
        id: 2,
        name: 'Joe Mama',
        location: 'Somewhere,NewJersey',
        phoneNumber: '1324657089'
      },
      {
        id: 3,
        name: 'Turtle Man',
        location: 'Somewhere,NewYork',
        phoneNumber: '7894561234'
      }
    ];

    this.setState({
      employees: employeesFromAPI
    });
  }

  render() {
    const { employees } = this.state

    return (
      <table>
        <tr>
          {this.headerNames.map((header) => {
            return <th>{header}</th>
          })}
        </tr>
        {employees.map((employee) => {
          return (
            <tr>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.location}</td>
              <td>{employee.phoneNumber}</td>
            </tr>
          );
        })}
      </table>
    );
  }
}

export default EmployeeTable;
