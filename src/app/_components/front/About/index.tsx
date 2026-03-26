import Link from "next/link";

export function About() {
  return (
    <div className="pt-4 text-gray-darker text-xs leadsing-1.5">
      {/* <h2 className="mb-2 normal text-small">
        堀江 真悟
        <i className="ml-[1em] text-2xs not-italic">Shingo Horie</i>
      </h2> */}
      <p>フロントエンドエンジニアとしてwebのキャリアを開始。</p>
      <p className="mt-0.5">
        多種多様な案件を経験する中で、開発者として培ってきた経験値をもとにPL（Project
        Leader）に転向。
      </p>
      <p className="mt-0.5">
        ていねいな管理が持ち味で、複雑な案件の進行管理を成功させたり、業務モデルや開発スキームの再定義を任せていただいております。
      </p>
      <p className="mt-2 text-right">
        <Link
          href="/about"
          className="group hover:text-black transition-colors duration-300"
        >
          スキル詳細へ
          <i className="inline-block ml-[0.5em] not-italic group-hover:translate-x-[2px] transition-transform">
            ›
          </i>
        </Link>
      </p>
    </div>
  );
}
