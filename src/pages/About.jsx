function About({ onNavigate }) {
  return (
    <div className="about-container">
      
      {/* 1. Hero Section (Bold Text Minimal) */}
      <div className="about-hero">
        <div className="about-hero-copy">
          <p className="about-tag">Who We Are</p>
          <h1>We are a team of dedicated medical professionals committed to your long-term health.</h1>
          <p className="about-hero-lead">
            Blending advanced diagnostics with thoughtful care, our clinic helps every patient feel confident, supported, and ready for what's next.
          </p>
        </div>
      </div>

      {/* 2. Asymmetric Grid: Our Story */}
      <div className="about-grid">
        <div className="about-title-side">
          <h2>Our Story & Philosophy</h2>
        </div>
        <div className="about-text-side">
          <p>
            Founded in 2020, BeirutClinic was built on the principle that exceptional healthcare 
            should be accessible, stress-free, and tailored to every individual. We don't just treat 
            symptoms; we focus on overall wellness and preventative care.
          </p>
          <p>
            By combining state-of-the-art medical technology with compassionate bedside manners, 
            our clinic provides an environment where patients feel heard, safe, and expertly cared for.
          </p>
        </div>
      </div> 

      {/* 4. Asymmetric Grid: Core Specialties */}
      <div className="about-grid" style={{ marginTop: '32px' }}>
        <div className="about-title-side">
          <h2>Our Core Specialties</h2>
          <p style={{ color: '#666', marginTop: '10px', fontSize: '16px' }}>
            Advanced healthcare solutions across multiple fields of medicine.
          </p>
        </div>
        <div className="about-text-side">
          <div className="specialty-grid">
            <div className="specialty-row">
              <h3>医 General Medicine</h3>
              <p>Comprehensive routine checkups, chronic disease management, family medicine, and personalized wellness advice.</p>
            </div>
            <div className="specialty-row">
              <h3>🦷 Dental Care</h3>
              <p>Advanced cosmetic dentistry, professional cleaning, root canals, oral surgery, and teeth alignment procedures.</p>
            </div>
            <div className="specialty-row">
              <h3>❤️ Cardiology</h3>
              <p>High-end cardiovascular diagnostics, blood pressure monitoring, heart screenings, and specialist consultations.</p>
            </div>
            <div className="specialty-row">
              <h3>🌿 Preventive Care</h3>
              <p>Health screenings, wellness plans, immunizations, and proactive support that keeps you feeling your best.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;