# Angular Component Library

This repo is used to create a component API for your Angular 1.5 project.

## Principles

- Todd Motto component architecture [styleguide](https://github.com/toddmotto/angular-styleguide)
- [Stateless components](https://toddmotto.com/stateless-angular-components/)
- [Atomic Design](http://atomicdesign.bradfrost.com/)
- [BEM CSS](https://en.bem.info/)

## Setup

- Fork and clone the repo
- Run `npm install`
- Dev, run: `npm run start`

## Contribute

- Run `npm run create` to create a new component using the Yeoman generator
- Code is linted against: hyphenated_BEM (SCSS), ES6 with Angular plugin

### Set up linting in your Text Editor

Using [Atom](https://atom.io/) you can set up the scss-lint, eslint, and linter-php automatically by installing the following plugins:

- https://atom.io/packages/linter
- https://atom.io/packages/linter-scss-lint
- https://atom.io/packages/linter-eslint

via `apm`: `apm install linter linter-scss-lint linter-eslint`

Using [SublimeText] you can set up the scss-lint and eslint following these instructions

- http://www.sublimelinter.com/en/latest/
- http://jonathancreamer.com/setup-eslint-with-es6-in-sublime-text/
- https://github.com/attenzione/SublimeLinter-scss-lint

### Committing

`npm run lint` is run in a pre-commit hook, and if it fails, your code will not be committed.

Commit messages are validated using [validate-commit-msg](https://github.com/kentcdodds/validate-commit-msg), which follows the Angular commit message guidelines.

Valid types are:

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing tests
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

Commit messages should use the imperative, present tense: “change” not “changed” nor “changes”.

Example commit messages:

`feat: Add linting for javascript files in the /component folder`
`chore: Update eslint`

### Pushing

The components are tested with Karma/Jasmine automatically pre-push.
