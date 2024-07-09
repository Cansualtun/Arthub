'use client';
import React from 'react';
import { useCart } from '@/context/CartContext';

const CartList: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();

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
              onClick={() => removeFromCart(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartList;
