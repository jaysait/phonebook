import React, { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
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

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber, id: persons.length + 1 };
    const alreadyExists = persons.filter((p) => p.name === newName).length;

    if (alreadyExists > 0) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, newPerson]);
      setNewName('');
      setNewNumber('');
    }
  };
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
      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;
