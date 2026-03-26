"use client";

import { useState, useEffect, useCallback, MouseEvent } from "react";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Tag } from "@/components/common/Tag";

import { generateURL } from "@/lib/microcms";

import type { Work } from "@/types/microcms";

interface PickupProps {
  pickups: Work[];
}

export function Pickup({ pickups }: PickupProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Autoplay({ delay: 6000, stopOnInteraction: true }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        const newIndex = emblaApi.selectedScrollSnap();
        setSelectedIndex(newIndex);
      });
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.plugins().autoplay?.stop();
      emblaApi.scrollPrev();
      emblaApi.on("settle", () => {
        emblaApi.plugins().autoplay?.play();
      });
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.plugins().autoplay?.stop();
      emblaApi.scrollNext();
      emblaApi.on("settle", () => {
        emblaApi.plugins().autoplay?.play();
      });
    }
  }, [emblaApi]);

  const scrollToIndex = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const index = Number(e.currentTarget.getAttribute("data-index"));
      if (emblaApi) {
        emblaApi.plugins().autoplay?.stop();
        emblaApi.scrollTo(index);
        emblaApi.on("settle", () => {
          emblaApi.plugins().autoplay?.play();
        });
      }
    },
    [emblaApi],
  );

  return (
    <>
      <div className="embla relative overflow-hidden">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex">
            {pickups &&
              pickups.map((data) => (
                <div
                  className="embla__slide relative bg-black overflow-hidden flex-shrink-0 flex-grow-0 basis-[70%] min-w-0"
                  key={data.id}
                >
                  <Link
                    href={generateURL("works", data.id)}
                    className="block py-8 px-4 group"
                  >
                    <img
                      width="500"
                      height="500"
                      src={data.thumbnail.url ?? ""}
                      className="w-full h-full absolute top-0 left-0 object-cover opacity-40 pointer-events-none select-none filter blur-[20px] scale-120 group-hover:scale-140 transition-transform duration-400"
                      alt=""
                    />
                    <div className="relative max-w-[700px] m-auto text-white">
                      <div className="flex gap-5 items-center">
                        <div className="flex-1">
                          <p className="mb-2 text-xs">ー {data.copy}</p>
                          <p className="mb-2 text-3xl bold leading-[1.2]">
                            {data.title}
                          </p>
                          {data.client && (
                            <p className="mt-1 text-xs leading-none">
                              {data.client}
                            </p>
                          )}
                          {data.tags && (
                            <ul className="mt-3 flex flex-wrap gap-x-1 gap-y-[5px] pl-2 border-l-2  border-white">
                              {data.tags.map((tag) => (
                                <Tag
                                  key={tag.id}
                                  text={tag.name ?? ""}
                                  className="text-white"
                                />
                              ))}
                            </ul>
                          )}
                        </div>
                        <figure className="w-[260px] flex-shrink-0 border border-gray-light">
                          <img
                            width="500"
                            height="500"
                            src={data.thumbnail.url ?? ""}
                            className="w-full h-auto max-w-full align-bottom"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
        <div className="absolute w-[70%] top-0 left-0 right-0 m-auto h-full pointer-events-none">
          <button
            className="embla__prev absolute left-2 top-1/2 -translate-y-1/2 w-3 h-6 z-10 border-red rounded-[4px] cursor-pointer pointer-events-auto hover:bg-black/30 transition-background duration-300"
            onClick={scrollPrev}
          >
            <IoIosArrowBack className="m-auto text-white text-[20px]" />
          </button>
          <button
            className="embla__next absolute right-2 top-1/2 -translate-y-1/2 w-3 h-6 z-10 border-red rounded-[4px] cursor-pointer pointer-events-auto hover:bg-black/30 transition-background duration-300"
            onClick={scrollNext}
          >
            <IoIosArrowForward className="m-auto text-white text-[20px]" />
          </button>
        </div>
        <div className="table mx-auto -translate-y-1/1">
          <div className="flex gap-1 items-center justify-center mx-auto py-2">
            {pickups &&
              pickups.map((data, i) => (
                <button
                  key={data.id}
                  data-index={i}
                  className={`w-1 h-1 rounded-[50%] cursor-pointer ${selectedIndex === i ? "bg-white pointer-events-none" : "bg-gray-dark"}`}
                  onClick={scrollToIndex}
                >
                  <span></span>
                </button>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
