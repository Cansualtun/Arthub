"use client";
import About from "@/components/Home/About";
import Catalog from "@/components/Home/Catalog";
import Contact from "@/components/Home/Contact";
import Banner from "@/components/Shared/Banner";
import { Suspense } from "react";
import { useSearchParams } from 'next/navigation'
import { useEffect } from "react";

export default function Home() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const scrollToContact = searchParams.get("scrollToContact");
    if (scrollToContact) {
      document.querySelector("#contact-section")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div>
      <Suspense>
        <Banner
          imagePath="/assets/images/homebanner.svg"
          title="HOŞGELDİNİZ"
          description="Lorem ipsum dolor sit amet consectetur. Volutpat consequat ut adipiscing sed curabitur. Et condimentum habitant et rhoncus cursus ut mi. Viverra hendrerit faucibus cursus vulputate ornare curabitur lorem euismod purus. Vitae neque ut sed quis mi est integer cursus egestas."
        />
        <About />
        <div className="max-w-[1100px] mx-auto space-y-20">
          <Catalog />
          <div id="contact-section">
            <Contact />
          </div>
        </div>
      </Suspense>
    </div>
  );
}
