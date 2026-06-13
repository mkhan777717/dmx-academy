// MongoDB Mastery Course Data

export const allPhases = [
  {
    id: "mg-phase-1",
    title: "Phase 1: NoSQL & Aggregations (Weeks 1–2)",
    description: "Learn NoSQL database architectures, document design, queries filtering, and aggregation pipelines.",
    modules: [
      {
        id: "mg-m-1",
        title: "Module 1: MongoDB Document Models",
        duration: "1 Week",
        difficulty: "Beginner",
        objectives: [
          "Understand JSON document models vs relational tables",
          "Perform CRUD queries using MongoDB shells",
          "Map database validations using schema definitions"
        ],
        lessons: [
          {
            id: "mg-l-1-1",
            title: "JSON Document Models",
            time: "45 min",
            summary: "NoSQL flexibility, document nesting, and collections indexing",
            content: `
### Relational vs. Document Databases
Relational databases (SQL) enforce strict tabular structures with rows, columns, and foreign key relations. MongoDB (NoSQL) stores data as flexible, JSON-like **BSON documents**:
*   **BSON (Binary JSON):** Supports extra types like Date and Binary data, and is optimized for quick parsings.
*   **No Schema Lock-in:** Different documents in the same collection can have different field properties.
*   **Nesting:** Store sub-documents or arrays directly inside a parent document (e.g. order details inside a customer profile), avoiding complex JOIN queries.
            `,
            exercise: "Write a mock JSON document representing a blog post with nested comments, category tags, and timestamps."
          },
          {
            id: "mg-l-1-2",
            title: "Basic Queries & CRUD",
            time: "50 min",
            summary: "Using find, insertOne, updateOne, and deleteOne operators",
            content: `
### Querying MongoDB
Use simple query parameters to filter collection items:
\`\`\`javascript
// Insert user document
db.users.insertOne({
  name: "Ishaan",
  age: 26,
  skills: ["React", "Node.js"]
});

// Query using filters and projection
db.users.find(
  { age: { $gt: 20 }, skills: "React" },
  { name: 1, _id: 0 } // Project only name
);
\`\`\`

#### Key query operators:
*   \`$gt\`, \`$lt\`: Greater than, less than.
*   \`$in\`: Array matches.
*   \`$set\`: Modify specific field parameters.
            `,
            exercise: "Write a query to update all documents in a 'products' collection where price is greater than 100, setting active status to false."
          }
        ]
      },
      {
        id: "mg-m-2",
        title: "Module 2: Advanced Aggregation Pipelines",
        duration: "1 Week",
        difficulty: "Advanced",
        objectives: [
          "Compose complex multi-stage aggregation pipelines",
          "Optimize database query lookups using index bounds"
        ],
        lessons: [
          {
            id: "mg-l-2-1",
            title: "Aggregation Pipelines",
            time: "60 min",
            summary: "Understanding $match, $group, $sort, and $project stages",
            content: `
### Aggregation Pipelines Framework
Aggregation pipelines parse documents through consecutive execution stages to compute summaries:
\`\`\`javascript
db.orders.aggregate([
  // Stage 1: Filter active items
  { $match: { status: "completed" } },
  
  // Stage 2: Group by item category and sum sales
  { $group: {
      _id: "$category",
      totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } }
  } },
  
  // Stage 3: Sort by revenue descending
  { $sort: { totalRevenue: -1 } }
]);
\`\`\`
            `,
            exercise: "Build an aggregation pipeline that groups reviews by productID, calculating the average rating and total count."
          }
        ]
      }
    ]
  }
];

export const resourcesList = [
  {
    category: "Official Manuals",
    items: [
      { name: "MongoDB Core Manual", desc: "Official reference for CRUD, shell, and commands.", link: "https://www.mongodb.com/docs" },
      { name: "Aggregations reference manual", desc: "Pipeline operators and stages details.", link: "https://www.mongodb.com/docs/manual/aggregation" }
    ]
  }
];

export const glossary = [
  { term: "MongoDB", def: "A source-available, document-oriented NoSQL database system using BSON." },
  { term: "BSON", def: "Binary JSON - serialized representation of documents optimized for database operations." },
  { term: "Collection", def: "A grouping of MongoDB documents, equivalent to a table in SQL databases." },
  { term: "Aggregation", def: "Pipeline execution framework analyzing records sequentially across filter stages." },
  { term: "Index", def: "Data structures optimizing sorting and filtering, avoiding full-collection scans." }
];
