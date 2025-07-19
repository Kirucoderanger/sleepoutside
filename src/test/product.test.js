// If using Jest, no import is needed as 'test' is globally available.
// If you want to be explicit, you can import 'test' and 'expect' from '@jest/globals':
import { test, expect } from "@jest/globals";

test("Sanity check", () => {
  expect(1 + 1).toBe(2);
});
