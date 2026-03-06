import diffuser from "../assets/images/BECK.jpeg";

export default function About() {
  return (
    <section className="relative bg-[#F5EEE4] py-16 px-6 overflow-hidden">

      {/* Top fade */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-16 
      bg-gradient-to-b from-[#F5EEE4] via-[#F5EEE4]/70 to-transparent" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        {/* Image */}
        <div className="w-full h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={diffuser}
            alt="ULÓMA Diffuser"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-4xl md:text-5xl text-[#2B1408] font-semibold mb-7">
            About ULÓMA
          </h2>

          <p className="text-[#2B1408]/80 leading-relaxed mb-4">
            <span className="font-semibold">ULÓMA</span> means 
            <span className="italic"> “good home”</span> in Igbo.
          </p>

          <p className="text-[#2B1408]/80 leading-relaxed mb-4">
            A space that feels safe. Intentional. Beautiful in a quiet way.
          </p>

          <p className="text-[#2B1408]/80 leading-relaxed mb-4">
            <span className="font-semibold">ULÓMA by Becks Scents</span> was created with one belief —
            that the spaces we live and work in shape how we feel.
          </p>

          <p className="text-[#2B1408]/80 leading-relaxed mb-5">
            Our diffusers are thoughtfully curated to bring warmth, balance, and calm into everyday environments.
          </p>

          <p className="text-[#2B1408]/70 italic leading-relaxed">
            For homes. For offices. For spaces that deserve to feel as good as they look.
          </p>
        </div>

      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 
      bg-gradient-to-b from-transparent to-[#F5EEE4]" />

    </section>
  );
}