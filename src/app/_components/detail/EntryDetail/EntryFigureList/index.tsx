"use client";

import { useEffect, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

import type { Figure as FigureType } from "@/types/microcms";

interface EntryFigurePropos {
  index: number;
  data: FigureType;
}

interface EntryFigureListProps {
  data: FigureType[];
}

function EntryFigure({ index, data }: EntryFigurePropos) {
  const url = data.media?.url ?? null;
  const isVideo = url?.endsWith(".mp4") ?? false;
  const isImage = !isVideo && !!url;

  // photoswipeにわたすため画像の本来のサイズを取得する
  // クライアントサイドでないと取得できないため useState/useEffect を使用する
  const [imgNaturalSize, setImgNaturalSize] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    if (isImage && url) {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        setImgNaturalSize({
          width: img.naturalWidth,
          height: img.naturalHeight,
        });
      };
    }
  }, [data, url, isImage]);

  return (
    <figure className="my-4 mx-a p-2 border border-gray-light text-xs">
      {isVideo ? (
        <video className="block w-full h-a" controls muted preload="auto">
          <source src={url ?? undefined} type="video/mp4" />
        </video>
      ) : isImage ? (
        <Item
          key={index}
          original={url}
          thumbnail={url}
          width={imgNaturalSize?.width ?? 1000}
          height={imgNaturalSize?.height ?? 1000}
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src={url ?? undefined}
              className="block w-full h-a cursor-zoom-in hover:opacity-70 transition-opacity duration-300"
              alt={data.caption}
            />
          )}
        </Item>
      ) : (
        <div className="block w-full h-a flex items-center justify-center bg-gray-100 text-gray-500">
          Media not available
        </div>
      )}
      {data.caption && (
        <figcaption className="mt-2 flex gap-1">
          <span className="font-bold flex-shrink-0">
            Fig {index.toString().padStart(2, "0")}.
          </span>
          <span
            dangerouslySetInnerHTML={{ __html: data.caption || "" }}
            className="whitespace-pre-wrap"
          ></span>
        </figcaption>
      )}
    </figure>
  );
}

export function EntryFigureList({ data }: EntryFigureListProps) {
  return (
    data && (
      <Gallery>
        {data.map((d, i) => (
          <EntryFigure index={i + 1} data={d} key={i} />
        ))}
      </Gallery>
    )
  );
}
