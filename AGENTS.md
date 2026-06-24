# AGENTS.md — webapp-starter

このリポジトリで作業する AI エージェント向けの指示。**短く保つこと**（肥大化させると無視される）。

## スタック
- Next.js 16 (App Router) / React 19 / TypeScript (strict)
- スタイル: Tailwind CSS v4
- テスト: Vitest（単体・結合, jsdom）/ Playwright（E2E）
- Lint/整形: Biome / パッケージ管理: pnpm

## 重要コマンド（基本これだけ）
- `pnpm dev` — 開発サーバ起動（http://localhost:3000）
- `pnpm verify` — ★型チェック + Lint + テスト。**変更後は必ず実行し、出力を提示すること**
- `pnpm check` — Biome で自動整形＋Lint修正
- `pnpm test` / `pnpm test:watch` — Vitest
- `pnpm e2e` — Playwright（初回のみ `pnpm exec playwright install`）
- `pnpm build` — 本番ビルド

## フォルダ構成
- `src/app/` — ルーティング・ページ（App Router）
- `src/lib/` — 純粋なロジック・ユーティリティ（ここを Vitest でテスト）
- `e2e/` — Playwright の E2E テスト
- `specs/` — 機能の仕様（実装の「唯一の真実」。着手前に読む／必要なら更新する）

## 作業の進め方（Explore → Plan → Implement → Verify → Commit）
1. **Explore/Plan**: まず `specs/` と関連コードを読み、計画を述べる（**コードを書く前に**）。
2. **Implement**: 計画どおり実装し、ロジックには Vitest テストを書く。
3. **Verify**: `pnpm verify` を実行し、結果（出力）を必ず提示する。UI は Playwright かスクショで確認。
4. **Commit**: 小さく、読める差分で。秘密情報は絶対にコミットしない。

## 安全ルール（重要）
- 本物の秘密（APIキー等）に `NEXT_PUBLIC_` を付けない。秘密は `.env.local` のみ（コミット禁止）。
- デプロイ前に `pnpm audit` と Next.js のセキュリティ勧告を確認する。
- Next.js の API が不確かなときは `node_modules/next/dist/docs/` 内の同梱ドキュメントを参照する（推測しない）。
- React Hooks 由来の無限再レンダリング等が出たら `eslint-plugin-react-hooks` の併用を検討する。

## このファイルの育て方
最初は短く。エージェントが同じミスを2回したら、その時だけ1行ルールを足す（先回りで書きすぎない）。
