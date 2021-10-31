import React from 'react';
import Person from './Person';

const Persons = ({ persons, deletePerson }) => {
  return (
    <div>
      {persons.map((person) => {
        return <Person key={person.id} person={person} deletePerson={deletePerson} />;
      })}
    </div>
  );
};

export default Persons;
