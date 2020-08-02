import React from 'react';

function TableSortSelect(props) {
  return (
    <div>
      <span>Sort by:</span>
      <select id="sort" name="sort" onChange={props.setSortBy}>
        <option value="id">ID</option>
        <option value="name">Name</option>
      </select>
    </div>
  )
};

export default TableSortSelect;