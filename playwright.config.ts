import { defineConfig, devices } from "@playwright/test";

// E2E（ブラウザでの振る舞い・見た目）の検証用設定。
// `pnpm e2e` で実行。初回のみ `pnpm exec playwright install` でブラウザを取得すること。
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  // CI では .only の取り残しを失敗扱いにする
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  // テスト前に dev サーバを自動起動（ローカルでは既存サーバを再利用）
  webServer: {
    command: "pnpm dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
