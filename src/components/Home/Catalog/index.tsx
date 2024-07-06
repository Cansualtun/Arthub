import Line from "@/components/Shared/Line";

export default function Catalog() {
  return (
    <div className="flex flex-col gap-4 font-bold">
      <Line title="Katalog" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center">
          <img
            src="assets/images/alfa.svg"
            alt="Photo 1"
            className="w-full h-auto"
          />
          <p>Fotoğraf 1</p>
        </div>
        <div className="text-center">
          <img
            src="assets/images/alfa.svg"
            alt="Photo 2"
            className="w-full h-auto"
          />
          <p>Fotoğraf 2</p>
        </div>
        <div className="text-center">
          <img
            src="assets/images/alfa.svg"
            alt="Photo 3"
            className="w-full h-auto"
          />
          <p>Fotoğraf 3</p>
        </div>
        <div className="text-center">
          <img
            src="assets/images/alfa.svg"
            alt="Photo 4"
            className="w-full h-auto"
          />
          <p>Fotoğraf 4</p>
        </div>
        <div className="text-center">
          <img
            src="assets/images/alfa.svg"
            alt="Photo 5"
            className="w-full h-auto"
          />
          <p>Fotoğraf 5</p>
        </div>
        <div className="text-center">
          <img
            src="assets/images/alfa.svg"
            alt="Photo 6"
            className="w-full h-auto"
          />
          <p>Fotoğraf 6</p>
        </div>
      </div>
    </div>
  );
}
