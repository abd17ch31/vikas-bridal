import { useState, useEffect } from 'react';
import { businessData } from '../data/businessData';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 75);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position on mount
    setIsScrolled(window.scrollY > 75);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out ${
        isScrolled
          ? 'bg-[#F5EEE6]/95 backdrop-blur-md border-b border-[#E9D8B8]/60 shadow-[0_4px_20px_rgba(58,16,23,0.06)] py-3 sm:py-3.5'
          : 'bg-transparent border-b border-white/10 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Wordmark Logo */}
        <a
          href="#home"
          className={`font-serif text-xl sm:text-2xl font-bold tracking-wider transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] rounded px-1 ${
            isScrolled ? 'text-[#541820]' : 'text-[#F5EEE6]'
          }`}
          aria-label={`${businessData.name} - Return to top`}
        >
          {businessData.name}
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-7">
          <ul className="flex items-center space-x-7 text-xs uppercase tracking-[0.16em] font-medium font-sans">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`transition-colors duration-300 relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] rounded px-1 ${
                    isScrolled
                      ? 'text-[#382326] hover:text-[#541820]'
                      : 'text-[#F5EEE6]/90 hover:text-[#E9D8B8]'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions: WhatsApp Enquiry + Book Appointment CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* WhatsApp Direct Action */}
          <a
            href={businessData.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enquire via WhatsApp with prefilled message"
            className={`p-2 rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] ${
              isScrolled
                ? 'text-[#541820] hover:bg-[#E9D8B8]/30'
                : 'text-[#E9D8B8] hover:bg-white/10 hover:text-white'
            }`}
            title="Chat on WhatsApp"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </a>

          {/* Book Appointment CTA */}
          <a
            href="#contact"
            className={`text-xs uppercase tracking-[0.16em] font-semibold py-2.5 px-5 rounded transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] ${
              isScrolled
                ? 'border border-[#541820] text-[#541820] hover:bg-[#541820] hover:text-[#F5EEE6]'
                : 'border border-[#E9D8B8]/80 text-[#F5EEE6] bg-[#541820]/40 backdrop-blur-xs hover:bg-[#E9D8B8] hover:text-[#3A1017]'
            }`}
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu & WhatsApp Action Buttons */}
        <div className="flex items-center space-x-2 lg:hidden">
          <a
            href={businessData.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enquire via WhatsApp"
            className={`p-2 rounded-full transition-colors ${
              isScrolled ? 'text-[#541820]' : 'text-[#E9D8B8]'
            }`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={`p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] transition-colors ${
              isScrolled ? 'text-[#541820]' : 'text-[#F5EEE6]'
            }`}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle main menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-full bg-[#3A1017] border-b border-[#E9D8B8]/30 shadow-2xl px-6 py-6 transition-all animate-in fade-in slide-in-from-top-2"
          role="dialog"
          aria-label="Mobile Navigation Menu"
        >
          <nav>
            <ul className="flex flex-col space-y-4 text-sm uppercase tracking-[0.18em] font-medium text-[#F5EEE6]">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 hover:text-[#E9D8B8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] rounded px-1"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-xs uppercase tracking-[0.16em] font-semibold py-3 px-4 rounded bg-[#C5A15A] text-[#3A1017] hover:bg-[#E9D8B8] transition-colors"
              >
                Book Appointment
              </a>
              <a
                href={businessData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-xs uppercase tracking-[0.16em] font-semibold py-3 px-4 rounded border border-[#E9D8B8]/60 text-[#F5EEE6] hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
