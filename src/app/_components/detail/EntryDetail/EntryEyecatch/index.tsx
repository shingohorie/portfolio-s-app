"use client";

import { useEffect, useState } from "react";

import { Gallery, Item } from "react-photoswipe-gallery";

interface EntryEyecatchProps {
  image: string;
  title: string;
}

export function EntryEyecatch({ image, title }: EntryEyecatchProps) {
  const url = image ?? null;

  // photoswipeにわたすため画像の本来のサイズを取得する
  // クライアントサイドでないと取得できないため useState/useEffect を使用する
  const [imgNaturalSize, setImgNaturalSize] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    if (url) {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        setImgNaturalSize({
          width: img.naturalWidth,
          height: img.naturalHeight,
        });
      };
    }
  }, [url, image]);

  return (
    <div className="flex flex-col-reverse mb-3">
      <h1 className="pb-1 text-2xl leading-[1.5] font-medium bg-gradient-to-r from-black to-black bg-[length:1em_1px] bg-[position:0_100%] bg-no-repeat">
        {title}
      </h1>
      <Gallery>
        <figure className="relative mb-4 border border-gray-light border-w-2 ">
          <Item
            key={title}
            original={image}
            thumbnail={image}
            width={imgNaturalSize?.width ?? 980}
            height={imgNaturalSize?.height ?? 600}
          >
            {({ ref, open }) => (
              <img
                ref={ref}
                onClick={open}
                src={image}
                width={980}
                height={600}
                alt={title}
                className="block w-full h-full aspect-[980/600] object-contain object-center cursor-zoom-in hover:opacity-70 transition-opacity duration-300"
              />
            )}
          </Item>
        </figure>
      </Gallery>
    </div>
  );
}
