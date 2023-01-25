import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/graphql/types/**/*.ts",
  generates: {
    "./src/utils/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
