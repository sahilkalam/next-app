import { useState } from "react";
import Head from "next/head"

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const data = [
    "tailwindcss", "reactjs", "nextjs", "css", "html", 
    "nodejs", "git", "javascript", "expressjs", "framer-motion", "vite", "typescript", "mongodb", "next-auth"
  ];

  const fontPermanent = { fontFamily: '"Permanent Marker", cursive', fontWeight: 400 };
  const fontDyna = { fontFamily: '"DynaPuff", system-ui' };
  const fontPaprika = { fontFamily: '"Paprika", system-ui' };

  return (
    <>            
      <Head>
        <title>Sahil-app</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&family=Edu+NSW+ACT+Cursive:wght@400..700&family=Paprika&family=Permanent+Marker&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Playwrite+GB+J:ital,wght@0,100..400;1,100..400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-black min-h-screen text-white antialiased selection:bg-blue-600/30">
        
        {/* Navigation Bar */}
        <nav className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center border-b border-zinc-900 gap-4">
          <h1
            style={fontPermanent}
            className="text-3xl tracking-wide cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setActiveTab("home")}
          >
            <i>Sahil.</i><span className="text-blue-600">dev</span>
          </h1>

          <div className="flex gap-6 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800">
            {["home", "about", "contact"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={fontDyna}
                className={`text-sm capitalize tracking-wide transition-all ${
                  activeTab === tab 
                    ? "text-blue-500 scale-105 font-medium" 
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>

        {/* Main Section Content */}
        <main className="max-w-4xl mx-auto px-6 py-16 md:py-24 min-h-[calc(100vh-100px)] flex flex-col justify-center">
          
          {/* HOME TAB */}
          {activeTab === "home" && (
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 style={fontPermanent} className="text-5xl md:text-7xl tracking-tight text-zinc-100 leading-tight">
                  CREATIVE <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">DEVELOPER.</span>
                </h2>
                <p style={fontPaprika} className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed">
                  Hey, I'm Sahil. I engineer beautiful interfaces and code robust frontend structures using modern web ecosystem tools.
                </p>
              </div>

              {/* Skills Area with Horizontal Scrollbar */}
              <div className="space-y-4">
                <h3 style={fontDyna} className="text-lg text-blue-500 tracking-wide flex items-center gap-2">
                  <span>⚡</span> Tech-Stack (Scroll Left/Right)
                </h3>
                
                {/* overflow-x-auto use kiya hai horizontal scroll activate karne ke liye */}
                <div className="flex gap-3 overflow-x-auto pb-4 pt-1 snap-x scroll-smooth custom-scrollbar">
                  {data.map((item, i) => (
                    <span 
                      key={i} 
                      className="snap-center shrink-0 border border-zinc-800 bg-zinc-950/80 px-5 py-2.5 rounded-xl text-xs font-mono text-zinc-300 uppercase tracking-wider hover:border-blue-600 hover:text-white hover:-translate-y-0.5 transition-all cursor-grab active:cursor-grabbing"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ABOUT TAB */}
          {activeTab === "about" && (
            <div className="space-y-6 max-w-2xl">
              <h2 style={fontPermanent} className="text-4xl text-blue-500 tracking-wide">
                My Story
              </h2>
              <div style={fontPaprika} className="space-y-4 text-zinc-300 text-lg leading-relaxed">
                <p>
                  Mera coding safar constraints ko break karne aur unique layout ideas ko web page par layout karne se shuru hua. Mujhe basic layouts ko design rich applications me upgrade karna acha lagta hai.
                </p>
              </div>
            </div>
          )}

          {/* CONTACT TAB */}
          {activeTab === "contact" && (
            <div className="space-y-8 max-w-md">
              <div className="space-y-3">
                <h2 style={fontPermanent} className="text-4xl text-blue-500 tracking-wide">
                  Let's Vibe
                </h2>
                <p style={fontPaprika} className="text-zinc-400 text-base leading-relaxed">
                  Have a project query, a freelance setup, or just want to discuss code design? Drop me a line instantly.
                </p>
              </div>

              <a
                href="https://t.me/Test_sahil93_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-blue-600/10 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.62.15-.15 2.71-2.48 2.76-2.7.01-.03.01-.14-.07-.2-.08-.07-.19-.04-.27-.03-.12.02-1.96 1.24-5.54 3.66-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.35-.49.97-.74 3.79-1.65 6.32-2.73 7.59-3.25 3.61-1.48 4.36-1.74 4.85-1.75.11 0 .35.03.51.16.13.12.17.29.19.41z"/>
                </svg>
                <span style={fontDyna} className="text-sm tracking-wide font-normal">Message on Telegram</span>
              </a>
            </div>
          )}

        </main>
      </div>

      {/* Global Style Tags for -webkit-scrollbar magic */}
      <style jsx global>{`
        /* 1. Pure Page ka Main Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #000000;
        }
        ::-webkit-scrollbar-thumb {
          background: #1f2937; /* zinc-800 */
          border-radius: 9999px;
          border: 2px solid #000000;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #2563eb; /* Blue-600 on hover */
        }

        /* 2. Horizontal Tech Stack Scrollbar (Pyaara/Sleek look) */
        .custom-scrollbar::-webkit-scrollbar {
          height: 5px; /* Ekdam patla aur aesthetic */
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(24, 24, 27, 0.3); /* Transparent zinc-900 */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #2563eb, #4f46e5); /* Blue to Indigo gradient */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #3b82f6;
        }
      `}</style>
    </>
  );
}