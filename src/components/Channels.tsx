import { Section } from "./ui/Section";
import { MessageSquare, Code, Hammer, GraduationCap, Calendar, Send } from "lucide-react";
import { motion } from "motion/react";

export function Channels() {
  const channels = [
    { 
      title: "Main Verse Community", 
      desc: "Chat, learn and stay updated.", 
      icon: <MessageSquare className="w-5 h-5 text-verse-blue" />,
      link: "https://t.me/GetVerse",
      color: "from-blue-500/20 to-transparent"
    },
    { 
      title: "Vibe Coding with Verse", 
      desc: "AI tools and coding challenges.", 
      icon: <Code className="w-5 h-5 text-verse-purple" />,
      link: "https://t.me/GetVerse/486213",
      color: "from-purple-500/20 to-transparent"
    },
    { 
      title: "Verse Builders Hub", 
      desc: "Builder programs and projects.", 
      icon: <Hammer className="w-5 h-5 text-orange-500" />,
      link: "https://t.me/GetVerse/355494",
      color: "from-orange-500/20 to-transparent"
    },
    { 
      title: "Learn Skills with Verse", 
      desc: "Web3 education and tutorials.", 
      icon: <GraduationCap className="w-5 h-5 text-green-500" />,
      link: "https://t.me/GetVerse/355506",
      color: "from-green-500/20 to-transparent"
    },
    { 
      title: "Verse Events", 
      desc: "Contests, hunts and opportunities.", 
      icon: <Calendar className="w-5 h-5 text-verse-yellow" />,
      link: "https://t.me/GetVerse/379189",
      color: "from-yellow-500/20 to-transparent"
    }
  ];

  return (
    <Section id="channels" className="bg-bg-gray border-b border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-slate-800"
          >
            Join the Verse Community Ecosystem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto"
          >
            Explore our official community channels, learn new skills, discover events, and connect with builders worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {channels.map((channel, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-5 md:p-6 border border-slate-200 shadow-sm hover:shadow-md flex flex-col items-start relative overflow-hidden group transition-all hover:-translate-y-1"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${channel.color} rounded-bl-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity`} />
              
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 mb-5 relative z-10">
                {channel.icon}
              </div>
              
              <h3 className="font-bold text-slate-800 text-lg md:text-xl mb-2 relative z-10 leading-tight">{channel.title}</h3>
              <p className="text-slate-500 text-sm mb-6 flex-grow relative z-10">{channel.desc}</p>
              
              <a href={channel.link} target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center text-sm font-bold bg-slate-900 text-white py-2.5 rounded-xl shadow-sm hover:bg-verse-blue transition-colors relative z-10">
                Join
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
