import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AppGrid from "@/components/AppGrid";
import ProductShowcase from "@/components/ProductShowcase";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AppGrid />
        <ProductShowcase />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
