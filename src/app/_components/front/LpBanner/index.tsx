import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export function LpBanner() {
  return (
    <div className="max-w-[1024px] mx-auto py-4">
      <Link
        href="/feature"
        className="group relative block max-w-[600px] mx-auto p-2 rounded-[8px] border border-gray-light hover:border-gray-dark transition"
      >
        <div className="flex items-center gap-2">
          <figure className="w-16 h-8 flex-shrink-0">
            <img
              src="/front/thumb_feature.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </figure>

          <p className="ml-2 text-sm">
            ポートフォリオサイトの
            <br />
            Jamstackリアーキテクチャについて
          </p>

          <IoIosArrowForward className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-medium mr-0 transition-[margin] duration-300 group-hover:-mr-[0.25rem] group-hover:text-gray-dark" />
        </div>
      </Link>
    </div>
  );
}
