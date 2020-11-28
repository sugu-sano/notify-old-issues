_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

---

<h1 align="center">Welcome to notify-old-issues 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> GitHub の古い issue を通知します。

## Install

```sh
yarn install
```

## Usage

```sh
# 最初にリポジトリをクローンしそのディレクトリに移動にする

# GitHub API のトークンを環境変数に設定する
$ export GITHUB_API_TOKEN=YOUR_GITHUB_API_TOKEN

# Chatwork API のトークンを環境変数に設定する
$ export CHATWORK_API_TOKEN=YOUR_CHATWORK_API_TOKEN

$ yarn build

# 実行例
$ node ./dist/index.js \
  # リポジトリのオーナー名
  --owner microsoft \
  # リポジトリ名
  --repository typescript \
  # issue の有効日数（これ以上経過したものを通知）
  --valid-days 7 \
  # 取得するイシューの状態（open, closed, all から選択）
  --issue-state open \
  # 通知先の Chatwork ルーム ID
  --chatwork-room-id: 999999999 \
  # 以下はGitHub Actionsで設定する場合不要
  # GitHub のユーザ名と通知先の Chatwotk メンションをマッピングする
  --chatwork-mapping '{ "sugu-sano": "[To: ] 佐野", "gonbe-nanashi": "[To: ] 名無しさん" }'
```

## Sample GitHub Actions YAML

```yaml
name: notify-old-issues
on:
  schedule:
    - cron: '0 13 * * 3'

jobs:
  notify:
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - name: Checkout cli repository
        uses: actions/checkout@v2
        with:
          repository: sugu-sano/notify-old-issues
      - name: Restore cache
        uses: actions/cache@v2
        with:
          path: '**/node_modules'
          key: ${{ runner.os }}-modules-${{ hashFiles('**/yarn.lock') }}
      - name: Insatll package
        run: yarn install
      - name: Build
        run: yarn build
      - name: Fetch expired issues and notify
        run: |
          node ./dist/index.js \
            --owner microsoft \
            --repository typescript \
            --valid-days 7 \
            --issue-state open \
            --chatwork-room-id 999999999 \
            --chatwork-mapping '{ "sugu-sano": "[To: ] 佐野", "gonbe-nanashi": "[To: ] 名無しさん" }'
    env:
      GITHUB_API_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      CHATWORK_API_TOKEN: ${{ secrets.CHATWORK_API_TOKEN }}
```

## TODO

- HTTP リクエストを [octokit/rest.js](https://github.com/octokit/rest.js) に変更する
- テスト用の CI を組む

## Author

👤 **sugu-sano**

- Github: [@sugu-sano](https://github.com/sugu-sano)
