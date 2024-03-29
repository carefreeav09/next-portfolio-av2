'use client';

import HeroSection from './views/hero';
import ProjectsSection from './views/projects';
import ExperienceSection from './views/experience';
import MySkillsSection from './views/mySkills';
import ConnectSection from './views/connect';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <MySkillsSection />
      <ConnectSection />
    </>
  );
}
