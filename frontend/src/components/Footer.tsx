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
              <li><Link to="/programs">Diploma Programs</Link></li>
              <li><Link to="/research">Research</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Online Learning</h4>
            <ul>
              <li><a href="#">Student Portal</a></li>
              <li><a href="#">Learning Resources</a></li>
              <li><a href="#">Academic Calendar</a></li>
              <li><a href="#">Student Support</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Contact</h4>
            <ul>
              <li><a href="#">📍 Sri Lanka</a></li>
              <li><a href="mailto:info@ugcsl.edu.lk">✉️ info@ugcsl.edu.lk</a></li>
              <li><Link to="/contact">💬 Send a Message</Link></li>
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
