from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import random

app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    review = data.get("review", "").lower().strip()

    if not review:
        return jsonify({"error": "No review provided"}), 400

    # Basic heuristic-based scoring (semi-random but intelligent)
    fake_keywords = [
        "amazing", "perfect", "incredible", "buy now", "life changing", 
        "best ever", "guaranteed", "100%", "superb", "awesome", "worth it"
    ]
    genuine_keywords = ["okay", "decent", "good", "fine", "not bad", "average", "works", "expected"]

    fake_score = sum(word in review for word in fake_keywords) * 15 + random.uniform(0, 25)
    genuine_score = sum(word in review for word in genuine_keywords) * 12 + random.uniform(0, 25)

    if len(review.split()) < 6:
        fake_score += 15  # short reviews often fake

    total_score = fake_score + genuine_score + 1e-5
    fake_prob = (fake_score / total_score) * 100
    genuine_prob = (genuine_score / total_score) * 100

    verdict = "Fake" if fake_prob > genuine_prob else "Genuine"
    confidence = round(abs(fake_prob - genuine_prob) + random.uniform(5, 10), 2)
    confidence = min(confidence, 100)

    return jsonify({
        "verdict": verdict,
        "confidence": confidence
    })

if __name__ == "__main__":
    app.run(debug=True)
