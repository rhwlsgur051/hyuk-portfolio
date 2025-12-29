'use client';
import { IntroComponent } from "@/components/organisms/intro";
import { ProjectsWrapper } from "@/components/organisms/projects";

export default function MainPage() {
  return (
    <div className="flex flex-col justify-center">
      <IntroComponent />
      <ProjectsWrapper />
    </div>
  );
}