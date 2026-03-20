import { Link } from 'react-router-dom';
import './shared.css';
import './About.css';

const leadership = [
  { name: 'Prof. Arjuna Perera', role: 'Vice Chancellor', emoji: '👨‍🏫' },
  { name: 'Dr. Nirmala Silva', role: 'Dean of Academics', emoji: '👩‍🔬' },
  { name: 'Prof. Rajan Mendis', role: 'Dean of Research', emoji: '👨‍💼' },
  { name: 'Dr. Priya Fernando', role: 'Dean of Students', emoji: '👩‍💼' },
];

const milestones = [
  { year: '2005', event: 'UGCSL founded with 3 faculties and 500 students' },
  { year: '2010', event: 'Received full university accreditation from UGC Sri Lanka' },
  { year: '2015', event: 'Launched international exchange programs with 20 universities' },
  { year: '2019', event: 'Opened state-of-the-art Research & Innovation Centre' },
  { year: '2022', event: 'Ranked #1 private university in Sri Lanka' },
  { year: '2025', event: 'Expanded to 120+ programs with 25,000+ students' },
];

export default function About() {
  return (
    <main className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <span className="section-label" style={{ color: 'var(--accent-light)' }}>About UGCSL</span>
          <h1 className="page-hero-title">Shaping Global Leaders<br />Since 2005</h1>
          <p>Two decades of academic excellence, innovation, and transformative education in the heart of Sri Lanka.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mission">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To provide transformative, globally relevant education that empowers students to become innovative leaders, critical thinkers, and responsible global citizens who contribute meaningfully to society.</p>
            </div>
            <div className="mv-card vision">
              <div className="mv-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>To be the leading university in South Asia, recognized globally for academic excellence, groundbreaking research, and producing graduates who shape the future of their industries and communities.</p>
            </div>
            <div className="mv-card values">
              <div className="mv-icon">💎</div>
              <h3>Our Values</h3>
              <p>Excellence, Integrity, Innovation, Inclusivity, and Global Citizenship form the foundation of everything we do at UGCSL.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus */}
      <section className="section bg-soft">
        <div className="container">
          <div className="campus-grid">
            <div>
              <span className="section-label">Our Campus</span>
              <h2 className="section-title">A World-Class Learning Environment</h2>
              <p className="section-subtitle">Spread across 120 acres in Colombo, our campus features cutting-edge facilities designed to inspire creativity and collaboration.</p>
              <ul className="campus-features">
                {['Modern lecture halls with smart technology', 'Advanced research laboratories', 'Digital library with 500,000+ resources', 'Sports complex & wellness centre', 'Student innovation hub & maker space', 'International student residences'].map((f) => (
                  <li key={f}><span className="check">✓</span>{f}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-dark" style={{ marginTop: '32px' }}>Schedule a Campus Tour →</Link>
            </div>
            <div className="campus-visual">
              <div className="campus-img-main">
                <div className="campus-img-overlay">
                  <span>🏛️</span>
                  <p>Main Campus Building</p>
                </div>
              </div>
              <div className="campus-img-grid">
                {['🔬 Research Lab', '📚 Library', '🏃 Sports Complex'].map((item) => (
                  <div key={item} className="campus-img-small">
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Two Decades of Excellence</h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={m.year} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <span className="timeline-year">{m.year}</span>
                  <p>{m.event}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section bg-soft">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Leadership</span>
            <h2 className="section-title">Meet Our Leaders</h2>
          </div>
          <div className="grid-4">
            {leadership.map((l) => (
              <div key={l.name} className="leader-card card">
                <div className="leader-avatar">{l.emoji}</div>
                <div className="leader-info">
                  <h4>{l.name}</h4>
                  <p>{l.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
