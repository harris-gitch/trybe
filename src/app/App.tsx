import { HeroSection } from '@/app/components/hero-section';
import { WhoWeAreSection } from '@/app/components/who-we-are-section';
import { HowWeWorkSection } from '@/app/components/how-we-work-section';
import { LifeAtTrybeSection } from '@/app/components/life-at-trybe-section';
import { OpenRolesSection } from '@/app/components/open-roles-section';
import { WhyJoinSection } from '@/app/components/why-join-section';
import { FinalCTASection } from '@/app/components/final-cta-section';

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhoWeAreSection />
      <HowWeWorkSection />
      <LifeAtTrybeSection />
      <OpenRolesSection />
      <WhyJoinSection />
      <FinalCTASection />
    </div>
  );
}