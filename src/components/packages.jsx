// src/components/Packages.jsx
import ulomaImage from "../assets/images/Haven.png";
import officeImage from "../assets/images/ambience.png";
import giftImage from "../assets/images/gift.png";
import singleImage from "../assets/images/single.png";


const packages = [
      {
    name: "Office Ambience Set (5-piece)",
    headline: "A better workday starts with the air you breathe.",
    description:
      "The Office Ambience Set is designed to support focus, clarity, and calm throughout the workday. Clean, fresh, and grounding scents that enhance productivity without overwhelming the space.",
    perfectFor: "Offices, studios, workspaces, meeting rooms.",
    contents: ["5 curated diffuser scents", "Story card", "Premium packaging"],
    price: "₦58,000",
    image: officeImage,
    reverse: false,
  },
  {
    name: "Uloma Haven Set (3-piece)",
    headline: "Your home, reimagined as a sanctuary.",
    description:
      "The Uloma Haven Set is curated to create a sense of calm, warmth, and balance within your living space. Each scent works together to help you slow down, unwind, and feel at ease.",
    perfectFor: "Homes, bedrooms, living rooms, and personal spaces.",
    contents: ["3 handpicked diffuser scents", "Story card", "Elegant packaging"],
    price: "₦35,000",
    image: ulomaImage,
    reverse: true,
  },

  {
    name: "Thoughtful Gift Set (3-piece)",
    headline: "Because some feelings deserve more than words.",
    description:
      "The Thoughtful Gift Set is a carefully curated trio created for gifting. Whether it’s gratitude, love, celebration, or comfort, this set allows scent to speak gently and meaningfully.",
    perfectFor:
      "Birthdays, housewarmings, celebrations, and thoughtful gestures.",
    contents: ["3 selected diffuser scents", "Story card", "Gift-ready packaging"],
    price: "₦35,000",
    image: giftImage,
    reverse: false,
  },
  {
    name: "Single Diffuser",
    headline: "A scent for every mood and space.",
    description:
      "A long-lasting reed diffuser crafted to gently scent your space and elevate the atmosphere. Designed to blend seamlessly into your home or workspace.",
    perfectFor: "Any personal space or office.",
    contents: ["120ml diffuser bottle", "Reed sticks (packed separately)"],
    price: "₦12,000",
    image: singleImage,
    reverse: true,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 px-6 bg-[#F5EEE4]">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-5xl md:text-6xl text-[#2B1408] font-light tracking-wide">
          Shop by Experience
        </h2>
        <p className="text-[#2B1408]/80 mt-4">
          Discover BECKS Scent packages curated for calm, focus, gifting, and personal enjoyment.
        </p>
      </div>

      
         {packages.map((pkg, index) => (
  <div
    key={pkg.name}
    className={`flex flex-col md:flex-row items-center gap-12 py-16 ${
      pkg.reverse ? "md:flex-row-reverse bg-[#E3CFAD]/10" : "bg-[#F5EEE4]"
    } rounded-xl ${index !== packages.length - 1 ? "mb-20" : ""}`}
  >
          {/* Image */}
          <div className="md:w-1/2 h-96 rounded-xl overflow-hidden shadow-lg">
             <img
  src={pkg.image}
  alt={pkg.name}
  className="w-full h-full object-cover transition duration-700 hover:scale-105" loading="lazy" 
/>
          </div>

          {/* Text */}
          <div className="md:w-1/2">
            <h4 className="text-2xl md:text-3xl font-medium text-[#2B1408] mb-4">
              {pkg.name}
            </h4>

            <p className="text-[#2B1408]/70 italic text-lg mb-4">
              {pkg.headline}
            </p>

            <p className="text-[#2B1408]/80 leading-relaxed mb-4">
              {pkg.description}
            </p>

            <p className="text-[#2B1408]/70 mb-4 font-medium">
              Perfect for: {pkg.perfectFor}
            </p>

            <ul className="list-disc list-inside text-[#2B1408]/70 mb-6">
              {pkg.contents.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <p className="text-xl font-semibold text-[#2B1408] mb-6">
              {pkg.price}
            </p>

            <a
              href="https://wa.me/2348012345678"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2B1408] text-[#E3CFAD] py-3 px-8 rounded-full shadow-sm hover:shadow-md transition font-medium inline-block"
            >
              Order Now
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}