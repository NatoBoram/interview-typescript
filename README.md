# TypeScript Interview

Maintainability-focused interview questions for junior developers.

## Getting started

This is a TypeScript project using [strict TypeScript](https://www.typescriptlang.org/tsconfig#strict) and [strict TypeScript-ESLint](https://typescript-eslint.io/linting/configs/#strict-type-checked). The questions do not focus on algorithms, unlike traditional leet code, but instead focus on real-world scenarios that you will encounter in your day-to-day work with a strong emphasis on writing simple, maintainable code.

1. Clone the project using `git clone git@github.com:NatoBoram/interview-typescript.git`
2. Install the dependencies with `pnpm i`
3. Solve the riddles in the `src` directory

## Verifying your answers

Before submitting your answers, format your code and fix any linting errors.

```sh
pnpm format
pnpx eslint --fix .
```

You can verify your answers by running scripts from the `package.json`.

```sh
pnpm build
pnpm lint
pnpm test
```

All scripts should pass before submitting your answers.
