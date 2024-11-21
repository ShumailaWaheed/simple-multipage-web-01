import Header from "@/components/Header";
import HomePage from "@/components/Pages/Home";
import Expertise from "@/components/Expertise";
import Skill from "@/components/Pages/Skill";
import Portfolio from "@/components/Pages/Portfolio";
import Testimonial from "@/components/Pages/Testimonial";
import Blog from "@/components/Pages/Blog";
import Contact from "@/components/Pages/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HomePage />
      <Expertise />
      <Skill />
      <Portfolio />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
