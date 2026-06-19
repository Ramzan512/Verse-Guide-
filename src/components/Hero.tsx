import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative bg-bg-gray py-12 lg:py-20 px-6 overflow-hidden border-b border-slate-100">
      {/* Animated Orbs */}
      <div className="absolute top-0 -left-10 w-72 h-72 bg-verse-blue orb opacity-20 animation-delay-2000" />
      <div className="absolute top-10 -right-10 w-72 h-72 bg-verse-purple orb opacity-20 animation-delay-4000" />
      <div className="absolute -bottom-10 left-1/2 w-72 h-72 bg-verse-yellow orb opacity-20 animation-delay-6000" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <motion.img 
            src="https://i.postimg.cc/zv0HPfvF/IMG-20260531-120027.png" 
            alt="Verse Logo" 
            className="w-32 h-32 md:w-36 md:h-36 object-contain" 
            referrerPolicy="no-referrer" 
            animate={{ 
              scale: [1, 1.05, 1],
              filter: [
                "drop-shadow(0 0 15px rgba(14,165,233,0.3)) drop-shadow(0 0 15px rgba(139,92,246,0.3)) drop-shadow(0 0 15px rgba(236,72,153,0.3))",
                "drop-shadow(0 0 30px rgba(14,165,233,0.6)) drop-shadow(0 0 30px rgba(139,92,246,0.6)) drop-shadow(0 0 30px rgba(236,72,153,0.6))",
                "drop-shadow(0 0 15px rgba(14,165,233,0.3)) drop-shadow(0 0 15px rgba(139,92,246,0.3)) drop-shadow(0 0 15px rgba(236,72,153,0.3))"
              ]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm text-slate-600 font-medium mb-8"
        >
          <Sparkles className="w-4 h-4 text-verse-blue" />
          🚀 Welcome to Verse Community
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-slate-800 leading-tight"
        >
          <span className="text-gradient">Verse Community</span><br />
          Guide
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Your complete guide to joining the Bitcoin.com Verse Community, connecting your rewards wallet, discovering events, learning new skills, and becoming an active contributor.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="https://t.me/GetVerse" target="_blank" rel="noreferrer" className="w-full sm:w-auto glow-verse inline-flex items-center justify-center gap-2 bg-gradient-verse text-white px-8 py-4 rounded-xl font-bold shadow-md hover:scale-105 transition-all">
            Join Community <ArrowRight className="w-5 h-5" />
          </a>
          <a href="https://hub.vgdh.io" target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 glass text-slate-800 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors">
            Visit Hub <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
