'use client';
import { Footer } from "@/components/molecules/footer";
import { AboutWrapper } from "@/components/organisms/about";
import { CareerWrapper } from "@/components/organisms/career";
import { ContactWrapper } from "@/components/organisms/contact";
import { CoreStrengthsWrapper } from "@/components/organisms/core-strengths";
import { IntroComponent } from "@/components/organisms/intro";
import { ProjectsWrapper } from "@/components/organisms/projects";
import { SkillsWrapper } from "@/components/organisms/skills";

export default function MainPage() {
  return (
    <div className="flex flex-col justify-center gap-16">
      <IntroComponent />
      <AboutWrapper />
      <CoreStrengthsWrapper />
      <SkillsWrapper />
      <CareerWrapper />
      <ProjectsWrapper />
      <ContactWrapper />
      <Footer />
    </div>
  );
}