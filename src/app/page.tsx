'use client';
import { CustomContainer } from "@/components/atoms/custom-container";
import { Footer } from "@/components/molecules/footer";
import { AboutMeSection } from "@/components/organisms/about-me";
import { CareerSection } from "@/components/organisms/career";
import { HeroSection } from "@/components/organisms/hero";
import { ProjectsSection } from "@/components/organisms/projects";
import { SkillsSection } from "@/components/organisms/skills";

export default function MainPage() {
  return (
    <div className="flex flex-col justify-center">
      <HeroSection />
      <AboutMeSection />
      <Divider />
      <CareerSection />
      <Divider />
      <SkillsSection />
      <Divider />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

const Divider = () => {
  return (
    <CustomContainer>
      <div className="my-8 h-px origin-center scale-y-50 bg-white/20 sm:my-12 md:my-16 lg:my-[80px]" />
    </CustomContainer>
  );
};