import { Mail, Send, Phone } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
  }

  return (
    <section id="contact" className="relative py-24 bg-[#0A0A0F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Let’s build your app</h2>
          <p className="mt-2 text-white/60 max-w-2xl">
            Tell me about your mobile project, platform, and timeline.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="grid gap-4">
              <div>
                <label className="block text-sm text-white/70">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  placeholder="Your name"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70">Email</label>
                  <input
                    type="email"
                    required
                    className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70">Phone</label>
                  <input
                    type="tel"
                    className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    placeholder="Optional"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/70">Project details</label>
                <textarea
                  rows={4}
                  required
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  placeholder="Platforms, features, deadlines..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 self-start rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
              >
                <Send size={16} />
                Send message
              </button>
              {status && (
                <p className="text-sm text-emerald-400 inline-flex items-center gap-2">
                  <Mail size={16} /> {status}
                </p>
              )}
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 ring-1 ring-inset ring-indigo-400/40">
                <Phone className="text-indigo-300" size={18} />
              </span>
              <div>
                <h3 className="text-white font-medium">Direct contact</h3>
                <p className="text-white/70 text-sm">email@yourdomain.com</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>• I typically reply within 24 hours</li>
              <li>• iOS, Android, and cross‑platform</li>
              <li>• Available for freelance and contract work</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
