import Link from "next/link";
import { ArrowRight, Bot, CheckCircle2, Droplets, FlaskConical, Gauge, ShieldCheck, Wrench } from "lucide-react";

const solutions = [
  { icon: Droplets, title: "Leakage Diagnosis", text: "Start with symptoms, site conditions and evidence to narrow the likely failure mechanism." },
  { icon: FlaskConical, title: "Waterproofing Chemistry", text: "Explore PU, cementitious, acrylic, epoxy, sealants, repair and protection systems." },
  { icon: Gauge, title: "Testing & Inspection", text: "Plan moisture, adhesion, flood, pressure and other field investigations around the failure mode." },
  { icon: Wrench, title: "Machines & Equipment", text: "Discover injection, surface-preparation, inspection and measurement equipment." },
];

const applications = ["Terraces & roofs", "Basements", "Bathrooms", "Water tanks", "Swimming pools", "Industrial structures"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071014] text-white">
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(47,191,207,.18),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,.08),transparent_26%),linear-gradient(180deg,#071014_0%,#0b171c_55%,#071014_100%)]" />
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="grid size-10 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15"><ShieldCheck className="size-5" /></span>
            <span>HydroShield AI</span>
          </Link>
          <div className="hidden items-center gap-7 text-sm text-white/65 md:flex">
            <Link href="#solutions" className="hover:text-white">Solutions</Link>
            <Link href="#applications" className="hover:text-white">Applications</Link>
            <Link href="#diagnose" className="hover:text-white">AI Diagnosis</Link>
            <Link href="#contact" className="hover:text-white">Contact</Link>
          </div>
          <Link href="#diagnose" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#071014] transition hover:scale-[1.02]">Start Diagnosis</Link>
        </nav>

        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-14 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-32 lg:pt-20">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 backdrop-blur">
              <span className="size-1.5 rounded-full bg-cyan-300" /> Engineering-first waterproofing intelligence
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">Diagnose the cause. Engineer the system. Protect the structure.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">A digital platform for waterproofing chemicals, testing, equipment, inspections and AI-assisted diagnosis — designed for real site decisions, not just product browsing.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#diagnose" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#071014] hover:bg-cyan-200">Analyze a leakage <ArrowRight className="size-4" /></Link>
              <Link href="#solutions" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Explore solutions</Link>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-5 border-t border-white/10 pt-6 text-sm">
              <div><div className="font-semibold">AI-assisted</div><div className="mt-1 text-white/45">Preliminary diagnosis</div></div>
              <div><div className="font-semibold">Field-ready</div><div className="mt-1 text-white/45">Tests & inspection</div></div>
              <div><div className="font-semibold">System-led</div><div className="mt-1 text-white/45">Materials & methods</div></div>
            </div>
          </div>

          <div id="diagnose" className="relative rounded-[2rem] border border-white/10 bg-white/[0.045] p-4 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0c181e] p-6 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <div><div className="flex items-center gap-2 text-sm text-cyan-200"><Bot className="size-4" /> AI Waterproofing Engineer</div><h2 className="mt-3 text-2xl font-semibold">What is happening at your site?</h2></div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50">Beta</div>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/50">Describe the symptom, then upload evidence in the full diagnosis workflow.</p>
              <div className="mt-6 space-y-3">
                {["Water appears after heavy rain", "Visible crack near the wall-slab joint", "Existing coating is peeling"].map((item) => (
                  <button key={item} className="w-full rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-left text-sm text-white/75 transition hover:border-cyan-200/30 hover:bg-white/[0.07]">{item}</button>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-dashed border-white/10 bg-black/10 p-5">
                <div className="text-sm font-medium">Recommended next step</div>
                <div className="mt-2 text-sm leading-6 text-white/50">Start with site context, visible symptoms and moisture evidence before selecting a treatment system.</div>
              </div>
              <Link href="#contact" className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#071014]">Book an engineer review <ArrowRight className="size-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl"><div className="text-sm font-medium text-cyan-200">One platform, end to end</div><h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">From symptom to waterproofing system.</h2><p className="mt-5 text-white/55 leading-7">The platform is organized around the work engineers, contractors and customers actually need to complete.</p></div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map(({ icon: Icon, title, text }) => <article key={title} className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]"><div className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/5"><Icon className="size-5 text-cyan-200" /></div><h3 className="mt-6 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/50">{text}</p><div className="mt-6 flex items-center gap-2 text-sm text-white/55 group-hover:text-white">Explore <ArrowRight className="size-4" /></div></article>)}
        </div>
      </section>

      <section id="applications" className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div><div className="text-sm text-cyan-200">Built for the jobsite</div><h2 className="mt-3 text-4xl font-semibold tracking-tight">Solutions mapped to real structures.</h2><p className="mt-5 max-w-xl text-white/50 leading-7">Move from application to defect, test plan and treatment strategy without losing the technical context.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{applications.map((item, i) => <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0a151a] p-5"><span className="font-medium">{item}</span><span className="text-xs text-white/35">0{i + 1}</span></div>)}</div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8"><div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 sm:p-12"><div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end"><div className="max-w-2xl"><div className="text-sm text-cyan-200">Next milestone</div><h2 className="mt-3 text-4xl font-semibold tracking-tight">Turn this foundation into your complete waterproofing operating system.</h2><p className="mt-5 text-white/50 leading-7">The next layers will add the technical catalog, calculators, site inspections, reports, quotations, customer portal and production AI services.</p></div><Link href="#diagnose" className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#071014]">Start the workflow <ArrowRight className="size-4" /></Link></div></div></section>

      <footer className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between lg:px-8"><div>HydroShield AI Platform</div><div>AI output is preliminary decision support; final specifications require qualified review.</div></div></footer>
    </main>
  );
}
