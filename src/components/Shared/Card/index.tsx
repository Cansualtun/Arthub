import React from "react";
import Link from "next/link";
import Image from "next/image";

interface DetailsProps {
  key: string;
  value: string;
}

interface CardProps {
  id: string;
  collectionId: string;
  image: string;
  title: string;
  details: DetailsProps[];
  onAddToCartClick: () => void;
}

const Card: React.FC<CardProps> = ({
  id,
  collectionId,
  image,
  title,
  details,
  onAddToCartClick,
}) => {
  return (
    <div className="flex flex-col gap-6 items-center border-solid border-2 rounded-md border-primary-main p-4 ">
      <Image
        src={`https://api.pixem.org/api/files/${collectionId}/${id}/${image}`}
        alt={title}
        className="w-full h-auto"
        width={200}
        height={200}
      />
      <div className="flex flex-row justify-between w-full p-2 border-none">
        <p className="font-bold">{title}</p>
        <div className="relative group">
          <img
            className="border-none"
            src="/assets/icons/usage.svg"
            alt="usage icon"
          />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded-md px-2 py-1">
             Tooltip notes
          </span>
        </div>
      </div>
      <img src="/assets/icons/line.svg" alt="line" />
      {details?.map((item, index) => (
        <p key={index}>
          {item.key} : {item.value}
        </p>
      ))}
      <div className="flex flex-row gap-6">
        <Link href={`/urunlerimiz/${id}`}>
          <button
            type="button"
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
