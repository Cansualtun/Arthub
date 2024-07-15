"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleContactClick = (e: any) => {
    e.preventDefault();
    router.push("/?scrollToContact=true");
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <a className="flex items-center">
            <img
              src="/assets/arthublogo.svg"
              className="mr-3 h-12 sm:h-9"
              alt="ArtHub Logo"
            />
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="https://www.facebook.com/Ozkamci?mibextid=ZbWKwL"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              <img src="/assets/socialmedia/facebook.svg" />
            </a>
            <a
              href="#"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              <img src="/assets/socialmedia/twitter.svg" />
            </a>
            <a
              href="#"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              <img src="/assets/socialmedia/google.svg" />
            </a>
            <a
              href="https://www.instagram.com/estaone_plastik_ambalaj?igsh=MWNsYnp4aWE0aWR6ag=="
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              <img src="/assets/socialmedia/instagram.svg" />
            </a>
          </div>
          <div
            className="lg:flex items-center lg:order-1 w-full lg:w-auto justify-between hidden"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Anasayfa
                </a>
              </li>
              <li>
                <Link
                  href="/hakkimizda"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <a
                  href="/urunlerimiz"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Ürünlerimiz
                </a>
              </li>
              <li>
                <a
                  href="/#contact-section"
                  onClick={handleContactClick}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  İletişim
                </a>
              </li>
            </ul>
            <a
              href="/sepetim"
              className="flex items-center text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 ml-32"
            >
              <img src="/assets/icons/shoppingbasket.svg" className="mr-2" />
              Sepetim
            </a>
          </div>
        </div>
      </nav>
      <div className="lg:hidden block w-full">
        <ul className="flex flex-col mt-4 font-medium space-y-2 px-4">
          <li>
            <a
              href="/"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Anasayfa
            </a>
          </li>
          <li>
            <Link
              href="/hakkimizda"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Hakkımızda
            </Link>
          </li>
          <li>
            <a
              href="/urunlerimiz"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Ürünlerimiz
            </a>
          </li>
          <li>
            <a
              href="/#contact-section"
              onClick={handleContactClick}
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              İletişim
            </a>
          </li>
          <li>
            <a
              href="/sepetim"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Sepetim
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
