# EduMorph - AI-Powered Dynamic Learning Platform

EduMorph is a full-stack web application that personalizes learning content for each user in real-time based on their learning style, quiz progress, and feedback sentiment.

## Features

- **Home/Login Page** - Simple user authentication with localStorage
- **Learning Style Classifier** - Multi-question quiz using Python ML API
- **AI-Powered Content Recommendation** - Dynamic content based on learning style
- **Progress Tracking & Adaptive Quizzing** - Adjusts difficulty based on performance
- **GPT-Powered Doubt Solving Chatbot** - OpenAI API-based natural language support
- **Sentiment-Based Feedback Engine** - Analyzes feedback to improve recommendations

## 🛠️ Tech Stack

### Frontend
- HTML5
- Tailwind CSS
- Vanilla JavaScript

### Backend
- Node.js + Express
- MongoDB (with fallback to in-memory storage)

### ML Microservices
- Python (Flask)
- Scikit-learn for learning style classification
- TextBlob for sentiment analysis

### AI Integration
- OpenAI GPT API

### Hosting
- Vercel (Frontend)
- Render (Backend + ML Services)

## Project Structure

```
EduMorph/
├── client/                     # Frontend files
│   ├── index.html              # Home/Login
│   ├── quiz.html               # Learning style quiz
│   ├── dashboard.html          # Personalized content
│   ├── quiz-engine.html        # Adaptive quizzes
│   ├── chatbot.html            # Chat + feedback
│   ├── assets/                 # CSS, JS, images
│   └── tailwind.config.js
├── server/                     # Node.js backend
│   ├── routes/                 # Express APIs
│   ├── controllers/            # Logic per route
│   └── server.js               # Entry point
├── ml_services/                # Python microservices
│   ├── learning_style.py       # Classifier
│   └── sentiment_analysis.py   # Feedback analysis
├── vercel.json                 # Vercel deployment config
└── README.md                   # Documentation
```

## Quick Start

### Prerequisites
- Node.js (v16+)
- Python (v3.8+)
- MongoDB (optional - uses in-memory storage by default)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd EduMorph
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd client
   npm install -g tailwindcss
   tailwindcss init
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Install ML Service Dependencies**
   ```bash
   cd ../ml_services
   pip install -r requirements.txt
   ```

5. **Set up Environment Variables**
   ```bash
   # Create .env file in server directory
   OPENAI_API_KEY=your_openai_api_key_here
   MONGODB_URI=your_mongodb_uri_here
   PORT=3000
   ```

### Running Locally

1. **Start ML Services**
   ```bash
   cd ml_services
   python learning_style.py
   python sentiment_analysis.py
   ```

2. **Start Backend Server**
   ```bash
   cd server
   npm start
   ```

3. **Open Frontend**
   - Open `client/index.html` in your browser
   - Or serve with a local server: `python -m http.server 8000`

## Usage

1. **Login**: Enter your name to get started
2. **Take Learning Style Quiz**: Answer questions to determine your learning style
3. **Explore Dashboard**: View personalized content based on your learning style
4. **Take Adaptive Quizzes**: Test your knowledge with difficulty-adjusted questions
5. **Chat with AI**: Ask questions and get instant help
6. **Provide Feedback**: Share your experience to improve recommendations

## API Endpoints

### User Management
- `POST /api/users/login` - User login
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user progress

### Learning Style
- `POST /api/learning-style/classify` - Classify learning style
- `GET /api/learning-style/content/:style` - Get personalized content

### Quizzes
- `GET /api/quizzes/:difficulty` - Get quiz questions
- `POST /api/quizzes/submit` - Submit quiz answers
- `GET /api/quizzes/progress/:userId` - Get user progress

### Chatbot
- `POST /api/chatbot/query` - Send message to AI chatbot
- `POST /api/chatbot/feedback` - Submit session feedback

## Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set build settings:
   - Build Command: `cd client && tailwindcss -i ./assets/input.css -o ./assets/output.css --watch`
   - Output Directory: `client`
3. Deploy

### Backend (Render)
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set environment variables
4. Deploy

### ML Services (Render)
1. Create separate Web Services for each ML microservice
2. Set Python runtime
3. Deploy

## Sample Data

The application includes sample content for:
- Learning style quiz questions
- Educational content for each learning style
- Adaptive quiz questions
- Chatbot responses

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request
