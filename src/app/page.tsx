import { ContactsSection } from "@/components/ContactsSection";
import { HomeSection } from "@/components/HomeSection";
import { SkillsSection } from "@/components/SkillsSection";
import { WorksSection } from "@/components/WorksSection";


export default function Home() {
  return (
    <main className="h-screen">
      <HomeSection/>
      <SkillsSection/>
      <WorksSection/>
      <ContactsSection/>
    </main>
  );
}
