import { Section } from "./ui/Section";
import { Clock, Gift, ExternalLink, Sparkles, Trophy, MapPin, Globe } from "lucide-react";
import { motion } from "motion/react";

export function ScratcherEvent() {

  const steps = [
    "Visit Hub.vgdh.io",
    "Join the event when it becomes active",
    "Complete clues and challenges",
    "Submit answers correctly",
    "Wait for winner announcement",
    "Receive Scratchers rewards"
  ];

  return (
    <Section id="weekly-event" className="bg-slate-50 border-b border-slate-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-verse-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-verse-blue/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex justify-center mb-6">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-verse-purple" />
            <span className="text-verse-purple font-bold text-sm tracking-wide">Featured Weekly Event</span>
          </motion.div>
        </div>

        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-800 font-display leading-tight"
          >
            🏆 Verse Scratcher <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-verse-blue via-verse-purple to-verse-yellow">Scavenger Hunt</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            A community event hosted on the Verse Hub platform where members complete tasks, solve clues, and participate in exciting activities for a chance to earn Scratchers rewards.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Host Card */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-3xl p-6 md:p-8 hover:border-slate-300 transition-colors flex items-center gap-6">
              <div className="relative">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-verse-blue/40 to-verse-purple/40 flex items-center justify-center p-0.5 relative z-10 shadow-sm">
                  <div className="w-full h-full bg-white rounded-full overflow-hidden flex items-center justify-center text-slate-400">
                    <img src="https://i.postimg.cc/7hQ9WzHx/IMG-20260422-111231-548.jpg" alt="JT" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-verse-purple text-white text-[10px] md:text-xs uppercase font-bold px-2 py-0.5 md:py-1 rounded-full z-20 shadow-md">
                  Host
                </div>
              </div>
              <div>
                <h4 className="text-slate-500 text-xs md:text-sm font-bold uppercase tracking-wider mb-1">Hosted By</h4>
                <p className="text-slate-800 text-xl md:text-2xl font-bold">JT (@stone_brb)</p>
                <p className="text-verse-blue text-xs md:text-sm font-medium mt-1">Community Event Host</p>
              </div>
            </div>

            {/* Event Platform Card */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-3xl p-6 md:p-8 hover:border-verse-blue/30 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 rounded-xl bg-blue-50 text-verse-blue border border-blue-100 flex items-center justify-center">
                   <Globe className="w-6 h-6" />
                 </div>
                 <h4 className="text-slate-800 text-xl font-bold">🌐 Event Platform</h4>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                This event is hosted on the Verse Hub platform.<br className="hidden md:block" />
                Members participate by completing tasks, solving clues, submitting answers, and earning Scratchers rewards.
              </p>
              <a href="https://hub.vgdh.io" target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-slate-900 hover:bg-verse-blue text-white px-6 py-3 rounded-xl text-sm font-bold transition-colors shadow-md">
                Go To Hub <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 relative">
              <div className="bg-white border border-slate-200 shadow-sm rounded-3xl p-6 md:p-8 hover:border-verse-blue/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-verse-blue border border-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2 text-xl">Location</h4>
                <p className="text-slate-500 font-medium">Hub.vgdh.io</p>
              </div>
              
              <div className="bg-white border border-slate-200 shadow-sm rounded-3xl p-6 md:p-8 hover:border-verse-purple/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-verse-purple border border-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2 text-xl">Schedule</h4>
                <p className="text-slate-500 font-medium">Every Friday at 6:00 UTC</p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-3xl p-6 md:p-8">
              <h4 className="font-bold text-slate-800 mb-6 text-xl flex items-center gap-3">
                <Trophy className="w-6 h-6 text-verse-yellow" />
                How To Participate
              </h4>
              <div className="space-y-4">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 font-bold text-sm shrink-0 border border-slate-200">
                      {idx + 1}
                    </div>
                    <p className="text-slate-600 font-medium pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-4">
              <a href="https://hub.vgdh.io" target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-gradient-verse text-white px-10 py-5 rounded-2xl font-bold hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg text-lg">
                Go to Hub <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Premium Rewards Section */}
            <div className="w-full bg-white rounded-[2rem] p-6 lg:p-8 border border-slate-100 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-verse-yellow/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-verse-yellow/20 transition-colors duration-700" />
                
                <h4 className="text-slate-800 text-xl font-bold mb-6 flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-verse-yellow" /> 🏆 Rewards Pool
                </h4>
                
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 relative z-10 shadow-sm flex flex-col gap-4">
                   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🥇</span>
                        <span className="text-slate-800 font-bold">First 15 Winners</span>
                      </div>
                      <div className="text-slate-600 font-medium sm:text-right">
                        <span className="text-yellow-600 font-bold">5 Scratchers Each</span> (75 Total)
                      </div>
                   </div>
                   
                   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🎁</span>
                        <span className="text-slate-800 font-bold">Lucky Draw</span>
                      </div>
                      <div className="text-slate-600 font-medium sm:text-right">
                        <span className="text-purple-600 font-bold">1 Scratcher Each</span> (20 Total)
                      </div>
                   </div>

                   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2">
                      <span className="text-slate-500 font-bold uppercase text-sm">Total Rewards</span>
                      <span className="text-slate-800 font-bold text-xl">95 Scratchers</span>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
