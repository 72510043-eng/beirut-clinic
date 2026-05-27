export default function EmergencyPage() {
  const cards = [
    {
      city: 'Beirut',
      subtitle: 'Beirut · Main Hub',
      number: '140',
      color: 'bg-red-500',
      pin: '📍',
    },
    {
      city: 'Tyre',
      subtitle: 'Tyre · near to tyrebeach',
      number: '+961 81945734',
      color: 'bg-blue-500',
      pin: '📍',
      active: true,
    },
    {
      city: 'Saida',
      subtitle: 'saida · near to saidafort',
      number: '112',
      color: 'bg-red-500',
      pin: '🏥',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f7f7] font-sans overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center pt-6 px-4">
        <div className="w-full max-w-xl relative">
          <input
            type="text"
            placeholder="Search by area..."
            className="w-full rounded-full border border-gray-200 bg-white px-5 py-3 shadow-sm outline-none"
          />
          <span className="absolute right-5 top-3.5 text-gray-400">🔍</span>
        </div>

        <div className="flex gap-2 mt-4 flex-wrap justify-center">
          {['#Ambulance', '#Police', '#Hospitals', '#Bro mors'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white shadow text-sm text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-5xl font-light text-gray-800 mt-8">
          Emergency numbers
        </h1>
        <p className="text-gray-500 mt-2">Fast Help, Direct Call</p>
      </div>

      {/* Map Section */}
      <div className="relative mt-10 h-[420px] bg-[#cfe8f4] overflow-hidden">
        {/* Background Map */}
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
          alt="map"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        {/* Map Pins */}
        <div className="absolute top-10 left-[43%] text-5xl">📍</div>
        <div className="absolute bottom-14 left-[36%] text-4xl">📍</div>
        <div className="absolute top-24 right-[30%] text-4xl">📍</div>

        {/* Cards */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 flex gap-5 flex-wrap justify-center px-6 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`w-[250px] rounded-3xl bg-white/90 backdrop-blur-md shadow-2xl overflow-hidden border border-white ${
                card.active ? 'scale-105' : ''
              }`}
            >
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <div className="text-xl">{card.pin}</div>

                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {card.city}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {card.subtitle}
                    </p>

                    <div className="flex gap-2 mt-3 text-sm text-gray-500">
                      <span>🚓</span>
                      <span>🚑</span>
                      <span>🏥</span>
                      <span>📞</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`${card.color} text-white py-3 text-center font-medium text-lg flex items-center justify-center gap-2`}
              >
                <span>📞</span>
                {card.number}
              </div>
            </div>
          ))}
        </div>

        {/* Tips Box */}
        <div className="tips-box">
          <h3 className="font-bold text-gray-800 text-lg mb-4">
            Tips for Callers
          </h3>

          <div className="space-y-4 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-800">Speak Clearly</h4>
              <p>Speak clearly is your small.</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">
                Provide Address First
              </h4>
              <p>Coree address on the eas.</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">Provide Contact</h4>
              <p>Give atniam your emeniss.</p>
            </div>
          </div>
        </div>

        {/* Floating SOS Button */}
        <button className="absolute bottom-6 right-6 w-20 h-20 rounded-3xl bg-red-500 shadow-2xl text-white flex flex-col items-center justify-center hover:scale-105 transition">
          <span className="text-xl">📞</span>
          <span className="font-bold">SOS</span>
        </button>
      </div>

      {/* Footer Section */}
     
    </div>
  );
}


