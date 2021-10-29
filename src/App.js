import React, { useState } from 'react';
import './App.css';

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
    const newPerson = { name: newName, number: newNumber };
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
      <div>
        filter shown with <input id='filter' value={filter} onChange={handleChangeFilter} />
      </div>
      <h2>add a new </h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input id='new-person-name' value={newName} onChange={handleChangeName} />
        </div>
        <div>
          number: <input id='new-person-number' value={newNumber} onChange={handleChangeNumber} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map((person) => {
        return (
          <div key={person.id}>
            {person.name} {person.number}
          </div>
        );
      })}
    </div>
  );
};

export default App;
