import { Gallery, Item } from 'react-photoswipe-gallery';

export function Features() {
  return (
    <Gallery>
      <section id="features" className="py-8 px-4 bg-[#0f172a] text-white">
        <div className="max-w-[1024px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Key Solutions</h2>
            <p className="mt-4">標準機能では足りない部分を、独自開発で補完。</p>
          </div>

          <div className="grid gap-8">
            <div className="bg-[#0f172a] rounded-[16px] p-8 border">
              <h3 className="text-xl font-bold mb-4">
                AWS S3と連携した独自拡張フィールド用Webアプリ「S3
                FilePicker」の開発
              </h3>
              <div className="max-w-[700px] mx-auto text-center mb-4">
                <figure className="">
                  <video
                    className="block w-full h-auto"
                    controls
                    preload="metadata"
                  >
                    <source src="/feature/s3-filepicker.mp4" type="video/mp4" />
                  </video>
                  <figcaption className="text-xs inline-flex gap-1 text-left mt-2">
                    <span className="font-bold flex-shrink-0">Fig 03.</span>
                    拡張フィールドであるWebアプリの挙動。
                    <br />
                    クリックで選択され、プレビューアイコンを押下すると署名付きURLを発行し、別タブで開く。
                    <br />
                    検索窓でファイルのフィルタリングも可能。
                    <br />
                    状態管理ライブラリにて、選択したファイル名やiframeのIDを管理。
                  </figcaption>
                </figure>
              </div>

              <p className="text-small leading-[1.5]">
                画像も動画も直感的に管理できるよう、AWS S3
                による管理を採用しました。
                <br />
                さらに、microCMSの管理画面からシームレスにS3上のファイルを選択できるよう、Next.jsを用いて独自の拡張フィールドとなるWebアプリ「S3
                FilePicker」を開発しました。
              </p>
              <dl className="mt-2 text-small leading-[1.5]">
                <dt className="flex items-center gap-1 font-bold">
                  S3オブジェクトのブラウジング機能:
                </dt>
                <dd className="pl-2">
                  AWS
                  SDKを使用してS3バケット内のオブジェクト一覧を取得し、microCMSの管理画面内にGUIとして表示。
                  <br />
                  クリック一つでコンテンツとの紐付けを可能にしました。
                  <br />
                  また、状態管理ライブラリ（Jotai）を用いて選択したファイル名やiframeのIDなどを管理することで、子コンポーネントへの冗長なpropsの受け渡しを防いでいます。
                </dd>

                <dt className="flex items-center gap-1 font-bold mt-1">
                  S3オブジェクトのプレビュー機能:
                </dt>
                <dd className="pl-2">
                  選択した動画や画像が正しいかを確認するため、プレビューボタンを実装。
                  <br />
                  セキュリティを考慮し、一時的に有効な署名付きURLを発行することで、プライベートなバケット設定のままでも安全にプレビュー閲覧ができる仕組みを構築しました。
                </dd>
                <dt className="flex items-center gap-1 font-bold mt-1">
                  セキュリティ設計:
                </dt>
                <dd className="pl-2">
                  実装にあたっては、必要最小限の権限を付与したIAMポリシーの策定や、クロスオリジンアクセスを制御するS3バケットポリシーの設定を厳密に行いました。
                </dd>
              </dl>
            </div>

            <div className="bg-[#0f172a] rounded-[16px] p-8 border">
              <h3 className="text-xl font-bold mb-3">プレビュー機能の実装</h3>
              <div className="grid grid-cols-2 items-start gap-4">
                <p className="col-span-1 flex-shrink-0 text-small leading-[1.5]">
                  Jamstack特有の「ビルド待ち」を解消するため、ドラフト状態の記事を確認できるプレビュー環境を用意。
                  <br />
                  該当画面のみCSRにすることで、リアルタイムに近いデータ反映を可能にしました。
                </p>
                <figure className="col-span-1">
                  <Item
                    original="/feature/img_preview.png"
                    thumbnail="/feature/img_preview.png"
                    width={1101}
                    height={757}
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src="/feature/img_preview.png"
                        className="w-full h-auto rounded-[8px] block cursor-zoom-in hover:opacity-70 transition-opacity duration-300"
                        alt="Preview Functionality"
                      />
                    )}
                  </Item>
                  <figcaption className="text-xs inline-flex gap-1 text-left mt-2">
                    <span className="font-bold flex-shrink-0">Fig 04.</span>
                    microCMSが標準機能として発行するドラフトキーを利用して、CSRでプレビュー画面を実装。
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Gallery>
  );
}
