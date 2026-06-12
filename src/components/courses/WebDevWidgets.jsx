"use client";

import { useState } from "react";
import { Play, RotateCcw, Layout, Layers, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

/* ─── HTML & CSS Live Editor ─────────────────────── */
export function HtmlCssSandbox() {
  const [html, setHtml] = useState(`<h1>Hello World!</h1>\n<p>Edit this code live inside this browser compiler box.</p>`);
  const [css, setCss] = useState(`h1 {\n  color: #6366f1;\n  font-size: 24px;\n  margin-bottom: 8px;\n}\np {\n  color: #475569;\n  font-size: 14px;\n}`);

  const srcDoc = `
    <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; padding: 12px; margin: 0; background-color: transparent; }
          ${css}
        </style>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `;

  return (
    <div className="rounded-2xl border overflow-hidden flex flex-col shadow-lg" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-primary)" }}>
      {/* Editor Title Bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: "var(--border-primary)", backgroundColor: "var(--bg-hover)" }}>
        <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="text-[11px] font-mono ml-2 font-bold" style={{ color: "var(--text-muted)" }}>live_editor.html</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px border-b" style={{ borderColor: "var(--border-primary)", backgroundColor: "var(--border-primary)" }}>
        {/* HTML input */}
        <div className="p-3 flex flex-col" style={{ backgroundColor: "var(--bg-card)" }}>
          <label className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: "var(--text-muted)" }}>HTML Content</label>
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            className="w-full h-28 font-mono text-xs outline-none p-2 rounded-lg resize-none"
            style={{ backgroundColor: "var(--bg-input)", border: "1px solid var(--border-primary)", color: "var(--text-primary)" }}
          />
        </div>

        {/* CSS input */}
        <div className="p-3 flex flex-col" style={{ backgroundColor: "var(--bg-card)" }}>
          <label className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: "var(--text-muted)" }}>CSS Styles</label>
          <textarea
            value={css}
            onChange={(e) => setCss(e.target.value)}
            className="w-full h-28 font-mono text-xs outline-none p-2 rounded-lg resize-none"
            style={{ backgroundColor: "var(--bg-input)", border: "1px solid var(--border-primary)", color: "var(--text-primary)" }}
          />
        </div>
      </div>

      {/* Frame Preview Container */}
      <div className="p-3 flex flex-col" style={{ backgroundColor: "var(--bg-card)" }}>
        <label className="text-[10px] font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
          <Play size={10} style={{ color: "var(--text-accent)" }} /> Live Sandbox Canvas Preview
        </label>
        <iframe
          srcDoc={srcDoc}
          title="Sandbox Preview Frame"
          sandbox="allow-scripts"
          className="w-full h-32 rounded-xl border bg-white shadow-inner"
          style={{ borderColor: "var(--border-primary)" }}
        />
      </div>
    </div>
  );
}

