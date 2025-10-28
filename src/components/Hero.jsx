import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.10),rgba(255,255,255,0))]"/>

      <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 py-24 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 rounded-full border border-gray-200 px-4 py-1.5 text-xs tracking-wider text-gray-600 backdrop-blur"
        >
          A modern studio crafting calm, considered experiences
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-center text-5xl font-semibold leading-[1.05] tracking-tight text-black md:text-6xl"
        >
          Design, systems, and stories
          <span className="block text-gray-400">with an Apple-like restraint.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-2xl text-center text-base leading-relaxed text-gray-600"
        >
          We help ambitious teams ship elegant interfaces and thoughtful content—
          minimalist, fast, and delightful on every device.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Start a project
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-900 transition-all hover:border-gray-300 hover:bg-gray-50"
          >
            See our work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
