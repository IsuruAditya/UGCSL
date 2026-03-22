import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useApi';
import type { Program, NewsItem, PaginatedResponse } from '../types';
import banner from '../assets/campus/banner.jpeg';
import './Home.css';

const stats = [
  { value: '4', label: 'Diploma Programs' },
  { value: '2026', label: 'Established' },
  { value: '100%', label: 'Qualified Faculty' },
  { value: '100%', label: 'Online' },
];

const faculties = [
  { name: 'Faculty of Social Sciences', icon: '🌍', programs: 3, desc: 'Psychology, Human Rights Studies, Social Development' },
  { name: 'Faculty of Business', icon: '📈', programs: 1, desc: 'Business and Management' },
];

const whyUs = [
  { icon: '🌍', title: 'Globally Aligned Programs', desc: 'Nationally and internationally recognized qualifications designed for a competitive global landscape.' },
  { icon: '🎓', title: 'Expert Faculty', desc: 'Learn from qualified academics and industry practitioners committed to your success.' },
  { icon: '🎯', title: 'Career-Ready Education', desc: 'Programs built to bridge education, professional training, and real-world employability.' },
  { icon: '💻', title: 'Learn From Anywhere', desc: 'Fully online programs designed for flexibility — study at your own pace from anywhere in Sri Lanka or abroad.' },
  { icon: '🤝', title: 'Inclusive & Accessible', desc: 'Equitable higher education opportunities open to all segments of society, regardless of location.' },
];

export default function Home() {
  const { data: programsRes, loading: pLoading } = useFetch<PaginatedResponse<Program>>('/programs');
  const { data: newsRes, loading: nLoading } = useFetch<PaginatedResponse<NewsItem>>('/news');

  const featured = programsRes?.data.filter((p) => p.featured).slice(0, 6) ?? [];
  const news = newsRes?.data ?? [];

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
          <div className="hero-badge">🎓 Admissions Open – Semester 1, 2026</div>
          <h1 className="hero-title">
            Begin Your Journey at<br />
            <span className="hero-highlight">United Global Campus</span><br />
            of Sri Lanka
          </h1>
          <p className="hero-subtitle">
            A newly established online higher education institution — offering nationally and internationally recognized diploma programs you can complete entirely from home.
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

      {/* Banner */}
      <section className="home-banner">
        <img src={banner} alt="United Global Campus of Sri Lanka" />
      </section>

      {/* Faculties */}
      <section className="section bg-soft">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Explore</span>
            <h2 className="section-title">Areas of Study</h2>
            <p className="section-subtitle">Our online diploma programs span two faculties — with more disciplines coming soon.</p>
          </div>
          <div className="grid-2 faculties-grid">
            {faculties.map((f) => (
              <Link to="/programs" key={f.name} className="faculty-card card">
                <div className="faculty-icon">{f.icon}</div>
                <h3>{f.name}</h3>
                <p className="faculty-programs">{f.programs} {f.programs === 1 ? 'Program' : 'Programs'}</p>
                <p className="faculty-desc">{f.desc}</p>
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
            <p>Be among the first to join United Global Campus of Sri Lanka. Applications for Semester 1, 2026 are now open.</p>
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
