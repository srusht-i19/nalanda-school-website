import { CampusStrip } from "@/components/sections/campus-strip";
import { CtaBand } from "@/components/sections/cta-band";
import { EventsList } from "@/components/sections/events-list";
import { HomeHero } from "@/components/sections/home-hero";
import { ProgramCards } from "@/components/sections/program-cards";
import { StatsStrip } from "@/components/sections/stats-strip";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyUs } from "@/components/sections/why-us";

export default function Home() {
  return (
    <>
      <HomeHero />
      <StatsStrip />
      <WhyUs />
      <ProgramCards />
      <CampusStrip />
      <EventsList />
      <Testimonials />
      <CtaBand />
    </>
  );
}
