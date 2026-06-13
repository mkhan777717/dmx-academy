// Machine Learning & AI Course Data

export const allPhases = [
  {
    id: "ml-phase-1",
    title: "Phase 1: Supervised Learning & Data (Weeks 1–2)",
    description: "Learn regression and classification concepts, data preprocessing, and model training using Python.",
    modules: [
      {
        id: "ml-m-1",
        title: "Module 1: ML Fundamentals",
        duration: "1 Week",
        difficulty: "Beginner-Intermediate",
        objectives: [
          "Differentiate supervised, unsupervised, and reinforcement learning paradigms",
          "Train simple regression and classification models using scikit-learn",
          "Evaluate models using accuracy and mean squared error (MSE) metrics"
        ],
        lessons: [
          {
            id: "ml-l-1-1",
            title: "Supervised Learning Foundations",
            time: "45 min",
            summary: "Features, labels, training datasets, and classification loops",
            content: `
### What is Machine Learning?
Traditional programming takes rules and data to generate answers. **Machine Learning** takes answers and data to generate the rules:

\`\`\`
Traditional: Data + Rules ===> Answers
Machine Learning: Data + Answers ===> Rules (Model)
\`\`\`

#### Three Main ML Categories:
1.  **Supervised Learning:** The dataset contains input features and corresponding outputs (labels) (e.g. house sizes and sale prices).
2.  **Unsupervised Learning:** The dataset contains only features, and the model groups them by similarities (clustering) (e.g. customer segmentation).
3.  **Reinforcement Learning:** An agent learns to make decisions in an environment by receiving rewards or penalties (e.g. playing chess).
            `,
            exercise: "State whether the following tasks are Supervised or Unsupervised: sorting emails into spam/inbox; grouping customers by purchasing habits; predicting tomorrow's temperature."
          },
          {
            id: "ml-l-1-2",
            title: "Scikit-Learn Regression",
            time: "50 min",
            summary: "Linear regression, data splitting, fitting, and testing",
            content: `
### Building Your First Model
We use Python's \`scikit-learn\` library to train basic models:
\`\`\`python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import numpy as np

# Mock dataset (X = feature, y = label)
X = np.array([[1], [2], [3], [4]])
y = np.array([3, 5, 7, 9]) # Rule: y = 2X + 1

# Split into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25)

# Fit (train) linear model
model = LinearRegression()
model.fit(X_train, y_train)

# Predict
predictions = model.predict([[5]]) # Should predict 11
print("Prediction for 5:", predictions[0])
\`\`\`
            `,
            exercise: "Extend the scikit-learn script to calculate the Mean Squared Error (MSE) on the test predictions."
          }
        ]
      }
    ]
  }
];

export const resourcesList = [
  {
    category: "ML Manuals",
    items: [
      { name: "Scikit-Learn documentation", desc: "Guide for classifiers, regressors, and clusterings.", link: "https://scikit-learn.org" },
      { name: "TensorFlow Quickstart", desc: "Core neural nets and deep learning tutorials.", link: "https://www.tensorflow.org" }
    ]
  }
];

export const glossary = [
  { term: "Supervised Learning", def: "Model training paradigm using labeled input-output datasets." },
  { term: "Feature", def: "An individual measurable variable parameter used by the model for predictions." },
  { term: "Label", def: "The final target output variable (e.g. category classification or numeric value)." },
  { term: "Overfitting", def: "Error where a model learns training data noise too well, performing poorly on unseen validation sets." },
  { term: "Linear Regression", def: "Algorithm modeling relationships between independent features and continuous dependent variables." }
];
