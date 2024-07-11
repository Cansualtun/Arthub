import React from "react";
import PocketBase from "pocketbase";
import { notFound } from "next/navigation";
import ImageGallery from "@/components/Products/ImageGallery";
import { Product } from "@/types"; // Tanımladığımız Product tipini import edin

type ProductProps = {
  params: {
    catolog: string;
  };
};

const CatalogProduct = async ({ params }: ProductProps) => {
  const { catolog } = params;
  const pb = new PocketBase("https://api.pixem.org");

  let products: Product[];
  try {
    products = await pb.collection("ozkamci_urun").getFullList<Product>({
      filter: `catolog="${catolog}`,
      sort: "-created",
    });
    if (!products || products.length === 0) {
      throw new Error("Product not found");
    }
  } catch (error) {
    console.error(error);
    notFound();
    return null;
  }

  const mainImage = `https://api.pixem.org/api/files/${products[0].collectionId}/${products[0].id}/${products[0].image}`;
  const otherImages = products[0].images.map(
    (image: string) =>
      `https://api.pixem.org/api/files/${products[0].collectionId}/${products[0].id}/${image}`
  );

  return (
    <div>
      <div className="bg-primary-main h-28 flex items-center">
        <h1 className="text-3xl ml-40 font-bold text-black">
          {products[0].name}
        </h1>
      </div>
      <div className="flex flex-col gap-10 ml-40 mt-10">
        <div className="flex flex-row gap-16">
          <ImageGallery image={mainImage} images={otherImages} />
          <div>
            <p className="text-3xl font-bold text-black">{products[0].name}</p>
            <div className="text-xl text-black mt-8">
              {products[0]?.tag?.tag?.map((tag: any, index: any) => (
                <span
                  key={index}
                  className="mr-6 bg-primary-main rounded-md p-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-[510px]">
            <p className="text-3xl font-bold text-black">Detaylı Özellikler</p>
            <ul>
              {products[0].details.map((item: any) => (
                <li className="border-b border-gray-300 py-2" key={item.key}>
                  {item.key}: {item.value}
                </li>
              ))}
            </ul>
          </div>
          <div className="ml-96">
            <img src="/assets/images/cubics.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogProduct;
