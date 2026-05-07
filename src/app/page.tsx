import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AppGrid from "@/components/AppGrid";
import VideoShowcase from "@/components/VideoShowcase";
import ProductShowcase from "@/components/ProductShowcase";
import GalleryTicker from "@/components/GalleryTicker";
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
        <VideoShowcase />
        <ProductShowcase />
        <GalleryTicker />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
