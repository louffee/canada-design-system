# Louffee’s ESLint Configuration

🧱 [ESLint](https://eslint.org) is a tool that helps you to write code in a better way, highlighting where some rules that we establish are not respected, from simple **warnings** to **errors** when it comes to coverage and code pattern across files.

To use the ESLint configuration designed for Louffee applications, we have to **install** a few packages. Since the packages made NodeJS run out of memory, we didn’t add them to the `package.json` file. Instead run the following command:

```bash
yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-import eslint-plugin-jest eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native eslint-plugin-storybook -D
```