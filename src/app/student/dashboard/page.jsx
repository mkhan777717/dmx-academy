"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Trophy, Clock, BookOpen, Terminal, Code,
  ChevronRight, ArrowUpRight, Activity, Calendar
} from "lucide-react";

export default function StudentDashboard() {
  const router = useRouter();

  const stats = [
    {
      title: "Problems Solved",
      value: "28 / 150",
      change: "4 problems this week",
      icon: Code,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10"
    },
    {
      title: "Contest Rank",
      value: "#14",
      change: "Top 5% of active students",
      icon: Trophy,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10"
    },
    {
      title: "Enrolled Tracks",
      value: "3 Active",
      change: "React, GenAI, DevOps",
      icon: BookOpen,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Total Experience",
      value: "4,250 XP",
      change: "+450 XP since yesterday",
      icon: Terminal,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const activeTracks = [
    { id: "track-1", name: "Modern Web & Mobile Development", progress: 68, category: "Web & Mobile Development", nextMilestone: "Next.js routing patterns" },
    { id: "track-2", name: "Generative AI Foundations", progress: 35, category: "Data & AI", nextMilestone: "Prompt chaining and vector DBs" },
    { id: "track-3", name: "Docker & Kubernetes for Developers", progress: 12, category: "Cloud & DevOps", nextMilestone: "Multi-stage Docker builds" }
  ];

  const recentActivities = [
    { id: "act-1", event: "Solved problem 'Two Sum'", category: "Practice", status: "AC (+100 XP)", time: "1 hour ago" },
    { id: "act-2", event: "Submitted 'VDOM Reconciliation' challenge", category: "Contest", status: "Reviewing", time: "4 hours ago" },
    { id: "act-3", event: "Completed lesson 'Introduction to React Compilers'", category: "Learning", status: "Completed (+50 XP)", time: "1 day ago" },
    { id: "act-4", event: "Joined 'Weekly Algorithmic Clash #12'", category: "Contest", status: "Ranked #14", time: "3 days ago" }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Hero Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 md:p-8 rounded-3xl border relative overflow-hidden"
        style={{
          backgroundColor: "var(--glass-bg)",
          borderColor: "var(--border-primary)"
        }}
      >
        <div className="space-y-2 relative z-10">
          <h1 className="text-2xl md:text-3xl font-black font-display tracking-tight" style={{ color: "var(--text-primary)" }}>
            Welcome back, Scholar!
          </h1>
          <p className="text-xs max-w-xl" style={{ color: "var(--text-secondary)" }}>
            Track your progress across courses, view coding challenges, and participate in active programming contests.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0 relative z-10">
          <button
            onClick={() => router.push("/practice")}
            className="px-5 py-3 rounded-2xl font-bold text-xs text-white shadow-md transition-all cursor-pointer flex items-center space-x-1.5 hover:scale-102"
            style={{ background: "var(--accent-gradient)" }}
          >
            <Code size={14} />
            <span>Practice Coding</span>
          </button>
          <button
            onClick={() => router.push("/contest")}
            className="px-5 py-3 rounded-2xl font-bold text-xs transition-all border cursor-pointer flex items-center space-x-1.5 hover:scale-102"
            style={{ 
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-primary)",
              color: "var(--text-primary)"
            }}
          >
            <span>Enter Contest Arena</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-3xl border shadow-sm flex flex-col justify-between space-y-4"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-card)"
              }}
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-extrabold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                  {stat.title}
                </span>
                <div className={`p-2 rounded-xl ${stat.bgColor} ${stat.color}`}>
                  <IconComponent size={16} />
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-black" style={{ color: "var(--text-primary)" }}>
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold" style={{ color: "var(--text-secondary)" }}>
                  {stat.change}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Split Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Enrolled Tracks Progress */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-base font-bold font-display" style={{ color: "var(--text-primary)" }}>
            Your Learning Tracks
          </h2>

          <div className="space-y-4">
            {activeTracks.map((track) => (
              <div
                key={track.id}
                className="p-6 rounded-3xl border shadow-sm space-y-4"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-card)"
                }}
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded border bg-slate-500/5 text-[var(--text-secondary)]" style={{ borderColor: "var(--border-primary)" }}>
                      {track.category}
                    </span>
                    <h3 className="text-sm font-bold font-display pt-1" style={{ color: "var(--text-primary)" }}>
                      {track.name}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-gradient">
                    {track.progress}% Complete
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-2 rounded-full transition-all duration-500" 
                    style={{ 
                      width: `${track.progress}%`,
                      background: "var(--accent-gradient)"
                    }}
                  />
                </div>

                <div className="flex justify-between items-center text-[10px]" style={{ color: "var(--text-secondary)" }}>
                  <span>Next: <strong style={{ color: "var(--text-primary)" }}>{track.nextMilestone}</strong></span>
                  <button className="flex items-center font-bold text-[var(--text-accent)] hover:underline">
                    <span>Continue Track</span>
                    <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Recent activity log */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold font-display" style={{ color: "var(--text-primary)" }}>
              Recent Activity
            </h2>
            <Activity size={16} style={{ color: "var(--text-muted)" }} />
          </div>

          <div className="border rounded-3xl overflow-hidden shadow-sm" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-card)" }}>
            <div className="p-4 divide-y" style={{ borderColor: "var(--border-primary)" }}>
              {recentActivities.map((act) => (
                <div key={act.id} className="py-3.5 first:pt-0 last:pb-0 space-y-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded border text-[var(--text-secondary)] bg-slate-500/5" style={{ borderColor: "var(--border-primary)" }}>
                      {act.category}
                    </span>
                    <span className="text-[9px] text-slate-400 font-medium">{act.time}</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <p className="text-xs font-bold truncate pr-2" style={{ color: "var(--text-primary)" }}>
                      {act.event}
                    </p>
                    <span className="text-[10px] font-extrabold shrink-0" style={{ color: "var(--text-accent)" }}>
                      {act.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
