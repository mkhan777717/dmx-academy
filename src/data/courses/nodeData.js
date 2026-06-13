// Node.js Dedicated Course Data

export const allPhases = [
  {
    id: "nd-phase-1",
    title: "Phase 1: Node.js Fundamentals & REST APIs (Weeks 1–2)",
    description: "Learn async event loops, file systems, Express route systems, request body parsing, and middleware chains.",
    modules: [
      {
        id: "nd-m-1",
        title: "Module 1: Node.js Runtime Core",
        duration: "1 Week",
        difficulty: "Beginner",
        objectives: [
          "Explain thread architecture and V8 engine Event Loop execution",
          "Compare ES Modules declarations with CommonJS patterns",
          "Read and write files asynchronously using fs core scripts"
        ],
        lessons: [
          {
            id: "nd-l-1-1",
            title: "Thread loop & Async I/O",
            time: "45 min",
            summary: "Single-thread process limits, libuv thread pools, and non-blocking I/O callbacks",
            content: `
### Node.js Thread Architecture
Traditional web servers spin up a new operating system thread for each incoming visitor connection. Under heavy load, this wastes memory. Node.js operates on a **Single-Thread Event Loop**, offloading blocking tasks to the operating system kernel or a background worker thread pool (libuv).

#### How the Event Loop Works:
1.  **Main Thread Stack:** Standard synchronous JS code runs sequentially.
2.  **Async Handoff:** Operations like database checks or filesystem reads are offloaded immediately.
3.  **Queue Entry:** Once the async task completes, the OS places its callback function into the Event Queue.
4.  **Stack Check:** When the Call Stack is empty, the Event Loop pushes the next callback onto the stack to run.

@@@
[Sync Code Stack] ---> Sync calls execute instantly
        |
        +-- Offload Blocking Task
  [libuv Thread Pool] ---> OS reads file / fetches database
        |
        +-- Complete Task
  [Callback Queue] ---> Holds completed callbacks
        |
        +-- Event Loop schedules next task when Stack is empty
[Sync Code Stack]
@@@
            `,
            exercise: "Explain why blocking the Event Loop with a heavy synchronous CPU calculation (like sorting 10 million array records) slows down responses for all other web users."
          },
          {
            id: "nd-l-1-2",
            title: "Modules Systems & npm",
            time: "40 min",
            summary: "package.json structure, scripts configs, and importing ES Modules vs CommonJS modules",
            content: `
### Node.js Modules
Node.js supports two primary ways to organize modules:
1.  **CommonJS Modules (CJS):** Legacy format using \`require()\` and \`module.exports\`.
2.  **ES Modules (ESM):** Modern standard using \`import\` and \`export\` statements. To write ES Modules, add \`"type": "module"\` to your \`package.json\`.

#### package.json Metadata
Every Node.js workspace uses a \`package.json\` file to manage dependencies and task runner scripts:
*   \`dependencies\`: Library blocks required to run the server in production (e.g., \`express\`).
*   \`devDependencies\`: Tools only used during development (e.g., \`nodemon\`, \`jest\`).
            `,
            exercise: "Initialize a mock project file containing dependency specifications and script calls to execute nodemon watcher servers."
          }
        ]
      },
      {
        id: "nd-m-2",
        title: "Module 2: Express.js Web Server Framework",
        duration: "1 Week",
        difficulty: "Intermediate",
        objectives: [
          "Construct Express endpoints mapping standard HTTP verbs",
          "Apply global loggers and protective middleware routes",
          "Assemble unified REST API error intercept handlers"
        ],
        lessons: [
          {
            id: "nd-l-2-1",
            title: "Routes, Requests & Body Parsing",
            time: "50 min",
            summary: "POST request handling, query params, and JSON middleware converters",
            content: `
### Express.js Routing
Express is a fast, unopinionated minimalist framework wrapping Node.js HTTP servers.

#### Writing a Basic Route API:
\`\`\`javascript
import express from 'express';
const app = express();

// Middleware parsing incoming JSON body parameters:
app.use(express.json());

// GET Endpoint with dynamic URL ID variables:
app.get('/api/products/:id', (req, res) => {
  const prodId = req.params.id;
  res.status(200).json({ id: prodId, name: "API product item" });
});

// POST Endpoint:
app.post('/api/products', (req, res) => {
  const payload = req.body;
  res.status(201).json({ message: "Product created", item: payload });
});

app.listen(5000, () => console.log("Server listening on port 5000"));
\`\`\`
            `,
            exercise: "Build an Express route mapping '/api/search' that reads query variables '?q=query' and returns user listings."
          },
          {
            id: "nd-l-2-2",
            title: "Middleware & Error Handlers",
            time: "55 min",
            summary: "The req-res middleware lifecycle, logger integrations, and central error intercepts",
            content: `
### The Express Middleware Cycle
Middleware functions are functions executing sequentially between incoming request parses and outgoing response returns:
\`\`\`javascript
// Global logging middleware
app.use((req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.path}\`);
  next(); // Passes execution control forward
});
\`\`\`

#### Express Error Handling Middleware:
Must contain four input parameters. Express catches server crashes and calls this boundary automatically:
\`\`\`javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: err.message || "Internal Server Error"
  });
});
\`\`\`
            `,
            exercise: "Open the Express.js API Router Lab in the sidebar to trace execution paths across middleware and handlers."
          }
        ]
      }
    ]
  },
  {
    id: "nd-phase-2",
    title: "Phase 2: Database & Token Security (Weeks 3–4)",
    description: "Link Express servers to MongoDB databases, build data models, and issue signed JSON Web Token sessions.",
    modules: [
      {
        id: "nd-m-3",
        title: "Module 3: Database & Security Auth",
        duration: "2 Weeks",
        difficulty: "Advanced",
        objectives: [
          "Connect servers to MongoDB databases using Mongoose schemas",
          "Encrypt user credentials and sign session token JWT payloads"
        ],
        lessons: [
          {
            id: "nd-l-3-1",
            title: "Mongoose DB Schemas",
            time: "55 min",
            summary: "NoSQL document stores, connecting MongoDB, and mongoose validation structures",
            content: `
### Connecting Node.js to MongoDB
MongoDB is a document database storing data as JSON-like structures. In Node, we use Mongoose as an Object Data Modeling (ODM) library to enforce strict schemas.

#### Defining a Mongoose Schema:
\`\`\`javascript
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  instock: { type: Boolean, default: true }
});

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);
export default Product;
\`\`\`
            `,
            exercise: "Draft a Mongoose schema matching a 'Customer' model. Include fields name (required), email (unique), and loyaltyPoints (number)."
          },
          {
            id: "nd-l-3-2",
            title: "JWT Token Auth Session",
            time: "60 min",
            summary: "Encrypting credentials with bcrypt and generating signed JWT session tokens",
            content: `
### Authentication Workflow
Never save raw plain passwords in a database! Follow this secure standard:
1.  **Password Hashing:** Hash password parameters using \`bcrypt\` on registration:
    \`\`\`javascript
    const hash = await bcrypt.hash(password, 10);
    \`\`\`
2.  **Password Comparison:** Contrast plain password values on login checks:
    \`\`\`javascript
    const match = await bcrypt.compare(plainText, user.passwordHash);
    \`\`\`
3.  **Token Issuance:** Generate a signed **JSON Web Token (JWT)** session:
    \`\`\`javascript
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    // Send token to client. Client includes it in request Authorization headers
    \`\`\`
            `,
            exercise: "Build an Express auth gate middleware that reads JWT headers and blocks requests if token signatures fail."
          }
        ]
      }
    ]
  }
];

export const resourcesList = [
  {
    category: "Node official references",
    items: [
      { name: "Node.js Core Documents", desc: "List of all core API frameworks.", link: "https://nodejs.org/api" },
      { name: "Express.js Routing Guide", desc: "Explanation of route paths, parameters, and middleware controls.", link: "https://expressjs.com" },
      { name: "Mongoose API References", desc: "How to compile query models and schema validations.", link: "https://mongoosejs.com" }
    ]
  }
];

export const glossary = [
  { term: "Node.js", def: "V8-powered asynchronous, event-driven JavaScript server runtime environment." },
  { term: "Event Loop", def: "Asynchronous scheduler inside libuv managing execution stack tasks and offloaded queues." },
  { term: "Express.js", def: "Minimal web framework helping Node servers route HTTP endpoints and configure middleware." },
  { term: "Middleware", def: "Interception logic functions executing sequential audits between request inputs and route response outputs." },
  { term: "Mongoose", def: "Object Data Modeling (ODM) layer schema mapping MongoDB collections into query models." },
  { term: "JWT", def: "JSON Web Token - securely signed cryptographically verified JSON string payload defining credentials access roles." }
];
