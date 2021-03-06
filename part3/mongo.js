const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];
const personName = process.argv[3];
const personNumber = process.argv[4];

const url = `mongodb+srv://annariazantseva:${password}@cluster0.x9zfh.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected!");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: personName,
  number: personNumber,
});

if (personName !== undefined && personNumber !== undefined) {
  person
    .save()
    .then((result) => {
      console.log(`added ${personName} number ${personNumber} to phonebook`);
      mongoose.connection.close();
    })
    .catch((err) => {
      console.log(`Error ${err}`);
    });
} else {
  Person.find({})
    .then((result) => {
      result.forEach((person) => {
        console.log(person.name + " " + person.number);
      });
      mongoose.connection.close();
    })
    .catch((err) => {
      console.log(`Error ${err}`);
    });
}
