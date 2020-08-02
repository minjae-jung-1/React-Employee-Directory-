import React from 'react';
import EmployeTable from './EmployeeTable';
import TableSortSelect from './TableSortSelect';
import TableFilter from "./TableFilter"

class EmployeePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      positionFilters: [],
      sortBy: 'id',
    };
    this.headerNames = [
      'Employee ID',
      'Employee Name',
      'Employee Location',
      'Employee Phone Number',
      'Employee Position'
    ];
    this.originalEmployees = [];
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

    this.originalEmployees= employeesFromAPI

    this.sortBy(this.state.sortBy, employeesFromAPI)
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

  setSortBy = (event) => {
    const sortBy = event.target.value
    this.setState({sortBy: sortBy})
    let employeeSort = this.state.employees
    this.sortBy(sortBy, employeeSort)
    // console.log(event.target.value)
    //value of what u selected
  }

  updatePositionFilters = (event) => {
    let listOfChecked = this.state.positionFilters
    if (event.target.checked) {
      listOfChecked.push(event.target.value);
    } else {
      let index = listOfChecked.indexOf(event.target.value)
      listOfChecked.splice(index,1)
    }
    let filteredEmployees = this.originalEmployees.filter((employee)=>{
      return listOfChecked.includes(employee.position.toLowerCase())
    })
    console.log(filteredEmployees)
    this.setState({
      positionFilters:listOfChecked
    })
    this.sortBy(this.state.sortBy, filteredEmployees)

  }

 
  render() {
    const { employees } = this.state

    return (
      <div>
        <h1>Employee Directory</h1>
        <TableSortSelect setSortBy={this.setSortBy}></TableSortSelect>
        <TableFilter className="filter-padding"
          updatePositionFilters={this.updatePositionFilters}
          values={this.originalEmployees.map((employee) => {
            return employee.position
          }).filter((value, index, array)=>{
            return array.indexOf(value) === index;
          })}
        >
        </TableFilter>
        <EmployeTable employees={employees} headerNames={this.headerNames}></EmployeTable>
      </div>
    );
  }
}

export default EmployeePage;