/* ─── Interactive Flexbox Lab ───────────────────── */
export function FlexboxLab() {
  const [direction, setDirection] = useState("row");
  const [justify, setJustify] = useState("center");
  const [align, setAlign] = useState("center");
  const [gap, setGap] = useState("16px");

  const items = [
    { id: 1, label: "Item A", color: "#6366f1" },
    { id: 2, label: "Item B", color: "#06b6d4" },
    { id: 3, label: "Item C", color: "#10b981" },
  ];

  return (
    <div className="rounded-2xl border p-5 space-y-6 shadow-md" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-primary)" }}>
      <div className="flex items-center gap-2">
        <Layout size={18} style={{ color: "var(--text-accent)" }} />
        <h4 className="text-sm font-bold font-display" style={{ color: "var(--text-primary)" }}>Visual Flexbox Controls</h4>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
        {/* flex-direction */}
        <div className="space-y-1.5">
          <label className="block font-semibold" style={{ color: "var(--text-secondary)" }}>flex-direction</label>
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            className="w-full p-2 rounded-lg outline-none cursor-pointer border"
            style={{ backgroundColor: "var(--bg-input)", borderColor: "var(--border-primary)", color: "var(--text-primary)" }}
          >
            <option value="row">row</option>
            <option value="column">column</option>
          </select>
        </div>

        {/* justify-content */}
        <div className="space-y-1.5">
          <label className="block font-semibold" style={{ color: "var(--text-secondary)" }}>justify-content</label>
          <select
            value={justify}
            onChange={(e) => setJustify(e.target.value)}
            className="w-full p-2 rounded-lg outline-none cursor-pointer border"
            style={{ backgroundColor: "var(--bg-input)", borderColor: "var(--border-primary)", color: "var(--text-primary)" }}
          >
            <option value="flex-start">flex-start</option>
            <option value="center">center</option>
            <option value="flex-end">flex-end</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
          </select>
        </div>

        {/* align-items */}
        <div className="space-y-1.5">
          <label className="block font-semibold" style={{ color: "var(--text-secondary)" }}>align-items</label>
          <select
            value={align}
            onChange={(e) => setAlign(e.target.value)}
            className="w-full p-2 rounded-lg outline-none cursor-pointer border"
            style={{ backgroundColor: "var(--bg-input)", borderColor: "var(--border-primary)", color: "var(--text-primary)" }}
          >
            <option value="stretch">stretch</option>
            <option value="flex-start">flex-start</option>
            <option value="center">center</option>
            <option value="flex-end">flex-end</option>
          </select>
        </div>

        {/* gap */}
        <div className="space-y-1.5">
          <label className="block font-semibold" style={{ color: "var(--text-secondary)" }}>gap</label>
          <select
            value={gap}
            onChange={(e) => setGap(e.target.value)}
            className="w-full p-2 rounded-lg outline-none cursor-pointer border"
            style={{ backgroundColor: "var(--bg-input)", borderColor: "var(--border-primary)", color: "var(--text-primary)" }}
          >
            <option value="8px">8px</option>
            <option value="16px">16px</option>
            <option value="32px">32px</option>
          </select>
        </div>
      </div>

      {/* Render Canvas Workspace */}
      <div 
        className="rounded-xl border p-4 h-48 flex transition-all duration-300 shadow-inner" 
        style={{
          display: "flex",
          flexDirection: direction,
          justifyContent: justify,
          alignItems: align,
          gap: gap,
          backgroundColor: "var(--bg-code)",
          borderColor: "var(--border-primary)"
        }}
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            layout
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="h-10 w-20 flex items-center justify-center rounded-lg text-white font-bold text-xs shadow-md select-none"
            style={{ backgroundColor: item.color }}
          >
            {item.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Interactive JS DOM Debugger ───────────────── */
export function JsDomDebugger() {
  const [text, setText] = useState("Hello DOM!");
  const [hasGradient, setHasGradient] = useState(false);
  const [hasBorder, setHasBorder] = useState(false);
  const [code, setCode] = useState("// Click buttons to trigger DOM methods live");

  const handleTextChange = () => {
    const newText = text === "Hello DOM!" ? "Compiled Sandbox Text!" : "Hello DOM!";
    setText(newText);
    setCode(`const element = document.querySelector("#element");\nelement.textContent = "${newText}";`);
  };

  const handleGradientToggle = () => {
    setHasGradient(!hasGradient);
    setCode(`const element = document.querySelector("#element");\nelement.classList.toggle("text-gradient");`);
  };

  const handleBorderToggle = () => {
    setHasBorder(!hasBorder);
    setCode(`const element = document.querySelector("#element");\nelement.classList.toggle("border-glow");`);
  };

  const handleReset = () => {
    setText("Hello DOM!");
    setHasGradient(false);
    setHasBorder(false);
    setCode("// State parameters reset successfully");
  };

  return (
    <div className="rounded-2xl border p-5 space-y-6 shadow-md" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-primary)" }}>
      <div className="flex items-center gap-2">
        <Layers size={18} style={{ color: "var(--text-accent)" }} />
        <h4 className="text-sm font-bold font-display" style={{ color: "var(--text-primary)" }}>JS DOM Mutation Lab</h4>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={handleTextChange}
          className="px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-sm border hover:shadow transition-all"
          style={{ backgroundColor: "var(--bg-hover)", borderColor: "var(--border-primary)", color: "var(--text-primary)" }}
        >
          Change Text
        </button>
        <button
          onClick={handleGradientToggle}
          className="px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-sm border hover:shadow transition-all"
          style={{ backgroundColor: "var(--bg-hover)", borderColor: "var(--border-primary)", color: "var(--text-primary)" }}
        >
          Toggle Gradient
        </button>
        <button
          onClick={handleBorderToggle}
          className="px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-sm border hover:shadow transition-all"
          style={{ backgroundColor: "var(--bg-hover)", borderColor: "var(--border-primary)", color: "var(--text-primary)" }}
        >
          Toggle Border Glow
        </button>
        <button
          onClick={handleReset}
          className="px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-sm border hover:shadow transition-all ml-auto flex items-center gap-1 bg-red-500/10 border-red-500/20 text-red-500 hover:bg-red-500/20"
        >
          <RotateCcw size={10} /> Reset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Mock DOM representation */}
        <div className="rounded-xl border p-6 flex flex-col items-center justify-center min-h-[120px] relative overflow-hidden transition-all duration-300"
          style={{
            backgroundColor: "var(--bg-code)",
            borderColor: hasBorder ? "var(--accent-primary)" : "var(--border-primary)",
            boxShadow: hasBorder ? "0 0 16px var(--accent-glow)" : "none"
          }}
        >
          <div className="absolute top-2 left-2 text-[8px] uppercase tracking-wider font-mono" style={{ color: "var(--text-muted)" }}>#element node</div>
          <span 
            className="text-lg font-extrabold transition-all duration-300"
            style={hasGradient ? {
              background: "var(--accent-gradient)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            } : {
              color: "var(--text-primary)"
            }}
          >
            {text}
          </span>
        </div>

        {/* Code Visualizer */}
        <div className="rounded-xl border p-4 min-h-[120px]" style={{ backgroundColor: "var(--bg-input)", borderColor: "var(--border-primary)" }}>
          <div className="text-[8px] uppercase tracking-wider font-mono mb-2" style={{ color: "var(--text-muted)" }}>Dynamic code output</div>
          <pre className="font-mono text-xs leading-relaxed overflow-x-auto" style={{ color: "var(--text-accent)" }}>{code}</pre>
        </div>
      </div>
    </div>
  );
}
