import React from "react";
import Link from "next/link";

interface DetailsProps {
  key: string;
  priority: number;
  value: number;
}

interface CardProps {
  id: string;
  imageSrc: string;
  title: string;
  details: DetailsProps[];
  onAddToCartClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  id,
  imageSrc,
  title,
  details,
  onAddToCartClick,
}) => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <img src={imageSrc} alt={title} />
      <p className="font-bold">{title}</p>
      <img src="/assets/icons/line.svg" alt="line" />
      {details?.map((item) => (
        <p key={item.key}>
          {item.key} : {item.value}
        </p>
      ))}
      <div className="flex flex-row gap-6">
        <Link href={`/product/${id}`}>
          <button
            type="button"
            onClick={() => {
              `/product/${id}`;
            }}
            className="mt-8 focus:outline-none text-white bg-primary-main focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Ürün Detayı
          </button>
        </Link>
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
};

export default Card;
