"use client";

import React from "react";
import Banner from "@/components/Shared/Banner";
import Line from "@/components/Shared/Line";
import Card from "@/components/Shared/Card";
import PocketBase from 'pocketbase';

export default async function Ürünlerimiz() {
  const pb = new PocketBase('https://api.pixem.org');

  const records = await pb.collection('ozkamci_urun').getFullList({
    sort: '-created',
  });

  console.log(records, "test");

  return (
    <div className="flex gap-24 flex-col">
      <Banner imagePath="/assets/images/hakkimizda.svg" title="ÜRÜNLERİMİZ" />
      <Line title="Ürünlerimiz" />
      <div className="max-w-[1100px] mx-auto space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {records.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              collectionId={product.collectionId}
              image={product.image}
              title={product.name}
              details={product.details}
              onAddToCartClick={() => handleAddToCart(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );

  function handleAddToCart(productId:any) {
    // Add to cart logic here
    console.log(`Add product with ID ${productId} to cart`);
  }
}

