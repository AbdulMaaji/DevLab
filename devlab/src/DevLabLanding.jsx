import React from "react";
import { motion } from "framer-motion";
import { Beaker, Code2, Users, Rocket, ChevronDown } from "lucide-react";

export default function DevLabLanding() {
  const phases = [
    { icon: <Beaker />, title: "The Sandbox", desc: "Foundations — HTML, CSS, Git basics", color: "text-blue-500" },
    { icon: <Code2 />, title: "Build Mode", desc: "Real-world projects — JS, APIs, responsive design", color: "text-green-500" },
    { icon: <Users />, title: "Team Sprint", desc: "Collaboration, version control, debugging", color: "text-purple-500" },
    { icon: <Rocket />, title: "Launch Lab", desc: "Final capstone + deployment", color: "bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent" },
  ];

  const curriculum = [
    "Phase 1: HTML, CSS & Git Essentials",
    "Phase 2: JavaScript & APIs",
    "Phase 3: Collaboration & Debugging",
    "Phase 4: Capstone Project & Deployment",
  ];

  const faqs = [
    { q: "Do I need prior experience?", a: "No. DevLab starts from the basics and quickly moves to hands-on projects." },
    { q: "How are classes held?", a: "Interactive coding sessions with real-time feedback and group projects." },
    { q: "What tools do I need?", a: "A laptop, internet connection, and curiosity to experiment." },
  ];

  return (
    <div className="bg-[#F9FAFB] text-gray-800 font-sans">
      {/* Hero */}
      <section className="text-center py-20 px-6 bg-[#E8F3F1]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl font-extrabold text-[#0D9488] mb-4">Welcome to DevLab</h1>
          <p className="text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
            Learn by doing. Code like a real developer.
          </p>
          <a
            href="https://chat.whatsapp.com/BQAfBx68FOf12UppIWt8Ww?mode=wwc"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0D9488] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#0B7A6D] transition"
          >
            Join Us
          </a>
        </motion.div>
      </section>

      {/* Phases */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0D9488]">Your DevLab Journey</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {phases.map((phase, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className={`text-4xl mb-3 flex justify-center ${phase.color}`}>{phase.icon}</div>
              <h3 className={`text-xl font-bold mb-2 text-center ${phase.color}`}>{phase.title}</h3>
              <p className="text-gray-600 text-center">{phase.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Curriculum Accordion */}
      <section id="curriculum" className="bg-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#0D9488]">Curriculum Overview</h2>
        <div className="max-w-3xl mx-auto">
          {curriculum.map((item, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4 mb-4">
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-[#0D9488]">
                {item} <ChevronDown className="w-5 h-5" />
              </summary>
              <p className="mt-3 text-gray-600 text-sm">
                {`This phase covers ${item.toLowerCase()}. You'll build, test, and apply concepts in real projects.`}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#E8F3F1] py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#0D9488]">FAQs</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#0D9488] cursor-pointer">{faq.q}</summary>
              <p className="mt-3 text-gray-600 text-sm">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Instructor */}
      <section id="instructor" className="bg-[#E8F3F1] py-20 px-8">
        <motion.div
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src="https://api.dicebear.com/9.x/bottts/svg?seed=AbdulP"
            alt="Abdul Pseudo Avatar"
            className="w-48 h-48 rounded-full bg-white p-3 shadow-md"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <div>
            <h2 className="text-3xl font-bold text-[#0D9488] mb-4">Meet Your Instructor</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Abdul Pseudo</h3>
            <p className="text-sm text-gray-500 mb-4">“The Calm Coder”</p>
            <p className="text-gray-700 leading-relaxed mb-4">
              I built <span className="font-semibold text-[#0D9488]">DevLab</span> to change how we learn code — through exploration, teamwork, and real-world problem solving.
            </p>
            <blockquote className="border-l-4 border-[#0D9488] pl-4 italic text-gray-600">
              “You don’t learn to code by watching — you learn by building.”
            </blockquote>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#0D9488] to-[#10B981] text-white py-10 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-wide">DevLab</h2>
            <p className="text-sm text-white/80">Learn by doing. Code like a real developer.</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
            <a href="#curriculum" className="hover:text-white/80 transition-colors">Curriculum</a>
            <a href="#instructor" className="hover:text-white/80 transition-colors">Instructor</a>
            <a href="https://chat.whatsapp.com/BQAfBx68FOf12UppIWt8Ww?mode=wwc" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">Join Us</a>
          </div>
        </div>
        <div className="border-t border-white/20 my-6"></div>
        <div className="text-center text-sm text-white/70">
          © {new Date().getFullYear()} <span className="font-semibold text-white">DevLab</span> — Built by <span className="text-white">Abdul Pseudo ✦ The Calm Coder</span>
        </div>
      </footer>
    </div>
  );
}
