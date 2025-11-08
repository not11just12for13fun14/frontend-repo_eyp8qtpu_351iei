import { AppWindow, Code2, DownloadCloud, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'FitTrack Pro',
    description:
      'A cross-platform fitness tracker with offline-first data and animated charts.',
    tags: ['React Native', 'Reanimated', 'SQLite'],
    icon: Smartphone,
    link: '#',
  },
  {
    title: 'QuickScan',
    description:
      'Document scanner with ML-based edge detection and PDF export.',
    tags: ['Flutter', 'TFLite', 'Dart'],
    icon: AppWindow,
    link: '#',
  },
  {
    title: 'Budgeteer',
    description:
      'Personal finance app with bank syncing and delightful micro-interactions.',
    tags: ['Kotlin', 'Compose', 'Coroutines'],
    icon: DownloadCloud,
    link: '#',
  },
];

function Tag({ children }) {
  return (
    <span className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-white/70 ring-1 ring-inset ring-white/10">
      {children}
    </span>
  );
}

const cardVariants = {
  off: { opacity: 0, y: 16 },
  on: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.5 } }),
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[#0A0A0F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Mobile Apps</h2>
            <p className="mt-2 text-white/60 max-w-2xl">
              A few highlights from recent mobile projects across platforms.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10"
          >
            Start a project
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.a
                custom={i}
                initial="off"
                whileInView="on"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                key={p.title}
                href={p.link}
                className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5 transition hover:border-white/20 hover:from-white/10"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 ring-1 ring-inset ring-indigo-400/40">
                    <Icon className="text-indigo-300" size={18} />
                  </div>
                  <span className="text-xs text-white/50">Case study</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
