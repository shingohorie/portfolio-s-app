import { version } from 'os';

export const SKILL_DATA_MANAGEMENT = [
  {
    name: '開発ディレクション',
    percentage: 100
  },
  {
    name: '進行管理',
    percentage: 100
  },
  {
    name: '品質管理',
    percentage: 80
  },
  {
    name: '要件定義',
    percentage: 80
  },
  {
    name: '開発スキームの定義',
    percentage: 60
  },
  {
    name: '部署間連携・合意形成',
    percentage: 60
  },
  {
    name: '外注先管理・評価',
    percentage: 80
  }
];

export const SKILL_DATA_FRONTEND = [
  {
    name: 'HTML / CSS（SCSS） / JavaScript（jQuery含む）',
    annotation: '基本設計・コンポーネント設計・演出の実装・保守運用',
    percentage: 100
  },
  {
    name: 'アクセシビリティ対応',
    annotation: 'JIS X 8341-3 レベルAA 一部準拠の経験あり',
    percentage: 80
  },
  {
    name: 'Next.js / React',
    annotation: '既存の横展開・小規模なコンポーネント開発なら可能',
    percentage: 50
  },
  {
    name: 'Nuxt / Vue.js',
    annotation: '既存の横展開・小規模なコンポーネント開発なら可能',
    percentage: 30
  },
  {
    name: 'TypeScript',
    annotation: '基礎的なコーディングなら可能',
    percentage: 50
  },
  {
    name: 'スタイリングライブラリ・CSSフレームワーク・既存の設計思想',
    annotation:
      'CSS(SCSS) Modules, Tailwind CSS, FLOCSS, PRECSS, BEM での実装経験あり',
    percentage: 60
  },
  {
    name: '単体テスト',
    annotation: 'Vitest / testing-library での実装経験あり',
    percentage: 70
  },
  {
    name: 'ビルド環境構築',
    annotation: 'webpack, npm scripts, gulpでの構築経験あり',
    percentage: 75
  },
  {
    name: 'Storybook',
    percentage: 85
  },
  {
    name: 'レガシーブラウザ・HTMLメール（レスポンシブ）',
    percentage: 100
  },
  {
    name: 'その他',
    annotation: `PWA, Eelectron, データビジュアライゼーションなどの実装経験あり
モダンフレームワークはBackbone.jsやAngularJS（1系）の実装経験もあり`
  }
];

export const SKILL_DATA_BACKEND = [
  {
    name: 'PHP',
    annotation: '基本なコーディングは可能',
    percentage: 60
  },
  {
    name: 'WordPress',
    annotation: 'カスタムテーマ開発や管理画面のカスタマイズが可能',
    percentage: 100
  },
  {
    name: 'Movable Type',
    annotation: '新規の設計構築は未経験。既存の更新や横展開なら可能',
    percentage: 20
  },
  {
    name: 'microCMS',
    annotation: 'APIの設計やWebhookの設定など可能',
    percentage: 100
  },
  {
    name: 'Node.js',
    annotation: '開発環境の構築や、簡易的なCLIアプリの実装が可能',
    percentage: 60
  },
  {
    name: 'Git / GitHub',
    annotation: `Git Flowによる大規模プロダクトのリポジトリ運用
GitHub Actionsの実装経験あり`,
    percentage: 80
  },
  {
    name: 'Linux / Apache',
    annotation: `基本的なCLIオペレーションは可能
htaccessでの設定は可能
httpd.confは複雑な設定にならなければ可能`,
    percentage: 80
  },
  {
    name: 'Docker',
    annotation: '既存のDockerfileの読解なら可能',
    percentage: 30
  },
  {
    name: 'AWS',
    annotation: `Amplify Hosting, EC2, S3 の設定は可能
ネットワーク構築・ストレージ・コンテナ化などは対応は難しい`,
    percentage: 40
  }
];

export const CERTS_DATA = [
  {
    name: '基本情報技術者試験',
    host: '情報処理推進機構（IPA）'
  },
  {
    name: 'AWS Certified Solutions Architect',
    host: 'AWS',
    class: 'Associate'
  },
  {
    name: 'CIW JavaScript Specialist',
    host: 'Certification Partner社'
  },
  {
    name: 'CIW Perl Specialist',
    host: 'Certification Partner社'
  },
  {
    name: 'Linux Professional Institute Certification',
    host: 'LPI-Japan',
    alias: 'LPIC',
    class: 'Level1'
  },
  {
    name: 'Microsoft Certified Professional',
    host: 'マイクロソフト社',
    alias: 'MCP',
    class: '70-480 ( Programming in HTML5 with JavaScript and CSS3 )'
  },
  {
    name: 'Microsoft Office Specialist',
    alias: 'MOS',
    host: 'マイクロソフト社',
    version: '2002',
    products: ['Word', 'Excel']
  },
  {
    name: 'Oracle Certified Java Programmer',
    host: '日本オラクル社',
    alias: 'OCJ-P',
    version: 'SE6'
  },
  {
    name: 'Oracle Master',
    host: '日本オラクル社',
    version: '11g',
    class: 'Bronze'
  },
  {
    name: 'PHP5技術者認定初級試験',
    host: 'PHP技術者認定機構'
  },
  {
    name: 'VBAエキスパート',
    host: 'オデッセイコミュニケーションズ社',
    class: 'スタンダード',
    products: ['Excel', 'Access']
  },
  {
    name: 'XMLマスター',
    host: 'XML技術者育成推進委員会',
    class: 'ベーシック'
  }
];
