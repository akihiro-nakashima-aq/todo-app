# Todo App Design

## Overview

Next.js + TypeScript + Tailwind CSS + SQLite によるミニマルなTodoアプリ。

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** SQLite (better-sqlite3)
- **Mutations:** Server Actions

## Data Model

```sql
CREATE TABLE todos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  completed INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
```

## Architecture

Server Actionsを使いAPIルート不要。サーバーコンポーネントでDBを読み、フォームのsubmitでServer Actionを呼ぶ。

## File Structure

```
src/
├── app/
│   ├── page.tsx          # メイン画面
│   └── actions.ts        # Server Actions（追加・トグル・削除）
├── lib/
│   └── db.ts             # DB初期化 + クエリ関数
└── components/
    ├── AddTodoForm.tsx   # テキスト入力 + 追加ボタン
    ├── TodoList.tsx      # フィルタータブ + Todo一覧
    └── TodoItem.tsx      # 1件のTodo（チェックボックス・削除ボタン）
```

## Features

- Todo追加（テキスト入力 + ボタン）
- 完了/未完了のトグル（チェックボックス）
- Todo削除
- フィルター表示（全件 / 未完了 / 完了）

## Component Responsibilities

| Component | 責務 |
|---|---|
| `lib/db.ts` | DB接続、テーブル初期化、CRUD関数 |
| `app/actions.ts` | Server Actions（add, toggle, delete） |
| `app/page.tsx` | フィルター状態をsearchParamsで管理、Todoデータ取得 |
| `AddTodoForm.tsx` | フォームUI、Server Actionに接続 |
| `TodoList.tsx` | フィルタータブUI、TodoItem一覧表示 |
| `TodoItem.tsx` | チェックボックス・削除ボタン、各Server Actionに接続 |

## Filter State

URLのsearchParams（`?filter=all|active|completed`）で管理。ページリロードしても状態が保持される。
