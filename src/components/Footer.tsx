export function Footer() {
  const links = [
    { name: "Main Community", url: "https://t.me/GetVerse" },
    { name: "Vibe Coding with Verse", url: "https://t.me/GetVerse/486213" },
    { name: "Verse Builders Hub", url: "https://t.me/GetVerse/355494" },
    { name: "Learn Skills with Verse", url: "https://t.me/GetVerse/355506" },
    { name: "Verse Events", url: "https://t.me/GetVerse/379189" },
    { name: "Bitcoin.com X", url: "https://x.com/BitcoinCom" },
    { name: "Verse Ecosystem X", url: "https://x.com/VerseEcosystem" },
    { name: "Hub.vgdh.io", url: "https://hub.vgdh.io" },
  ];

  return (
    <footer className="bg-bg-gray py-12 px-6 border-t border-slate-100 text-center">
      <div className="flex flex-col items-center mb-6">
        <img src="https://i.postimg.cc/zv0HPfvF/IMG-20260531-120027.png" alt="Verse Logo" className="w-12 h-12 object-contain drop-shadow-sm mb-4" referrerPolicy="no-referrer" />
        <div className="font-display font-bold text-slate-800 text-xl">Verse Community Guide</div>
      </div>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-500 mb-8 max-w-2xl mx-auto">
        {links.map((link, i) => (
          <a key={i} href={link.url} target="_blank" rel="noreferrer" className="hover:text-verse-blue transition-colors">
            {link.name}
          </a>
        ))}
      </div>
      <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} Verse Community. All rights reserved.</p>
    </footer>
  );
}
