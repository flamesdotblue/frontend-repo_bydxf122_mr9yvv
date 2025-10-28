import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="font-inter antialiased text-gray-900">
      {/* Minimal top nav */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <a href="#" className="text-sm font-semibold tracking-tight text-gray-900">
            Studio
          </a>
          <nav className="hidden items-center gap-7 text-sm text-gray-700 md:flex">
            <a href="#about" className="hover:text-black">About</a>
            <a href="#services" className="hover:text-black">Services</a>
            <a href="#work" className="hover:text-black">Work</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-gray-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-black"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Services />
        <Showcase />

        {/* Testimonials */}
        <section className="w-full bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold tracking-tight text-black md:text-3xl"
            >
              Testimonials
            </motion.h2>

            <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <motion.figure
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.05 * i }}
                  className="rounded-2xl border border-gray-200 bg-white p-6"
                >
                  <blockquote className="text-sm leading-relaxed text-gray-700">
                    “The team brought a level of calm precision that transformed our product.
                    We shipped faster and felt more confident doing it.”
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-3">
                    <img
                      src={`https://i.pravatar.cc/80?img=${i + 3}`}
                      alt="Client headshot"
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Alex Johnson</div>
                      <div className="text-xs text-gray-500">Product Lead, North</div>
                    </div>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="w-full bg-white py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 md:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold tracking-tight text-black md:text-3xl"
            >
              Contact
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-4 text-gray-600"
            >
              Tell us a little about your project and we’ll get back within one business day.
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 grid grid-cols-1 gap-4"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gray-300 focus:ring-0"
                    placeholder="Jane Appleseed"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gray-300 focus:ring-0"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium text-gray-700">Message</label>
                <textarea
                  rows={5}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gray-300 focus:ring-0"
                  placeholder="What are you looking to build?"
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500">We’ll never share your information.</p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-gray-500 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#work" className="hover:text-gray-900">Work</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
