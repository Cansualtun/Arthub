"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export default function CartList() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const savedItems = Cookies.get("cartItems");
    if (savedItems) {
      setCartItems(JSON.parse(savedItems));
    }
  }, []);

  const handleRemoveFromCart = (productId: string) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
    toast.success("Ürün başarıyla sepetten çıkarıldı!")
    Cookies.set("cartItems", JSON.stringify(updatedCartItems), { expires: 7 });
  };

  return (
    <div className="flex flex-col gap-6 w-[400px]">
      <div className="h-24 bg-primary-main rounded-md">
        <p className="text-3xl flex items-center justify-center h-full">
          ÜRÜNLERİNİZ
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <div className="flex flex-row gap-16 items-center m-4" key={item.id}>
            <img
              src={`https://api.pixem.org/api/files/${item.collectionId}/${item.id}/${item.image}`}
              className="w-16 h-12"
              alt={item.name}
            />
            <p>{item.name}</p>
            <p>1 Adet</p>
            <img
              src="/assets/icons/delete.svg"
              alt="delete"
              onClick={() => handleRemoveFromCart(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
