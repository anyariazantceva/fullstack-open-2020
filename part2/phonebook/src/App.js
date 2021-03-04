import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [message, setMessage] = "";

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };
  const cleanFields = () => {
    setNewName("");
    setNewPhone("");
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      id: persons.length + 1,
      number: newPhone,
    };
    const personExists = persons.some((p) => p.name === newName);

    if (personExists) {
      const confirmUpdates = window.confirm(
        "Person already exists, would you like to change old number to a new one?"
      );
      const person = persons.find((p) => p.name === newName);
      if (confirmUpdates) {
        updatePerson(person.id);
      }
    }
    personsService
      .create(newPerson)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setMessage(`New person ${returnedPerson.name} was added`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      })
      .catch((error) => alert("Error!"));

    cleanFields();
  };

  const removePerson = (id) => {
    personsService
      .remove(id)
      .then((data) => {
        const confirm = window.confirm("Are you sure you want to delete?");
        if (confirm) {
          setPersons(persons.filter((person) => person.id !== id));
        } else {
          alert("No confirmation");
        }
      })
      .catch((error) => {
        alert(`Error!`);
      });
  };

  const updatePerson = (id) => {
    const person = persons.find((p) => p.name === newName);
    const changedPerson = { ...person, number: newPhone };
    personsService
      .update(id, changedPerson)
      .then((returnedPerson) => {
        setPersons(
          persons.map((person) => (person.id !== id ? person : returnedPerson))
        );
      })
      .catch((error) => {
        alert("can't update the person info");
        setPersons(persons.filter((p) => p.id !== id));
      });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div className="success-message">{message}</div>
      <Filter
        filterValue={filterValue}
        handleFilterChange={handleFilterChange}
      />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filterValue={filterValue}
        removePerson={removePerson}
      />
    </div>
  );
};

export default App;
