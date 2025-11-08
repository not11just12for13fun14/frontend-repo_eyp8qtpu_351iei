import { motion } from 'framer-motion';
import { Apple, Android, Badge, Github, Layers, Rocket, Smartphone } from 'lucide-react';

const skills = [
  { name: 'React Native', icon: Smartphone },
  { name: 'Flutter', icon: Rocket },
  { name: 'Kotlin / Compose', icon: Android },
  { name: 'Swift / SwiftUI', icon: Apple },
  { name: 'CI/CD', icon: Layers },
  { name: 'Open Source', icon: Github },
];

export default function TechStack() {
  return (
    <section className="relative bg-[#0A0A0F] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-white text-xl sm:text-2xl font-medium"
        >
          Tools and technologies I love
        </motion.h3>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {skills.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <Icon className="text-indigo-300" size={18} />
              <span className="text-sm text-white/70">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
