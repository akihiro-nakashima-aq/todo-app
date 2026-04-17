import AddTodoForm from "@/components/AddTodoForm";
import TodoList from "@/components/TodoList";
import { getTodos } from "@/lib/db";
import type { FilterType } from "@/lib/db";

const VALID_FILTERS: FilterType[] = ["all", "active", "completed"];

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const params = await searchParams;
  const filter: FilterType = VALID_FILTERS.includes(params.filter as FilterType)
    ? (params.filter as FilterType)
    : "all";

  const todos = getTodos(filter);

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-lg mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Todo</h1>
        <AddTodoForm />
        <TodoList todos={todos} filter={filter} />
      </div>
    </main>
  );
}
