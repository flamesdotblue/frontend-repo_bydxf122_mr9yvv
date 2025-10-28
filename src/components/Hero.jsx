import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  const particles = Array.from({ length: 8 });

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Spline full-cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hinHjJppKaZFIbCr/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Soft vignette + top glow overlays */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,0,0,0.12),rgba(0,0,0,0))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45),transparent_30%,transparent_70%,rgba(0,0,0,0.55))]"
      />

      {/* Floating particles for subtle depth */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full"
            style={{
              left: `${10 + (i * 11) % 80}%`,
              top: `${15 + (i * 9) % 70}%`,
              background: i % 3 === 0 ? "rgba(255,255,255,0.7)" : "rgba(255,59,59,0.6)",
              filter: "blur(0.5px)",
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0.4, 1], y: [0, -10, 4, -6] }}
            transition={{ duration: 6 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 py-28 text-center md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white/80 backdrop-blur"
        >
          Calm craft • Modern systems
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
        >
          Minimal design for maximum impact
          <span className="block text-white/60">built with intention.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80"
        >
          We craft premium interfaces and clear content for teams that value focus,
          speed, and a quietly futuristic aesthetic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow-sm transition-all hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-black"
          >
            Start a project
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white/30 hover:bg-white/10"
          >
            See our work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
