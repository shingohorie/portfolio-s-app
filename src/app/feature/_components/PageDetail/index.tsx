"use client";
import { useEffect } from "react";

import "photoswipe/style.css";

import { Kv } from "@/app/feature/_components/PageDetail/Kv";
import { Overview } from "@/app/feature/_components/PageDetail/Overview";
import { Process } from "@/app/feature/_components/PageDetail/Process";
import { Features } from "@/app/feature/_components/PageDetail/Features";

export function PageDetail() {
  // 当画面のみスムーススクロールを有効化
  useEffect(() => {
    document.documentElement.classList.add("behavior-smooth");
    return () => {
      document.documentElement.classList.remove("behavior-smooth");
    };
  }, []);

  return (
    <>
      <Kv />

      <Overview />

      <Process />

      <Features />
    </>
  );
}
