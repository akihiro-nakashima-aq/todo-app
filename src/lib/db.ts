import Database from "better-sqlite3";
import path from "path";

const DB_PATH = path.join(process.cwd(), "todos.db");

let db: Database.Database | null = null;

function getDb(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH);
    db.exec(`
      CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        completed INTEGER NOT NULL DEFAULT 0,
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      )
    `);
  }
  return db;
}

export type Todo = {
  id: number;
  title: string;
  completed: number;
  created_at: string;
};

export type FilterType = "all" | "active" | "completed";

export function getTodos(filter: FilterType): Todo[] {
  const db = getDb();
  if (filter === "active") {
    return db.prepare("SELECT * FROM todos WHERE completed = 0 ORDER BY created_at DESC").all() as Todo[];
  }
  if (filter === "completed") {
    return db.prepare("SELECT * FROM todos WHERE completed = 1 ORDER BY created_at DESC").all() as Todo[];
  }
  return db.prepare("SELECT * FROM todos ORDER BY created_at DESC").all() as Todo[];
}

export function addTodo(title: string): void {
  getDb().prepare("INSERT INTO todos (title) VALUES (?)").run(title);
}

export function toggleTodo(id: number): void {
  getDb().prepare("UPDATE todos SET completed = CASE WHEN completed = 0 THEN 1 ELSE 0 END WHERE id = ?").run(id);
}

export function deleteTodo(id: number): void {
  getDb().prepare("DELETE FROM todos WHERE id = ?").run(id);
}
