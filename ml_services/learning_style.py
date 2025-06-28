from flask import Flask, request, jsonify
from collections import Counter
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/classify', methods=['POST'])
def classify():
    data = request.get_json()
    answers = data.get('answers', [])
    if not answers or not isinstance(answers, list):
        return jsonify({'error': 'Invalid answers'}), 400
    # Count the most common learning style in answers
    style = Counter(answers).most_common(1)[0][0]
    return jsonify({'learningStyle': style})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
