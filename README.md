# whyred-demo
Intentionally broken CI pipelines. 4 GitHub Actions workflows that fail on purpose (test, dependency, type, lint), used as live samples and eval cases for WhyRed.

| Workflow | Failing step | Root cause |
| --- | --- | --- |
| `unit-test` | `node --test test/failing.test.js` | Assertion expects `1 + 1 === 3`. |
| `missing-dependency` | `node src/missing-dependency.js` | Requires `left-pad`, which is not installed or declared. |
| `typecheck` | `npx typescript@5 tsc --noEmit` | `src/broken.ts` assigns a string to a `number`. |
| `lint` | `npx eslint@8 src/lint-error.js` | `no-unused-vars` on `unusedValue`. |
