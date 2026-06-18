"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Users, CheckSquare, Calendar, Star,
  ArrowUpRight, Clock, Award, Activity
} from "lucide-react";

export default function MentorDashboard() {
  const router = useRouter();

  const stats = [
    {
      title: "Students Guided",
      value: "45 Active",
      change: "+6 new scholars this week",
      icon: Users,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10"
    },
    {
      title: "Reviews Conducted",
      value: "182 Solved",
      change: "98% compliance rate",
      icon: CheckSquare,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10"
    },
    {
      title: "Office Hours",
      value: "3 Scheduled",
      change: "Next: Tomorrow at 2:00 PM",
      icon: Calendar,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Mentor Rating",
      value: "4.95 / 5.0",
      change: "Based on 84 review votes",
      icon: Star,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const mentoredTracks = [
    { id: "m-1", track: "Web & Mobile Development", activeScholars: 24, activeReviews: 5, rating: 4.9 },
    { id: "m-2", name: "Creative Tech & Blockchain", activeScholars: 12, activeReviews: 2, rating: 5.0 },
    { id: "m-3", name: "Data & AI Systems", activeScholars: 9, activeReviews: 3, rating: 4.8 }
  ];

  const pendingSubmissions = [
    { id: "review-1", user: "quantum_coder", problem: "VDOM Reconciliation", lang: "JavaScript", status: "Needs Review", time: "10 mins ago" },
    { id: "review-2", user: "lex_dev", problem: "Rate Limiter Design", lang: "Go", status: "Needs Review", time: "30 mins ago" },
    { id: "review-3", user: "security_guru", problem: "Merkle Tree Verification", lang: "Rust", status: "Under Review", time: "1 hour ago" },
    { id: "review-4", user: "byte_knight", problem: "Two Sum", lang: "C++", status: "Needs Review", time: "2 hours ago" }
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
            Welcome back, Instructor!
          </h1>
          <p className="text-xs max-w-xl" style={{ color: "var(--text-secondary)" }}>
            Manage your office hours, review pending coding submissions, and monitor your scholar learning metrics.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0 relative z-10">
          <button
            onClick={() => router.push("/contest")}
            className="px-5 py-3 rounded-2xl font-bold text-xs text-white shadow-md transition-all cursor-pointer flex items-center space-x-1.5 hover:scale-102"
            style={{ background: "var(--accent-gradient)" }}
          >
            <Award size={14} />
            <span>Manage Contests</span>
          </button>
          <button
            onClick={() => router.push("/courses")}
            className="px-5 py-3 rounded-2xl font-bold text-xs transition-all border cursor-pointer flex items-center space-x-1.5 hover:scale-102"
            style={{ 
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-primary)",
              color: "var(--text-primary)"
            }}
          >
            <span>Browse Curriculum</span>
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
        
        {/* Left: Pending Submissions review queue */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold font-display" style={{ color: "var(--text-primary)" }}>
              Pending Submissions Queue
            </h2>
            <span className="inline-flex items-center space-x-1.5 text-[10px] font-bold uppercase tracking-wider text-indigo-500">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
              <span>Awaiting Feedback</span>
            </span>
          </div>

          <div className="border rounded-3xl overflow-hidden shadow-sm" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-card)" }}>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-500/5 font-bold text-[var(--text-muted)] border-b" style={{ borderColor: "var(--border-primary)" }}>
                    <th className="px-6 py-4">Scholar</th>
                    <th className="px-6 py-4">Challenge</th>
                    <th className="px-6 py-4">Language</th>
                    <th className="px-6 py-4 text-center">Status</th>
                    <th className="px-6 py-4 text-right">Submitted</th>
                  </tr>
                </thead>
                <tbody className="divide-y" style={{ divideColor: "var(--border-primary)", color: "var(--text-secondary)" }}>
                  {pendingSubmissions.map((sub) => (
                    <tr key={sub.id} className="hover:bg-slate-500/5 transition-colors">
                      <td className="px-6 py-4 font-bold text-[var(--text-primary)]">
                        {sub.user}
                      </td>
                      <td className="px-6 py-4 font-semibold">
                        {sub.problem}
                      </td>
                      <td className="px-6 py-4 font-mono text-[10px]">
                        {sub.lang}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md border cursor-pointer ${
                          sub.status === "Needs Review" ? "text-rose-500 bg-rose-500/10 border-rose-500/20" :
                          "text-amber-500 bg-amber-500/10 border-amber-500/20"
                        }`}>
                          {sub.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right" style={{ color: "var(--text-muted)" }}>
                        {sub.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right: Mentoring Tracks list */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold font-display" style={{ color: "var(--text-primary)" }}>
              Mentoring Cohorts
            </h2>
            <Activity size={16} style={{ color: "var(--text-muted)" }} />
          </div>

          <div className="space-y-4">
            {mentoredTracks.map((cohort) => (
              <div
                key={cohort.id}
                className="p-5 rounded-3xl border shadow-sm space-y-3 relative group overflow-hidden"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-card)"
                }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded border bg-slate-500/5"
                    style={{ borderColor: "var(--border-primary)", color: "var(--text-secondary)" }}
                  >
                    Active Cohort
                  </span>
                  <div className="flex items-center space-x-1 text-[10px] font-bold text-amber-500">
                    <Star size={12} className="fill-amber-500" />
                    <span>{cohort.rating.toFixed(1)}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xs font-bold font-display" style={{ color: "var(--text-primary)" }}>
                    {cohort.track || cohort.name}
                  </h3>
                  <p className="text-[10px]" style={{ color: "var(--text-secondary)" }}>
                    {cohort.activeScholars} assigned students
                  </p>
                </div>

                <div className="flex justify-between items-center pt-2 text-[10px] border-t" style={{ borderColor: "var(--border-primary)", color: "var(--text-secondary)" }}>
                  <div className="flex items-center space-x-1">
                    <Clock size={11} />
                    <span>{cohort.activeReviews} pending reviews</span>
                  </div>
                  <button className="font-bold text-[var(--text-accent)] hover:underline">
                    View list
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
