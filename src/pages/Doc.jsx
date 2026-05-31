import doc1 from '../access/doc1.jpg';
import doc2 from '../access/doc2.jpg';
import doc3 from '../access/doc3.jpg';
import doc4 from '../access/doc4.jpg';

function Doc() {
  return (
    <div className="doctors-page">
      
      {/* الـ Header الجديد */}
      <div className="header">
        <p className="subtitle">MEET OUR SPECIALISTS</p>
        <h1>Our Doctors</h1>
        <p className="desc">Our experienced team of doctors is dedicated to providing the best healthcare for you and your family.</p>
      </div>

      <div className="doctors-grid">
        
        
        <div className="doctor-card">
          <div className="image-container">
            <img src={doc1} alt="Dr. Ahmad Khalil" className="doctor-img" />
          </div>
          <h3>Dr. Ahmad Khalil</h3>
          <p className="specialty">General Medicine</p>
          <p className="bio">Specializes in preventive care, chronic disease management and overall wellness.</p>
          
          <div className="schedule-box">🕒 Mon - Fri | 9:00 AM - 5:00 PM</div>
        </div>

       
        <div className="doctor-card">
          <div className="image-container">
            <img src={doc3} alt="Dr. Lina Haddad" className="doctor-img" />
          </div>
          <h3>Dr. Lina Haddad</h3>
          <p className="specialty">Dentistry</p>
          <p className="bio">Expert in cosmetic dentistry, root canals, and advanced dental care.</p>
          <div className="schedule-box">🕒 Tue - Sat | 10:00 AM - 6:00 PM</div>
        </div>

     
        <div className="doctor-card">
          <div className="image-container">
            <img src={doc2} alt="Dr. Omar Nasser" className="doctor-img" />
          </div>
          <h3>Dr. Omar Nasser</h3>
          <p className="specialty">Cardiology</p>
          <p className="bio">Dedicated to diagnosing and treating heart conditions and improving heart health.</p>
          <div className="schedule-box">🕒 Mon - Fri | 8:00 AM - 4:00 PM</div>
        </div>

       
        <div className="doctor-card">
          <div className="image-container">
            <img src={doc4} alt="Dr. Sara Younis" className="doctor-img" />
          </div>
          <h3>Dr. Sara Younis</h3>
          <p className="specialty">Pediatrics</p>
          <p className="bio">Providing compassionate care for infants, children and adolescents.</p>
          <div className="schedule-box">🕒 Sun - Thu | 9:00 AM - 3:00 PM</div>
        </div>

      </div>
    </div>
  );
}

export default Doc;