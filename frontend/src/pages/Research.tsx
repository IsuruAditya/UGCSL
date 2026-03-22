import { Link } from 'react-router-dom';
import './shared.css';
import './Research.css';

const areas = [
  { icon: '🧠', name: 'Psychology & Mental Health', desc: 'Exploring human behaviour, cognitive processes, and mental wellbeing to address growing societal needs.' },
  { icon: '🕊️', name: 'Human Rights & Social Justice', desc: 'Research into international human rights frameworks, advocacy, and policy development.' },
  { icon: '📈', name: 'Business & Organisational Development', desc: 'Examining entrepreneurship, management practices, and economic development in the Sri Lankan context.' },
  { icon: '🌍', name: 'Social Development & Community', desc: 'Studying community-led development, social policy, and sustainable change at local and national levels.' },
];

export default function Research() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <span className="section-label" style={{ color: 'var(--accent-light)' }}>Research</span>
          <h1 className="page-hero-title">Building a Culture<br />of Inquiry</h1>
          <p>At UGCSL, research and critical thinking are embedded in everything we do — from day one.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Focus Areas</span>
            <h2 className="section-title">Our Research Interests</h2>
            <p className="section-subtitle">Our programs are grounded in research across four key areas aligned with our current diploma offerings.</p>
          </div>
          <div className="grid-2">
            {areas.map((c) => (
              <div key={c.name} className="research-card card">
                <div className="research-icon">{c.icon}</div>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div className="collab-banner">
            <div className="collab-content">
              <span className="section-label">Collaborate</span>
              <h2 className="section-title">Partner With Us</h2>
              <p className="section-subtitle">We welcome collaborations with industry, government, and research institutions. If you share our vision for knowledge-driven social progress, we'd love to connect.</p>
              <Link to="/contact" className="btn btn-dark" style={{ marginTop: '28px' }}>Get in Touch →</Link>
            </div>
            <div className="collab-visual">
              {['🏛️', '🌐', '🤝', '💡', '📚', '🔍'].map((e, i) => (
                <div key={i} className="collab-bubble">{e}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
