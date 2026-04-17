---
name: grill-todo
description: Use when planning any change to this todo app — new features, schema changes, refactoring — and you want to stress-test the plan before writing code.
---

このtodoアプリへの変更計画について、共通認識に達するまで徹底的に質問してください。設計ツリーの各枝を一つひとつたどり、決定事項間の依存関係を順番に解決してください。各質問に推奨回答を添えてください。

質問は一度に一つずつ行うこと。

コードベースを調べれば答えられる質問は、質問せずに調査すること。

## このプロジェクト固有の確認事項

以下の3点は、変更の種類に関わらず必ず確認すること：

**1. DBスキーマ変更の影響**
- カラム追加・変更・削除がある場合、既存データへの影響は？
- `src/lib/db.ts` の `CREATE TABLE IF NOT EXISTS` はマイグレーションを行わないため、スキーマ変更時は既存DBファイル（`todos.db`）の扱いを明確にすること。
- 開発中は `todos.db` を削除して再作成する前提か、ALTER TABLE を使うか？

**2. Server Actions と `revalidatePath` の影響範囲**
- `src/app/actions.ts` の各アクション（add/toggle/delete）は `revalidatePath("/")` を呼ぶ。
- 新しいページやルートを追加する場合、revalidate対象を更新する必要があるか？
- アクションが失敗した場合のエラーハンドリングはどうするか？

**3. フィルター（all/active/completed）への影響**
- 新機能がフィルター表示と整合するか？
- `src/lib/db.ts` の `getTodos()` のクエリがフィルターごとに正しく動作するか？
- URLの `?filter=` searchParams に新しい値が必要になるか？
