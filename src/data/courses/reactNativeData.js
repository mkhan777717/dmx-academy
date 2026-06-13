// React Native Course Data

export const allPhases = [
  {
    id: "rn-phase-1",
    title: "Phase 1: Native Bridges & Styling (Weeks 1–2)",
    description: "Learn to build native iOS & Android apps using React components, JSX layouts, and styling variables.",
    modules: [
      {
        id: "rn-m-1",
        title: "Module 1: React Native Fundamentals",
        duration: "1 Week",
        difficulty: "Beginner-Intermediate",
        objectives: [
          "Understand how JavaScript bridges native OS components",
          "Style native views using StyleSheet utility configurations",
          "Run local sandbox bundles using Expo GO environments"
        ],
        lessons: [
          {
            id: "rn-l-1-1",
            title: "Native Bridges & Expo Core",
            time: "45 min",
            summary: "JS engines, thread boundaries, native views mapping, and Expo layouts CLI",
            content: `
### How React Native Works
Unlike hybrid web view containers (like Cordova), React Native uses JavaScript threads to communicate with native platform threads via a serialization **Bridge** (or the modern **JSI - JavaScript Interface**):
*   **JS Thread:** Executes standard React components logic.
*   **Native Thread:** Renders native components:
    *   \`<View>\` translates to \`UIView\` on iOS and \`android.view.View\` on Android.
    *   \`<Text>\` translates to \`UITextView\` / \`TextView\`.
*   **Expo:** A developer wrapper CLI and runtime suite (Expo Go) simplifying React Native setup.

#### Basic Component Example:
\`\`\`jsx
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Card</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold' }
});
\`\`\`
            `,
            exercise: "Create a screen component containing a scrollable ScrollView, rendering a list of ten text nodes."
          }
        ]
      }
    ]
  }
];

export const resourcesList = [
  {
    category: "React Native Docs",
    items: [
      { name: "React Native Official Docs", desc: "Core components and design reference guides.", link: "https://reactnative.dev/docs/getting-started" },
      { name: "Expo CLI Docs", desc: "Setting up apps using Expo Go.", link: "https://docs.expo.dev" }
    ]
  }
];

export const glossary = [
  { term: "React Native", def: "Facebook framework executing JavaScript code to render native mobile views." },
  { term: "Expo", def: "Suite of tools wrapping React Native to automate local compilation builds." },
  { term: "JSI (JavaScript Interface)", def: "Modern native bridge enabling direct reference bindings from JS threads to native OS layers." },
  { term: "StyleSheet", def: "React Native optimization utility translating JS styles into optimized native formatting." },
  { term: "ScrollView", def: "Core component wrapping screen items in a scrollable frame boundary." }
];
