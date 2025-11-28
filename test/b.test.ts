import assert from "node:assert";
import { describe, it } from "node:test";
import { b } from "../src/lib/b.ts";

describe("b", () => {
  it("enum b.B should be b", () => {
    assert.strictEqual(b.B, "b");
  });
});
