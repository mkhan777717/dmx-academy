// Next.js Dedicated Course Data

export const allPhases = [
  {
    id: "n-phase-1",
    title: "Phase 1: Routing & Rendering Boundaries (Weeks 1–2)",
    description: "Master file-system layouts, page parameters routing, and React Server Component (RSC) boundaries.",
    modules: [
      {
        id: "n-m-1",
        title: "Module 1: Next.js Layout Conventions",
        duration: "1 Week",
        difficulty: "Beginner-Intermediate",
        objectives: [
          "Organize App Router folder trees with nested pages and layouts",
          "Differentiate compile rules between Server and Client Components",
          "Inspect component boundaries in the Next Router Map"
        ],
        lessons: [
          {
            id: "n-l-1-1",
            title: "App Router conventions",
            time: "45 min",
            summary: "Dynamic routes, nested layouts, loader overlays, and intercept boundaries",
            content: `
### The App Router Layout
Next.js uses a directory-based routing system called the **App Router**. Folders nested under \`src/app\` define path endpoints:
*   \`app/page.jsx\` &rarr; Maps to root index route (\`/\`).
*   \`app/dashboard/page.jsx\` &rarr; Maps to route \`/dashboard\`.
*   \`app/blog/[slug]/page.jsx\` &rarr; Maps dynamic URL parameters (\`/blog/nextjs-15\`).

#### Key Layout Files:
1.  **page.jsx:** The unique UI view rendered for the route.
2.  **layout.jsx:** Wrapper shell shared across subfolders. Preserves state and does not trigger page re-renders during route transition.
3.  **loading.jsx:** Compiled automatically inside React Suspense overlays while page components resolve async data fetches.
4.  **error.jsx:** React boundary catching component crashes and displaying fallbacks.
            `,
            exercise: "Map a folder structure that supports a nested layout boundary for '/dashboard' and '/dashboard/settings', including default loader pages."
          },
          {
            id: "n-l-1-2",
            title: "RSC vs Client Components",
            time: "50 min",
            summary: "Virtual rendering models, bundle optimizations, and Client boundary guards",
            content: `
### React Server Components (RSC)
By default, all components inside the Next.js App Router are **React Server Components (RSC)**. They are executed on the server, generating raw HTML transmitted directly to the client browser.

#### The RSC Advantage
*   **0 KB Client JS:** RSC code remains on the server. Libraries (like marked down compilers) are not downloaded by visitors, optimizing bundle metrics.
*   **Direct Database Access:** Query databases, open file structures, and fetch secure API keys directly inside component files.

#### Declaring Client Components:
If you need interactive handlers (like \`useState\` or \`onClick\`), place the boundary directive at the top of the file:
\`\`\`jsx
"use client";
import { useState } from "react";
export default function InteractiveCard() { ... }
\`\`\`
            `,
            exercise: "Review the Next.js Router Map in the sidebar to check compile boundaries for server and client components."
          }
        ]
      }
    ]
  },
  {
    id: "n-phase-2",
    title: "Phase 2: Full-Stack Routing & Operations (Weeks 3–4)",
    description: "Configure incremental static caching, build server data forms, and compile REST api handlers.",
    modules: [
      {
        id: "n-m-2",
        title: "Module 2: Server API & Actions pipelines",
        duration: "2 Weeks",
        difficulty: "Advanced",
        objectives: [
          "Fetch server resources with revalidate options",
          "Execute form submissions securely using Server Actions",
          "Construct API Route Handler endpoint structures"
        ],
        lessons: [
          {
            id: "n-l-2-1",
            title: "Data Fetching & Caching options",
            time: "50 min",
            summary: "Static optimization, dynamic updates, and Incremental Static Regeneration (ISR)",
            content: `
### Fetching on the Server
Because Server Components execute on the server, they can run async data queries directly:
\`\`\`jsx
// Server Component page.jsx
export default async function NewsBoard() {
  // Fetch with cache parameters: revalidate every hour (ISR)
  const res = await fetch("https://api.news.com/today", {
    next: { revalidate: 3600 }
  });
  const data = await res.json();
  
  return <div>{data.title}</div>;
}
\`\`\`

#### Caching Strategies:
*   **Force Cache (Default):** Static rendering (SSG). Next caches endpoints permanently.
*   **No Store:** Dynamic rendering (SSR). Next fetches weather or user sessions on every request.
*   **Revalidate:** Incremental updates (ISR). Re-caches pages periodically.
            `,
            exercise: "Write a fetch statement targeting a mock weather endpoint that skips the next cache entirely, resolving values dynamically on every reload."
          },
          {
            id: "n-l-2-2",
            title: "Server Actions & secure forms",
            time: "55 min",
            summary: "Form Actions, async mutations, and revalidating tags",
            content: `
### Performing Data Mutations
Server Actions are asynchronous functions executed directly on the server, invoked by standard client forms.

#### Declaring Server Actions
\`\`\`jsx
// app/users/page.jsx
export default function NewUserForm() {
  async function submitAction(formData) {
    "use server";
    const name = formData.get("name");
    // Write directly to DB database here!
  }

  return (
    <form action={submitAction}>
      <input name="name" type="text" required />
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`
            `,
            exercise: "Build a form using Server Actions that captures input parameters email and message, printing them to the terminal console."
          },
          {
            id: "n-l-2-3",
            title: "Route Handlers (APIs)",
            time: "45 min",
            summary: "Rest API folder routes, request/response models, and headers validation",
            content: `
### Creating Next.js REST API routes
Next.js supports standard REST endpoints using \`route.js\` files inside the app router layout:

\`\`\`javascript
// File: app/api/status/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  return NextResponse.json({
    success: true,
    status: "online",
    timestamp: new Date()
  });
}
\`\`\`

Note: You cannot place both a \`page.jsx\` and a \`route.js\` inside the same folder directory level because they resolve the exact same request path.
            `,
            exercise: "Create a route handler matching app/api/ping/route.js that returns the text string 'pong'."
          }
        ]
      }
    ]
  }
];

export const resourcesList = [
  {
    category: "Next Reference Guides",
    items: [
      { name: "Next.js 15 Documentation", desc: "The official guide covering routing, rendering, caching, and actions.", link: "https://nextjs.org/docs" },
      { name: "React Server Components Guide", desc: "MDN and React reference explainers on server rendering.", link: "https://react.dev/reference/rsc/server-components" }
    ]
  }
];

export const glossary = [
  { term: "Next.js", def: "A full-stack React framework enabling hybrid server rendering, static builds, routing, and caching." },
  { term: "App Router", def: "Next.js file-system based routing workspace supporting pages, nested layouts, loading, and errors." },
  { term: "Server Component (RSC)", def: "React component compiled completely on the server, generating markup with zero client bundle impact." },
  { term: "Client Component", def: "Component rendered with client-side hydration, marked with the 'use client' directive." },
  { term: "Server Action", def: "Asynchronous backend mutation function triggered directly by frontend forms." },
  { term: "ISR (Incremental Static Regeneration)", def: "Rendering strategy rebuilding specific static page routes dynamically in the background." }
];
