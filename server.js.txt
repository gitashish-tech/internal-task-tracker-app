const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const PORT = 3000;

app.use(bodyParser.json());

let tasks = [];
let users = [{ username: 'admin', password: 'admin', role: 'admin' }];

function authMiddleware(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, 'secret', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.post('/login', (req, res) => {
  const user = users.find(u => u.username === req.body.username && u.password === req.body.password);
  if (!user) return res.status(403).send('Invalid');
  const token = jwt.sign(user, 'secret');
  res.json({ token });
});

app.get('/tasks', authMiddleware, (req, res) => {
  res.json(tasks);
});

app.post('/tasks', authMiddleware, (req, res) => {
  const { title, assignedTo } = req.body;
  const task = { id: tasks.length + 1, title, assignedTo, status: 'Open' };
  tasks.push(task);
  res.status(201).json(task);
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
