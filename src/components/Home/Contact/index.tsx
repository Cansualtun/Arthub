import Line from "@/components/Shared/Line";

export default function Contact() {
  return (
    <div className="flex flex-col gap-4">
      <Line title="İletişim" />
      <div className="flex flex-row items-center justify-between mt-8">
        <div className="flex flex-col gap-4 items-center">
          <img
            src="/assets/icons/droplet.svg"
            alt="droplet"
            className="w-20 h-20"
          />
          <p>Adres</p>
          <p>
            Aydın Plastikçiler Sitesi 1539. Sok No:22 <br/> İvedik Organize Sanayi
            Ankara
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img
            src="/assets/icons/phone-call.svg"
            alt="phone"
            className="w-20 h-20"
          />
          <p>Telefon Numaralarımız</p>
          <p>0 312 395 11 79</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img
            src="/assets/icons/inbox.svg"
            alt="inbox"
            className="w-20 h-20"
          />
          <p>E-Posta</p>
          <p>info@ozkamci.com.tr</p>
        </div>
      </div>
    </div>
  );
}
