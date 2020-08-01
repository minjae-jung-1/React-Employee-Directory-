import React from 'react';
import EmployeTable from './EmployeeTable';
import TableSortSelect from './TableSortSelect';

class EmployeePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.headerNames = [
      'Employee ID',
      'Employee Name',
      'Employee Location',
      'Employee Phone Number'
    ];
  }

  componentDidMount(){
    const employeesFromAPI = [
      {
        id: 2,
        name: 'Abby Balls',
        location: 'Somewhere,Someway',
        phoneNumber: '2224445555',
        position: 'Programmer'
      },
      {
        id: 1,
        name: 'Richard Large',
        location: 'Somewhere,NewYork',
        phoneNumber: '7894561234',
        position: 'Programmer'
      },
      {
        id: 3,
        name: 'Mike Hawk',
        location: 'Somewhere,NewJersey',
        phoneNumber: '1324657089',
        position: 'Programmer'
      },
      {
        id: 4,
        name: 'Abby Balls',
        location: 'Somewhere,Someway',
        phoneNumber: '2224445555',
        position: 'Programmer'
      },
      {
        id: 0,
        name: 'Richard Large',
        location: 'Somewhere,NewYork',
        phoneNumber: '7894561234',
        position: 'Scrum Master'
      },
      {
        id: 7,
        name: 'Mike Hawk',
        location: 'Somewhere,NewJersey',
        phoneNumber: '1324657089',
        position: 'Coffee Maker'
      },
      {
        id: 6,
        name: 'Abby Balls',
        location: 'Somewhere,Someway',
        phoneNumber: '2224445555',
        position: 'Product Owner'
      },
      {
        id: 5,
        name: 'Richard Large',
        location: 'Somewhere,NewYork',
        phoneNumber: '7894561234',
        position: 'Boss Man'
      },
      {
        id: 8,
        name: 'Mike Hawk',
        location: 'Somewhere,NewJersey',
        phoneNumber: '1324657089',
        position: 'Programmer'
      }
    ];

    this.sortBy("id", employeesFromAPI)
  }

  sortBy = (sortBy, employeeSort) => {
    if (sortBy === "id") {
      employeeSort.sort((a,b) => {
        return a.id - b.id
      })
      this.setState({
        employees: employeeSort
      })
    }
    else if (sortBy === 'name') {
      employeeSort.sort((a,b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1
        } else if(a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1
        }
        else return 0
      });
      this.setState({
        employees: employeeSort
      })
    }
  }

  setSortFilter = (event) => {
    const sortBy = event.target.value
    let employeeSort = this.state.employees
    this.sortBy(sortBy, employeeSort)
    // console.log(event.target.value)
    //value of what u selected
  }
 
  render() {
    const { employees } = this.state

    return (
      <div>
        <TableSortSelect setSortFilter={this.setSortFilter}></TableSortSelect>
        <EmployeTable employees={employees} headerNames={this.headerNames}></EmployeTable>
      </div>
    );
  }
}

export default EmployeePage;