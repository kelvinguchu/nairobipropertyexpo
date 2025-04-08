import Hero from "@/components/home/hero";
import Objectives from "@/components/home/objectives";
import KeyFeatures from "@/components/home/key-features";
import TargetAudience from "@/components/home/target-audience";
import Sponsors from "@/components/home/sponsors";
import ExhibitorPackages from "@/components/home/exhibitor-packages";
import Timeline from "@/components/home/timeline";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <Objectives />
      <KeyFeatures />
      <TargetAudience />
      <Sponsors />
      <ExhibitorPackages />
      <Timeline />
      <Contact />
    </main>
  );
}
