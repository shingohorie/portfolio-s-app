'use client';

import Link from 'next/link';

import { IoIosArrowDown } from 'react-icons/io';

export function Kv() {
  return (
    <section className="px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 blur-[60px] pointer-events-none">
        <div className="w-full h-full bg-gradient-to-tr from-[rgb(240_4_127_/_0.5)] to-[rgb(79_70_229_/_0.5)]"></div>
      </div>
      <div className="relative grid grid-cols-2 max-w-[1024px] mx-auto py-15 gap-4">
        <div className="col-span-1">
          <h1 className="flex items-start font-bold tracking-tight mb-6">
            <img
              src="/feature/icon_jamstack.png"
              className="w-[55px] h-auto vertical-align-middle inline-block mr-1"
              alt=""
            />
            <span className="inline-block leading-[1.1] text-[55px] whitespace-nowrap">
              <span>ポートフォリオ</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F0047F] to-[#4F46E5]">
                Jamstack
                <br />
                リアーキテクチャ
              </span>
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-medium text-slate leading-[1.5]">
            WordPressから完全なJamstack構成へ。
            <br />
            Next.jsとmicroCMS、AWSを駆使して実現した、
            <br />
            高速でセキュアな次世代ポートフォリオサイト。
          </p>

          <div className="w-[560px] mt-6">
            <p className="my-1">
              <Link
                className="group flex items-center gap-[0.5em] hover:text-[#F0047F] transition-colors"
                href="#overview"
              >
                プロジェクト概要を見る
                <i className="inline-block leading-[0]">
                  <IoIosArrowDown className="inline-block group-hover:translate-y-[2px] transition-transform" />
                </i>
              </Link>
            </p>
            <p className="my-1">
              <Link
                className="group flex items-center gap-[0.5em] hover:text-[#F0047F] transition-colors"
                href="#process"
              >
                開発プロセスを見る
                <i className="inline-block leading-[0]">
                  <IoIosArrowDown className="inline-block group-hover:translate-y-[2px] transition-transform" />
                </i>
              </Link>
            </p>
            <p className="my-1">
              <Link
                className="group flex items-center gap-[0.5em] hover:text-[#F0047F] transition-colors"
                href="#features"
              >
                独自開発について見る
                <i className="inline-block leading-[0]">
                  <IoIosArrowDown className="inline-block group-hover:translate-y-[2px] transition-transform" />
                </i>
              </Link>
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <figure className="bg-white rounded-[16px] p-2 border border-gray-light">
            <img
              src="/feature/img_eyecatch.png"
              alt=""
              className="w-full rounded-[8px] bg-white"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
