import { Section } from "./ui/Section";
import { HeartHandshake, ShieldAlert, Sparkles, MessageCircleHeart, Construction, Scale } from "lucide-react";
import { motion } from "motion/react";

export function Rules() {
  const rules = [
    {
      title: "Be respectful across all channels",
      desc: "Treat everyone with kindness. Harassment, hate speech, or personal attacks are strictly forbidden.",
      icon: <HeartHandshake className="w-6 h-6 text-pink-500" />,
      bg: "bg-pink-50"
    },
    {
      title: "No spam or scams",
      desc: "Do not post malicious links, repetitive messages, or unsolicited promotions. Protect the community.",
      icon: <ShieldAlert className="w-6 h-6 text-red-500" />,
      bg: "bg-red-50"
    },
    {
      title: "Follow event instructions carefully",
      desc: "During contests or hunts, follow the rules laid out by hosts. Fairness is a priority.",
      icon: <Sparkles className="w-6 h-6 text-verse-purple" />,
      bg: "bg-purple-50"
    },
    {
      title: "Help newcomers",
      desc: "We were all new once. If someone asks a question, point them to the right resources patiently.",
      icon: <MessageCircleHeart className="w-6 h-6 text-verse-blue" />,
      bg: "bg-blue-50"
    },
    {
      title: "Keep discussions constructive",
      desc: "Keep conversations on topic, valuable, and productive. Debates are fine, hostility is not.",
      icon: <Construction className="w-6 h-6 text-orange-500" />,
      bg: "bg-orange-50"
    },
    {
      title: "Respect moderators and leaders",
      desc: "Follow the guidance of our leadership team to ensure a smooth community experience.",
      icon: <Scale className="w-6 h-6 text-verse-yellow" />,
      bg: "bg-yellow-50"
    }
  ];

  return (
    <Section id="rules" className="bg-bg-gray border-b border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 bg-white border border-slate-200 rounded-2xl shadow-sm mb-6 text-slate-800"
          >
            <Scale className="w-6 h-6 text-slate-600" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-slate-800"
          >
            Community Rules
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg leading-relaxed"
          >
            To maintain a safe, welcoming, and productive environment for all members, we strictly enforce these core guidelines.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${rule.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {rule.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{rule.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{rule.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
