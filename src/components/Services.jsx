import { Cpu, FileText, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Cpu,
    title: "AI Automations",
    desc: "Operational workflows powered by AI—designed to be invisible, fast, and reliable.",
  },
  {
    icon: FileText,
    title: "Content Solutions",
    desc: "Clear, modern copy and systems for publishing that scale across products.",
  },
  {
    icon: Lightbulb,
    title: "Consulting",
    desc: "Design and product strategy to align teams and accelerate outcomes.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold tracking-tight text-black md:text-3xl"
        >
          Services
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-gray-300"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.desc}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(120px 120px at var(--x,50%) var(--y,50%), rgba(59,130,246,0.08), transparent 60%)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
