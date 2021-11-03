import React, { useState, useEffect } from 'react';
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import Notification from './components/Notification';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';
import { Container, Divider } from '@mui/material';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState({ message: '', type: '' });

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
    const id = event.target.value;
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
    const alreadyExists = persons.find((p) => p.name === newName);

    if (alreadyExists) {
      const result = window.confirm(
        `${alreadyExists.name} is already added to phonebook, replace the old number with a new one?`
      );
      if (result) {
        const updatedPerson = { ...alreadyExists, number: newNumber };
        personService
          .update(alreadyExists.id, updatedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) => (person.id !== alreadyExists.id ? person : returnedPerson))
            );
            setNewName('');
            setNewNumber('');
            setMessage({ message: `Updated ${alreadyExists.name}`, type: 'success' });
            setTimeout(() => {
              setMessage({ message: '', type: '' });
            }, 5000);
          })
          .catch((error) => {
            setMessage({
              message: `Information of ${alreadyExists.name} has already been removed from server.`,
              type: 'error',
            });
            setTimeout(() => {
              setMessage({ message: '', type: '' });
            }, 5000);
          });
      }
      //  alert(`${newName} is already added to phonebook`);
    } else {
      personService.create(newPerson).then((person) => {
        setPersons(persons.concat(person));
        setNewName('');
        setNewNumber('');
        setMessage({ message: `Added ${person.name}`, type: 'success' });
        setTimeout(() => {
          setMessage({ message: '', type: '' });
        }, 5000);
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
      <Header />
      <br />
      <Container>
        <Notification message={message.message} type={message.type} />
        <Filter filter={filter} changeFilter={handleChangeFilter} />
        <h2>Add New Phone </h2>

        <PersonForm
          createPerson={addPerson}
          newName={newName}
          newNumber={newNumber}
          changeName={handleChangeName}
          changeNumber={handleChangeNumber}
        />
      </Container>
      <Container>
        <h2>Numbers</h2>
        <Persons persons={personsToShow} deletePerson={handleDeletePerson} />
      </Container>
    </div>
  );
};

export default App;
