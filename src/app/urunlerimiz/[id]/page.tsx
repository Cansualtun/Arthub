import React from "react";
import PocketBase from "pocketbase";
import { notFound } from "next/navigation";
import ImageGallery from "@/components/Products/ImageGallery";

type ProductProps = {
  params: {
    id: string;
  };
};

type Product = {
  id: string;
  collectionId: string;
  name: string;
  image?: string;
  images?: string[];
  tag?: {
    tag?: string[];
  };
  item: {
    items: { key: string; value: string }[];
  };
  details: { key: string; value: string }[];
};

const SingleProduct = async ({ params }: ProductProps) => {
  const { id } = params;
  const pb = new PocketBase("https://api.pixem.org");

  let product: Product;
  try {
    product = (await pb.collection("ozkamci_urun").getOne(id)) as Product;
    console.log(product);
  } catch (error) {
    console.error(error);
    notFound();
  }

  const mainImage = product.image
    ? `https://api.pixem.org/api/files/${product.collectionId}/${product.id}/${product.image}`
    : null;

  const otherImages = product.images
    ? product.images.map(
        (img: string) =>
          `https://api.pixem.org/api/files/${product.collectionId}/${product.id}/${img}`
      )
    : [];

  return (
    <div>
      <div className="bg-primary-main h-28 flex items-center">
        <h1 className="text-3xl ml-40 font-bold text-black">{product.name}</h1>
      </div>
      <div className="flex flex-col gap-10 ml-40 mt-10">
        <div className="flex flex-row gap-16">
          {mainImage ? (
            <ImageGallery image={mainImage} images={otherImages} />
          ) : (
            <div>No main image available</div>
          )}
          <div>
            <p className="text-3xl font-bold text-black">{product.name}</p>
            <div className="text-xl text-black mt-8">
              {product?.tag?.tag?.map((tag: any, index: any) => (
                <span
                  key={index}
                  className="mr-6 bg-primary-main rounded-md p-2"
                >
                  {tag}
                </span>
              ))}
              <ul className="mt-2">
                {product.item.items.map((item: any) => (
                  <li className="py-2 flex flex-row gap-2" key={item.key}>
                    <img src="/assets/icons/listcheck.svg" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-[510px]">
            <p className="text-3xl font-bold text-black">Detaylı Özellikler</p>
            <ul>
              {product.details.map((item: any) => (
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

export default SingleProduct;
