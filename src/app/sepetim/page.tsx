import CartList from "@/components/Cart/CartList";
import ContactForm from "@/components/Cart/Contact";

export default function Sepetim() {
  return (
    <div>
      <div className="h-28 bg-primary-main">
        <p className="text-3xl flex items-center justify-center h-full w-[100%]">
          SEPETİM
        </p>
      </div>
      <div className="max-w-[1100px] mx-auto mt-28 flex flex-col  md:flex-row gap-8 md:gap-40">
        <ContactForm />
        <CartList />
      </div>
    </div>
  );
}
