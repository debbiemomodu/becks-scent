// src/components/Footer.jsx

import logo from '../assets/images/logo.png';
export default function Footer() {
  return (
    <footer id="footer" className="bg-[#F5EEE4] text-[#2B1408] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Branding */}
         <div className="text-center md:text-left">
  <img
    src={logo}
    alt="Becks Scent Logo" loading="lazy" 
    className="h-12 mb-2 mx-auto md:mx-0"
  />
  <p className="text-[#2B1408]/70">
    Elevate your space with elegance and fragrance.
  </p>
</div>

        {/* Contact Info */}
           <div className="text-center md:text-left">
  <h4 className="font-medium mb-3 tracking-wide">Contact Us</h4>

  {/* Email */}
  <p className="flex items-center justify-center md:justify-start gap-3 group">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-[#C6A96B] transition group-hover:scale-110"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M21.75 7.5v9a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 16.5v-9m19.5 0L12 13.5 2.25 7.5m19.5 0A2.25 2.25 0 0019.5 5.25H4.5A2.25 2.25 0 002.25 7.5" />
    </svg>

    <a
      href="mailto:becksscent@example.com"
      className="transition hover:text-[#C6A96B] hover:tracking-wide"
    >
      becksscent@example.com
    </a>
  </p>

  {/* WhatsApp */}
  <p className="flex items-center justify-center md:justify-start gap-3 mt-3 group">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-[#C6A96B] transition group-hover:scale-110"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75 1.686 0 3.273-.429 4.656-1.185l4.344 1.185-1.185-4.344A9.708 9.708 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12z" />
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M8.25 10.5c.75 1.5 2.25 3 3.75 3.75m1.5-1.5l-1.125 1.125a.75.75 0 01-.81.165c-1.755-.702-3.168-2.115-3.87-3.87a.75.75 0 01.165-.81L9 8.25" />
    </svg>

    <a
      href="https://wa.me/2341234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="transition hover:text-[#C6A96B] hover:tracking-wide"
    >
      +234 123 456 7890
    </a>
  </p>
</div>
        {/* Socials / Links */}
        <div className="text-center md:text-left">
          <h4 className="font-medium mb-2">Follow Us</h4>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="https://instagram.com/becksscent" target="_blank" rel="noopener noreferrer" className="hover:text-[#E3CFAD] transition">
              Instagram
            </a>
            <a href="#" className="hover:text-[#E3CFAD] transition">Facebook</a>
            <a href="#" className="hover:text-[#E3CFAD] transition">Twitter</a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-[#2B1408]/60">
        &copy; {new Date().getFullYear()} BECKS Scent. All rights reserved.
      </div>
    </footer>
  );
}