'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

const systems = [
  ['Terrace & Roofs', 'Membranes, coatings and detailing systems for exposed roofs.'],
  ['Basements', 'Injection, external and internal systems for below-grade structures.'],
  ['Wet Areas', 'Bathroom, podium and wet-area systems designed around drainage and joints.'],
  ['Water Retaining', 'Tanks, sumps and pools with substrate-specific waterproofing systems.'],
];

const capabilities = [
  ['Chemicals', 'PU, cementitious, acrylic, epoxy, bituminous, sealants and repair systems.'],
  ['Testing', 'Moisture, adhesion, crack mapping, flood testing and diagnostic workflows.'],
  ['Equipment', 'Injection pumps, meters, scanners, thermal imaging and application equipment.'],
];

const diagnosisMap: Record<string, string> = {
  terrace: 'Likely surface-waterproofing deterioration. Start with moisture mapping, crack mapping and ponding/flood-test review.',
  basement: 'Likely below-grade ingress. Start with moisture mapping, crack/joint inspection and pressure/path assessment.',
  bathroom: 'Likely wet-area detail failure. Inspect joints, drainage interfaces, penetrations and membrane continuity.',
  tank: 'Likely water-retaining system defect. Inspect cracks, joints, penetrations and undertake controlled water testing.',
};

export default function Home() {
  const [siteType, setSiteType] = useState('basement');
  const [problem, setProblem] = useState('');
  const [area, setArea] = useState('100');
  const [submitted, setSubmitted] = useState(false);

  const calculator = useMemo(() => {
    const sqm = Math.max(0, Number(area) || 0);
    const kg = sqm * 1.5;
    return { sqm, kg, bags: Math.ceil(kg / 20) };
  }, [area]);

  const diagnosis = useMemo(() => {
    const base = diagnosisMap[siteType] || diagnosisMap.basement;
    return problem.trim() ? `${base} Your note: “${problem.trim()}”` : base;
  }, [siteType, problem]);

  return (
    <main>
      <header className="nav shell">
        <Link className="brand" href="/">AQUASHIELD<span>ENGINEERING</span></Link>
        <nav>
          <Link href="#solutions">Solutions</Link>
          <Link href="#capabilities">Capabilities</Link>
          <Link href="#diagnose">AI Diagnose</Link>
          <Link href="#calculator">Calculator</Link>
          <Link href="#contact" className="nav-cta">Book Inspection</Link>
        </nav>
      </header>

      <section className="hero shell">
        <div className="eyebrow">WATERPROOFING • TESTING • CONSTRUCTION CHEMICALS • AI</div>
        <h1>We don&apos;t just stop water.<br/><em>We diagnose why it moves.</em></h1>
        <p className="hero-copy">Engineering-led waterproofing systems, field diagnostics and specialist equipment for buildings that need lasting protection.</p>
        <div className="hero-actions"><Link href="#diagnose" className="button primary">Start AI Diagnosis →</Link><Link href="#solutions" className="button secondary">Explore Systems</Link></div>
        <div className="hero-metrics"><div><strong>01</strong><span>Inspect</span></div><div><strong>02</strong><span>Test</span></div><div><strong>03</strong><span>Diagnose</span></div><div><strong>04</strong><span>Specify</span></div></div>
      </section>

      <section id="diagnose" className="diagnose shell">
        <div>
          <div className="eyebrow">AI WATERPROOFING ENGINEER • DEMO</div>
          <h2>Turn a symptom into an inspection plan.</h2>
          <p>This V1 demo runs in the browser and returns a preliminary direction only. A site engineer should validate diagnosis and system selection.</p>
          <div className="form-grid">
            <label>Structure<select value={siteType} onChange={(e) => setSiteType(e.target.value)}><option value="terrace">Terrace / Roof</option><option value="basement">Basement</option><option value="bathroom">Bathroom / Wet Area</option><option value="tank">Water Tank / Pool</option></select></label>
            <label>What are you seeing?<textarea value={problem} onChange={(e) => setProblem(e.target.value)} placeholder="Example: damp patch after rain near the wall-floor joint" /></label>
          </div>
        </div>
        <div className="diagnose-card"><div className="card-label">PRELIMINARY ANALYSIS</div><div className="prompt">{diagnosis}</div><div className="result"><span>Recommended next step</span><strong>Site inspection + targeted testing</strong></div><div className="chips"><span>Moisture mapping</span><span>Crack mapping</span><span>Joint inspection</span></div><button className="button primary full" onClick={() => setSubmitted(true)}>{submitted ? 'Inspection request captured ✓' : 'Request Human Inspection →'}</button></div>
      </section>

      <section id="solutions" className="section shell"><div className="section-head"><div><div className="eyebrow">APPLICATION SYSTEMS</div><h2>Specify the system.<br/>Not just the chemical.</h2></div><p>Every repair starts with substrate, exposure, water pressure, movement and service conditions.</p></div><div className="grid four">{systems.map(([title, copy], i) => <article className="tile" key={title}><div className="index">0{i + 1}</div><h3>{title}</h3><p>{copy}</p><span className="arrow">↗</span></article>)}</div></section>

      <section id="capabilities" className="section shell dark-section"><div className="section-head"><div><div className="eyebrow">TECHNICAL CAPABILITIES</div><h2>From material to measurement.</h2></div><p>A connected workflow for customers, engineers and site teams.</p></div><div className="grid three">{capabilities.map(([title, copy], i) => <article className="cap" key={title}><div className="cap-number">0{i + 1}</div><h3>{title}</h3><p>{copy}</p><button onClick={() => window.alert(`${title}: capability details will be expanded in the next milestone.`)}>View capability →</button></article>)}</div></section>

      <section id="calculator" className="section shell calculator-section"><div className="section-head"><div><div className="eyebrow">MATERIAL CALCULATOR • DEMO</div><h2>Estimate coating quantity.</h2></div><p>Demo assumption: 1.5 kg/m². Final consumption must follow the selected product technical data sheet.</p></div><div className="calculator-card"><label>Area (m²)<input type="number" min="0" value={area} onChange={(e) => setArea(e.target.value)} /></label><div className="calc-result"><span>Estimated material</span><strong>{calculator.kg.toFixed(1)} kg</strong><small>≈ {calculator.bags} × 20 kg units</small></div><div className="calc-result"><span>Coverage area</span><strong>{calculator.sqm.toFixed(0)} m²</strong><small>Adjust after product selection.</small></div></div></section>

      <section id="contact" className="contact shell"><div><div className="eyebrow">NEXT STEP</div><h2>Bring us the leak.<br/>We&apos;ll bring the method.</h2></div><form className="contact-panel" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}><input required placeholder="Name / Company" /><input required placeholder="Phone / Email" /><select defaultValue=""><option value="" disabled>What do you need?</option><option>Site inspection</option><option>Waterproofing system</option><option>Testing</option><option>Chemicals</option><option>Equipment</option></select><textarea placeholder="Describe the issue briefly" /><button type="submit" className="button primary full">{submitted ? 'Request captured ✓' : 'Request Engineering Call →'}</button></form></section>

      <footer className="footer shell"><span>AQUASHIELD ENGINEERING</span><span>Waterproofing technology platform • V1.1 demo</span></footer>
    </main>
  );
}
