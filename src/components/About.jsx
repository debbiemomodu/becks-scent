import diffuser from "../assets/images/BECK.jpeg";

export default function About() {
  return (
    <section className="relative bg-[#F5EEE4] py-24 px-6 overflow-hidden">

      {/* ⭐ Top fade */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-24 
      bg-gradient-to-b from-[#F5EEE4] via-[#F5EEE4]/70 to-transparent" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">

        {/* Image */}
        <div className="w-full h-[420px] rounded-xl overflow-hidden shadow-inner">
          <img 
            src={diffuser} 
            alt="BECKS Scent Diffuser" 
            className="w-full h-full object-cover" loading="lazy" 
          />
        </div>

        {/* Text content */}
        <div>
          <h2 className="text-4xl md:text-5xl text-[#2B1408] font-semibold mb-6">
            About ULÓMA
          </h2>

          <p className="text-[#2B1408]/80 leading-relaxed mb-4 text-lg">
            ULÓMA by <span className="font-semibold">BECKS Scent</span> was born from the belief that the spaces we live and work in should evoke calm, intention, and comfort.
          </p>

          <p className="text-[#2B1408]/80 leading-relaxed mb-4 text-lg">
            Our thoughtfully curated diffusers and fragrances transform everyday environments into experiences of warmth, balance, and serenity.
          </p>

          <p className="text-[#2B1408]/70 mt-4 italic">
            Perfect for homes, offices, bedrooms, and personal spaces.
          </p>
        </div>

      </div>

      {/* ⭐ Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 
      bg-gradient-to-b from-transparent to-[#F5EEE4]" />

    </section>
  );
}