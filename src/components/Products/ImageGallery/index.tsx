"use client";

import React, { useState } from "react";
import Image from "next/image";

type ImageGalleryProps = {
  image?: string;
  images?: string[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ image, images }) => {
  const [selectedImage, setSelectedImage] = useState(image);

  if (!image) {
    return null;
  }

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row gap-20">
        <Image
          src={selectedImage as string}
          className="w-120 h-96 rounded-md"
          height={500}
          width={500}
          alt="main"
        />
      </div>
      {images && images.length > 0 && (
        <div className="flex flex-row gap-4 mt-2">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              className="w-28 h-20 rounded-md cursor-pointer"
              height={150}
              width={150}
              alt={`thumbnail-${index}`}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
