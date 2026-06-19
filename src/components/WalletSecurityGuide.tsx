import { Section } from "./ui/Section";
import { ShieldAlert, KeyRound, Link, ShieldCheck, CheckCircle2, AlertTriangle, EyeOff } from "lucide-react";
import { motion } from "motion/react";

export function WalletSecurityGuide() {
  const cards = [
    {
      title: "Never share your recovery phrase",
      icon: <EyeOff className="w-6 h-6 text-red-500" />
    },
    {
      title: "Never share private keys",
      icon: <KeyRound className="w-6 h-6 text-red-500" />
    },
    {
      title: "Double-check website URLs",
      icon: <Link className="w-6 h-6 text-verse-blue" />
    },
    {
      title: "Avoid suspicious links",
      icon: <AlertTriangle className="w-6 h-6 text-verse-yellow" />
    },
    {
      title: "Use trusted wallets only",
      icon: <CheckCircle2 className="w-6 h-6 text-green-500" />
    },
    {
      title: "Enable extra security whenever possible",
      icon: <ShieldCheck className="w-6 h-6 text-verse-purple" />
    }
  ];

  return (
    <Section id="security" className="bg-bg-gray border-b border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 bg-red-50 border border-red-100 rounded-2xl shadow-sm mb-6"
          >
            <ShieldAlert className="w-6 h-6 text-red-500" />
          </motion.div>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-5xl font-bold mb-4 text-slate-800"
          >
            🔐 Wallet Security Guide
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            Protect your assets and stay safe in Web3.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-10 text-center flex flex-col items-center justify-center max-w-3xl mx-auto"
        >
          <AlertTriangle className="w-8 h-8 text-red-500 mb-3" />
          <p className="text-red-800 font-bold text-lg leading-relaxed">
            "Bitcoin.com, Verse Team, Moderators, and Community Leaders will never ask for your recovery phrase."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform h-full"
            >
              <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 mb-4">
                 {card.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-lg leading-tight">{card.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
