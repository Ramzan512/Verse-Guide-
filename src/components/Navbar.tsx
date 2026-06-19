import { useState, useEffect, useRef } from "react";
import { Menu, X, Home, Users, Wallet, Trophy, ScrollText, MessageCircleQuestion, ExternalLink, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { icon: <Home className="w-5 h-5" />, label: "Home", href: "#" },
    { icon: <Users className="w-5 h-5" />, label: "Community Channels", href: "#channels" },
    { icon: <Wallet className="w-5 h-5" />, label: "Rewards Wallet Guide", href: "#hub-guide" },
    { icon: <ShieldCheck className="w-5 h-5" />, label: "Wallet Security Guide", href: "#security" },
    { icon: <Trophy className="w-5 h-5" />, label: "Verse Scratcher Scavenger Hunt", href: "#weekly-event" },
    { icon: <ScrollText className="w-5 h-5" />, label: "Community Rules", href: "#rules" },
    { icon: <MessageCircleQuestion className="w-5 h-5" />, label: "FAQ", href: "#faq" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-2 transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between relative">
        <div className="flex items-center gap-3">
          <img src="https://i.postimg.cc/zv0HPfvF/IMG-20260531-120027.png" alt="Verse Logo" className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-sm" referrerPolicy="no-referrer" />
          <span className="font-display font-bold text-2xl md:text-3xl text-slate-800 tracking-tight">Verse<span className="text-verse-blue">Guide</span></span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#hub-guide" className="hover:text-verse-blue transition-colors">Hub Guide</a>
          <a href="#about" className="hover:text-verse-blue transition-colors">Why Verse?</a>
          <a href="#channels" className="hover:text-verse-blue transition-colors">Channels</a>
          <a href="#weekly-event" className="hover:text-verse-blue transition-colors">Weekly Event</a>
          <a href="#faq" className="hover:text-verse-blue transition-colors">FAQ</a>
        </div>
        
        <div className="flex items-center">
          <button 
            onClick={() => setMenuOpen(true)}
            className="w-12 h-12 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors focus:outline-none"
          >
            <Menu className="w-8 h-8" />
          </button>
          
          <AnimatePresence>
            {menuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40"
                  onClick={() => setMenuOpen(false)}
                />
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[340px] bg-white z-50 shadow-2xl border-l border-slate-100 flex flex-col"
                >
                  <div className="p-6 flex items-center justify-between border-b border-slate-100">
                    <span className="font-display font-bold text-lg text-slate-800">Menu</span>
                    <button 
                      onClick={() => setMenuOpen(false)}
                      className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="overflow-y-auto flex-1 py-4 flex flex-col">
                    {menuItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-4 px-6 py-4 font-medium text-slate-600 hover:bg-slate-50 hover:text-verse-blue transition-colors relative group"
                      >
                        <span className="text-slate-400 group-hover:text-verse-blue transition-colors">{item.icon}</span>
                        {item.label}
                      </a>
                    ))}
                  </div>
                  
                  <div className="p-6 border-t border-slate-100 bg-slate-50 mt-auto">
                    <a
                      href="https://hub.vgdh.io"
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-center gap-3 w-full bg-gradient-verse text-white px-6 py-4 rounded-xl font-bold shadow-md hover:opacity-90 transition-opacity"
                    >
                      Visit Hub <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
