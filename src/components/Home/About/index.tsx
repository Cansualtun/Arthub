"use client"
import { useRouter } from "next/navigation";


export default function About() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/hakkimizda');
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <div className="w-full h-[236px] bg-primary-main absolute top-1/2 transform -translate-y-1/2"></div>
      <div className="relative max-w-6xl mx-auto p-4 z-10 flex flex-col md:flex-row items-start md:space-x-8">
        <div className="text-left md:w-1/2 p-4 space-y-6">
          <h2 className="text-4xl 
          ">
            Öz Kamçı <br /> Plastik ile Kalite <br /> Senin Elinde!
          </h2>
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur. Sollicitudin etiam ultrices
            laoreet volutpat mi vulputate ipsum augue orci. Odio gravida sed
            venenatis habitant justo posuere ut maecenas id. Nisl ante est
            pulvinar ornare. Habitant facilisis pellentesque amet orci. Gravida
            non erat ultricies vel sit nibh cras nec facilisis.
          </p>
          <ul className="space-y-4">
            <li className="flex flex-row gap-4">
              <img src="assets/icons/tick.svg" alt="tick" />
              <p>Lorem Ipsum</p>
            </li>
            <li className="flex flex-row gap-4">
              <img src="assets/icons/tick.svg" alt="tick" />
              <p>Lorem Ipsum</p>
            </li>
            <li className="flex flex-row gap-4">
              <img src="assets/icons/tick.svg" alt="tick" />
              <p>Lorem Ipsum</p>
            </li>
            <li className="flex flex-row gap-4">
              <img src="assets/icons/tick.svg" alt="tick" />
              <p>Lorem Ipsum</p>
            </li>
          </ul>
          <button
            type="button"
            onClick={handleButtonClick}
            className="mt-8 focus:outline-none text-white bg-primary-main focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Hakkımızda
          </button>
        </div>
        <div className="md:w-1/2 p-4 mt-16">
          <img
            src="assets/images/about.svg"
            alt="About Us"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
