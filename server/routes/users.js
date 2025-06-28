const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// Dummy in-memory user DB
const users = {};

// POST /api/users/login
router.post('/login', (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });
    let user = Object.values(users).find(u => u.name === name);
    if (!user) {
        user = {
            id: uuidv4(),
            name,
            learningStyle: null,
            quizHistory: [],
            createdAt: new Date().toISOString()
        };
        users[user.id] = user;
    }
    res.json(user);
});

// GET /api/users/:id
router.get('/:id', (req, res) => {
    const user = users[req.params.id];
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
});

// PUT /api/users/:id
router.put('/:id', (req, res) => {
    const user = users[req.params.id];
    if (!user) return res.status(404).json({ error: 'User not found' });
    Object.assign(user, req.body);
    res.json(user);
});

module.exports = router; 