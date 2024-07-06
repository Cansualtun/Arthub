'use client';

import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  productDiameter: string;
  onDetailClick: () => void;
  onAddToCartClick: () => void;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, productDiameter, onDetailClick, onAddToCartClick }) => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <img src={imageSrc} alt={title} />
      <p className="font-bold">{title}</p>
      <img src="/assets/icons/line.svg" alt="line" />
      <p>Ürün Çapı : {productDiameter}</p>
      <p>Ürün Çapı : {productDiameter}</p>
      <p>Ürün Çapı : {productDiameter}</p>
      <div className="flex flex-row gap-6">
        <button
          type="button"
          onClick={onDetailClick}
          className="mt-8 focus:outline-none text-white bg-primary-main focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Ürün Detayı
        </button>
        <button
          type="button"
          onClick={onAddToCartClick}
          className="mt-8 focus:outline-none text-white bg-primary-main focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}

export default Card;
