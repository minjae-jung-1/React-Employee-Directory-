import React from 'react';

function TableSortSelect(props) {
  return (
    <select id="sort" name="sort" onChange={props.setSortFilter}>
      <option value="id">ID</option>
      <option value="name">Name</option>
    </select>
  )
};

export default TableSortSelect;