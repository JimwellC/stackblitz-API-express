const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Root
app.get('/', (req, res) => {
  res.send('API Home');
});

const users = [
  { id: 1, name: 'Carmela', email: 'mela@gmail.com', age: 25, salary: 25000 },
  { id: 2, name: 'Joseph', email: 'joe@yahoo.com', age: 30, salary: 45000 },
  { id: 3, name: 'James', email: 'james@msn.com', age: 35, salary: 30000 },
  { id: 4, name: 'John', email: 'john@gmail.com', age: 21, salary: 25000 },
  { id: 5, name: 'Frank', email: 'frank@yahoo.com', age: 45, salary: 45000 },
  { id: 6, name: 'Alex', email: 'alex@msn.com', age: 21, salary: 33000 },
];

app.get('/api/users', (req, res) => {
  res.send(users);
});

app.get('/api/users/:id', (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  res.send(user);
});

// POST
app.post('/api/users', (req, res) => {
  const new_user = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    salary: req.body.salary,
  };
  users.push(new_user);
  res.status(201).send(new_user);
});

// DELETE
app.delete('/api/users/:id', (req, res) => {
  const index = users.findIndex((u) => u.id == req.params.id);
  if (index !== -1) {
    users.splice(index, 1);
    res.status(200).send('User deleted');
  } else {
    res.status(404).send('User not found');
  }
});

// Server listening on port 3000
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
