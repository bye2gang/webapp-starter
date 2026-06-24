import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

// ロジック / React コンポーネントの単体・結合テスト用設定。
// E2E（ブラウザ操作）は Playwright（playwright.config.ts）が担当する。
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    // Playwright の e2e は除外（こちらは Vitest が拾わない）
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    exclude: ["node_modules", "e2e", ".next"],
  },
});
