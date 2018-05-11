# React Native Cross Platform Boilerplate

## 依存ツール

* node
* yarn
* react-native-cli
* flow

## 依存ライブラリ

* [React](https://reactjs.org/)
* [React Native](https://facebook.github.io/react-native/)
* [React Router](https://reacttraining.com/react-router/)
* [Flow](https://flow.org/)
* [Jest](https://facebook.github.io/jest/)
* [styled components](https://www.styled-components.com/)

## 開発ツール

* [Storybook](https://storybook.js.org/)
* [Prettier](https://prettier.io/)
* [ESLint](https://eslint.org/)

### Mac OS でのセットアップ

プロジェクトルートにて以下を実行する

```
$ brew install node
$ brew install yarn
$ brew install flow
$ npm install -g react-native-cli
$ yarn
```

## コマンド

```
$ yarn start         # start react native app server
$ yarn ios           # run on iOS simulator
$ yarn android       # run on Android simulator
$ yarn web           # run on local webpack server
$ yarn web:build     # create production build for web
$ yarn api-mock      # run api-mock server
$ yarn test          # run snapshot test with Jest
$ yarn test:update   # update snapshot test with Jest
$ yarn eslint        # run eslint
$ yarn eslint:fix    # run eslint and fix error
$ yarn flow:start    # start flow server
$ yarn flow:start    # stop flow server
$ yarn flow:start    # check flow status
$ yarn flow:coverage # check flow coverage
$ yarn storybook     # run storybook
```

## デプロイ

### Web

`$ yarn web:build`を実行後、`web/dist`以下をサーバーに配置する
