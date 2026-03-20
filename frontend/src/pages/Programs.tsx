import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useApi';
import type { Program, PaginatedResponse } from '../types';
import './shared.css';
import './Programs.css';

const faculties = ['All', 'Faculty of Technology', 'Faculty of Business', 'Faculty of Medicine', 'Faculty of Law', 'Faculty of Built Environment'];

export default function Programs() {
  const { data: res, loading } = useFetch<PaginatedResponse<Program>>('/programs');
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = res?.data.filter((p) => {
    const matchFaculty = filter === 'All' || p.faculty === filter;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchFaculty && matchSearch;
  }) ?? [];

  return (
    <main className="programs-page">
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <span className="section-label" style={{ color: 'var(--accent-light)' }}>Academics</span>
          <h1 className="page-hero-title">Explore Our Programs</h1>
          <p>120+ undergraduate and postgraduate programs across 6 world-class faculties.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="programs-toolbar">
            <div className="search-box">
              <span>🔍</span>
              <input
                type="text"
                placeholder="Search programs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="filter-tabs">
              {faculties.map((f) => (
                <button
                  key={f}
                  className={`filter-tab ${filter === f ? 'active' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f === 'All' ? f : f.replace('Faculty of ', '')}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="spinner" />
          ) : filtered.length === 0 ? (
            <div className="empty-state">
              <span>🔍</span>
              <p>No programs found. Try a different search or filter.</p>
            </div>
          ) : (
            <div className="grid-3">
              {filtered.map((p) => (
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
                    <Link to="/admissions" className="btn btn-dark" style={{ marginTop: '8px', fontSize: '13px', padding: '10px 20px' }}>
                      Apply Now →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
