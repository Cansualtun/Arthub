import About from "@/components/Home/About";
import Catalog from "@/components/Home/Catalog";
import Contact from "@/components/Home/Contact";
import Banner from "@/components/Shared/Banner";

export default function Home() {
  return (
    <div>
      <Banner
        imagePath="/assets/images/homebanner.svg"
        title="HOŞGELDİNİZ"
        description="Lorem ipsum dolor sit amet consectetur. Volutpat consequat ut adipiscing sed curabitur. Et condimentum habitant et rhoncus cursus ut mi. Viverra hendrerit faucibus cursus vulputate ornare curabitur lorem euismod purus. Vitae neque ut sed quis mi est integer cursus egestas."
      />
      <About />
      <div className="max-w-[1100px] mx-auto space-y-20">
        <Catalog />
        <Contact />
      </div>
    </div>
  );
}
