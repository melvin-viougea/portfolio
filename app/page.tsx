import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import Spacing from "@/components/Spacing";
import Status from "@/app/_components/Status";
import Skills from "@/app/_components/Skills";
import Contact from "@/app/_components/Contact";
import Footer from "@/app/_components/Footer";
import School from "@/app/_components/School";

export default function Home() {
  return (
    <main>
      <Header/>
      <Spacing size="md"/>
      <Hero/>
      <Spacing size="sm"/>
      <Status/>
      <Spacing size="xs"/>
      <School/>
      <Spacing size="sm"/>
      <Skills/>
      <Spacing size="sm"/>
      <Contact/>
      <Spacing size="md"/>
      <Footer/>
    </main>
  );
}
