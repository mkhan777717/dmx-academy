// Data Science & Analytics Course Data

export const allPhases = [
  {
    id: "ds-phase-1",
    title: "Phase 1: Pandas & Data Wrangling (Weeks 1–2)",
    description: "Learn to clean, filter, aggregate, and visualize datasets using Pandas DataFrames and Power BI dashboards.",
    modules: [
      {
        id: "ds-m-1",
        title: "Module 1: Pandas DataFrames & Wrangling",
        duration: "1 Week",
        difficulty: "Beginner-Intermediate",
        objectives: [
          "Import CSV or Excel datasets into Pandas DataFrames",
          "Clean missing database values and perform groups filter computations",
          "Plot basic scatter and bar visual plots using matplotlib"
        ],
        lessons: [
          {
            id: "ds-l-1-1",
            title: "Pandas DataFrames core",
            time: "45 min",
            summary: "Data structures, Series, DataFrame selectors, and CSV loaders",
            content: `
### What is Pandas?
Pandas is Python's core data analysis library. It provides high-performance, easy-to-use data structures, primarily the **DataFrame**:
*   **Series:** A 1D labeled array.
*   **DataFrame:** A 2D tabular data structure with columns, rows, and indexes (similar to a SQL table or Excel sheet).

#### Simple Pandas script:
\`\`\`python
import pandas as pd

# Load CSV dataset
df = pd.read_csv("employee_sales.csv")

# Filter rows and select columns
high_sales = df[df["sales"] > 50000]

# Calculate averages grouped by department
avg_sales = high_sales.groupby("department")["sales"].mean()
print(avg_sales)
\`\`\`
            `,
            exercise: "Write a Pandas code snippet that loads a dataset 'weather.csv', drops all rows with missing values, and prints the first 5 records."
          }
        ]
      }
    ]
  }
];

export const resourcesList = [
  {
    category: "Data science references",
    items: [
      { name: "Pandas official documents", desc: "Guide and reference docs for DataFrames operations.", link: "https://pandas.pydata.org/docs" },
      { name: "Power BI Learn Portal", desc: "Tutorials on building visualizations and reports.", link: "https://learn.microsoft.com/power-bi" }
    ]
  }
];

export const glossary = [
  { term: "Data Science", def: "Field combining scientific methods, processes, and algorithms to extract insights from structured data." },
  { term: "Pandas", def: "Python library designed to manipulate tabular data easily using DataFrames." },
  { term: "DataFrame", def: "Two-dimensional rows and columns data structure used inside Pandas." },
  { term: "Data Wrangling", def: "Process of cleaning and transforming raw, messy datasets into structured formats." },
  { term: "Power BI", def: "Business analytics service by Microsoft designed to build interactive dashboard dashboards reports." }
];
