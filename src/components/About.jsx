import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold tracking-tight text-black md:text-3xl"
        >
          About us
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 items-start gap-10 md:mt-12 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <p className="text-lg leading-relaxed text-gray-700">
              We’re a small, senior team blending design, engineering, and content. Our
              approach is simple: remove noise, elevate what matters, and craft with care.
              We design systems that scale while keeping the human touch.
            </p>
            <p className="mt-6 text-gray-600">
              From early-stage startups to established brands, we partner closely to ship
              meaningful outcomes—not just deliverables.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-2"
          >
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
              <img
                src="https://images.unsplash.com/photo-1520681146060-34c9e04e7d07?q=80&w=1600&auto=format&fit=crop"
                alt="Clean workspace"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
