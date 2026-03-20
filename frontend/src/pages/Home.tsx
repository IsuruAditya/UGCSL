import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useApi';
import type { Program, NewsItem } from '../types';
import './Home.css';

const stats = [
  { value: '25,000+', label: 'Students Enrolled' },
  { value: '120+', label: 'Academic Programs' },
  { value: '98%', label: 'Graduate Employment' },
  { value: '60+', label: 'Global Partnerships' },
];

const faculties = [
  { name: 'Technology & Computing', icon: '💻', programs: 12 },
  { name: 'Business & Management', icon: '📊', programs: 8 },
  { name: 'Medicine & Health', icon: '🏥', programs: 10 },
  { name: 'Law & Social Sciences', icon: '⚖️', programs: 6 },
  { name: 'Arts & Humanities', icon: '🎨', programs: 9 },
  { name: 'Engineering', icon: '⚙️', programs: 11 },
];

const whyUs = [
  { icon: '🌍', title: 'Global Recognition', desc: 'Degrees recognized by 60+ international universities and professional bodies worldwide.' },
  { icon: '🔬', title: 'Research Excellence', desc: 'State-of-the-art research facilities and active collaboration with industry leaders.' },
  { icon: '🎯', title: 'Career-Focused', desc: 'Dedicated career services with 98% graduate employment within 6 months.' },
  { icon: '🏆', title: 'Award-Winning Faculty', desc: 'Learn from internationally acclaimed academics and industry practitioners.' },
];

export default function Home() {
  const { data: programs, loading: pLoading } = useFetch<Program[]>('/programs');
  const { data: news, loading: nLoading } = useFetch<NewsItem[]>('/news');

  const featured = programs?.filter((p) => p.featured).slice(0, 6) ?? [];

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-overlay" />
          <div className="hero-shapes">
            <div className="shape shape-1" />
            <div className="shape shape-2" />
            <div className="shape shape-3" />
          </div>
        </div>
        <div className="container hero-content">
          <div className="hero-badge">🎓 Admissions Open 2025 / 2026</div>
          <h1 className="hero-title">
            Shape Your Future at<br />
            <span className="hero-highlight">United Global Campus</span><br />
            of Sri Lanka
          </h1>
          <p className="hero-subtitle">
            A world-class institution where innovation meets tradition. Discover 120+ programs designed to prepare you for a rapidly evolving global landscape.
          </p>
          <div className="hero-actions">
            <Link to="/admissions" className="btn btn-primary">Explore Programs →</Link>
            <Link to="/about" className="btn btn-outline">Discover UGCSL</Link>
          </div>
          <div className="hero-stats">
            {stats.map((s) => (
              <div key={s.label} className="hero-stat">
                <span className="hero-stat-value">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-indicator" />
        </div>
      </section>

      {/* Faculties */}
      <section className="section bg-soft">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Explore</span>
            <h2 className="section-title">Our Faculties</h2>
            <p className="section-subtitle">Six world-class faculties offering cutting-edge programs across diverse disciplines.</p>
          </div>
          <div className="grid-3 faculties-grid">
            {faculties.map((f) => (
              <Link to="/programs" key={f.name} className="faculty-card card">
                <div className="faculty-icon">{f.icon}</div>
                <h3>{f.name}</h3>
                <p>{f.programs} Programs</p>
                <span className="faculty-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-label">Academics</span>
              <h2 className="section-title">Featured Programs</h2>
            </div>
            <Link to="/programs" className="btn btn-dark">View All Programs →</Link>
          </div>
          {pLoading ? (
            <div className="spinner" />
          ) : (
            <div className="grid-3">
              {featured.map((p) => (
                <div key={p._id} className="program-card card">
                  <div className="program-icon">{p.icon}</div>
                  <div className="program-body">
                    <div className="program-meta">
                      <span className="tag">{p.degree}</span>
                      <span className="program-duration">⏱ {p.duration}</span>
                    </div>
                    <h3 className="program-title">{p.title}</h3>
                    <p className="program-faculty">{p.faculty}</p>
                    <p className="program-desc">{p.description}</p>
                    <Link to="/admissions" className="program-link">Apply Now →</Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why UGCSL */}
      <section className="section why-section">
        <div className="container">
          <div className="why-inner">
            <div className="why-left">
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-title">Excellence in Every Dimension</h2>
              <p className="section-subtitle">
                UGCSL combines academic rigor with real-world application, preparing graduates who lead in their fields globally.
              </p>
              <Link to="/about" className="btn btn-dark" style={{ marginTop: '32px' }}>Learn More About Us →</Link>
            </div>
            <div className="why-right">
              {whyUs.map((w) => (
                <div key={w.title} className="why-card">
                  <div className="why-icon">{w.icon}</div>
                  <div>
                    <h4>{w.title}</h4>
                    <p>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="section bg-soft">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-label">Latest</span>
              <h2 className="section-title">News & Events</h2>
            </div>
            <Link to="/news" className="btn btn-dark">All News →</Link>
          </div>
          {nLoading ? (
            <div className="spinner" />
          ) : (
            <div className="grid-3">
              {news?.map((item) => (
                <article key={item._id} className="news-card card">
                  <div className="news-img-placeholder">
                    <span>{item.category[0]}</span>
                  </div>
                  <div className="news-body">
                    <span className="tag">{item.category}</span>
                    <h3 className="news-title">{item.title}</h3>
                    <p className="news-excerpt">{item.excerpt}</p>
                    <div className="news-footer">
                      <span className="news-date">
                        {new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                      <a href="#" className="news-read">Read More →</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <h2>Ready to Begin Your Journey?</h2>
            <p>Join 25,000+ students building their future at UGCSL. Applications for 2025/2026 are now open.</p>
          </div>
          <div className="cta-actions">
            <Link to="/admissions" className="btn btn-primary">Apply Now</Link>
            <Link to="/contact" className="btn btn-outline">Request Info</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
