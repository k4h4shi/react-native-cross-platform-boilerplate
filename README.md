# React Native Cross Platform Boilerplate

## 依存ツール

* node
* yarn
* react-native-cli
* flow

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
$ yarn test          # run snapshot test
$ yarn test:update   # update snapshot test
$ yarn eslint        # run eslint
$ yarn eslint:fix    # run eslint and fix error
$ yarn flow:start    # start flow server
$ yarn flow:start    # stop flow server
$ yarn flow:start    # check flow status
$ yarn flow:coverage # check flow coverage
```

## デプロイ

### Web

`$ yarn web:build`を実行後、`web/dist`以下をサーバーに配置する
