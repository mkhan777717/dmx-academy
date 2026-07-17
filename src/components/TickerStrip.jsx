
import React, { useRef, useEffect } from "react";

/* ─── Ticker Strip ───────────────────────────────────── */
const tickers = [
  "Interactive Browser Sandboxes",
  "Live Cohort Sessions",
  "Real-Time Feedback",
  "50+ Real Projects",
  "Learn from Industry Experts",
  "AI-Powered Learning",
  "Code. Build. Deploy.",
];

// --- Lower speed by increasing animation duration, and make it actually scroll ---
const TickerStrip = ({ tok }) => {
  const trackRef = useRef(null);

  // Duplicate more items if needed for seamless scrolling
  const items = [...tickers, ...tickers];

  // Inline keyframes for scoped effect
  // Slow down to 60s duration for much lower speed
  // Also pause on hover
  return (
    <div
      className="overflow-hidden border-y"
      style={{ borderColor: tok.tickerBorder }}
    >
      <div
        ref={trackRef}
        className="ticker-track py-2.5 flex"
        style={{
          whiteSpace: "nowrap",
          willChange: "transform",
          animation: "tickerScroll 60s linear infinite",
        }}
        onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
      >
        {items.map((t, i) => (
          <span
            key={i}
            className="mx-8 text-xl font-medium tracking-[0.18em] uppercase whitespace-nowrap"
            style={{ color: tok.tickerText }}
          >
            {t}
            <span className="mx-8" style={{ color: tok.tickerDot }}>·</span>
          </span>
        ))}
      </div>
      {/* Keyframes injected inline to localize to this component */}
      <style>
        {`
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        `}
      </style>
    </div>
  );
};

export default TickerStrip;