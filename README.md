# DiscoMath Web Application

DiscoMath is a tool for students to interact with
[topics in DIScrete and COmbinatorics](https://en.wikipedia.org/wiki/Discrete_mathematics#Topics_in_discrete_mathematics).

> The tool is available at: <https://discomath.github.io/discomathweb>.

## Contributions

Contributions are encouraged, particularly from other students. All
contributions should be made as a pull request to the `dev` branch. Please
ensure that tests pass, including lint checks.

## Development

To get up and going, run the following:

```bash
yarn
yarn start
```

This will serve the application from `localhost:3000` with hot loading enabled.

### Linting & Formatting

We use `husky` and `lint-staged` to automatically run `eslint` and `prettier` on
commits. To run them directly, simply use:

```bash
yarn format
yarn lint
```
