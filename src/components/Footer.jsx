import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0A0A0F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="text-sm text-white/60 inline-flex items-center gap-1">
          Built with <Heart size={14} className="text-rose-400" /> by You
        </p>
      </div>
    </footer>
  );
}
