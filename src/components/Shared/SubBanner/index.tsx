interface SubBannerProps {
  title: string;
  description?: string;
  imagePath: string;
}

export default function SubBanner({
  title,
  description,
  imagePath,
}: SubBannerProps) {
  return (
    <div className="relative w-full">
      <img src={imagePath} alt="banner" className="w-full" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        <p className="mt-4 text-xl mx-96 !font-normal">{description}</p>
      </div>
    </div>
  );
}
