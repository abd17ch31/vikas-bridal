import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import CelebrationCategories from './sections/CelebrationCategories';
import BridalPackages from './sections/BridalPackages';
import SacredMehndiJourney from './sections/SacredMehndiJourney';
import RecentCreations from './sections/RecentCreations';
import SignatureBridalStyles from './sections/SignatureBridalStyles';
import VikashPromise from './sections/VikashPromise';
import FromConeToCelebration from './sections/FromConeToCelebration';
import WordsFromOurBrides from './sections/WordsFromOurBrides';
import ServicesSection from './sections/ServicesSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';

import FinalCtaSection from './sections/FinalCtaSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#382326] font-sans antialiased selection:bg-[#E9D8B8] selection:text-[#3A1017]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CelebrationCategories />
        <BridalPackages />
        <SacredMehndiJourney />
        <RecentCreations />
        <SignatureBridalStyles />
        <VikashPromise />
        <FromConeToCelebration />
        <WordsFromOurBrides />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
