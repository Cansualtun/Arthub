// components/Home.tsx (Client Component)
"use client";
import About from "@/components/Home/About";
import Catalog from "@/components/Home/Catalog";
import Contact from "@/components/Home/Contact";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSlider from "@/components/Shared/Banner";
import banners from "@/data";

type HomeProps = {
  scrollToContact: boolean;
};

export default function Home({ scrollToContact }: HomeProps) {
  useEffect(() => {
    if (scrollToContact) {
      document.querySelector("#contact-section")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [scrollToContact]);

  return (
    <div>
      <BannerSlider banners={banners} />
      <About />
      <div className="max-w-[1100px] mx-auto space-y-20">
        <Catalog />
        <div id="contact-section">
          <Contact />
        </div>
      </div>
    </div>
  );
}
