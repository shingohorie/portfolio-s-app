export function Overview() {
  return (
    <section id="overview" className="py-8 bg-white border-y border-gray-light">
      <div className="max-w-[1024px] mx-auto px-4">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <h2 className="text-lg font-bold text-[#F0047F] mb-4">
              Project Overview
            </h2>
            <p className="text-slate text-small leading-[1.5] mb-4">
              これまでWordPressを利用して運用していたポートフォリオを、管理画面も含め完全自作のJamstack構成へとリニューアルしました。
              <br />
              高速な動作、保守性の高いコード、モダンな設計を目指しています。
            </p>
            <dl className="space-y-2 text-small">
              <div className="flex justify-between border-b border-gray-light pb-2">
                <dt className="text-gray-dark">担当</dt>
                <dd className="font-medium text-slate">
                  設計, フロントエンド, バックエンド
                </dd>
              </div>
              <div className="flex justify-between border-b border-gray-light pb-2">
                <dt className="text-gray-dark">開発期間</dt>
                <dd className="font-medium text-slate">3ヶ月</dd>
              </div>
            </dl>
          </div>

          <div className="col-span-1">
            <h2 className="text-lg font-bold text-[#F0047F] mb-4">
              Tech Stack
            </h2>
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex flex-col items-center justify-center px-2 py-4 rounded-[8px] bg-[#fbfbfb] border border-gray-light text-center">
                <p className="font-bold text-slate mb-1">
                  Next.js, <br />
                  Tailwind CSS, Jotai
                </p>
                <figure className="flex items-center gap-1 mb-1">
                  <img
                    src="/feature/icon_nextjs.png"
                    alt="Next.js"
                    className="w-[35px] h-auto"
                  />
                  <img
                    src="/feature/icon_tailwind.png"
                    alt="Tailwind CSS"
                    className="w-[35px] h-auto"
                  />
                  <img
                    src="/feature/icon_jotai.png"
                    alt="Jotai"
                    className="w-[45px] h-auto"
                  />
                </figure>
                <p className="text-xs text-gray-dark">Frontend</p>
              </li>
              <li className="flex flex-col items-center justify-center px-2 py-4 rounded-[8px] bg-[#fbfbfb] border border-gray-light text-center">
                <p className="font-bold text-slate mb-1">microCMS</p>
                <figure className="mb-1">
                  <img
                    src="/feature/icon_microcms.png"
                    alt="microCMS"
                    className="w-[35px] h-auto"
                  />
                </figure>
                <p className="text-xs text-gray-dark">Headless CMS</p>
              </li>
              <li className="flex flex-col items-center justify-center px-2 py-4 rounded-[8px] bg-[#fbfbfb] border border-gray-light text-center">
                <p className="font-bold text-slate mb-1">AWS（Amplify, S3）</p>
                <figure className="flex items-center gap-1 mb-1">
                  <img
                    src="/feature/icon_amplify.png"
                    alt="Amplify"
                    className="w-[35px] h-auto"
                  />
                  <img
                    src="/feature/icon_s3.png"
                    alt="S3"
                    className="w-[35px] h-auto"
                  />
                </figure>
                <p className="text-xs text-gray-dark">Infrastructure</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
