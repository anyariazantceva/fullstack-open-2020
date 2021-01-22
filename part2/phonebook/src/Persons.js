import React from "react";

const Persons = ({ persons, filterValue, removePerson }) => {
  return (
    <div>
      {filterValue === ""
        ? persons.map((person) => {
            return (
              <p key={person.id}>
                {person.name} {person.number}
                <button onClick={() => removePerson(person.id)}>
                  Delete person
                </button>
              </p>
            );
          })
        : persons
            .filter((person) => person.name.toLowerCase().includes(filterValue))
            .map((el) => (
              <p key={el.id}>
                {el.name} {el.number}
                <button onClick={() => removePerson(el.id)}>
                  Delete person
                </button>
              </p>
            ))}
    </div>
  );
};

export default Persons;
