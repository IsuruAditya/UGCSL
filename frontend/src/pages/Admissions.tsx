import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FaqItem from '../components/FaqItem';
import './shared.css';
import './Admissions.css';

const intakes = [
  { semester: 'Semester 1 – 2025', deadline: 'August 31, 2025', statusKey: 'closed' },
  { semester: 'Semester 2 – 2025', deadline: 'December 31, 2025', statusKey: 'closed' },
  { semester: 'Semester 1 – 2026', deadline: 'March 31, 2026', statusKey: 'open' },
  { semester: 'Semester 2 – 2026', deadline: 'August 31, 2026', statusKey: 'upcoming' },
];

export default function Admissions() {
  const { t } = useTranslation();
  const steps = t('admissions.steps', { returnObjects: true }) as { title: string; desc: string }[];
  const diplomaReqs = t('admissions.diplomaRequirements', { returnObjects: true }) as string[];
  const degreeReqs = t('admissions.degreeRequirements', { returnObjects: true }) as string[];
  const feesIncludes = t('admissions.feesIncludes', { returnObjects: true }) as string[];
  const scholarshipIncludes = t('admissions.scholarshipIncludes', { returnObjects: true }) as string[];
  const faqs = t('admissions.faqs', { returnObjects: true }) as { q: string; a: string }[];

  const requirements = [
    { level: t('admissions.reqLevelDiploma'), icon: '🎓', items: diplomaReqs },
    { level: t('admissions.reqLevelDegree'), icon: '📚', items: degreeReqs },
  ];

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <span className="section-label" style={{ color: 'var(--accent-light)' }}>{t('admissions.label')}</span>
          <h1 className="page-hero-title">{t('admissions.heroTitle1')}<br />{t('admissions.heroTitle2')}</h1>
          <p>{t('admissions.heroDesc')}</p>
          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">{t('admissions.applyOnline')}</Link>
            <a href="#requirements" className="btn btn-outline">{t('admissions.viewRequirements')}</a>
          </div>
        </div>
      </section>

      {/* Intakes */}
      <section className="section-sm bg-soft">
        <div className="container">
          <div className="intakes-grid">
            {intakes.map((i) => (
              <div key={i.semester} className={`intake-card ${i.statusKey}`}>
                <div className="intake-status">{t(`admissions.status.${i.statusKey}`)}</div>
                <h3>{i.semester}</h3>
                <p>{t('admissions.deadline')} <strong>{i.deadline}</strong></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t('admissions.processLabel')}</span>
            <h2 className="section-title">{t('admissions.howToApply')}</h2>
            <p className="section-subtitle">{t('admissions.howToApplySubtitle')}</p>
          </div>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <div key={i} className="step-card">
                <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
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
            <span className="section-label">{t('admissions.requirementsLabel')}</span>
            <h2 className="section-title">{t('admissions.requirementsTitle')}</h2>
          </div>
          <div className="grid-2">
            {requirements.map((r) => (
              <div key={r.level} className="req-card card">
                <div className="req-header">
                  <span className="req-icon">{r.icon}</span>
                  <h3>{r.level}</h3>
                </div>
                <ul className="req-list">
                  {r.items.map((item, i) => (
                    <li key={i}><span className="check">✓</span>{item}</li>
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
          <div className="section-header">
            <span className="section-label">{t('admissions.feesLabel')}</span>
            <h2 className="section-title">{t('admissions.feesTitle')}</h2>
            <p className="section-subtitle">{t('admissions.feesSubtitle')}</p>
          </div>
          <div className="fees-grid">
            <div className="fee-card card">
              <div className="fee-icon">🎓</div>
              <h3>{t('admissions.diplomaCard')}</h3>
              <div className="fee-amount">LKR 45,000 <span>{t('admissions.feesPerSemester')}</span></div>
              <p>{t('admissions.feesMeta')}</p>
              <ul className="fee-includes">
                {feesIncludes.map((item, i) => <li key={i}>✓ {item}</li>)}
              </ul>
              <Link to="/contact" className="btn btn-dark" style={{ marginTop: '20px', width: '100%', justifyContent: 'center' }}>{t('admissions.enquireFees')}</Link>
            </div>
            <div className="fee-card fee-card-highlight card">
              <div className="fee-icon">🏆</div>
              <h3>{t('admissions.scholarshipCard')}</h3>
              <div className="fee-amount" style={{ color: 'var(--accent)' }}>{t('admissions.scholarshipAmount')} <span>{t('admissions.scholarshipAmountSub')}</span></div>
              <p>{t('admissions.scholarshipMeta')}</p>
              <ul className="fee-includes">
                {scholarshipIncludes.map((item, i) => <li key={i}>✓ {item}</li>)}
              </ul>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '20px', width: '100%', justifyContent: 'center' }}>{t('admissions.applyScholarship')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-soft">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t('admissions.faqLabel')}</span>
            <h2 className="section-title">{t('admissions.faqTitle')}</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="section">
        <div className="container">
          <div className="fees-banner">
            <div>
              <h2>{t('admissions.scholarshipsTitle')}</h2>
              <p>{t('admissions.scholarshipsDesc')}</p>
            </div>
            <Link to="/contact" className="btn btn-primary">{t('admissions.enquireScholarships')}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
