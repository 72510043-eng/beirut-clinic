import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    alert("Thank you! Your message has been sent successfully. 🚀");

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-page">
      {/* القسم اليساري */}
      <div className="contact-info">
        <h1>Let's Connect</h1>
        
        {/* 🌟 Container jdid jowwato l-sentence wal info kermel l-border wal background */}
        <div className="contact-details-box">
          <p>We're here to help you. Reach out to us anytime.</p>
          <p>📍 Branches: Beirut Main, Tripoli City</p>
          <p>📧 Email: contact@Beirutclinic.com</p>
          <p>📞 Phone: +961 01 234 567</p>
        </div>
        
        <p className="social-label"><strong>Social:</strong></p>
        
        {/* 🌟 Container jdid lal-social media (kel wa7de class la-7al kermal l-alwan) */}
        <div className="social-links">
          <a href="https://facebook.com/your-page" target="_blank" rel="noopener noreferrer" className="social-item fb-btn">
            <span>📘</span> Facebook
          </a>
          <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer" className="social-item ig-btn">
            <span>📸</span> Instagram
          </a>
          <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" className="social-item tw-btn">
            <span>🐦</span> Twitter
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-item li-btn">
            <span>💼</span> LinkedIn
          </a>
        </div>
      </div>

      {/* القسم اليميني (الفورم) */}
      {/* 🌟 Zidna el name wal autoComplete attributes la-yeishto el inputs */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Send us your feedback</h3>
        
        <input 
          type="text" 
          name="name"
          autoComplete="name"
          placeholder="Full Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        
        <input 
          type="email" 
          name="email"
          autoComplete="email"
          placeholder="Email Address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        
        <textarea 
          name="message"
          placeholder="How can we improve?" 
          rows="4" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required
        ></textarea>
        
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;