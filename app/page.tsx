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

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <Link className="brand" href="/">AQUASHIELD<span>ENGINEERING</span></Link>
        <nav>
          <Link href="#solutions">Solutions</Link>
          <Link href="#capabilities">Capabilities</Link>
          <Link href="#diagnose">AI Diagnose</Link>
          <Link href="#contact" className="nav-cta">Book Inspection</Link>
        </nav>
      </header>

      <section className="hero shell">
        <div className="eyebrow">WATERPROOFING • TESTING • CONSTRUCTION CHEMICALS • AI</div>
        <h1>We don&apos;t just stop water.<br/><em>We diagnose why it moves.</em></h1>
        <p className="hero-copy">Engineering-led waterproofing systems, field diagnostics and specialist equipment for buildings that need lasting protection.</p>
        <div className="hero-actions">
          <Link href="#diagnose" className="button primary">Start AI Diagnosis →</Link>
          <Link href="#solutions" className="button secondary">Explore Systems</Link>
        </div>
        <div className="hero-metrics">
          <div><strong>01</strong><span>Inspect</span></div><div><strong>02</strong><span>Test</span></div><div><strong>03</strong><span>Diagnose</span></div><div><strong>04</strong><span>Specify</span></div>
        </div>
      </section>

      <section id="diagnose" className="diagnose shell">
        <div>
          <div className="eyebrow">AI WATERPROOFING ENGINEER</div>
          <h2>Tell us where the water is winning.</h2>
          <p>Describe the leakage, upload site photos in the next step, and turn symptoms into a structured inspection plan.</p>
        </div>
        <div className="diagnose-card">
          <div className="card-label">PRELIMINARY DIAGNOSIS</div>
          <div className="prompt">“Water is appearing on my basement wall after heavy rain.”</div>
          <div className="result"><span>Likely investigation</span><strong>Below-grade ingress assessment</strong></div>
          <div className="chips"><span>Moisture mapping</span><span>Crack mapping</span><span>Pressure check</span></div>
          <Link className="button primary full" href="#contact">Continue Diagnosis →</Link>
        </div>
      </section>

      <section id="solutions" className="section shell">
        <div className="section-head"><div><div className="eyebrow">APPLICATION SYSTEMS</div><h2>Specify the system.<br/>Not just the chemical.</h2></div><p>Every repair starts with substrate, exposure, water pressure, movement and service conditions.</p></div>
        <div className="grid four">{systems.map(([title, copy], i) => <article className="tile" key={title}><div className="index">0{i+1}</div><h3>{title}</h3><p>{copy}</p><span className="arrow">↗</span></article>)}</div>
      </section>

      <section id="capabilities" className="section shell dark-section">
        <div className="section-head"><div><div className="eyebrow">TECHNICAL CAPABILITIES</div><h2>From material to measurement.</h2></div><p>A connected workflow for customers, engineers and site teams.</p></div>
        <div className="grid three">{capabilities.map(([title, copy], i) => <article className="cap" key={title}><div className="cap-number">0{i+1}</div><h3>{title}</h3><p>{copy}</p><button>View capability →</button></article>)}</div>
      </section>

      <section id="contact" className="contact shell">
        <div><div className="eyebrow">NEXT STEP</div><h2>Bring us the leak.<br/>We&apos;ll bring the method.</h2></div>
        <div className="contact-panel"><input placeholder="Name / Company"/><input placeholder="Phone / Email"/><select defaultValue=""><option value="" disabled>What do you need?</option><option>Site inspection</option><option>Waterproofing system</option><option>Testing</option><option>Chemicals</option><option>Equipment</option></select><textarea placeholder="Describe the issue briefly"/><button className="button primary full">Request Engineering Call →</button></div>
      </section>

      <footer className="footer shell"><span>AQUASHIELD ENGINEERING</span><span>Waterproofing technology platform • V1</span></footer>
    </main>
  );
}
