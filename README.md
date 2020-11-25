_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

---

<h1 align="center">Welcome to notify-old-issues 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/nossa_programmer" target="_blank">
    <img alt="Twitter: nossa_programmer" src="https://img.shields.io/twitter/follow/nosa_programmer.svg?style=social" />
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
  --owner i-mobile \
  # リポジトリ名
  --repository FurunaviTest \
  # issue の有効日数（これ以上経過したものを通知）
  --valid-days 21 \
  # 取得するイシューの状態（open, closed, all から選択）
  --issue-state open \
  # 通知先の Chatwork ルーム ID
  --chatwork-room-id: 173086197 \
  # 以下はGitHub Actionsで設定する場合不要
  # GitHub のユーザ名と通知先の Chatwotk メンションをマッピングする
  --chatwork-mapping '{ "sugu-sano": "[To: ] 佐野", "gonbe-nanashi": "[To: ] 名無しさん" }'
```

## GitHub Actions Sample

```yaml
name: workflow
on:
  schedule:
    # 毎週水曜日の１３時に実行
    - cron '0 13 * * 3'

jobs:
  build:
    runs-on: ubuntu-latest
    timeout-minutes: 5
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          path: main
      - name: Insatll
        run: yarn install
      - name: Get expired issues and Notify
        with:
          # 実際に使う際には GitHub Actions で上書きしてください
          chatwork-mapping: |
            {
              "sugu-sano": "[To: ] 佐野"
            }
        # 実際に使用する際にはコマンドライン引数を設定して下さい
        run: |
          node ./dist/index.js \
           --owner REPOSITORY_OWNER_NAME \
           --repository REPOSITORY_NAME \
           --valid-days VALID_DAYS \
           --issue-state STATE \
           --chatwork-room-id CHATWORK_ROOM_ID
    env:
      GITHUB_API_TOKEN: ${{ secrets.GITHUB_API_TOKEN }}
      CHATWORK_API_TOKEN: ${{ secrets.CHATWORK_API_TOKEN }}
```

## TODO

- HTTP リクエストを [octokit/rest.js](https://github.com/octokit/rest.js) に変更する
- テスト用の CI を組む

## Author

👤 **sugu-sano**

- Website: https://qiita.com/Nossa
- Twitter: [@nossa_programmer](https://twitter.com/nossa_programmer)
- Github: [@sugu-sano](https://github.com/sugu-sano)

## Show your support

Give a ⭐️ if this project helped you!
