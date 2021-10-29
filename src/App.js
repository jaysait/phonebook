import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Jay Rard', number: '403-555-0000' }]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };
  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };
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
      {persons.map((person) => {
        return (
          <div key={person.name}>
            {person.name} {person.number}
          </div>
        );
      })}
    </div>
  );
};

export default App;
