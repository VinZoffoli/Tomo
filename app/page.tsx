import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TomoEssenceSection from '@/components/TomoEssenceSection';
import MichelinSection from '@/components/MichelinSection';
import ChefMenuEssenceSection from '@/components/ChefMenuEssenceSection';
import TomokaseTunaHappeningsSection from '@/components/TomokaseTunaHappeningsSection';
import GiftSection from '@/components/GiftSection';
import FindUsSection from '@/components/FindUsSection';
import Footer from '@/components/Footer';
import AnimateIn from '@/components/AnimateIn';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AnimateIn from="left"><TomoEssenceSection /></AnimateIn>
        <AnimateIn from="scale"><MichelinSection /></AnimateIn>
        <AnimateIn from="right"><ChefMenuEssenceSection /></AnimateIn>
        <AnimateIn from="up"><TomokaseTunaHappeningsSection /></AnimateIn>
        <AnimateIn from="scale"><GiftSection /></AnimateIn>
        <AnimateIn from="left"><FindUsSection /></AnimateIn>
      </main>
      <AnimateIn from="up"><Footer /></AnimateIn>
    </>
  );
}
