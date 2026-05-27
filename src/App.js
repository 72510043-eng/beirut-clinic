import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Doc from './pages/Doc';
import Emergency from './pages/Emergency';

function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="custom-app-container">

      {/* Header */}
      <header className="custom-top-header">
        {/* 🌟 Zedna emoji l-epshtara 🏥 7add BeirutClinic */}
        <div className="custom-brand">🏥 BeirutClinic</div>
        
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`custom-nav ${menuOpen ? 'active' : ''}`}>
          {/* 🌟 Zedna 🏠 lal-Home */}
          <button className={`custom-nav-link ${page === 'home' ? 'active' : ''}`} onClick={() => { setPage('home'); setMenuOpen(false); }}>
            🏠 Home
          </button>
          
          {/* 🌟 Zedna ℹ️ lal-About */}
          <button className={`custom-nav-link ${page === 'about' ? 'active' : ''}`} onClick={() => { setPage('about'); setMenuOpen(false); }}>
            ℹ️ About
          </button>
          
          {/* 🌟 Zedna 🩺 lal-Doctors */}
          <button className={`custom-nav-link ${page === 'doc' ? 'active' : ''}`} onClick={() => { setPage('doc'); setMenuOpen(false); }}>
            🩺 Doctors
          </button>
          
          {/* 🌟 Zedna 📅 lal-Book Appointment */}
          <button className={`custom-nav-link custom-nav-booking ${page === 'booking' ? 'active' : ''}`} onClick={() => { setPage('booking'); setMenuOpen(false); }}>
            📅 Book Appointment
          </button>
          
          {/* 🌟 Zedna 📞 lal-Contact */}
          <button className={`custom-nav-link ${page === 'contact' ? 'active' : ''}`} onClick={() => { setPage('contact'); setMenuOpen(false); }}>
            📞 Contact
          </button>
          
          {/* 🌟 Zedna 🚨 lal-Emergency */}
          <button className={`custom-nav-link ${page === 'emergency' ? 'active' : ''}`} onClick={() => { setPage('emergency'); setMenuOpen(false); }}>
            🚨 Emergency
          </button>
        </nav>
      </header>

      {/* Main Container - Cleaned up to protect Home */}
      <div className="main-content-wrapper" style={{ minHeight: '100vh', boxSizing: 'border-box' }}>
        <main className="custom-page-body">
          {page === 'home' && <Home onNavigate={setPage} />}
          {page === 'about' && <About onNavigate={setPage} />}
          {page === 'doc' && <Doc onNavigate={setPage} />}
          {page === 'booking' && <Booking onNavigate={setPage} />}
          {page === 'contact' && <Contact onNavigate={setPage} />}
          {page === 'emergency' && <Emergency onNavigate={setPage} />}
        </main>
      </div>

      <footer className="site-footer">
        <p>© 2026 BeirutClinic. Trusted care for your family.</p>
      </footer>
    </div>
  );
}

export default App;
