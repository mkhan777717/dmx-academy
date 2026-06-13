// Trending Tech Stack Course Data

export const allPhases = [
  {
    id: "tt-phase-1",
    title: "Phase 1: TypeScript & Rust Ecosystem (Weeks 1–2)",
    description: "Learn to build strongly-typed applications using TypeScript and explore memory-safe systems programming with Rust.",
    modules: [
      {
        id: "tt-m-1",
        title: "Module 1: TypeScript type systems",
        duration: "1 Week",
        difficulty: "Beginner-Intermediate",
        objectives: [
          "Define custom interfaces and type aliases in TypeScript",
          "Configure compiler tsconfig options for web apps",
          "Implement strict generic functions mapping dynamic inputs"
        ],
        lessons: [
          {
            id: "tt-l-1-1",
            title: "TypeScript Core Typing",
            time: "45 min",
            summary: "Interfaces, unions, generics, intersection parameters, and dynamic type guards",
            content: `
### Why TypeScript?
JavaScript is dynamically typed, meaning errors are only caught at runtime. **TypeScript** adds static types to JavaScript, allowing IDEs and compilers to catch syntax mismatches before execution.

#### Basic TypeScript types:
\`\`\`typescript
interface UserProfile {
  id: string;
  username: string;
  isAdmin: boolean;
  score?: number; // Optional field
}

function greetUser(user: UserProfile): string {
  return \`Welcome, \${user.username}!\`;
}
\`\`\`
            `,
            exercise: "Define a generic interface Container<T> that holds a property 'value' of type T and a getter function."
          },
          {
            id: "tt-l-1-2",
            title: "Rust Systems & Memory",
            time: "50 min",
            summary: "Ownership, borrow checking, compiler checks, and structures memory mapping",
            content: `
### Introduction to Rust
Rust is a systems programming language designed for absolute performance and memory safety. Unlike C or C++, Rust does not use manual memory management or a garbage collector. Instead, it enforces **Ownership**:

#### Ownership rules:
1.  Each value in Rust has an owner variable.
2.  There can only be one owner at a time.
3.  When the owner goes out of scope, the value is dropped (deleted).

\`\`\`rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1; // s1 is MOVED to s2. s1 is no longer valid!
    
    // println!("{}, world!", s1); // This would crash at compile time!
    println!("{}, world!", s2);    // This works perfectly!
}
\`\`\`
            `,
            exercise: "Explain in writing how Rust's borrow checker prevents data races at compile time without a garbage collector."
          }
        ]
      }
    ]
  }
];

export const resourcesList = [
  {
    category: "Developer Manuals",
    items: [
      { name: "TypeScript Handbook Docs", desc: "Types reference, interfaces, and compiler guides.", link: "https://www.typescriptlang.org/docs" },
      { name: "The Rust Programming Book", desc: "Official guide explaining ownership and borrows.", link: "https://doc.rust-lang.org/book" }
    ]
  }
];

export const glossary = [
  { term: "TypeScript", def: "Statically-typed superset compile-to-JS programming language." },
  { term: "Interface", def: "TypeScript structural layout contract validating object fields properties types." },
  { term: "Rust", def: "Systems programming language focused on speed, concurrency, and memory ownership safety." },
  { term: "Ownership", def: "Rust memory management strategy checking bounds at compilation to avoid garbage collector lag." },
  { term: "GraphQL", def: "API query language allowing clients to request specific data schemas from servers." }
];
