import { Gallery, Item } from "react-photoswipe-gallery";

export function Process() {
  return (
    <Gallery>
      <section id="process" className="bg-[#fbfbfb] py-8 px-4">
        <div className=" max-w-[1024px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate">
              Architecture Evolution
            </h2>
            <p className="mt-4 text-gray-dark">
              より良い構成を求めて繰り返した、移行と改善のプロセス。
            </p>
          </div>

          <div className="relative border-l-2 border-gray-light pl-4 space-y-8">
            <div className="max-w-[890px] mx-auto">
              <h3 className="text-2xl font-bold text-slate mb-4">
                <span className="block font-bold text-small text-[#F0047F]">
                  Phase 1
                </span>
                WordPress Headless構成の試み
              </h3>
              <div className="grid grid-cols-2 items-start gap-4">
                <div className="col-span-1 flex-shrink-0">
                  <p className="text-slate text-small leading-[1.5] mb-4">
                    リアーキテクチャ前は、カスタムフィールドやカスタムタクソノミーを使用した、オーソドックスなWordPressサイトとして構築していました。
                    <br />
                    まずはCMSはWordPressのまま変えず、ヘッドレスCMSとしての活用を試みました。
                    <br />
                    フロントエンドに Next.js、ホスティングに AWS
                    Amplify、スタイリングに Tailwind CSS
                    を採用した構成で公開しました。
                    <br />
                    しかし、開発が進むにつれて WordPress REST API (WP REST
                    API)のレスポンスに対する型定義の複雑さに直面しました。
                    <br />
                    非常に複雑なデータ型の定義と、フロントエンドに連携するための冗長なデータ整形処理を実装しましたが、開発体験を損なう上に、保守管理コストも増えると判断し、CMSも含めた全面的な見直しを決断しました。
                  </p>
                </div>
                <figure className="col-span-1 rounded-[16px] p-2 border border-gray-light">
                  <Item
                    original="/feature/img_phase_01.png"
                    thumbnail="/feature/img_phase_01.png"
                    width={856}
                    height={376}
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src="/feature/img_phase_01.png"
                        className="w-full h-auto rounded-[8px] block cursor-zoom-in hover:opacity-70 transition-opacity duration-300"
                        alt="Phase 1 Architecture"
                      />
                    )}
                  </Item>
                  <figcaption className="text-xs inline-flex gap-1 text-left text-gray-dark mt-2">
                    <span className="font-bold flex-shrink-0">Fig 01.</span>
                    フェーズ１の構成。
                    <br />
                    シンプルな代わりに内部設計の複雑化・冗長化を避けられませんでした。
                  </figcaption>
                </figure>
              </div>
            </div>

            <div className="max-w-[890px] mx-auto">
              <h3 className="text-2xl font-bold text-slate mb-4">
                <span className="block font-bold text-small text-[#F0047F]">
                  Phase 2
                </span>
                microCMSへの移行と完全Jamstack化
              </h3>
              <div className="grid grid-cols-2 items-start gap-4">
                <figure className="col-span-1 rounded-[16px] p-2 border border-gray-light">
                  <Item
                    original="/feature/img_phase_02.png"
                    thumbnail="/feature/img_phase_02.png"
                    width={856}
                    height={586}
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src="/feature/img_phase_02.png"
                        className="w-full h-auto rounded-[8px] block cursor-zoom-in hover:opacity-70 transition-opacity duration-300"
                        alt="Phase 2 Architecture"
                      />
                    )}
                  </Item>
                  <figcaption className="text-xs inline-flex gap-1 text-left text-gray-dark mt-2">
                    <span className="font-bold flex-shrink-0">Fig 02.</span>
                    フェーズ２の構成。
                    <br />
                    CMSを移行したことで内部設計はシンプルになりました。
                    <br />
                    S3を活用することでmicroCMSの標準機能では対応できない機能も実現可能に。
                  </figcaption>
                </figure>
                <div className="col-span-1 flex-shrink-0">
                  <p className="text-slate text-small leading-[1.5] mb-4">
                    より堅牢でメンテナンス性の高いコードベースを目指し、APIベースでスキーマ定義が明確な
                    microCMS への移行を決断しました。
                    <br />
                    これにより、SDKを通じた型安全なデータ取得が可能となり、開発効率は劇的に向上しました。
                    <br />
                    一方で、microCMSはテキストや軽量な画像の管理には優れていましたが、ポートフォリオで重要となる「動画ファイル」の管理に関しては、WordPressと異なり標準ではサポートしておりませんでした。
                    <br />
                    そこで、microCMSの拡張フィールドを開発することにしました。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Gallery>
  );
}
