import assert from "node:assert";
import { describe, it } from "node:test";
import { a } from "../src/lib/a.ts";

describe("a", () => {
  it("should be a", () => {
    assert.strictEqual(a, "a");
  });
});
