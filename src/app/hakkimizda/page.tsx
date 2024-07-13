"use client";
import AboutContent from "@/components/About/AboutContent";
import Banner from "@/components/Shared/Banner";
import SubBanner from "@/components/Shared/SubBanner";

export default function Hakkımızda() {
  return (
    <div>
      <SubBanner imagePath="/assets/images/hakkimizda.svg" title="HAKKIMIZDA" />
      <div className="max-w-[1100px] mx-auto space-y-20">
        <AboutContent />
      </div>
      <div className="relative w-full">
        <img
          src="/assets/images/aboutfooter.svg"
          alt="aboutfooter"
          className="w-full pt-6"
        />
      </div>
    </div>
  );
}
