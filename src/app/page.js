import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

import Skills from "@/components/Skills";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen  mx-auto bg-[#121212] md:px-12">
      <Navbar></Navbar>
      <div className="container mx-auto md:w-[90%] md:px-12 md:py-4 mt-40 md:space-y-40">
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </main>
  );
}
