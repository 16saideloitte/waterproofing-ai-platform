import Link from 'next/link';

const tests = [
  ['Moisture Mapping', 'Identify moisture distribution and hotspots before selecting a repair system.', 'Non-destructive'],
  ['Crack Mapping', 'Record crack location, width, pattern and movement indicators for targeted treatment.', 'Visual + gauge'],
  ['Adhesion / Pull-off', 'Check coating or repair-system bond performance where applicable.', 'Field test'],
  ['Flood / Ponding Test', 'Controlled water exposure to validate drainage and waterproofing performance.', 'Controlled test'],
  ['Thermal Imaging', 'Support investigation of concealed moisture patterns and anomalies.', 'Diagnostic'],
  ['Joint Inspection', 'Assess construction joints, movement joints, penetrations and sealant interfaces.', 'Detail review'],
];

export default function TestingPage() {
  return (
    <main className="page-shell shell">
      <header className="nav shell"><Link className="brand" href="/">AQUASHIELD<span>ENGINEERING</span></Link><nav><Link href="/">Home</Link><Link href="/#solutions">Solutions</Link><Link href="/testing">Testing</Link><Link href="/#contact" className="nav-cta">Book Inspection</Link></nav></header>
      <section className="page-hero"><div className="eyebrow">FIELD DIAGNOSTICS</div><h1>Test the failure.<br/><em>Then specify the repair.</em></h1><p>Explore the diagnostic tests that can be combined into a site inspection plan. Actual test selection depends on structure, exposure and engineer assessment.</p></section>
      <section className="grid three test-grid">{tests.map(([name, copy, type], i) => <article className="cap test-card" key={name}><div className="cap-number">0{i+1}</div><span className="test-type">{type}</span><h3>{name}</h3><p>{copy}</p><Link href="/#contact" className="test-link">Request this test →</Link></article>)}</section>
      <section className="test-banner"><div><div className="eyebrow">NEXT MILESTONE</div><h2>Upload results and let the platform structure the report.</h2></div><Link href="/#diagnose" className="button primary">Open Diagnosis Demo →</Link></section>
      <footer className="footer shell"><span>AQUASHIELD ENGINEERING</span><span>Testing module • V1.2</span></footer>
    </main>
  );
}
