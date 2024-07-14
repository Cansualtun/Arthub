"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Line from "@/components/Shared/Line";
import Card from "@/components/Shared/Card";
import PocketBase from "pocketbase";
import Cookies from "js-cookie";
import SubBanner from "@/components/Shared/SubBanner";
import { Product } from "@/types";

type CatalogProps = {
  params: {
    id: string;
  };
};
export default function CatalogProduct({ params }: CatalogProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pb = new PocketBase("https://api.pixem.org");
        const records = await pb
          .collection("ozkamci_urun")
          .getFullList<Product>({
            filter: `(catolog="${id}")`,
            sort: "-created",
          });
        setProducts(records);
        console.log(records, "test");
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleAddToCart = (product: Product) => {
    const cartItems = Cookies.get("cartItems");
    const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];
    parsedCartItems.push(product);
    Cookies.set("cartItems", JSON.stringify(parsedCartItems), { expires: 7 });
    toast.success("Ürün sepete eklendi!");
  };

  return (
    <div className="flex gap-24 flex-col">
      <SubBanner
        imagePath="/assets/images/hakkimizda.svg"
        title="ÜRÜNLERİMİZ"
      />
      <Line title="Katalog Ürünlerimiz" />
      <div className="max-w-[1100px] mx-auto space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              collectionId={product.collectionId}
              image={product.image}
              title={product.name}
              details={product.details}
              onAddToCartClick={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
