import React, { useState, useEffect } from 'react';
import './App.css';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };
  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };
  const findPersonsByFilter = (search) => {
    return persons.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  };
  const personsToShow = findPersonsByFilter(filter);

  const handleDeletePerson = (event) => {
    event.preventDefault();
    const id = parseInt(event.target.value);
    const p = persons.find((person) => person.id === id);

    const result = window.confirm(`Delete ${p.name}?`);
    if (result) {
      personService.deletePerson(event.target.value).then((res) => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    const alreadyExists = persons.filter((p) => p.name === newName).length;

    if (alreadyExists > 0) {
      alert(`${newName} is already added to phonebook`);
    } else {
      personService.create(newPerson).then((person) => {
        setPersons(persons.concat(person));
        setNewName('');
        setNewNumber('');
      });
    }
  };

  useEffect(() => {
    personService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} changeFilter={handleChangeFilter} />
      <h2>add a new </h2>

      <PersonForm
        createPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        changeName={handleChangeName}
        changeNumber={handleChangeNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} deletePerson={handleDeletePerson} />
    </div>
  );
};

export default App;
