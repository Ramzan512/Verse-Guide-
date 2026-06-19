import { useState } from "react";
import { Section } from "./ui/Section";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Verse?",
      answer: "Verse is the rewards and utility token of the Bitcoin.com ecosystem, empowering a global network of users."
    },
    {
      question: "How do I join the community?",
      answer: "Start by connecting your wallet on the Hub, then join our official Telegram and Discord channels to participate in discussions and events."
    },
    {
      question: "How do I connect my wallet securely?",
      answer: "Go to the Rewards section on hub.vgdh.io, select your preferred Polygon wallet (like MetaMask or Rabby), and sign the free verification message to prove ownership."
    },
    {
      question: "How do I participate in the Verse Scratcher Scavenger Hunt?",
      answer: "Ensure you are in the 'Verse Events' channel on Friday at 6:00 UTC. Join the event on the Hub when it gets active, complete the challenges, and submit your answers."
    }
  ];

  return (
    <Section id="faq" className="bg-bg-gray border-b border-slate-100 relative overflow-hidden">
      <div className="absolute -left-[200px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-verse-blue/5 rounded-full blur-[80px]" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 bg-white border border-slate-200 rounded-2xl shadow-sm mb-6 text-slate-800"
          >
            <MessageCircleQuestion className="w-6 h-6 text-slate-600" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-slate-800"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:border-slate-300 transition-colors"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-transparent"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-bold text-lg text-slate-800 pr-8">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${openIndex === i ? 'bg-slate-100' : 'bg-slate-50'}`}>
                   <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === i ? "rotate-180 text-verse-blue" : "text-slate-400"}`} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 text-slate-500 font-medium leading-relaxed"
                  >
                    <div className="pb-6 pt-2 border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
