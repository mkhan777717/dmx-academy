// React.js Dedicated Course Data

export const allPhases = [
  {
    id: "r-phase-1",
    title: "Phase 1: React 19 Foundations (Weeks 1–3)",
    description: "Master components, props, virtual DOM mechanics, state triggers, and interactive event handlers.",
    modules: [
      {
        id: "r-m-1",
        title: "Module 1: React Core Mechanics",
        duration: "1 Week",
        difficulty: "Beginner",
        objectives: [
          "Understand Virtual DOM Reconciliation diffing rules",
          "Compose structural interface elements using JSX",
          "Pass read-only parameters using props mapping configurations"
        ],
        lessons: [
          {
            id: "r-l-1-1",
            title: "What is React & Virtual DOM?",
            time: "45 min",
            summary: "Reconciliation, diffing, and browser repaints optimization",
            content: `
### Understanding the Virtual DOM
Traditional web pages update the UI by calling native DOM APIs. When many nodes change, browsers recalculate layout sizing and redraw pixels (repainting), causing visual lag. React bypasses this bottleneck using a **Virtual DOM**:
*   **Virtual DOM:** A lightweight, complete representation of the real DOM kept in memory.
*   **Reconciliation:** When state changes, React constructs a new Virtual DOM tree and diffs it against the old tree.
*   **Optimal Update:** React identifies the minimum changes needed and updates only those nodes in the real browser DOM.

#### Key Insight: React Fiber
React Fiber is the core reconciliation engine introduced to support incremental rendering. It allows splitting rendering work into chunks and spreading them across multiple frames to maintain a smooth 60fps refresh rate.
            `,
            exercise: "Explain in your own words the difference between writing directly to the browser DOM versus updating a React state parameter."
          },
          {
            id: "r-l-1-2",
            title: "JSX Syntax & Elements",
            time: "40 min",
            summary: "Writing HTML inside JS, compilation layers, and syntax constraints",
            content: `
### Writing Structured Layouts with JSX
JSX (JavaScript XML) allows you to write HTML-like structures directly inside your JavaScript files.

#### Under the Hood Compilation
Browsers cannot read JSX. Compilation tooling (like Babel, SWC, or the React Compiler) converts JSX into standard JavaScript calls:
\`\`\`javascript
// JSX Input:
const element = <h1 className="title">Hello World</h1>;

// Compiled JS:
const element = React.createElement("h1", { className: "title" }, "Hello World");
\`\`\`

#### Essential JSX Constraints:
1.  **Single Parent Node:** All JSX tags must be wrapped in a single parent container (or an empty Fragment wrapper tag: \`<></>\`).
2.  **Attribute Formatting:** Use camelCase for attributes (e.g. \`className\` instead of \`class\`, and \`tabIndex\` instead of \`tabindex\`).
3.  **Inline Styling Objects:** Styles must be passed as JS objects: \`style={{ color: 'red', fontSize: '14px' }}\`.
            `,
            exercise: "Create a JSX profile card return block. Include a profile picture, name header, and user description, wrapped in a single parent tag."
          },
          {
            id: "r-l-1-3",
            title: "Components & Props",
            time: "45 min",
            summary: "Unidirectional data flow, functional components, and immutable parameters",
            content: `
### Components & Dynamic Parameters
React UIs are built by nesting reusable components. Modern React uses JavaScript functions as components:
\`\`\`jsx
function Badge(props) {
  return (
    <span className="badge" style={{ backgroundColor: props.color }}>
      {props.text}
    </span>
  );
}
\`\`\`

#### Rules of Props:
*   **Read-Only (Immutable):** A component must never modify its own props. If you need to change data dynamically, use **State**.
*   **Unidirectional Flow:** Props only pass downwards from parent to child. Children notify parents of changes using callback events.
            `,
            exercise: "Build a custom component named Button that receives label, color, and size props. Render a standard html button styled with these props."
          }
        ]
      },
      {
        id: "r-m-2",
        title: "Module 2: Stateful Hook Systems",
        duration: "2 Weeks",
        difficulty: "Intermediate",
        objectives: [
          "Maintain dynamic components data using useState hooks",
          "Synchronize side effects and handle listeners cleanup using useEffect",
          "Isolate modular state behaviors by creating custom hooks"
        ],
        lessons: [
          {
            id: "r-l-2-1",
            title: "useState Hook Management",
            time: "50 min",
            summary: "Triggering component re-renders, state values cache, and batch updates",
            content: `
### Managing Mutable State
While props are inputs passed down to a component, **State** is a component's private, internally managed memory cache. When state changes, React re-renders the component.

#### Using the useState Hook
\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`

Note: React state updates are asynchronous and batched. If your next state depends on the previous state, pass a callback: \`setCount(prev => prev + 1)\`.
            `,
            exercise: "Try the React State & Props Lab in the sidebar to see how state updates trigger virtual DOM renders and trigger console log events."
          },
          {
            id: "r-l-2-2",
            title: "useEffect Hook & Lifecycle",
            time: "55 min",
            summary: "Performing side effects, dependency array configuration, and event listener cleanup",
            content: `
### Synchronizing Side Effects
A component render must be a pure operation. Place side effects (like data fetching, subscription binds, window listeners, or timer intervals) inside the \`useEffect\` hook:
\`\`\`jsx
import { useEffect, useState } from 'react';

function ScreenResizer() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup: runs before running the effect again or unmounting
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array means this runs only on mount and cleanup runs on unmount
}
\`\`\`

#### Dependency Rules:
*   \`[]\`: Runs only once (mount).
*   \`[param]\`: Runs on mount and whenever \`param\` changes.
*   *No array*: Runs on every single render cycle (causes loops, avoid!).
            `,
            exercise: "Write an effect that fetches data from an API whenever a 'userId' prop changes. Ensure you implement a cleanup flag to ignore stale responses."
          }
        ]
      }
    ]
  },
  {
    id: "r-phase-2",
    title: "Phase 2: Advanced React Patterns (Weeks 4–6)",
    description: "Implement unified global context state stores, understand React 19 compilation features, and manage forms.",
    modules: [
      {
        id: "r-m-3",
        title: "Module 3: State sharing & Performance",
        duration: "3 Weeks",
        difficulty: "Advanced",
        objectives: [
          "Share state globally using useContext API",
          "Understand React 19's native compiler advantages",
          "Build validated form layouts using React Hook Form patterns"
        ],
        lessons: [
          {
            id: "r-l-3-1",
            title: "Context API Sharing",
            time: "50 min",
            summary: "Avoiding props drilling, creating context providers, and consuming values",
            content: `
### Global State with Context
Passing props through 10 nested components (prop drilling) is complex and hard to maintain. The **Context API** provides a way to pass data down the component tree without manually writing props at every level.

#### Creating Theme Context:
\`\`\`jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
\`\`\`
            `,
            exercise: "Build an auth provider block that handles logged-in user profiles and exposes a logout function via custom contexts."
          },
          {
            id: "r-l-3-2",
            title: "React 19 compiler & features",
            time: "45 min",
            summary: "Zero-dependency memoization, Suspense boundary states, and the use Hook",
            content: `
### Modern React 19 Paradigms
React 19 introduces major updates to component optimization and server bindings.

#### 1. The React Compiler (React Forget)
Previously, developers had to write \`useMemo\` and \`useCallback\` hooks manually to avoid unnecessary child renders. The new compiler automatically performs fine-grained memoization at compile-time.

#### 2. The 'use' Hook
You can now consume promises or contexts directly inside loops or conditionals:
\`\`\`jsx
import { use } from 'react';

function WeatherDisplay({ dataPromise }) {
  // Read value directly from promise. React automatically suspends execution
  const weather = use(dataPromise);
  return <p>Temperature: {weather.temp}°C</p>;
}
\`\`\`
            `,
            exercise: "Read React 19 documentation and summarize how the new compiler eliminates the need for manual memoization."
          }
        ]
      }
    ]
  }
];

export const resourcesList = [
  {
    category: "Official Docs",
    items: [
      { name: "React 19 Reference Docs", desc: "The official guide for all React components and APIs.", link: "https://react.dev" },
      { name: "React Hooks Quick Guide", desc: "List of all standard hooks with syntax examples.", link: "https://react.dev/reference/react" }
    ]
  },
  {
    category: "Useful Playgrounds",
    items: [
      { name: "StackBlitz online sandbox", desc: "Instantly run empty React projects in the browser.", link: "https://stackblitz.com" }
    ]
  }
];

export const glossary = [
  { term: "React", def: "A frontend library for building modular component-based user interfaces." },
  { term: "Virtual DOM", def: "In-memory lightweight DOM cache trees computed by React to optimize browser repaints." },
  { term: "useState", def: "React core Hook allowing functional components to maintain internal mutable state variables." },
  { term: "useEffect", def: "React Hook configured to execute asynchronous operations or side effects triggered by dependency arrays." },
  { term: "Context API", def: "Built-in state sharing engine allowing variables access without props drilling." },
  { term: "Reconciliation", def: "The internal diffing algorithm React runs to calculate DOM updates." }
];
