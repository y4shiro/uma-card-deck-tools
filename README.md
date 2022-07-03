# ウマ娘サポカ編成ツール

※ 開発中なので README.md にも足りない項目があります

<!-- [Sunset Time Notify](https://sunset-time-notify.y4shiro.net) -->

ウマ娘のサポカ編成にてレスボ等のステータス一覧を表示する Web アプリ

## Features

- レスポンシブデザインなので PC / スマホどちらでも利用可能

## 今後実装予定の機能

## 開発環境 / ライブラリ

- macOS Monterey 12.3.1
- Node.js 16.13.2
- React 18.2.0
- Next.js 12.1.6
- TypeScript 4.7.4
- ESLint / Prettier
- Jest / React Testing Library
- Storybook
- [Chakra UI](https://chakra-ui.com/)

## 利用した外部サービス

- Google Analytics 4
- [Vercel](https://vercel.com/) (ホスティング)

## 開発サーバ起動方法

```bash
yarn dev
```

## Next.js のディレクトリ構成

今回は下記の記事を参考に構成を決定した  
[私の推しフロントエンドディレクトリ構成と気をつけたいポイント](https://zenn.dev/sakito/articles/af87061a5016e6)

```tsx
src/
├─ features/ // 機能毎にディレクトリを切る
│  ├─ Profile/
│  │  ├─ components/ // 子コンポーネントを入れ子で配置
│  │  │  ├─ UserInfo/
│  │  │  ├─ Sponsoring/
│  │  │  ├─ Achievements/
│  │  │  ├─ Organizations/
│  │  ├─ hooks/
│  │  ├─ functions/
│  │  ├─ api/
│  │  ├─ test/ // 必須
│  │  ├─ stories/ // 必須
│  │  ├─ index.tsx
│  ├─ Repositories/
│  ├─ Overview/
│  ├─ Header/
├─ components/ // 共通コンポーネントを配置
│  ├─ Button/
│  ├─ Icon/
├─ hooks/ // 共通の hooks を配置
├─ functions/ // 共通の関数を配置、libs や utils に相当
```

## src/features/

ここに機能ごとにコンポーネントを分けて設置  
上のコード例だと、Profile / Repositories / Overview / Header に分かれている  
以前作ったプロジェクトでも似たような構成にしていたが、hooks や test も機能ごとに内包しているのが新しい点  
以前のプロジェクトでは小規模ということで src/hooks に全ての hooks とその test を配置していたが、後半になると見通しが悪くなっていた  
feature 単位で分けることでだいぶ見通しが良くなりそう

hooks / functions / api は任意で配置するが、test / stories は必須とのこと  
参照先の記事では統合テストのみ書くと書いているので、試してみて良さそうなら採用する  
hooks の単体テスト書かないのが少々不安点

## src/components

プロダクト共通のコンポーネントを配置する  
これは無くても良さげ

## src/hooks, src/functions

プロダクト共通の hooks や ロジックを置く  
functions は従来の libs/ や utils/ に相当?  
この部分はしっかり単体テストを書く

## その他

定数を配置する src/constants、レイアウトを配置する src/layouts などを任意で追加しても良い
