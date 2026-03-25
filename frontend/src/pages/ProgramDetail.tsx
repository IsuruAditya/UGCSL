import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFetch } from '../hooks/useApi';
import type { Program } from '../types';
import './shared.css';
import './ProgramDetail.css';

export default function ProgramDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const isSi = i18n.language === 'si';
  const { data: p, loading, error } = useFetch<Program>(`/programs/${slug}`);

  if (loading) return <main><div className="spinner" style={{ marginTop: '160px' }} /></main>;
  if (error || !p) return (
    <main style={{ paddingTop: '160px', textAlign: 'center' }}>
      <p>{t('programDetail.notFound')}</p>
      <Link to="/programs" className="btn btn-dark" style={{ marginTop: '24px' }}>{t('programDetail.backToPrograms')}</Link>
    </main>
  );

  const title = isSi ? (p.title_si || p.title) : p.title;
  const description = isSi ? (p.description_si || p.description) : p.description;

  return (
    <main>
      <section className="page-hero pd-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <div className="pd-breadcrumb">
            <Link to="/programs">{t('programDetail.breadcrumbParent')}</Link>
            <span>›</span>
            <span>{title}</span>
          </div>
          <div className="pd-hero-icon">{p.icon}</div>
          <h1 className="page-hero-title">{title}</h1>
          <p>{description}</p>
          <div className="pd-hero-meta">
            <span className="pd-meta-pill">🎓 {p.degree}</span>
            <span className="pd-meta-pill">⏱ {p.duration}</span>
            <span className="pd-meta-pill">🏛 {p.faculty}</span>
            {p.intake && <span className="pd-meta-pill pd-meta-open">📅 {p.intake}</span>}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container pd-overview-grid">
          <div className="pd-overview">
            <h2 className="pd-section-title">{t('programDetail.overviewTitle')}</h2>
            <p className="pd-overview-text">{p.overview}</p>

            {p.modules && p.modules.length > 0 && (
              <div className="pd-block">
                <h3 className="pd-block-title">📚 {t('programDetail.modulesTitle')}</h3>
                <ul className="pd-list pd-list-modules">
                  {p.modules.map((m, i) => <li key={i}>{m}</li>)}
                </ul>
              </div>
            )}

            {p.outcomes && p.outcomes.length > 0 && (
              <div className="pd-block">
                <h3 className="pd-block-title">🎯 {t('programDetail.outcomesTitle')}</h3>
                <ul className="pd-list pd-list-check">
                  {p.outcomes.map((o, i) => (
                    <li key={i}><span className="check">✓</span>{o}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="pd-sidebar">
            <div className="pd-sidebar-card">
              <h3>{t('programDetail.sidebarTitle')}</h3>
              <ul className="pd-details-list">
                <li><span>{t('programDetail.qualification')}</span><strong>{p.degree}</strong></li>
                <li><span>{t('programDetail.duration')}</span><strong>{p.duration}</strong></li>
                <li><span>{t('programDetail.faculty')}</span><strong>{p.faculty}</strong></li>
                <li><span>{t('programDetail.mode')}</span><strong>{t('programDetail.modeValue')}</strong></li>
                {p.intake && <li><span>{t('programDetail.intake')}</span><strong>{p.intake}</strong></li>}
                {p.fees && <li><span>{t('programDetail.fees')}</span><strong>{p.fees}</strong></li>}
              </ul>
              <Link to="/admissions" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '24px' }}>
                {t('programDetail.applyNow')}
              </Link>
              <Link to="/contact" className="btn btn-dark" style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}>
                {t('programDetail.enquire')}
              </Link>
            </div>

            {p.requirements && p.requirements.length > 0 && (
              <div className="pd-sidebar-card">
                <h3>{t('programDetail.requirementsTitle')}</h3>
                <ul className="pd-list pd-list-check" style={{ marginTop: '12px' }}>
                  {p.requirements.map((r, i) => (
                    <li key={i}><span className="check">✓</span>{r}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      {p.careers && p.careers.length > 0 && (
        <section className="section bg-soft">
          <div className="container">
            <div className="section-header">
              <span className="section-label">{t('programDetail.careersLabel')}</span>
              <h2 className="section-title">{t('programDetail.careersTitle')}</h2>
            </div>
            <div className="pd-careers-grid">
              {p.careers.map((c, i) => (
                <div key={i} className="pd-career-card">
                  <span className="pd-career-icon">💼</span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <h2>{t('programDetail.ctaTitle')} {title}?</h2>
            <p>{t('programDetail.ctaDesc')}</p>
          </div>
          <div className="cta-actions">
            <Link to="/admissions" className="btn btn-primary">{t('programDetail.ctaApply')}</Link>
            <Link to="/programs" className="btn btn-outline">{t('programDetail.ctaBack')}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
