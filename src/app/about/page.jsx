import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="relative flex min-h-screen flex-col" style={{ backgroundColor: "var(--bg-primary)" }}>
      <Navbar />
      <main className="flex-grow">
        <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto text-[var(--text-secondary)]">
      
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-[var(--text-primary)] uppercase">
          About <span style={{ color: "transparent", WebkitTextStroke: "1px var(--text-primary)" }}>Eduvantix</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          We are redefining technology education through immersive, project-based learning. Built by developers, for the next generation of engineers.
        </p>
      </div>

      {/* Mission & Vision Grid */}
      <div className="grid md:grid-cols-2 gap-10 mb-20">
        <div className="p-10 rounded-3xl" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-primary)" }}>
          <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: "var(--accent-primary)20", color: "var(--accent-primary)" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">Our Mission</h2>
          <p className="leading-relaxed">
            To bridge the gap between traditional education and industry requirements. We aim to equip learners with cutting-edge skills in Web Development, AI, and Cloud technologies through hands-on, real-world projects rather than just theoretical lectures.
          </p>
        </div>

        <div className="p-10 rounded-3xl" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-primary)" }}>
          <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: "var(--accent-primary)20", color: "var(--accent-primary)" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">Our Vision</h2>
          <p className="leading-relaxed">
            We envision a world where anyone, anywhere, can access high-quality, practical tech education. By building a community-driven platform with live classes, competitive coding environments, and expert mentorship, we're creating the ultimate launchpad for tech careers.
          </p>
        </div>
      </div>

      {/* Parent Company Section */}
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">Backed by DatamindX Technologies Pvt. Ltd.</h2>
        <p className="leading-relaxed mb-6">
          Eduvantix is proudly built and maintained by <strong className="text-[var(--text-primary)]">DatamindX</strong>. 
          Leveraging years of industry experience in data solutions and software engineering, 
          DataMindx created Eduvantix to share practical, enterprise-grade knowledge with aspiring developers.
        </p>
        <a 
          href="https://datamindx.in" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200"
          style={{ backgroundColor: "var(--text-primary)", color: "var(--bg-primary)" }}
        >
          Visit DatamindX
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

    </div>
      </main>
      <Footer />
    </div>
  );
}
