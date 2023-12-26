import Category from "../components/Category";
import Footer from "../components/reusable/Footer";
import NavBar from "../components/reusable/NavBar";
import BestSeller from "../components/bestSeller";
import Hero from "../components/hero";

export default function LandingPage() {
  return (
    <>
    
    <NavBar></NavBar>
    <Hero />
    <Category />
    <BestSeller />
    <Footer />
    </>
  )

}
