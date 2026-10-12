import { businessData } from '../data/businessData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E9D8B8]/30 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A15A] font-sans">
            Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#3A1017] mt-1">
            About Vikash Mehndi Art
          </h2>
        </div>

        <div className="p-8 sm:p-10 rounded-xl bg-[#F5EEE6]/50 border border-[#E9D8B8]/60 space-y-4 text-center sm:text-left">
          <p className="font-serif text-lg sm:text-xl text-[#3A1017] leading-relaxed italic">
            "Preserving centuries of Rajasthani henna traditions while curating contemporary, bespoke designs for the modern bride."
          </p>
          <p className="text-sm text-[#382326]/80 leading-relaxed font-sans">
            Based in Style-in Shop No. 390, Gali No. 1, Raja Park, Jaipur, Vikash Mehndi Art delivers intricate hand-drawn mehndi artistry across Rajasthan and destination weddings. Specialising in fine Marwadi jali, portrait work, intricate wrist cuffs, and graceful bridal themes.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-sans text-[#541820] font-medium">
            <span>📍 Raja Park, Jaipur</span>
            <span>·</span>
            <span>🌿 100% Organic Henna Stains</span>
            <span>·</span>
            <span>💍 Bridal & Destination Weddings</span>
          </div>
        </div>
      </div>
    </section>
  );
}
