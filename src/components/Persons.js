import React from 'react';
import Person from './Person';
import { List } from '@mui/material';
const Persons = ({ persons, deletePerson }) => {
  return (
    <div>
      <List dense='true'>
        {persons.map((person) => {
          return <Person key={person.id} person={person} deletePerson={deletePerson} />;
        })}
      </List>
    </div>
  );
};

export default Persons;
