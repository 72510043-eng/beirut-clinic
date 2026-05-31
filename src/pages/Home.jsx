import pic from "../access/pic1.jpg"; // هيك بنطلع من pages لـ src

function Home({ isDarkMode, toggleDarkMode }) {
  return (
    <div className="home-page-container">
      <div className="hero-banner">
        
       
        {pic && <img src={pic} alt="clinic" className="hero-image" />}

        <div className="center-container">
          <h1 className="my-title">Welcome to our clinic</h1>
        </div>

     
        <div className="stats-container">
          <div className="stat-card">
            <h2 className="stat-number">10+</h2>
            <p className="stat-label">Years of Experience</p>
          </div>
          
          <div className="stat-card">
            <h2 className="stat-number">50k+</h2>
            <p className="stat-label">Happy Patients</p>
          </div>
          
          <div className="stat-card">
            <h2 className="stat-number">20+</h2>
            <p className="stat-label">Medical Specialists</p>
          </div>
        </div>
        {/* ---------------------------------- */}

      </div>
    </div>
  );
}

export default Home;