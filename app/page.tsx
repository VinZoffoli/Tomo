import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TomoEssenceSection from '@/components/TomoEssenceSection';
import MichelinSection from '@/components/MichelinSection';
import ChefMenuEssenceSection from '@/components/ChefMenuEssenceSection';
import TomokaseTunaHappeningsSection from '@/components/TomokaseTunaHappeningsSection';
import GiftSection from '@/components/GiftSection';
import FindUsSection from '@/components/FindUsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TomoEssenceSection />
        <MichelinSection />
        <ChefMenuEssenceSection />
        <TomokaseTunaHappeningsSection />
        <GiftSection />
        <FindUsSection />
      </main>
      <Footer />
    </>
  );
}
