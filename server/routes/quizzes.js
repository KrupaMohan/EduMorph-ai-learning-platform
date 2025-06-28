const express = require('express');
const router = express.Router();

// Dummy quiz questions by difficulty
const quizzes = {
    easy: [
        { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: 1 },
        { question: 'What color is the sky?', options: ['Blue', 'Green', 'Red', 'Yellow'], answer: 0 }
    ],
    medium: [
        { question: 'What is the capital of France?', options: ['London', 'Berlin', 'Paris', 'Madrid'], answer: 2 },
        { question: 'Which planet is closest to the Sun?', options: ['Venus', 'Mars', 'Mercury', 'Earth'], answer: 2 }
    ],
    hard: [
        { question: 'What is the speed of light in m/s?', options: ['299,792,458', '199,792,458', '399,792,458', '499,792,458'], answer: 0 },
        { question: 'Who discovered penicillin?', options: ['Alexander Fleming', 'Louis Pasteur', 'Robert Koch', 'Joseph Lister'], answer: 0 }
    ]
};

// GET /api/quizzes/:difficulty
router.get('/:difficulty', (req, res) => {
    const { difficulty } = req.params;
    if (!quizzes[difficulty]) return res.status(404).json({ error: 'Invalid difficulty' });
    res.json(quizzes[difficulty]);
});

// POST /api/quizzes/submit
router.post('/submit', (req, res) => {
    const { answers, difficulty } = req.body;
    if (!Array.isArray(answers) || !quizzes[difficulty]) {
        return res.status(400).json({ error: 'Invalid submission' });
    }
    const questions = quizzes[difficulty];
    let correct = 0;
    answers.forEach((ans, i) => {
        if (questions[i] && ans === questions[i].answer) correct++;
    });
    res.json({ correct, total: questions.length });
});

// GET /api/quizzes/progress/:userId
router.get('/progress/:userId', (req, res) => {
    // For prototype, return dummy progress
    res.json({
        quizzesTaken: 5,
        averageScore: 80,
        timeSpent: 120,
        topicsCovered: 10
    });
});

module.exports = router; 