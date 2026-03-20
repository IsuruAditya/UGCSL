import './shared.css';
import './Research.css';

const centres = [
  { icon: '🤖', name: 'Centre for AI & Machine Learning', desc: 'Pioneering research in deep learning, NLP, and autonomous systems with industry partnerships.' },
  { icon: '🌱', name: 'Sustainable Technology Research Centre', desc: 'Developing green energy solutions, carbon capture technologies, and sustainable urban systems.' },
  { icon: '🧬', name: 'Biomedical Research Institute', desc: 'Cutting-edge research in genomics, drug discovery, and precision medicine.' },
  { icon: '📡', name: 'Digital Innovation Lab', desc: 'Exploring blockchain, IoT, and next-generation communication technologies.' },
  { icon: '🏙️', name: 'Urban Development Research Centre', desc: 'Smart city planning, infrastructure design, and sustainable architecture research.' },
  { icon: '⚖️', name: 'Policy & Governance Institute', desc: 'Research on public policy, legal frameworks, and governance in the digital age.' },
];

const stats = [
  { value: '500+', label: 'Active Research Projects' },
  { value: 'LKR 2B+', label: 'Annual Research Funding' },
  { value: '1,200+', label: 'Publications per Year' },
  { value: '80+', label: 'Industry Partners' },
];

export default function Research() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <span className="section-label" style={{ color: 'var(--accent-light)' }}>Research</span>
          <h1 className="page-hero-title">Advancing Knowledge,<br />Transforming the World</h1>
          <p>UGCSL is at the forefront of research that addresses the most pressing challenges of our time.</p>
        </div>
      </section>

      <section className="section-sm research-stats-section">
        <div className="container">
          <div className="research-stats">
            {stats.map((s) => (
              <div key={s.label} className="research-stat">
                <span className="research-stat-value">{s.value}</span>
                <span className="research-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Research Centres</span>
            <h2 className="section-title">Our Research Centres</h2>
            <p className="section-subtitle">Six dedicated research centres driving innovation across disciplines.</p>
          </div>
          <div className="grid-3">
            {centres.map((c) => (
              <div key={c.name} className="research-card card">
                <div className="research-icon">{c.icon}</div>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
                <a href="#" className="research-link">Learn More →</a>
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
              <p className="section-subtitle">We welcome collaborations with industry, government, and international research institutions. Together, we can solve complex global challenges.</p>
              <a href="/contact" className="btn btn-dark" style={{ marginTop: '28px' }}>Get in Touch →</a>
            </div>
            <div className="collab-visual">
              {['🏭', '🏛️', '🌐', '🔬', '💡', '🤝'].map((e, i) => (
                <div key={i} className="collab-bubble">{e}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
