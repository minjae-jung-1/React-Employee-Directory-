import React from 'react';


function TableFilter(props) {
  console.log(props.values)
  

  return (
    <div>
      <span>Filter by position:</span>
      {props.values.map((position) => {
        return (
          <div key={position.toLowerCase()}>
            <input
              type="checkbox"
              id={position}
              name={position}
              value={position.toLowerCase()}
              onChange={props.updatePositionFilters}
            ></input>
            <label htmlFor={position}>{position}</label>
          </div>
        );
      })}
    </div>
  );
}

export default TableFilter