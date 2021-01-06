import React, { useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: 0, phone: "45238744511" },
    { name: "Ada Lovelace", id: 1, phone: "39-44-5323523" },
    { name: "Dan Abramov", id: 2, phone: "12-43-234345" },
    { name: "Mary Poppendieck", id: 3, phone: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterValue, setFilterValue] = useState("");
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
    persons.forEach((person) => {
      if (person.name === newName) {
        alert(`${newName} is already added to phonebook`);
        cleanFields();
      } else {
        setPersons(
          persons.concat({
            name: newName,
            id: persons.length + 1,
            phone: newPhone,
          })
        );
        cleanFields();
      }
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
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
      <Persons persons={persons} filterValue={filterValue} />
    </div>
  );
};

export default App;
