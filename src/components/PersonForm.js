import React from 'react';
import { TextField, Button, Divider } from '@mui/material';
const PersonForm = ({ createPerson, newName, newNumber, changeName, changeNumber }) => {
  return (
    <div>
      <form onSubmit={createPerson}>
        <div>
          <TextField
            id='new-person-name'
            label='Name'
            variant='outlined'
            value={newName}
            onChange={changeName}
          />
        </div>
        <br />
        <div>
          <TextField
            id='new-person-number'
            label='Number'
            variant='outlined'
            value={newNumber}
            onChange={changeNumber}
          />
        </div>
        <br />
        <div>
          <Button variant='contained' type='submit'>
            add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
