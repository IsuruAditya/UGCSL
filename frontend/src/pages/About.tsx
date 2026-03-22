import { Link } from 'react-router-dom';
import banner from '../assets/campus/banner.jpeg';
import './shared.css';
import './About.css';

const roadmap = [
  { year: '2025', event: 'United Global Campus (Pvt) Ltd. officially established — first intake of students welcomed' },
  { year: '2026', event: 'Expand program offerings and establish partnerships with international universities and professional bodies' },
  { year: '2027', event: 'Launch research initiatives and strengthen industry collaboration across Sri Lanka' },
  { year: '2028', event: 'Grow into a fully recognized higher education institution contributing to South Asia\'s education landscape' },
];

export default function About() {
  return (
    <main className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <span className="section-label" style={{ color: 'var(--accent-light)' }}>About UGCSL</span>
          <h1 className="page-hero-title">A New Vision for<br />Higher Education</h1>
          <p>United Global Campus (Pvt) Ltd. — a newly established institution committed to delivering globally recognized, quality-driven higher education in Sri Lanka.</p>
        </div>
      </section>

      {/* Banner */}
      <section className="campus-banner">
        <img src={banner} alt="United Global Campus of Sri Lanka" />
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
              <ul style={{ textAlign: 'left', paddingLeft: '1.2rem', margin: 0 }}>
                <li>Design and deliver nationally and internationally recognized certificates, diplomas, degrees, and professional programs.</li>
                <li>Create a comprehensive learning environment integrating academic knowledge, practical skills, innovation, and leadership.</li>
                <li>Promote quality higher education based on research, innovation, and societal needs.</li>
                <li>Expand global opportunities through partnerships with local and international universities and industries.</li>
                <li>Strengthen the link between education, professional training, and employability.</li>
                <li>Operate in compliance with legal, ethical, and quality assurance standards.</li>
                <li>Provide inclusive, equitable, and globally competitive higher education for all segments of society.</li>
                <li>Contribute to positioning Sri Lanka as a leading higher education hub in South Asia.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section bg-soft">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Leadership</span>
            <h2 className="section-title">Our Academic Team</h2>
            <p className="section-subtitle">Led by experienced academics and industry professionals dedicated to delivering quality higher education.</p>
          </div>
          <div className="leadership-placeholder">
            <span>🎓</span>
            <p>Our academic leadership team will be announced shortly. We are committed to bringing together experienced educators and industry professionals to lead UGCSL into its next chapter.</p>
            <Link to="/contact" className="btn btn-dark" style={{ marginTop: '24px' }}>Get in Touch →</Link>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Looking Ahead</span>
            <h2 className="section-title">Our Roadmap</h2>
          </div>
          <div className="timeline">
            {roadmap.map((m, i) => (
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
    </main>
  );
}
