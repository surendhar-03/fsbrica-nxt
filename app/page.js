import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Scroll from "@/Components/Scroll";
import Section1 from "@/Pages/Section1";
import Section2 from "@/Pages/Section2";
import Section3 from "@/Pages/Section3";
import Section4 from "@/Pages/Section4";
import Section5 from "@/Pages/Section5";
import Section6 from "@/Pages/Section6";
import Section7 from "@/Pages/Section7";


export default function Home() {
  return (
    <div>
      <Scroll />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6/>
      <Section7/>
      <Footer />
    </div>
  );
}
