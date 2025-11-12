import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
import pickle
import os

# Load dataset
dataset_path = os.path.join("dataset", "fake_reviews_dataset.csv")
df = pd.read_csv(dataset_path)

# Ensure label column is correct
# Replace with 0/1 or "Fake"/"Genuine" if needed
df['label'] = df['label'].astype(str)

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    df['review_text'], df['label'], test_size=0.2, random_state=42
)

# TF-IDF Vectorization
vectorizer = TfidfVectorizer(stop_words='english', max_features=5000)
X_train_vect = vectorizer.fit_transform(X_train)
X_test_vect = vectorizer.transform(X_test)

# Train model
model = MultinomialNB()
model.fit(X_train_vect, y_train)

# Test accuracy
accuracy = model.score(X_test_vect, y_test)
print(f"Test Accuracy: {accuracy*100:.2f}%")

# Save model and vectorizer
os.makedirs("model", exist_ok=True)
with open("model/fake_review_model.pkl", "wb") as f:
    pickle.dump(model, f)
with open("model/vectorizer.pkl", "wb") as f:
    pickle.dump(vectorizer, f)

print("Model and vectorizer saved successfully!")
