import { Section } from "./ui/Section";
import { Send, Twitter, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export function OfficialLinks() {
  const links = [
    {
      title: "Bitcoin.com X Profile",
      icon: <Twitter className="w-5 h-5 text-slate-900" fill="currentColor" />,
      url: "https://x.com/BitcoinCom",
      color: "from-blue-500/10 to-transparent",
      borderColor: "border-blue-100"
    },
    {
      title: "Verse Ecosystem X Profile",
      icon: <Twitter className="w-5 h-5 text-slate-900" fill="currentColor" />,
      url: "https://x.com/VerseEcosystem",
      color: "from-verse-blue/10 to-transparent",
      borderColor: "border-verse-blue/20"
    },
    {
      title: "Telegram Community",
      icon: <Send className="w-5 h-5 text-[#2AABEE]" fill="currentColor" />,
      url: "https://t.me/GetVerse",
      color: "from-[#2AABEE]/10 to-transparent",
      borderColor: "border-[#2AABEE]/20"
    }
  ];

  return (
    <Section className="bg-white border-b border-slate-100 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mb-4"
          >
            <ShieldCheck className="w-6 h-6 text-verse-blue" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-slate-800"
          >
            Official Verse Community Links
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((link, idx) => (
            <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className={`bg-white rounded-2xl border ${link.borderColor} shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex h-full`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${link.color} rounded-bl-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity`} />
              <a href={link.url} target="_blank" rel="noreferrer" className="w-full flex items-center gap-4 p-6 relative z-10">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center shrink-0">
                  {link.icon}
                </div>
                <span className="font-bold text-slate-800 pr-4">{link.title}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
