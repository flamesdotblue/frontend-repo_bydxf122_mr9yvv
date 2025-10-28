import { motion } from "framer-motion";

const cases = [
  {
    title: "Fintech platform refresh",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
    caption: "A calmer UI that improved conversion by 18%.",
  },
  {
    title: "Wellness brand launch",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop",
    caption: "Identity, site, and editorial system in six weeks.",
  },
  {
    title: "SaaS design system",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
    caption: "A unified library to ship features faster.",
  },
];

export default function Showcase() {
  return (
    <section id="work" className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold tracking-tight text-black md:text-3xl"
        >
          Case studies
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.figure
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
              <div className="overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium text-gray-900">{c.title}</h3>
                  <span className="text-xs text-gray-500">View</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{c.caption}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
