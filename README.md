# Pokemon app challenge

### [See the app in action](https://pokemon-app-challenge.netlify.app/)

## Requirements

> You'll need [Node](https://nodejs.org/en/) and
> [Yarn](https://classic.yarnpkg.com/en/) installed

## Develop

In the project directory, you can run:

- `yarn` to install dependencies
- `yarn start` to start development environment

## Testing

- `yarn test` to launch the test runner in the interactive watch mode

## Build

In the project directory, run:

- `yarn` to install dependencies
- `yarn build` to build app for production
- output is in `build` directory,
  [ready to be deployed](https://create-react-app.dev/docs/deployment/)

## Data

All data is fetched from the PokeAPI:
[pokeapi.co](https://pokeapi.co/).

## Technologies

> This project was bootstrapped with
> [Create React App](https://github.com/facebook/create-react-app).

- [React](https://reactjs.org/) - UI library
- [Chakra UI](https://chakra-ui.com/) - Design system and component library,
  with [Emotion](https://emotion.sh), its peer dependency
- [SWR](https://swr.now.sh/) - Data fetching and caching library
- [React Router v6](https://github.com/ReactTraining/react-router/blob/f59ee5488bc343cf3c957b7e0cc395ef5eb572d2/docs/installation/getting-started.md) -
  routing library

## Missing features

- [User should be able to sort the search result by name, height and weight:] The PokeAPI does not accept query parameters such as `sort` and `order`, so a solution where all data is cached and filtered and sorted afterwards needs to be implemented.
