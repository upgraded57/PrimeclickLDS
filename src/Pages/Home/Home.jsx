import "./home.css";
import Header from "../../Component/header/Header";
import Hero from "../../Component/hero/Hero";
import Trustees from "../../Component/trustees/Trustees";
import Offer from "../../Component/offer/Offer";
import Features from "../../Component/features/Features";
import Testimonials from "../../Component/testimonials/Testimonials";
import Faqs from "../../Component/faqs/Faqs";
import Solutions from "../../Component/solutions/Solutions";
import Footer from "../../Component/footer/Footer";

export default function Home() {
  return (
    <div className="home">
      <div className="home-bg">
        <Header />
        <Hero />
      </div>
      <Trustees />
      <Offer />
      <Features />
      <Solutions />
      <Testimonials />
      <Faqs />
      <Footer />
    </div>
  );
}
