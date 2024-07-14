import React from "react";
import PocketBase from "pocketbase";
import { notFound } from "next/navigation";
import ImageGallery from "@/components/Products/ImageGallery";
import { Catalog } from "@/types";

type ProductProps = {
  params: {
    id: string;
  };
};

const CatalogProduct = async ({ params }: ProductProps) => {
  const { id } = params;
  const pb = new PocketBase("https://api.pixem.org");

  let product: Catalog;
  try {
    product = await pb.collection("ozkamci_katalog").getOne<Catalog>(id);
  } catch (error) {
    console.error(error);
    notFound();
  }

  const mainImage = `https://api.pixem.org/api/files/${product.collectionId}/${product.id}/${product.image}`;
  console.log(product , "can")
  return (
    <div>
      <div className="bg-primary-main h-28 flex items-center">
        <h1 className="text-3xl ml-40 font-bold text-black">
          {product.name}
        </h1>
      </div>
      <div className="flex flex-col gap-10 ml-40 mt-10">
        <div className="flex flex-row gap-16">
          <ImageGallery image={mainImage} />
          <div>
            <p className="text-3xl font-bold text-black">{product.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogProduct;
