import React from "react";
import PocketBase from "pocketbase";
import { notFound } from "next/navigation";
import ImageGallery from "@/components/Products/ImageGallery";

type ProductProps = {
  params: {
    id: string;
  };
};

const SingleProduct = async ({ params }: ProductProps) => {
  const { id } = params;
  const pb = new PocketBase("https://api.pixem.org");

  let product;
  try {
    product = await pb.collection("ozkamci_urun").getOne(id);
  } catch (error) {
    console.error(error);
    notFound();
  }

  const mainImage = `https://api.pixem.org/api/files/${product.collectionId}/${product.id}/${product.image}`;
  const otherImages = [
    `https://api.pixem.org/api/files/${product.collectionId}/${product.id}/${product.images[0]}`,
    `https://api.pixem.org/api/files/${product.collectionId}/${product.id}/${product.images[1]}`,
    `https://api.pixem.org/api/files/${product.collectionId}/${product.id}/${product.images[2]}`,
    `https://api.pixem.org/api/files/${product.collectionId}/${product.id}/${product.images[3]}`,
  ];

  // Verilen data
  const tags = ["20 ml", "BPE", "İlaç"];

  return (
    <div>
      <div className="bg-primary-main h-28 flex items-center">
        <h1 className="text-3xl ml-40 font-bold text-black">{product.name}</h1>
      </div>
      <div className="flex flex-col gap-10 ml-40 mt-10">
        <div className="flex flex-row gap-16">
          <ImageGallery image={mainImage} images={otherImages} />
          <div>
            <p className="text-3xl font-bold text-black">{product.name}</p>
            <div className="text-xl text-black mt-8">
              {tags.map((tag, index) => (
                <span key={index} className="mr-6 bg-primary-main rounded-md p-2">
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
