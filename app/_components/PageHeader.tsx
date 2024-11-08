import Image, { StaticImageData } from "next/image";

interface PageHeaderProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export default function PageHeader({
  title,
  description,
  image,
}: PageHeaderProps) {
  return (
    <div className="relative h-[400px] w-full">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
        quality={100}
        placeholder="blur"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl font-light">{description}</p>
      </div>
    </div>
  );
}
