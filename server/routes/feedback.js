const express = require('express');
const axios = require('axios');
const router = express.Router();

// POST /api/feedback
router.post('/', async (req, res) => {
    const { rating, comment, user } = req.body;
    if (!rating || !user) return res.status(400).json({ error: 'Rating and user are required' });
    // Forward feedback to sentiment analysis ML microservice
    try {
        // Replace with actual ML service URL
        const mlUrl = process.env.ML_SENTIMENT_URL || 'http://localhost:5002/analyze';
        const response = await axios.post(mlUrl, { comment });
        res.json({ sentiment: response.data.sentiment, feedback: { rating, comment, user } });
    } catch (err) {
        res.status(500).json({ error: 'Sentiment service unavailable', details: err.message });
    }
});

module.exports = router; 