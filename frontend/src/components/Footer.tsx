import { Link } from 'react-router-dom';
import logo from '../assets/logo/ugcsl.jpeg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="UGCSL Logo" className="footer-logo-img" />
              <div>
                <div className="footer-logo-name">UGCSL</div>
                <div className="footer-logo-sub">United Global Campus of Sri Lanka</div>
              </div>
            </div>
            <p className="footer-desc">
              Empowering minds, shaping futures. A world-class institution committed to academic excellence, innovation, and global citizenship.
            </p>
            <div className="footer-socials">
              {['𝕏', 'in', 'f', '▶'].map((s, i) => (
                <a key={i} href="#" className="social-btn" aria-label="Social">{s}</a>
              ))}
            </div>
          </div>

          <div className="footer-links-group">
            <h4>Academics</h4>
            <ul>
              <li><Link to="/programs">All Programs</Link></li>
              <li><Link to="/programs">Undergraduate</Link></li>
              <li><Link to="/programs">Postgraduate</Link></li>
              <li><Link to="/research">Research</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Campus Life</h4>
            <ul>
              <li><a href="#">Student Services</a></li>
              <li><a href="#">Library</a></li>
              <li><a href="#">Sports & Recreation</a></li>
              <li><a href="#">Accommodation</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Contact</h4>
            <ul>
              <li><a href="#">📍 Colombo, Sri Lanka</a></li>
              <li><a href="tel:+94112345678">📞 +94 11 234 5678</a></li>
              <li><a href="mailto:info@ugcsl.edu.lk">✉️ info@ugcsl.edu.lk</a></li>
              <li><Link to="/admissions">🎓 Apply Now</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} United Global Campus of Sri Lanka. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
