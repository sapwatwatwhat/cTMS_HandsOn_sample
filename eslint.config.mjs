import { defineConfig } from "eslint/config";
import cds from "@sap/cds/eslint.config.mjs";

export default defineConfig([
  ...cds.recommended,
  {
    ignores: ["docs/"],
  },
]);