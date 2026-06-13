// Flutter Development Course Data

export const allPhases = [
  {
    id: "fl-phase-1",
    title: "Phase 1: Dart & Widgets Composition (Weeks 1–2)",
    description: "Learn Dart programming foundations, Flutter reactive layouts, and layout alignments.",
    modules: [
      {
        id: "fl-m-1",
        title: "Module 1: Dart programming & core widgets",
        duration: "1 Week",
        difficulty: "Beginner",
        objectives: [
          "Explain class properties and null-safety principles in Dart",
          "Assemble structural UI nodes using stateless widgets",
          "Handle alignment spaces using Columns and Rows layouts"
        ],
        lessons: [
          {
            id: "fl-l-1-1",
            title: "Dart Fundamentals & Null-Safety",
            time: "45 min",
            summary: "Classes inheritance, strongly-typed variables, null safety parameters, and futures async",
            content: `
### Why Dart?
Flutter uses **Dart** as its programming language. Dart compiles directly to native ARM and x86 machine code, providing exceptional performance and smooth UI rendering.

#### Core Dart Features:
1.  **Strong Typing:** Types are verified at compile time.
2.  **Sound Null Safety:** Variables cannot be null unless explicitly stated:
    \`\`\`dart
    String name = "Jack"; // Cannot be null
    String? title;        // Can be null
    \`\`\`
3.  **Futures:** Handles asynchronous tasks cleanly (comparable to JavaScript Promises):
    \`\`\`dart
    Future<String> fetchUser() async {
      return await simulateNetworkCall();
    }
    \`\`\`
            `,
            exercise: "Write a Dart class Person containing name and age fields. Implement constructor null safety checks."
          },
          {
            id: "fl-l-1-2",
            title: "Stateless vs Stateful Widgets",
            time: "50 min",
            summary: "Rendering views, mounting tree states, and triggering setState changes",
            content: `
### Everything is a Widget
In Flutter, the UI is built as a nested tree of **widgets**.

#### 1. StatelessWidget
Used for static parts of the UI that do not change based on user interactions:
\`\`\`dart
class WelcomeText extends StatelessWidget {
  final String text;
  const WelcomeText({super.key, required this.text});

  @override
  Widget build(BuildContext context) {
    return Text(text, style: const TextStyle(fontSize: 18));
  }
}
\`\`\`

#### 2. StatefulWidget
Maintains internal mutable state. Calling \`setState()\` schedules a rebuild:
\`\`\`dart
class Counter extends StatefulWidget {
  const Counter({super.key});
  @override
  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int count = 0;
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () => setState(() => count++),
      child: Text("Count: $count"),
    );
  }
}
\`\`\`
            `,
            exercise: "Build a Flutter StatefulWidget that toggles a boolean variable on button click, changing the displayed icon."
          }
        ]
      }
    ]
  }
];

export const resourcesList = [
  {
    category: "Flutter Documentation",
    items: [
      { name: "Flutter Official Docs", desc: "Widgets reference index and setup guides.", link: "https://flutter.dev/docs" },
      { name: "Dart Language Handbook", desc: "Dart coding paradigms explainers.", link: "https://dart.dev/guides" }
    ]
  }
];

export const glossary = [
  { term: "Flutter", def: "Google open-source framework compiling natively from single codebase to mobile, web, and desktop." },
  { term: "Dart", def: "Object-oriented, class-based, strongly-typed programming language compiled natively." },
  { term: "Widget", def: "The fundamental layout block defining interface configurations in Flutter." },
  { term: "StatefulWidget", def: "Widget configuration maintaining mutable state data re-rendering layouts dynamically." },
  { term: "Hot Reload", def: "Flutter compiler capability instantly updating UI frames without resetting state variables." }
];
