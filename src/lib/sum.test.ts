import { describe, expect, it } from "vitest";
import { sum } from "./sum";

// サンプル単体テスト。`pnpm test` で実行される。
// Loop engineering の「Verify（検証）」を支える最小の見本。
describe("sum", () => {
  it("2つの数を足す", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("負の数も扱える", () => {
    expect(sum(-1, 1)).toBe(0);
  });
});
