import React from 'react';

const Filter = ({ filter, changeFilter }) => {
  return (
    <div>
      filter shown with <input id='filter' value={filter} onChange={changeFilter} />
    </div>
  );
};

export default Filter;
