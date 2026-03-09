import Process2 from "@/containers/Process2";
import AboutHero from "./containers/AboutHero";
import ContactCTA from "./containers/CTA";
import MissionVision from "./containers/MissionVision";
import StoryTimeline from "./containers/Story";
import TeamSection from "./containers/Team";

export default function Page() {  
    return (
        <>
        <AboutHero/>
        <StoryTimeline/>
        <TeamSection/>
        <MissionVision/>
        {/* <Process2/> */}
        <ContactCTA/>
        </>
    );
}