"use client";

import React from "react";
import Banner from "@/components/Shared/Banner";
import Line from "@/components/Shared/Line";
import Card from "@/components/Shared/Card";
import { useRouter } from "next/navigation";


const products = [
  {
    id: 1,
    imageSrc: "/assets/images/alfa.svg",
    title: "Duru",
    productDiameter: "94",
  },
  {
    id: 2,
    imageSrc: "/assets/images/alfa.svg",
    title: "Ürün 2",
    productDiameter: "95",
  },
  {
    id: 3,
    imageSrc: "/assets/images/alfa.svg",
    title: "Ürün 3",
    productDiameter: "96",
  },
  {
    id: 4,
    imageSrc: "/assets/images/alfa.svg",
    title: "Ürün 4",
    productDiameter: "97",
  },
  {
    id: 5,
    imageSrc: "/assets/images/alfa.svg",
    title: "Ürün 5",
    productDiameter: "98",
  },
  {
    id: 6,
    imageSrc: "/assets/images/alfa.svg",
    title: "Ürün 6",
    productDiameter: "99",
  },
  {
    id: 7,
    imageSrc: "/assets/images/alfa.svg",
    title: "Ürün 7",
    productDiameter: "100",
  },
  {
    id: 8,
    imageSrc: "/assets/images/alfa.svg",
    title: "Ürün 8",
    productDiameter: "101",
  },
  {
    id: 9,
    imageSrc: "/assets/images/alfa.svg",
    title: "Ürün 9",
    productDiameter: "102",
  },
];

export default function Ürünlerimiz() {
  const router = useRouter();
  const handleDetailClick = (id: number) => {
     router.push("urunlerimiz/slug")
  };

  const handleAddToCartClick = (id: number) => {
    console.log(`Ürün sepete eklendi: ${id}`);
  };

  return (
    <div className="flex gap-24 flex-col">
      <Banner imagePath="/assets/images/hakkimizda.svg" title="ÜRÜNLERİMİZ" />
      <Line title="Ürünlerimiz" />
      <div className="max-w-[1100px] mx-auto space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              imageSrc={product.imageSrc}
              title={product.title}
              productDiameter={product.productDiameter}
              onDetailClick={() => handleDetailClick(product.id)}
              onAddToCartClick={() => handleAddToCartClick(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
