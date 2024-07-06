import CartList from "@/components/Cart/CartList";
import ContactForm from "@/components/Cart/Contact";

export default function Sepetim() {
  return (
    <div>
      <div className="h-28 bg-primary-main">
        <p className="text-3xl flex items-center justify-center h-full">
          SEPETİM
        </p>
      </div>
      <div className="max-w-[1100px] mx-auto mt-28 flex flex-row gap-40">
        <ContactForm />
        <CartList />
      </div>
    </div>
  );
}
