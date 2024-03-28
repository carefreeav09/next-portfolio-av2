"use client";

import HeroSection from "./views/hero";
import TestSection from "./views/test";
import ProjectsSection from "./views/projects";
import ExperienceSection from "./views/experience";
import MySkillsSection from "./views/mySkills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <MySkillsSection />
      <TestSection color="bg-blue-200" />
    </>
  );
}
