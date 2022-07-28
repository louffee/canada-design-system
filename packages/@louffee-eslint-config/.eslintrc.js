const ERROR = "error";
const WARN = "warn";
const DISABLED = "off";

const PREFER_IMPORT = "prefer-import";

const ALWAYS = "always";
const NEVER = "never";

module.exports = {
  plugins: [
    "react",
    "react-native",
    "@typescript-eslint",
    "react-hooks",
    "import",
    "jest",
    "promise",
    "prettier",
  ],

  rules: {
    // Jest
    "jest/no-jest-import": WARN,
    "jest/prefer-to-have-length": WARN,
    "jest/no-disabled-tests": ERROR,
    "jest/no-focused-tests": ERROR,
    "jest/no-identical-title": ERROR,
    "jest/valid-expect": ERROR,
    "jest/no-commented-out-tests": ERROR,
    "jest/expect-expect": ERROR,
    "jest/no-conditional-expect": ERROR,
    "jest/no-export": ERROR,
    "jest/no-mocks-import": ERROR,
    "jest/no-standalone-expect": ERROR,
    "jest/no-test-return-statement": ERROR,
    "jest/valid-describe-callback": ERROR,
    "jest/valid-title": ERROR,

    // React Native
    "react-native/no-raw-text": DISABLED,
    "react-native/split-platform-components": [
      WARN,
      {
        androidPathRegex: "\\.android.tsx",
        iosPathRegex: "\\.ios.tsx",
      },
    ],
    "react-native/no-unused-styles": ERROR,
    "react-native/no-inline-styles": ERROR,
    "react-native/no-color-literals": ERROR,
    "react-native/no-single-element-style-arrays": ERROR,

    // React Hooks
    "react-hooks/rules-of-hooks": ERROR,
    "react-hooks/exhaustive-deps": WARN, // https://github.com/facebook/create-react-app/issues/6880#issuecomment-485912528

    // React
    "react/destructuring-assignment": [ERROR, ALWAYS],
    "react/button-has-type": ERROR,
    "react/no-unescaped-entities": ERROR,
    "react/state-in-constructor": ERROR,
    "react/no-unstable-nested-components": ERROR,
    "react/no-danger": ERROR,
    "react/jsx-props-no-spreading": ERROR,
    "react/no-direct-mutation-state": ERROR,
    "react/no-unused-prop-types": ERROR,
    "react/no-will-update-set-state": ERROR,
    "react/void-dom-elements-no-children": ERROR,
    "react/no-unknown-property": ERROR,
    "react/no-deprecated": ERROR,
    "react/jsx-filename-extension": [
      ERROR,
      {
        extensions: [".tsx"],
      },
    ],

    // Import
    "import/no-default-export": DISABLED,
    "import/no-unassigned-import": [
      ERROR,
      {
        allow: ["**/*.d.ts"],
      },
    ],

    // Promise
    "promise/prefer-await-to-then": ERROR,
    "promise/no-native": ERROR,
    "promise/no-nesting": ERROR,
    "promise/no-return-in-finally": ERROR,
    "promise/no-return-wrap": ERROR,
    "promise/param-names": ERROR,
    "promise/prefer-await-to-callbacks": ERROR,

    // Lang
    semi: ERROR,
    "@typescript-eslint/semi": [ERROR, ALWAYS],
    "@typescript-eslint/no-explicit-any": ERROR,
    indent: [
      ERROR,
      2,
      {
        SwitchCase: 1,
      },
    ],
    "@typescript-eslint/triple-slash-reference": [
      ERROR,
      {
        types: PREFER_IMPORT,
        path: NEVER,
        lib: NEVER,
      },
    ],
    "@typescript-eslint/type-annotation-spacing": DISABLED,
    camelcase: ERROR,
    complexity: [
      ERROR,
      {
        max: 8,
      },
    ],
    "constructor-super": ERROR,
    curly: [ERROR, "all"],
    "default-case": ERROR,
    "guard-for-in": ERROR,
    "id-blacklist": [
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined",
      "Null",
      "null",
      "unknown",
      "Array",
      "void",
      "never",
      "object",
      "Object",
      "Symbol",
      "await",
      "async",
      "bigint",
      "BigInt",
    ],
    "new-parens": ERROR,
    "no-bitwise": ERROR,
    "no-caller": ERROR,
    "no-cond-assign": ERROR,
    "no-empty": ERROR,
    "no-eval": ERROR,
    "no-fallthrough": ERROR,
    "no-invalid-this": ERROR,
    "no-multiple-empty-lines": ERROR,
    "no-new-wrappers": ERROR,
    "no-redeclare": ERROR,
    "no-shadow": DISABLED,
    "@typescript-eslint/no-shadow": ERROR,
    "no-trailing-spaces": DISABLED,
    "no-undef-init": ERROR,
    "no-underscore-dangle": DISABLED,
    "no-unsafe-finally": ERROR,
    "no-unused-expressions": [ERROR, { allowShortCircuit: true }],
    "no-unused-vars": DISABLED,
    "no-unused-labels": ERROR,
    "no-var": ERROR,
    "no-void": ERROR,
    "one-var": [ERROR, NEVER],
    "padding-line-between-statements": [
      ERROR,
      {
        blankLine: ALWAYS,
        prev: "*",
        next: "return",
      },
    ],
    "prefer-const": ERROR,
    "use-isnan": ERROR,
    "valid-typeof": ERROR,
    "linebreak-style": [ERROR, "unix"],
    quotes: [ERROR, "single"],
    "no-console": [ERROR, { allow: ["warn", "error"] }],
    "no-debugger": ERROR,
    "no-duplicate-imports": ERROR,
    "@typescript-eslint/explicit-function-return-type": DISABLED,
    "@typescript-eslint/no-unused-vars": [
      ERROR,
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false,
      },
    ],
    "@typescript-eslint/require-await": ERROR,
    "@typescript-eslint/await-thenable": ERROR,
    "@typescript-eslint/no-floating-promises": ERROR,
    "@typescript-eslint/no-unused-vars": ERROR,
  },

  // Environment
  env: {
    es6: true,
    browser: true,
    jest: true,
  },

  // Parser
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    react: {
      version: "detect",
    },
  },
};
