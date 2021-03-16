const express = require("express");

const persons = [
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 1,
  },
  {
    name: "Dan Abramov",
    number: "888-777-8988",
    id: 2,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 3,
  },
  {
    name: "Arto Hellas",
    id: 4,
    number: "111-222-3333",
  },
];

const app = express();

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/info", (request, response) => {
  const date = new Date();
  response.send(`<p>Phonebook has info for ${persons.length} people</p>
                       <p>${date}</p>`);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const maxId = persons.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;

  const person = request.body;
  person.id = maxId + 1;

  persons = persons.concat(person);

  response.json(person);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
