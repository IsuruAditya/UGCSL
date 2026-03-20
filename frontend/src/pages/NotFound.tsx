import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
      <div style={{ textAlign: 'center', maxWidth: '480px' }}>
        <div style={{ fontSize: '5rem', marginBottom: '16px' }}>🎓</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '5rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>404</h1>
        <h2 style={{ fontSize: '1.4rem', color: 'var(--text)', margin: '16px 0 12px' }}>Page Not Found</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.7 }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-dark">Go to Homepage</Link>
          <Link to="/contact" className="btn btn-outline" style={{ border: '2px solid var(--border)', color: 'var(--text)' }}>Contact Us</Link>
        </div>
      </div>
    </main>
  );
}
