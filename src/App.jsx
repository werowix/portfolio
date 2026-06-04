import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Shield, Car, Utensils, Trophy, Zap, RadioTower, Crosshair } from "lucide-react";

const domains = [
  {
    name: "HACKCLAW.COM",
    tag: "Cybersecurity / Red Team",
    signal: "Threat-grade brand for a security lab, exploit intel product, or hacker collective.",
    icon: Shield,
    price: "Make Offer",
    intensity: 98,
  },
  {
    name: "fsociete.com",
    tag: "Fintech / Underground Society",
    signal: "A stylish, subcultural name for finance, private communities, or digital identity.",
    icon: RadioTower,
    price: "Make Offer",
    intensity: 86,
  },
  {
    name: "RiPCARS.COM",
    tag: "Auto / Salvage / Performance",
    signal: "Built for auctions, parts, crash rebuilds, racing content, or an aggressive auto marketplace.",
    icon: Car,
    price: "Make Offer",
    intensity: 81,
  },
  {
    name: "WEROWIX.COM",
    tag: "Tech / AI / Digital Brand",
    signal: "Clean, futuristic, and highly brandable — suited for AI products, SaaS platforms, digital infrastructure, or a next-generation tech company.",
    icon: Cpu,
    price: "Make Offer",
    intensity: 91,
  },
  {
    name: "DrINsaNE.COM",
    tag: "Gaming / Creator / Horror",
    signal: "A loud, memorable persona domain with streamer, game studio, and merch potential.",
    icon: Zap,
    price: "Make Offer",
    intensity: 92,
  },
  {
    name: "XDERO.COM",
    tag: "AI / Crypto / SaaS",
    signal: "Short, sharp, invented, and brandable — ideal for a protocol, AI platform, or devtool.",
    icon: Cpu,
    price: "Make Offer",
    intensity: 94,
  },
  {
    name: "RSELLi.COM",
    tag: "Commerce / Resale / Luxury",
    signal: "Compact name with resale energy for marketplaces, creator shops, or boutique retail.",
    icon: Crosshair,
    price: "Make Offer",
    intensity: 76,
  },
  {
    name: "iCOOKWELL.COM",
    tag: "Food / Wellness / App",
    signal: "Friendly and practical for recipes, meal planning, nutrition coaching, or cookware commerce.",
    icon: Utensils,
    price: "Make Offer",
    intensity: 73,
  },
  {
    name: "ARAGOAL.COM",
    tag: "Sports / Betting / Training",
    signal: "Goal-driven name for football media, athlete tracking, fantasy sports, or coaching tools.",
    icon: Trophy,
    price: "Make Offer",
    intensity: 84,
  },
  {
    name: "NH26.COM",
    tag: "Ultra-short / Numeric Asset",
    signal: "A rare four-character asset suited for a holding company, product code, or premium redirect.",
    icon: ArrowUpRight,
    price: "Make Offer",
    intensity: 99,
  },
];

function glitchText(text) {
  return text.split("").map((char, index) => (
    <span key={`${char}-${index}`} style={{ animationDelay: `${index * 42}ms` }} className="glyph">
      {char}
    </span>
  ));
}

