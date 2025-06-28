const express = require('express');
const axios = require('axios');
const router = express.Router();

// Dummy content for each learning style
const content = {
    visual: [
        { title: 'Mind Map: Photosynthesis', type: 'diagram', url: '#' },
        { title: 'Video: The Water Cycle', type: 'video', url: '#' },
        { title: 'Infographic: Human Digestive System', type: 'infographic', url: '#' }
    ],
    auditory: [
        { title: 'Podcast: The Solar System', type: 'audio', url: '#' },
        { title: 'Lecture: World War II', type: 'audio', url: '#' },
        { title: 'Discussion: Shakespearean Plays', type: 'audio', url: '#' }
    ],
    kinesthetic: [
        { title: 'Simulation: Build a Bridge', type: 'interactive', url: '#' },
        { title: 'Lab: Chemical Reactions', type: 'lab', url: '#' },
        { title: 'Game: Math Puzzles', type: 'game', url: '#' }
    ]
};

// POST /api/learning-style/classify
router.post('/classify', async (req, res) => {
    // Forward quiz answers to Python ML microservice
    try {
        const { answers } = req.body;
        // Replace with actual ML service URL
        const mlUrl = process.env.ML_LEARNING_STYLE_URL || 'http://localhost:5001/classify';
        const response = await axios.post(mlUrl, { answers });
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: 'ML service unavailable', details: err.message });
    }
});

// GET /api/learning-style/content/:style
router.get('/content/:style', (req, res) => {
    const style = req.params.style;
    if (!content[style]) return res.status(404).json({ error: 'Invalid learning style' });
    res.json(content[style]);
});

module.exports = router; 