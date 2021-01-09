import React from "react";

const Persons = ({ persons, filterValue }) => {
  return (
    <div>
      {filterValue === ""
        ? persons.map((person) => {
            return (
              <p key={person.id}>
                {person.name} {person.number}
              </p>
            );
          })
        : persons
            .filter((person) => person.name.toLowerCase().includes(filterValue))
            .map((el) => (
              <p key={el.id}>
                {el.name} {el.number}
              </p>
            ))}
    </div>
  );
};

export default Persons;
