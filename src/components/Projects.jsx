import { Code2, Globe, Layers } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description:
      'A playful hero built with Spline and React, featuring smooth motion and responsive design.',
    tags: ['React', 'Spline', 'Tailwind'],
    icon: Globe,
    link: '#',
  },
  {
    title: 'API Starter Kit',
    description:
      'A production-ready FastAPI template with auth, testing, and Docker support.',
    tags: ['FastAPI', 'MongoDB', 'Python'],
    icon: Layers,
    link: '#',
  },
  {
    title: 'UI Components Pack',
    description:
      'A polished set of accessible UI components following shadcn/ui patterns.',
    tags: ['React', 'Radix', 'Design'],
    icon: Code2,
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

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[#0A0A0F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Selected Projects</h2>
            <p className="mt-2 text-white/60 max-w-2xl">
              A snapshot of things I loved building recently.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10"
          >
            Get a quote
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <a
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
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