export default function WhiteDomainPortfolio() {
  const [active, setActive] = useState(domains[0]);
  const featured = useMemo(
    () =>
      domains.filter((domain) =>
        ["HACKCLAW.COM", "fsociete.com", "RiPCARS.COM", "WEROWIX.COM"].includes(domain.name)
      ),
    []
  );

  return (
    <div className="min-h-screen overflow-hidden bg-[#f8fbff] text-[#07111f] selection:bg-sky-200 selection:text-slate-950">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Share+Tech+Mono&display=swap');

        :root {
          --sky: #00a6ff;
          --blue: #2563eb;
          --ice: #eaf8ff;
          --lime: #7aa300;
          --ink: #07111f;
        }

        * { box-sizing: border-box; }
        body { margin: 0; }

        .cyber-font { font-family: 'Rajdhani', sans-serif; }
        .mono-font { font-family: 'Share Tech Mono', monospace; }

        .grid-haze {
          background-image:
            linear-gradient(rgba(0,166,255,.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,.08) 1px, transparent 1px);
          background-size: 48px 48px;
          transform: perspective(700px) rotateX(58deg) scale(1.7);
          transform-origin: center bottom;
        }

        .noise:before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: .10;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E");
          z-index: 80;
        }

        .scanlines:after {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          background: repeating-linear-gradient(
            to bottom,
            rgba(7,17,31,.035) 0px,
            rgba(7,17,31,.035) 1px,
            transparent 1px,
            transparent 6px
          );
          z-index: 70;
          opacity: .34;
        }

        .light-panel {
          border: 1px solid rgba(0,166,255,.28);
          background:
            linear-gradient(135deg, rgba(255,255,255,.92), rgba(239,248,255,.88)),
            radial-gradient(circle at top left, rgba(0,166,255,.18), transparent 34%),
            radial-gradient(circle at bottom right, rgba(37,99,235,.12), transparent 38%);
          box-shadow:
            0 0 0 1px rgba(37,99,235,.08) inset,
            0 0 34px rgba(0,166,255,.10),
            0 24px 90px rgba(15,23,42,.12);
          backdrop-filter: blur(18px);
        }

        .light-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(15,23,42,.10);
          background: linear-gradient(145deg, rgba(255,255,255,.94), rgba(239,248,255,.88));
          box-shadow: 0 0 0 1px rgba(0,166,255,.08) inset, 0 18px 55px rgba(15,23,42,.10);
        }

        .light-card:before {
          content: "";
          position: absolute;
          inset: -2px;
          background: conic-gradient(from 160deg, transparent, rgba(0,166,255,.50), rgba(37,99,235,.48), transparent 42%);
          opacity: 0;
          transition: opacity .35s ease;
          z-index: 0;
        }

        .light-card:hover:before { opacity: .72; }
        .light-card > * { position: relative; z-index: 1; }

        .light-card:after {
          content: "";
          position: absolute;
          inset: 1px;
          background: linear-gradient(145deg, rgba(255,255,255,.98), rgba(239,248,255,.96));
          z-index: 0;
          clip-path: polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%);
        }

        .glyph {
          display: inline-block;
          text-shadow: 0 0 12px rgba(0,166,255,.34), 3px 0 rgba(37,99,235,.22), -3px 0 rgba(122,163,0,.18);
          animation: glyphFlicker 3.8s infinite both;
        }

        @keyframes glyphFlicker {
          0%, 94%, 100% { opacity: 1; transform: translateY(0); }
          95% { opacity: .42; transform: translateY(-2px) skewX(14deg); }
          96% { opacity: 1; transform: translateY(1px) skewX(-10deg); }
          97% { opacity: .68; }
        }

        .ticker {
          animation: ticker 28s linear infinite;
        }

        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .pulse-core {
          animation: pulseCore 3s ease-in-out infinite;
        }

        @keyframes pulseCore {
          0%, 100% { box-shadow: 0 0 22px rgba(0,166,255,.28), 0 0 60px rgba(37,99,235,.10); }
          50% { box-shadow: 0 0 38px rgba(37,99,235,.26), 0 0 100px rgba(0,166,255,.16); }
        }

        .slant { clip-path: polygon(0 0, 100% 0, 94% 100%, 0 100%); }
      `}</style>

      <div className="noise scanlines cyber-font relative isolate">
        <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_20%_10%,rgba(0,166,255,.16),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(37,99,235,.14),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(125,211,252,.20),transparent_42%)]" />
        <div className="grid-haze pointer-events-none fixed -bottom-44 left-1/2 -z-10 h-[55vh] w-[120vw] -translate-x-1/2 opacity-70" />

        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            className="mono-font flex items-center gap-3 text-xs uppercase tracking-[0.34em] text-sky-700"
          >
            <span className="pulse-core h-3 w-3 rounded-full bg-sky-400" />
            Domain Arsenal // 2099
          </motion.div>
          <a
            href="#inventory"
            className="mono-font slant border border-sky-400/60 bg-white/80 px-5 py-3 text-xs uppercase tracking-[0.24em] text-sky-800 shadow-[0_0_24px_rgba(0,166,255,.16)] transition hover:bg-sky-500 hover:text-white"
          >
            View Vault
          </a>
        </header>

        <main>
          <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:pb-24 lg:pt-20">
            <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .65 }}>
              <div className="mono-font mb-6 inline-flex border border-sky-300/60 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.28em] text-sky-700 shadow-sm">
                Premium names for rogue brands
              </div>
              <h1 className="max-w-5xl text-6xl font-black uppercase leading-[.82] tracking-[-.05em] text-slate-950 sm:text-7xl lg:text-8xl xl:text-9xl">
                {glitchText("Best Domain Portfolio")}
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-600 sm:text-2xl">
                A clean, high-contrast storefront for premium digital assets: security, cars, food, gaming, sports, commerce, and short-brand domains ready for acquisition.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hackclaw@icloud.com?subject=Domain%20Portfolio%20Offer"
                  className="group inline-flex items-center justify-center gap-3 bg-slate-950 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-white shadow-[0_0_32px_rgba(15,23,42,.18)] transition hover:bg-sky-500"
                >
                  Make Portfolio Offer
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a
                  href="#inventory"
                  className="inline-flex items-center justify-center border border-slate-200 bg-white/80 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-slate-900 shadow-sm transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800"
                >
                  Scan Inventory
                </a>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 30, rotate: -1 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: .7, delay: .15 }}
              className="light-panel relative rounded-[2rem] p-5 sm:p-7"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sky-300/35 blur-3xl" />
              <div className="absolute -bottom-10 -left-8 h-40 w-40 rounded-full bg-blue-300/25 blur-3xl" />
              <div className="mono-font flex items-center justify-between border-b border-slate-200 pb-4 text-xs uppercase tracking-[0.2em] text-slate-500">
                <span>Featured Signal</span>
                <span>{active.intensity}% heat</span>
              </div>
              <div className="py-9">
                <active.icon className="mb-8 h-14 w-14 text-sky-500 drop-shadow-[0_0_18px_rgba(0,166,255,.28)]" />
                <h2 className="text-5xl font-black uppercase tracking-[-.04em] text-slate-950 sm:text-6xl">
                  {active.name}
                </h2>
                <p className="mono-font mt-4 text-sm uppercase tracking-[0.22em] text-lime-700">{active.tag}</p>
                <p className="mt-6 text-lg leading-8 text-slate-600">{active.signal}</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {featured.map((domain) => (
                  <button
                    key={domain.name}
                    onClick={() => setActive(domain)}
                    className={`mono-font border px-3 py-4 text-left text-xs uppercase tracking-[0.12em] transition ${
                      active.name === domain.name
                        ? "border-sky-500 bg-sky-500 text-white"
                        : "border-slate-200 bg-white/70 text-slate-500 hover:border-sky-300 hover:text-slate-950"
                    }`}
                  >
                    {domain.name}
                  </button>
                ))}
              </div>
            </motion.aside>
          </section>

          <section className="border-y border-sky-200 bg-white/55 py-4 shadow-sm">
            <div className="ticker mono-font flex w-[200%] gap-8 whitespace-nowrap text-sm uppercase tracking-[0.24em] text-slate-500">
              {[...domains, ...domains].map((domain, index) => (
                <span key={`${domain.name}-${index}`} className="inline-flex items-center gap-8">
                  <span>{domain.name}</span>
                  <span className="text-sky-500">✦</span>
                </span>
              ))}
            </div>
          </section>

          <section id="inventory" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mono-font text-xs uppercase tracking-[0.34em] text-sky-600">Inventory Matrix</p>
                <h2 className="mt-3 text-5xl font-black uppercase tracking-[-.04em] text-slate-950 sm:text-6xl">Choose your signal</h2>
              </div>
              <p className="max-w-md text-lg leading-8 text-slate-600">
                Every card is positioned as a possible brand direction, so buyers instantly understand the commercial angle.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {domains.map((domain, index) => {
                const Icon = domain.icon;
                return (
                  <motion.article
                    key={domain.name}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: .5, delay: index * .04 }}
                    onMouseEnter={() => setActive(domain)}
                    className="light-card group rounded-[1.75rem] p-[1px]"
                  >
                    <div className="relative z-10 h-full rounded-[1.7rem] p-6">
                      <div className="mb-9 flex items-start justify-between gap-5">
                        <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4 text-sky-600 shadow-[0_0_24px_rgba(0,166,255,.08)] transition group-hover:border-sky-300 group-hover:text-blue-700">
                          <Icon className="h-7 w-7" />
                        </div>
                        <div className="mono-font text-right text-[10px] uppercase tracking-[0.18em] text-slate-400">
                          <div>Asset #{String(index + 1).padStart(2, "0")}</div>
                          <div className="mt-1 text-lime-700">{domain.intensity}% signal</div>
                        </div>
                      </div>
                      <h3 className="text-3xl font-black uppercase tracking-[-.03em] text-slate-950 sm:text-4xl">{domain.name}</h3>
                      <p className="mono-font mt-3 text-xs uppercase tracking-[0.2em] text-sky-700">{domain.tag}</p>
                      <p className="mt-5 min-h-[96px] text-base leading-7 text-slate-600">{domain.signal}</p>
                      <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5">
                        <span className="mono-font text-xs uppercase tracking-[0.24em] text-slate-500">{domain.price}</span>
                        <a
                          href={`https://www.nameclub.com/domain/${encodeURIComponent(domain.name)}`}
                          className="group/btn inline-flex items-center gap-2 bg-slate-950 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-sky-500"
                        >
                          Bid
                          <ArrowUpRight className="h-4 w-4 transition group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
            <div className="light-panel grid gap-8 rounded-[2rem] p-7 md:grid-cols-[.8fr_1.2fr] md:p-10">
              <div>
                <p className="mono-font text-xs uppercase tracking-[0.34em] text-lime-700">Acquisition Protocol</p>
                <h2 className="mt-4 text-4xl font-black uppercase tracking-[-.03em] text-slate-950 sm:text-5xl">Buy one name or take the entire vault.</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["01", "Pick a domain", "Select the strongest match for your product, campaign, or holding strategy."],
                  ["02", "Send offer", "Submit your bid or ask for a package price on multiple names."],
                  ["03", "Transfer fast", "Use your preferred escrow and registrar transfer process."],
                ].map(([step, title, copy]) => (
                  <div key={step} className="border border-slate-200 bg-white/70 p-5 shadow-sm">
                    <div className="mono-font text-xs uppercase tracking-[0.24em] text-sky-700">{step}</div>
                    <h3 className="mt-4 text-2xl font-black uppercase text-slate-950">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
