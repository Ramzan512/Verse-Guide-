/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HubAccountGuide } from "./components/HubAccountGuide";
import { WalletSecurityGuide } from "./components/WalletSecurityGuide";
import { About } from "./components/About";
import { Channels } from "./components/Channels";
import { ScratcherEvent } from "./components/ScratcherEvent";
import { Rules } from "./components/Rules";
import { FAQ } from "./components/FAQ";
import { OfficialLinks } from "./components/OfficialLinks";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 pt-16">
      <Navbar />
      <main>
        <Hero />
        <Channels />
        <HubAccountGuide />
        <WalletSecurityGuide />
        <About />
        <ScratcherEvent />
        <Rules />
        <FAQ />
        <OfficialLinks />
      </main>
      <Footer />
    </div>
  );
}


