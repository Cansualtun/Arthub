import Line from "@/components/Shared/Line";

export default function Contact() {
  return (
    <div className="flex flex-col gap-4 font-bold">
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
            Beylikdüzü OSB 5. Cd. Birlik Plaza No:14 <br /> Kat:8 Daire:66, 3531
            Beylikdüzü/İstanbul
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img
            src="/assets/icons/phone-call.svg"
            alt="phone"
            className="w-20 h-20"
          />
          <p>Telefon Numaralarımız</p>
          <p>
            0 212 552 69 98 <br /> 0599 954 12 25
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img
            src="/assets/icons/inbox.svg"
            alt="inbox"
            className="w-20 h-20"
          />
          <p>E-Posta</p>
          <p>
            info@orgafe.com <br /> destek@orgafe.com
          </p>
        </div>
      </div>
    </div>
  );
}
