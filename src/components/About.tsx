import { Section } from "./ui/Section";
import { GraduationCap, Gift, Users, HandHeart, CheckCircle2, Rocket, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const cards = [
    { 
      title: "Active Community", 
      desc: "Thousands of members participate in community discussions and activities.", 
      icon: <Users className="w-6 h-6 text-verse-blue" />, 
      bg: "bg-blue-50", 
      border: "border-blue-100" 
    },
    { 
      title: "Reward Opportunities", 
      desc: "Join events, hunts, contests, and challenges to earn rewards.", 
      icon: <Gift className="w-6 h-6 text-verse-purple" />, 
      bg: "bg-purple-50", 
      border: "border-purple-100" 
    },
    { 
      title: "Learn New Skills", 
      desc: "Improve your Web3, AI, crypto, and community-building skills.", 
      icon: <GraduationCap className="w-6 h-6 text-verse-yellow" />, 
      bg: "bg-yellow-50", 
      border: "border-yellow-100" 
    },
    { 
      title: "Make an Impact", 
      desc: "Help newcomers, support community growth, and contribute valuable ideas.", 
      icon: <HandHeart className="w-6 h-6 text-green-500" />, 
      bg: "bg-green-50", 
      border: "border-green-100" 
    },
  ];

  const examples = [
    "Help new members",
    "Participate in events",
    "Create useful content",
    "Build projects",
    "Support community growth"
  ];

  return (
    <Section id="about" className="bg-white border-b border-slate-100 relative overflow-hidden py-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-verse-purple/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm mb-6"
          >
            <Rocket className="w-6 h-6 text-verse-blue" />
          </motion.div>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-5xl font-bold mb-6 text-slate-800"
          >
            Why Join the Verse Community?
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-6"
          >
            Become part of a growing global community where members learn, build, collaborate, and earn rewards.
          </motion.p>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed"
          >
            The Verse Community is home to thousands of active members who participate in discussions, events, challenges, hunts, builder programs, and educational activities every week.
            <br className="hidden md:block" />
            <br className="hidden md:block" />
            Whether you are a beginner or an experienced Web3 user, there are many opportunities to learn new skills, meet like-minded people, contribute to the ecosystem, and earn rewards.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col items-center text-center h-full"
            >
              <div className={`w-14 h-14 shrink-0 rounded-2xl ${card.bg} border ${card.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {card.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-xl mb-3">{card.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm flex-grow">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact = Rewards Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden mb-16 shadow-xl border border-slate-100"
        >
           <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-verse-blue/10 to-verse-purple/10 rounded-full blur-[80px] pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-verse-yellow/10 to-amber-500/10 rounded-full blur-[80px] pointer-events-none" />
           
           <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">
              <div className="lg:w-1/2 text-center lg:text-left">
                 <div className="inline-flex items-center gap-2 bg-slate-50 text-slate-800 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider border border-slate-200 mb-6 shadow-sm">
                    <Gift className="w-4 h-4 text-verse-yellow" /> Community Values
                 </div>
                 <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-800 mb-6">
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-verse-blue to-verse-purple">Impact</span> = <span className="text-transparent bg-clip-text bg-gradient-to-r from-verse-yellow to-amber-500">Rewards</span>
                 </h3>
                 <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-8">
                   The more value you create for the community, the more opportunities you have to earn recognition and rewards.
                 </p>
                 <a href="https://t.me/GetVerse" target="_blank" rel="noreferrer" className="hidden lg:inline-flex items-center gap-2 bg-gradient-verse text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:opacity-90 transition-opacity hover:scale-[1.02]">
                    Join Community <ArrowRight className="w-5 h-5" />
                 </a>
              </div>
              <div className="lg:w-1/2 w-full">
                 <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
                   <h4 className="text-slate-800 font-bold text-lg mb-6">Examples:</h4>
                   <div className="space-y-4">
                     {examples.map((example, idx) => (
                       <div key={idx} className="flex items-center gap-4 bg-white border border-slate-100 p-4 rounded-xl shadow-sm">
                          <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                          <span className="text-slate-700 font-medium">{example}</span>
                       </div>
                     ))}
                   </div>
                 </div>
              </div>
           </div>

           <div className="mt-10 flex justify-center lg:hidden relative z-10">
              <a href="https://t.me/GetVerse" target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-gradient-verse text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:opacity-90 transition-opacity hover:scale-[1.02]">
                 Join Community <ArrowRight className="w-5 h-5" />
              </a>
           </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="text-center"
        >
           <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">Ready to get involved?</h3>
           <p className="text-slate-500 text-lg mb-8 max-w-2xl mx-auto">Join the Verse Community today and start your journey.</p>
           <a href="https://t.me/GetVerse" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold shadow-xl hover:bg-verse-blue transition-colors hover:scale-[1.02] active:scale-[0.98] text-lg">
             Join Community
           </a>
        </motion.div>
      </div>
    </Section>
  );
}
