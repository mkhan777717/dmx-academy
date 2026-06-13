// DevOps & CI/CD Course Data

export const allPhases = [
  {
    id: "dv-phase-1",
    title: "Phase 1: Containerization & Actions Pipelines (Weeks 1–2)",
    description: "Learn to containerize apps with Docker and orchestrate automated builds using GitHub Actions.",
    modules: [
      {
        id: "dv-m-1",
        title: "Module 1: Docker Containers",
        duration: "1 Week",
        difficulty: "Beginner-Intermediate",
        objectives: [
          "Write Dockerfiles to containerize Node.js web apps",
          "Manage multi-container setups using Docker Compose config maps",
          "Audit layers cache to build lightweight images"
        ],
        lessons: [
          {
            id: "dv-l-1-1",
            title: "Dockerfiles & Containerization",
            time: "50 min",
            summary: "Images, containers namespaces, volume mapping, and image layers",
            content: `
### What is Containerization?
Virtual machines virtualize hardware, packaging entire operating systems. Containers virtualize the **OS kernel**, isolating dependencies using namespaces. This makes them lightweight, fast, and secure.

#### Writing a Node.js Dockerfile:
\`\`\`dockerfile
# Base lightweight image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /usr/src/app

# Copy lock files and install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy application source files
COPY . .

# Expose ports and boot app
EXPOSE 5000
CMD ["node", "index.js"]
\`\`\`
            `,
            exercise: "Create a Dockerfile for a static website. Use nginx:alpine as the base image and copy files to the default public directory."
          },
          {
            id: "dv-l-1-2",
            title: "Docker Compose configurations",
            time: "45 min",
            summary: "Orchestrating databases, volume persistence, and link networks",
            content: `
### Multi-Container Orchestration
Using single containers is fine, but production apps require web fronts, database backends, and caches running together. **Docker Compose** lets you define these networks in a single YAML file:

\`\`\`yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "5000:5000"
    depends_on:
      - db
  db:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - db_data:/data/db

volumes:
  db_data:
\`\`\`
            `,
            exercise: "Write a docker-compose.yml configuration establishing connection link pipelines between a web container and a redis container cache."
          }
        ]
      },
      {
        id: "dv-m-2",
        title: "Module 2: CI/CD Pipelines with GitHub Actions",
        duration: "1 Week",
        difficulty: "Intermediate",
        objectives: [
          "Structure YAML workflows triggered by repository pushes",
          "Automate tests and compile images inside build runners"
        ],
        lessons: [
          {
            id: "dv-l-2-1",
            title: "GitHub Actions Automation",
            time: "55 min",
            summary: "Jobs, runners, steps triggers, environments variables, and secrets encryption",
            content: `
### Continuous Integration (CI)
CI is the practice of automating the integration of code changes from multiple contributors into a single software project. **GitHub Actions** automates this workflow:

\`\`\`yaml
# .github/workflows/ci.yml
name: Node.js CI

on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm test
\`\`\`
            `,
            exercise: "Write a GitHub Actions workflow that runs linting checks whenever a Pull Request is submitted targeting the main branch."
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
      { name: "Docker Reference Manual", desc: "Dockerfile keywords, commands, and volumes reference.", link: "https://docs.docker.com" },
      { name: "GitHub Actions Docs", desc: "Workflow syntax reference index.", link: "https://docs.github.com/en/actions" }
    ]
  }
];

export const glossary = [
  { term: "Docker", def: "Containerization tool isolates application files and dependencies from operating system hardware." },
  { term: "Dockerfile", def: "Instruction text file detailing steps required to build docker images." },
  { term: "Docker Compose", def: "YAML layout engine to run multi-container networks." },
  { term: "Continuous Integration", def: "Automated verification triggers checking code linting and unit tests on pull requests." },
  { term: "Continuous Deployment", def: "Automated release engines deploying successful build artifacts to servers." }
];
