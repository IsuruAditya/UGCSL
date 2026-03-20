import { Link } from 'react-router-dom';
import './shared.css';
import './Admissions.css';

const steps = [
  { num: '01', title: 'Choose Your Program', desc: 'Browse our 120+ programs and find the perfect fit for your career goals.' },
  { num: '02', title: 'Check Requirements', desc: 'Review entry requirements, English proficiency, and supporting documents needed.' },
  { num: '03', title: 'Submit Application', desc: 'Complete the online application form and upload all required documents.' },
  { num: '04', title: 'Receive Decision', desc: 'Get your admission decision within 2-3 weeks of submitting a complete application.' },
];

const requirements = [
  { level: 'Undergraduate', icon: '🎓', items: ['A/L or equivalent qualification', 'Minimum 3 passes at A/L', 'English proficiency (IELTS 5.5+)', 'Personal statement', 'Two academic references'] },
  { level: 'Postgraduate', icon: '📚', items: ['Relevant bachelor\'s degree (2nd class or above)', 'Work experience (for MBA/professional programs)', 'English proficiency (IELTS 6.0+)', 'Research proposal (for research programs)', 'Two professional references'] },
];

const intakes = [
  { semester: 'Semester 1 – 2025', deadline: 'March 31, 2025', status: 'Closed' },
  { semester: 'Semester 2 – 2025', deadline: 'August 31, 2025', status: 'Open' },
  { semester: 'Semester 1 – 2026', deadline: 'March 31, 2026', status: 'Upcoming' },
];

export default function Admissions() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <span className="section-label" style={{ color: 'var(--accent-light)' }}>Admissions</span>
          <h1 className="page-hero-title">Begin Your Journey<br />at UGCSL</h1>
          <p>Applications for 2025/2026 are now open. Join our diverse community of 25,000+ students.</p>
          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Apply Online →</Link>
            <a href="#requirements" className="btn btn-outline">View Requirements</a>
          </div>
        </div>
      </section>

      {/* Intakes */}
      <section className="section-sm bg-soft">
        <div className="container">
          <div className="intakes-grid">
            {intakes.map((i) => (
              <div key={i.semester} className={`intake-card ${i.status.toLowerCase()}`}>
                <div className="intake-status">{i.status}</div>
                <h3>{i.semester}</h3>
                <p>Application Deadline: <strong>{i.deadline}</strong></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Process</span>
            <h2 className="section-title">How to Apply</h2>
            <p className="section-subtitle">Our streamlined application process makes it easy to take the next step in your academic journey.</p>
          </div>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <div key={s.num} className="step-card">
                <div className="step-num">{s.num}</div>
                {i < steps.length - 1 && <div className="step-connector" />}
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" className="section bg-soft">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Entry Requirements</span>
            <h2 className="section-title">What You Need to Apply</h2>
          </div>
          <div className="grid-2">
            {requirements.map((r) => (
              <div key={r.level} className="req-card card">
                <div className="req-header">
                  <span className="req-icon">{r.icon}</span>
                  <h3>{r.level} Programs</h3>
                </div>
                <ul className="req-list">
                  {r.items.map((item) => (
                    <li key={item}><span className="check">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="section">
        <div className="container">
          <div className="fees-banner">
            <div>
              <h2>Scholarships & Financial Aid</h2>
              <p>UGCSL offers merit-based scholarships covering up to 100% of tuition fees. Over LKR 500 million in scholarships awarded annually.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">Enquire About Scholarships →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
