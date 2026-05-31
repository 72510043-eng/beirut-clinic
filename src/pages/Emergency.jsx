export default function EmergencyPage() {
  const cards = [
    {
      city: 'Beirut',
      subtitle: 'Beirut · Main Hub',
      number: '140',
      color: 'btn-red', 
      pin: '📍',
    },
    {
      city: 'Tyre',
      subtitle: 'Tyre · near to tyrebeach',
      number: '+961 81945734',
      color: 'btn-blue',
      pin: '📍',
      active: true,
    },
    {
      city: 'Saida',
      subtitle: 'saida · near to saidafort',
      number: '112',
      color: 'btn-red',
      pin: '🏥',
    },
  ];

  return (
    <div className="emergency-page">
      {/* Header Section */}
      <div className="header-container">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search by area..."
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="tags-container">
          {['#Ambulance', '#Police', '#Hospitals', '#Bro mors'].map((tag) => (
            <span key={tag} className="tag-item">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="main-title">Emergency numbers</h1>
        <p className="subtitle">Fast Help, Direct Call</p>
      </div>

      {/* Map & Content Section */}
      <div className="map-section">
        {/* Background Map Image */}
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
          alt="map"
          className="map-img"
        />

        {/* Map Pins */}
        <div className="map-pin pin-1">📍</div>
      
        <div className="map-pin pin-3">📍</div>

        {/* Cards Row (نازلة لتحت عند الخط الأحمر بالـ CSS) */}
        <div className="cards-row">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card-item ${card.active ? 'active' : ''}`}
            >
              <div className="card-body">
                <div className="card-header-flex">
                  <div className="card-pin-icon">{card.pin}</div>

                  <div>
                    <h2 className="card-city-title">{card.city}</h2>
                    <p className="card-sub-info">{card.subtitle}</p>

                    <div className="card-icons-row">
                      <span>🚓</span>
                      <span>🚑</span>
                      <span>🏥</span>
                      <span>📞</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* زر الاتصال النظيف (كلاس موحد + اللون الديناميكي) */}
              <div className={`card-btn ${card.color}`}>
                <span>📞</span>
                {card.number}
              </div>
            </div>
          ))}
        </div>

        {/* Tips Box (مكانه فوق على اليمين بالـ Desktop) */}
        <div className="tips-box">
          <h3 className="tips-title">Tips for Callers</h3>

          <div className="tips-content">
            <div>
              <h4 className="tip-heading">Speak Clearly</h4>
              <p className="tip-text">Speak clearly is your small.</p>
            </div>

            <div>
              <h4 className="tip-heading">Provide Address First</h4>
              <p className="tip-text">Coree address on the eas.</p>
            </div>

            <div>
              <h4 className="tip-heading">Provide Contact</h4>
              <p className="tip-text">Give atniam your emeniss.</p>
            </div>
          </div>
        </div>

        {/* Floating SOS Button */}
        <button className="sos-button">
          <span>📞</span>
          <span style={{ fontWeight: 'bold' }}>SOS</span>
        </button>
      </div>
    </div>
  );
}


