const express = require('express');
const router = express.Router();
const { Configuration, OpenAIApi } = require('openai');

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.OPENAI_API_KEY
}));

// POST /api/chatbot/query
router.post('/query', async (req, res) => {
    const { message, user } = req.body;
    if (!message) return res.status(400).json({ error: 'Message is required' });
    try {
        const completion = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are an educational assistant for the EduMorph platform.' },
                { role: 'user', content: message }
            ],
            max_tokens: 200
        });
        res.json({ reply: completion.data.choices[0].message.content });
    } catch (err) {
        res.status(500).json({ error: 'OpenAI API error', details: err.message });
    }
});

module.exports = router; 