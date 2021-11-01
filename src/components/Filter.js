import React from 'react';
import { TextField } from '@mui/material';
const Filter = ({ filter, changeFilter }) => {
  return (
    <div>
      <TextField
        id='filter'
        label='enter filter...'
        type='search'
        value={filter}
        onChange={changeFilter}
        variant='filled'
      />
    </div>
  );
};

export default Filter;
