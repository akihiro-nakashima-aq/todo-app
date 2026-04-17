# Todo App

> このリポジトリは [grill-todo](/.claude/skills/grill-todo/SKILL.md) スキルの動作確認・開発用です。
>
> Claude Code で `/grill-todo <追加したい機能>` と入力すると、設計の質問フェーズを経て仕様書・実装計画が自動生成されます。

Next.js + TypeScript + Tailwind CSS + SQLite で作ったミニマルなTodoアプリ。

## 技術スタック

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **SQLite** (better-sqlite3)
- **Server Actions**

## 機能

- Todo追加・削除
- 完了/未完了のトグル
- フィルター表示（全件 / 未完了 / 完了）

## 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開く。

## ビルド

```bash
npm run build
npm start
```
