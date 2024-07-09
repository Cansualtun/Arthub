import React from 'react';
import PocketBase from 'pocketbase';
import { notFound } from 'next/navigation';
import ImageGallery from '@/components/Products/ImageGallery';

type ProductProps = {
  params: {
    id: string;
  };
};

const SingleProduct = async ({ params }: ProductProps) => {
  const { id } = params;
  const pb = new PocketBase('https://api.pixem.org');

  let product;
  try {
    product = await pb.collection('ozkamci_urun').getOne(id);
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

  return (
    <div>
      <div className="bg-primary-main h-28 flex items-center">
        <h1 className="text-white text-2xl ml-20 font-bold">
          {product.name}
        </h1>
      </div>
      <div className="flex flex-col gap-10 ml-40 mt-10">
        <ImageGallery image={mainImage} images={otherImages} />
      </div>
    </div>
  );
};

export default SingleProduct;
