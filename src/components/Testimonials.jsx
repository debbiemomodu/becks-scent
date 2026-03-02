const testimonials = [
  {
    name: "Amina K.",
    review: "The Uloma Haven Set transformed my living room! The scents are soothing and luxurious.",
     
  },
  {
    name: "Chinedu O.",
    review: "I gifted the Thoughtful Gift Set and my friend loved it! Beautifully packaged ",
    
  },
  {
    name: "Funke T.",
    review: "Office Ambience Set keeps my workspace fresh and focused. Highly recommend!",
    
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-[#FFF8F0]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl text-[#2B1408] font-light">What Our Customers Say</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-[#F5EEE4] p-6 rounded-xl shadow-md md:w-1/3">
            {t.image && (
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
            )}
            <p className="text-[#2B1408]/80 italic mb-4">"{t.review}"</p>
            <h4 className="text-[#2B1408] font-medium">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}