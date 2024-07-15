"use client";
import About from "@/components/Home/About";
import Catalog from "@/components/Home/Catalog";
import Contact from "@/components/Home/Contact";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSlider from "@/components/Shared/Banner";
import banners from "@/data";

export default function Home() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollToContact = searchParams.get("scrollToContact");
    if (scrollToContact) {
      document.querySelector("#contact-section")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [searchParams]);

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
