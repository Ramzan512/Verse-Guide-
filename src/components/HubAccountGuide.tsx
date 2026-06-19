import { Section } from "./ui/Section";
import { LogIn, Gift, Wallet, PenTool, Sparkles, ShieldAlert, ExternalLink, Activity } from "lucide-react";
import { motion } from "motion/react";

export function HubAccountGuide() {
  const steps = [
    { num: 1, text: "Visit hub.vgdh.io and sign in with Email, GitHub, or Discord.", icon: <LogIn className="w-5 h-5 text-verse-blue" />, outlineColor: "shadow-verse-blue/30" },
    { num: 2, text: "Open the Rewards section from your dashboard.", icon: <Gift className="w-5 h-5 text-verse-purple" />, outlineColor: "shadow-verse-purple/30" },
    { num: 3, text: "Connect your Polygon wallet (MetaMask, Rabby, or Trust Wallet).", icon: <Wallet className="w-5 h-5 text-verse-yellow" />, outlineColor: "shadow-verse-yellow/30" },
    { num: 4, text: "Sign the verification request to confirm ownership.", icon: <PenTool className="w-5 h-5 text-orange-500" />, outlineColor: "shadow-orange-500/30" },
    { num: 5, text: "Join events, community activities, and earn rewards.", icon: <Sparkles className="w-5 h-5 text-green-500" />, outlineColor: "shadow-green-500/30" }
  ];

  return (
    <Section id="hub-guide" className="bg-bg-gray border-b border-slate-100 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-verse-purple/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-[1px] rounded-3xl bg-gradient-to-r from-verse-blue via-verse-purple to-verse-yellow shadow-[0_4px_30px_rgb(0,0,0,0.05)]"
        >
          <div className="bg-white rounded-[23px] p-6 md:p-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center p-3 bg-slate-50 border border-slate-100 rounded-2xl mb-6 text-slate-800">
                <Activity className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-slate-800 tracking-tight">Connect Your Rewards Wallet</h2>
              <p className="text-slate-500 text-md md:text-lg mb-8 max-w-xl mx-auto">
                Create your Hub account, connect your Polygon wallet, and start earning community rewards.
              </p>
              <a href="https://hub.vgdh.io" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gradient-verse text-white px-8 py-4 rounded-xl font-bold shadow-md hover:scale-105 transition-all text-base">
                Visit Hub <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            
            <div className="mb-8 pt-6 border-t border-slate-100">
              <h3 className="font-bold text-slate-800 text-xl text-center">How It Works</h3>
            </div>

            <div className="space-y-6 relative mb-12">
              <div className="absolute left-7 top-10 bottom-10 w-[2px] bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100 hidden md:block"></div>
              {steps.map((step, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex gap-4 md:gap-8 items-center relative z-10 group"
                >
                  <div className={`w-14 h-14 shrink-0 rounded-2xl bg-white flex items-center justify-center border border-slate-100 shadow-[0_0_0_4px_rgba(255,255,255,1),0_4px_20px_rgba(0,0,0,0.05)] group-hover:shadow-[0_0_0_4px_rgba(255,255,255,1),_var(--tw-shadow)] ${step.outlineColor} transition-all duration-300`}>
                    {step.icon}
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex-grow hover:bg-white hover:shadow-sm transition-all duration-300">
                    <p className="font-medium text-slate-700 text-sm md:text-base leading-relaxed">
                      <span className="font-bold text-slate-800 mr-2 bg-white px-2 py-0.5 rounded shadow-sm border border-slate-100">{step.num}</span> 
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-amber-50/50 border border-amber-200/50 rounded-2xl p-5 flex items-start gap-4 mx-auto max-w-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]">
              <ShieldAlert className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-amber-800 text-sm mb-1 uppercase tracking-wider">Security Note</h4>
                <p className="text-sm text-amber-700 font-medium leading-relaxed">Never share your wallet recovery phrase with anyone.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
