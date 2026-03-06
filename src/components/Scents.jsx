const scents = [
  {
    category: "Fresh & Clean",
    items: [
      { name: "Clean Cotton / Fresh Linen", desc: "Airy, crisp, and comforting" },
      { name: "Lemon & Mint", desc: "Refreshing, uplifting, and mentally clearing" },
      { name: "Eucalyptus", desc: "Clean, cooling, and restorative" },
    ],
  },
  {
    category: "Warm & Cozy",
    items: [
      { name: "Vanilla", desc: "Soft, warm, and comforting" },
      { name: "Sandalwood", desc: "Grounding, rich, and calming" },
      { name: "Amber Pur", desc: "Deep warmth with quiet elegance" },
    ],
  },
  {
    category: "Floral & Soft",
    items: [
      { name: "Lavender", desc: "Gentle calm and relaxation" },
      { name: "Rose", desc: "Soft, romantic, and soothing" },
    ],
  },
  {
    category: "Fruity & Playful",
    items: [
      { name: "Pineapple", desc: "Bright, cheerful, and uplifting" },
      { name: "Black Currant", desc: "Sweet with a modern edge" },
    ],
  },
];

export default function ScentGuide() {
  return (
    <section id="Scents" className="relative bg-[#E3CFAD]/20 py-24 px-6 overflow-hidden">

      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-12 relative">
        <h2 className="text-4xl md:text-5xl text-[#2B1408] font-semibold">
           SCENT GUIDE
        </h2>
        <p className="text-[#2B1408]/80 mt-4">
          Explore our carefully curated diffuser scents and find your perfect atmosphere.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto relative">
        {scents.map((group) => (
          <div key={group.category} className="bg-[#F5EEE4] p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-[#2B1408] mb-4">{group.category}</h3>
            <ul className="text-[#2B1408]/80 space-y-2">
              {group.items.map((item) => (
                <li key={item.name}>
                  <span className="font-medium">{item.name}</span> — {item.desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom fade into Packages */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-28 
        bg-gradient-to-b from-transparent to-[#F5EEE4]" />

    </section>
  );
}