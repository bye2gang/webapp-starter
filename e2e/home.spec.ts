import { expect, test } from "@playwright/test";

// サンプル E2E テスト。`pnpm e2e` で実行される。
// UI の振る舞いは「先に失敗するテスト」を無理に書かず、こうした到達確認＋スクショ比較で検証する。
test("トップページが表示される", async ({ page }) => {
  await page.goto("/");
  // 何らかの本文が描画されていること（タイトルが空でない）
  await expect(page).toHaveTitle(/.+/);
});
