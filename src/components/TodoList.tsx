import Link from "next/link";
import TodoItem from "./TodoItem";
import type { Todo, FilterType } from "@/lib/db";

const FILTERS: { label: string; value: FilterType }[] = [
  { label: "全件", value: "all" },
  { label: "未完了", value: "active" },
  { label: "完了", value: "completed" },
];

export default function TodoList({
  todos,
  filter,
}: {
  todos: Todo[];
  filter: FilterType;
}) {
  return (
    <div>
      <div className="flex gap-1 mb-4">
        {FILTERS.map((f) => (
          <Link
            key={f.value}
            href={`/?filter=${f.value}`}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              filter === f.value
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {f.label}
          </Link>
        ))}
      </div>
      {todos.length === 0 ? (
        <p className="text-center text-gray-400 py-8">Todoがありません</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
}
