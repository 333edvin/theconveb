import Image from "next/image";

import Hero from "./containers/Hero";
import Service from "./containers/Service";
import About from "./containers/About";
import Process from "./containers/Process";
import Action from "./containers/Action";

export default function Home() {
  return (
    <main>
    
        <Hero/>
        <Service/>
        <About/>
        <Process/>
        <Action/>
      
    </main>
  );
}
