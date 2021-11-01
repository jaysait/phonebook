import React from 'react';
import { ListItem, ListItemText, Button } from '@mui/material';
const Person = ({ person, deletePerson }) => {
  return (
    <div>
      <ListItem>
        <ListItemText primary={person.name} secondary={person.number} />
        <Button variant='contained' type='submit' value={person.id} onClick={deletePerson}>
          delete
        </Button>
      </ListItem>
    </div>
  );
};

export default Person;
