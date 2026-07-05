"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  cover: string;
};

export default function BranchHeroSlider({ cover }: Props) {
  const images = [
    cover,
    "/gallary/gallary1.jpeg",
    "/gallary/gallary2.jpeg",
    "/gallary/gallary3.jpeg",
    "/gallary/gallary4.jpeg",
    "/gallary/gallary5.jpeg",
    "/gallary/gallary6.jpeg",
    "/gallary/gallary7.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-[600px] w-full overflow-hidden rounded-3xl">
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt=""
          fill
          priority={index === 0}
          className={`absolute inset-0 object-cover transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
