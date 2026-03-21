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
  { year: '2005', event: 'United Global Campus (Pvt) Ltd. established with a vision for globally recognized higher education' },
  { year: '2010', event: 'Launched first nationally recognized diploma and degree programs' },
  { year: '2015', event: 'Established partnerships with international universities and professional bodies' },
  { year: '2019', event: 'Expanded program portfolio to include research, innovation, and leadership development' },
  { year: '2022', event: 'Strengthened links between education, professional training, and employability' },
  { year: '2025', event: 'Advancing towards becoming a leading higher education hub in South Asia' },
];

export default function About() {
  return (
    <main className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <span className="section-label" style={{ color: 'var(--accent-light)' }}>About UGCSL</span>
          <h1 className="page-hero-title">United Global Campus<br />(Pvt) Ltd.</h1>
          <p>Delivering innovative, quality-driven academic programs that develop knowledgeable, skilled, and socially responsible global citizens.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card vision">
              <div className="mv-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>To become a globally recognized center of higher education by delivering innovative, quality-driven academic programs that develop knowledgeable, skilled, and socially responsible global citizens.</p>
            </div>
            <div className="mv-card mission">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To deliver nationally and internationally recognized higher education programs that integrate academic excellence, practical skills, research, innovation, and leadership development, while empowering students to achieve professional success and contribute meaningfully to society.</p>
            </div>
            <div className="mv-card values">
              <div className="mv-icon">💎</div>
              <h3>Core Objectives</h3>
              <ul style={{textAlign:'left', paddingLeft:'1.2rem', margin:0}}>
                <li>Design and deliver nationally and internationally recognized certificates, diplomas, degrees, and professional programs.</li>
                <li>Create a comprehensive learning environment integrating academic knowledge, practical skills, innovation, and leadership.</li>
                <li>Promote quality higher education based on research, innovation, and societal needs.</li>
                <li>Expand global education opportunities through partnerships with local and international universities and industries.</li>
                <li>Strengthen the link between education, professional training, and employability.</li>
                <li>Operate in compliance with legal, ethical, and quality assurance standards.</li>
                <li>Provide inclusive, equitable, and globally competitive higher education for all segments of society.</li>
                <li>Contribute to positioning Sri Lanka as a leading higher education hub in South Asia.</li>
              </ul>
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
