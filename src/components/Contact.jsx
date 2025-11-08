import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

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
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Let’s work together</h2>
          <p className="mt-2 text-white/60 max-w-2xl">
            Have an idea in mind? Tell me about your project and timeline.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
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
                <label className="block text-sm text-white/70">Message</label>
                <textarea
                  rows={4}
                  required
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  placeholder="Tell me about your project..."
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
          </form>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 ring-1 ring-inset ring-indigo-400/40">
                <Mail className="text-indigo-300" size={18} />
              </span>
              <div>
                <h3 className="text-white font-medium">Direct contact</h3>
                <p className="text-white/70 text-sm">email@yourdomain.com</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>• I typically reply within 24 hours</li>
              <li>• Available for freelance and contract work</li>
              <li>• Based in your city, working remotely worldwide</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
