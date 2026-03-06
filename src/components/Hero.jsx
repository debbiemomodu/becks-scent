import logo from '../assets/images/logo.png';
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      
      {/* Luxury layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5EEE4] via-[#E3CFAD] to-[#E8D7BB]" />
      
      {/* Soft glow effect */}
      <div className="absolute w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl bottom-[-120px] right-[-120px]" />

      {/* Content */}
      <div className="relative text-center max-w-2xl">
        
        {/* Brand Name acts as logo */}
        {/* <h1 className="text-6xl md:text-7xl font-semibold tracking-wide text-[#2B1408] mb-6">
          BECKS SCENT
        </h1> */}

        <div className="flex flex-col items-center mb-6">
  <img src={logo} alt="BECKS Scent Logo" className="w-48 h-auto mb-4" loading="lazy"  />
  <p className="text-lg md:text-xl text-[#2B1408]/80 leading-relaxed mb-10 text-center">
      Creating calm one space at a time. <br />
    Designed for calm homes, refined spaces, and luxury living.
  </p>
</div>

        {/* Tagline */}
        

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
           <a
  href="#packages"
  className="bg-[#2B1408] text-[#E3CFAD] px-10 py-3 rounded-md shadow-md hover:shadow-lg hover:opacity-90 transition inline-block"
>
  Shop Packages
</a>
<a
  href="https://wa.me/2348012345678"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-[#2B1408] text-[#2B1408] px-10 py-3 rounded-md hover:bg-[#2B1408] hover:text-[#E3CFAD] transition inline-block"
>
  Order Now
</a>
        </div>
      </div>
      {/* Bottom gradient divider */}
<div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 
bg-gradient-to-b from-transparent to-[#F5EEE4]" />

    </section>
  )
}