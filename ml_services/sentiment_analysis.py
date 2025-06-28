from flask import Flask, request, jsonify
from textblob import TextBlob
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    comment = data.get('comment', '')
    if not comment:
        return jsonify({'error': 'No comment provided'}), 400
    blob = TextBlob(comment)
    polarity = blob.sentiment.polarity
    if polarity > 0.2:
        sentiment = 'positive'
    elif polarity < -0.2:
        sentiment = 'negative'
    else:
        sentiment = 'neutral'
    return jsonify({'sentiment': sentiment, 'polarity': polarity})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002)
