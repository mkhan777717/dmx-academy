"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What technology stacks and topics are covered in the curriculum?",
    answer: "We cover a wide range of modern, in-demand technologies including Generative AI, Machine Learning & AI, Full Stack Development (React, Next.js, Node.js), DevOps, Mobile Development (Flutter, React Native), Cloud Computing, and Blockchain."
  },
  {
    question: "Do I need prior coding experience to join the courses?",
    answer: "Not at all! We offer beginner-friendly foundation courses in programming basics alongside advanced career tracks. Whether you're a complete novice or an experienced engineer looking to upskill in AI, we have a path for you."
  },
  {
    question: "How do live interactive classes and coding contests work?",
    answer: "Live classes are conducted inside our custom coding studio with real-time screen sharing, quizzes, and live chat. Coding contests are hosted on our custom Practice Arena where you can compete, test your skills, and track your progress on public leaderboards."
  },
  {
    question: "Is there support for mock interviews and job preparation?",
    answer: "Yes! Our platform features an AI-Powered Viva simulator for mock technical interviews, structured study materials, a custom resume builder, and expert mentorship guides to prepare you for tech interviews."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 overflow-hidden border-t" style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-primary)" }}>
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] blur-[120px] rounded-full pointer-events-none" style={{ backgroundColor: "var(--accent-primary)", opacity: 0.04 }} />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[300px] h-[300px] blur-[100px] rounded-full pointer-events-none" style={{ backgroundColor: "var(--accent-secondary)", opacity: 0.02 }} />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border"
            style={{
              backgroundColor: "var(--accent-glow)",
              color: "var(--accent-primary)",
              borderColor: "var(--border-primary)"
            }}
          >
            <HelpCircle size={10} />
            FAQ Section
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">Questions</span>
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
            Got questions? We have answers. Find everything you need to know about our courses, programs, and interactive platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border transition-all duration-300 overflow-hidden"
                style={{
                  backgroundColor: isOpen ? "var(--bg-secondary)" : "var(--bg-card)",
                  borderColor: isOpen ? "var(--accent-primary)" : "var(--border-primary)",
                  boxShadow: isOpen ? "0 4px 20px -5px var(--accent-glow)" : "none"
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left font-semibold text-sm md:text-base transition-colors cursor-pointer"
                  style={{ color: "var(--text-primary)" }}
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="p-1 rounded-lg bg-[var(--bg-hover)] text-[var(--text-secondary)] shrink-0 ml-4"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div
                        className="px-6 pb-6 pt-2 text-xs md:text-sm leading-relaxed border-t"
                        style={{ color: "var(--text-muted)", borderColor: "var(--border-primary)" }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
