# Todo App — プロジェクト設定

## スタック

- Next.js 16 (App Router) + TypeScript + Tailwind CSS
- SQLite (better-sqlite3) + Server Actions
- DBファイル: `todos.db`（gitignore済み）

## 主要ファイル

| ファイル | 責務 |
|---|---|
| `src/lib/db.ts` | DB接続・初期化・CRUD |
| `src/app/actions.ts` | Server Actions（add/toggle/delete） |
| `src/app/page.tsx` | メイン画面、searchParamsでフィルター管理 |
| `src/components/` | UI コンポーネント |

## 開発コマンド

```bash
npm run dev    # 開発サーバー起動
npm run build  # ビルド
```

## スキル

このプロジェクトには専用スキルがあります。変更計画を始める前に使ってください：

- **`grill-todo`** — 変更計画をコードに落とす前に、設計の抜け漏れを洗い出す。DBスキーマ・Server Actions・フィルターへの影響を必ず確認します。

使い方: 「grill-todoスキルを使って」と伝えるか、Skill ツールで `grill-todo` を呼び出す。
